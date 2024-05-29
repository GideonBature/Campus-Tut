const bcrypt = require("bcrypt");
const { User, Tutor } = require("../models/index");
const { generateToken } = require("../utils/jwt");
const { redisClient } = require("../config/redis");

exports.register = async (req, res) => {
    const { name, email, password, department, courseOfStudy, level, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword, department, courseOfStudy, level, role });

        await user.save();

        if (user.role === 'tutor') {
            const tutor = new Tutor({ user: user._id, availability: [], courses: [] });
            await tutor.save();
        }
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = generateToken(user);

        try {
            await redisClient.set(token, JSON.stringify(user._id), { EX: 3600 });
            console.log('Token set successfully');
        } catch (error) {
            console.error('Failed to set token:', error);
            return res.status(500).json({ message: 'Failed to set token' });
        }
        
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.logout = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = verifyToken(token);
        await redisClient.del(decoded.id);
        res.json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
