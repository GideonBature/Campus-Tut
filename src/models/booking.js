const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    learner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tutor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor",
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    time_slot: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending"
    }
})

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
