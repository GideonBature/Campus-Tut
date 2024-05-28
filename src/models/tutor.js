const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    availability: {
        type: [String],
        required: false
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: false
    }]
});

const Tutor = mongoose.model("Tutor", tutorSchema);
module.exports = Tutor;
