const { Course } = require('../models/index');

const getCourseIdsFromCodes = async (courseCodes) => {
    const courses = await Course.find({ courseCode: { $in: courseCodes } });

    if (courses.length !== courseCodes.length) {
        throw new Error('Some course codes are invalid');
    }

    return courses.map(course => course._id);
}

module.exports = { getCourseIdsFromCodes };
