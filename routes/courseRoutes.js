const express = require('express');
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/courses', authMiddleware, courseController.createCourse);
router.get('/courses', authMiddleware, courseController.getAllCourses);
router.get('/courses/:id', authMiddleware, courseController.getCourseById);
router.put('/courses/:id', authMiddleware, courseController.updateCourse);
router.delete('/courses/:id', authMiddleware, courseController.deleteCourse);

module.exports = router;