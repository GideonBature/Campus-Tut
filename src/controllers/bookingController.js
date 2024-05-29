const { Booking, User, Tutor, Course } = require("../models/index");

exports.createBooking = async (req, res) => {
    const { learner_id, tutor_id, course_id, time_slot, status } = req.body;

    console.log(tutor_id);

    try {

        const learner = await User.findById(learner_id);
        if (!learner || learner.role !== "learner") {
            return res.status(404).json({ message: "Learner not found" });
        };

        const tutor = await Tutor.findById(tutor_id).populate('user');
        if (!tutor || tutor.user.role !== "tutor") {
            return res.status(404).json({ message: "Tutor not found" });
        };

        const course = await Course.findById(course_id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        };

        
        const booking = new Booking({
            learner_id,
            tutor_id,
            course_id,
            time_slot,
            status,
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllBookings = async (req, res) => {
    const { learner_id, tutor_id } = req.query;
    const query = {};

    if (learner_id) query.learner_id = learner_id;
    if (tutor_id) query.tutor_id = tutor_id;

    try {
        const bookings = await Booking.find(query).populate('learner_id tutor_id course_id');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('learner_id tutor_id course_id');

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.json(booking);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json(booking);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
