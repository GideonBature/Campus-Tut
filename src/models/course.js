const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        upper: true,
        set: value => value.toUpperCase()
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        set: value => value.replace(/\s+/g, '').toUpperCase()
    },
    description: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    }
})

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
