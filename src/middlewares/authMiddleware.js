const { verifyToken } = require('../utils/jwt');
const { redisClient } = require('../config/redis');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Malformed token' });
    }

    try {
        const decoded = verifyToken(token);

        const user = await redisClient.get(token);

        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = JSON.parse(user);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
