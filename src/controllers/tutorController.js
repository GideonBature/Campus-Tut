const { Tutor, Course } = require("../models/index");
const { getCourseIdsFromCodes } = require("../helper/tutorHelper");

exports.getAllTutors = async (req, res) => {
    const { department, course } = req.query;
    const query = {};

    if (department) query.department = department;
    if (course) query.courses = course;

    try {
        const tutors = await Tutor.find(query).populate({ path: 'courses', select: 'courseCode' }).populate('user');

        const transformedTutors = tutors.map(tutor => {
            console.log(tutor.courseCode);
            return {
                ...tutor.toObject(),
                courses: tutor.courses.map(course => course.courseCode)
            };
        });

        res.json(transformedTutors);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTutorById = async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id).populate({ path: 'courses', select: 'courseCode' }).populate('user');

        if (!tutor) {
            return res.status(404).json({ message: "Tutor not found" });
        }

        const transformedTutor = {
            ...tutor.toObject(),
            courses: tutor.courses.map(course => course.courseCode)
        };

        res.json(transformedTutor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTutor = async (req, res) => {
    const { availability, courses } = req.body;

    try {

        const courseIds = await getCourseIdsFromCodes(courses);

        const updateData = {
            availability,
            courses: courseIds
        };

        const tutor = await Tutor.findByIdAndUpdate(req.params.id, updateData, { new: true }).populate('courses', 'courseCode').populate('user');

        if (!tutor) {
            return res.status(404).json({ message: "Tutor not found" });
        }

        const transformedTutor = {
                ...tutor.toObject(),
                courses: tutor.courses.map(course => course.courseCode)
        };

        res.json(transformedTutor);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTutor = async (req, res) => {
    try {
        const tutor = await Tutor.findByIdAndDelete(req.params.id);
        if (!tutor) {
            return res.status(404).json({ message: "Tutor not found" });
        }
        res.json({ message: "Tutor deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
