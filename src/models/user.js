const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: value => isEmail(value),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    department: {
        type: String,
        required: true
    },
    courseOfStudy: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["tutor", "learner"],
        required: true
    }
}, {
    timestamps: true
});
