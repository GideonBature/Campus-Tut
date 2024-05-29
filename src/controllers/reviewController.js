const { Review, User } = require("../models/index");

exports.createReviews = async (req, res) => {
    const { learner_id, tutor_id, rating, comment } = req.body;

    try {

        const learner = await User.findById(learner_id);
        if (!learner || learner.role !== "learner") {
            return res.status(404).json({ message: "Learner not found" });
        }

        console.log(learner);

        const tutor = await User.findById(tutor_id);
        if (!tutor || tutor.role !== "tutor") {
            return res.status(404).json({ message: "Tutor not found" });
        }
        console.log(tutor);


        const review = new Review({ learner_id, tutor_id, rating, comment });

        console.log(review);

        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllReviews = async (req, res) => {
    const { learner_id, tutor_id } = req.query;
    const query = {};

    if (learner_id) query.learner_id = learner_id;
    if (tutor_id) query.tutor_id = tutor_id;

    try {
        const reviews = await Review.find(query).populate('learner_id');
        res.json(reviews);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('learner_id');

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json(review);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
