const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
