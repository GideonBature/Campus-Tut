const express = require('express');

const authRoutes = require('./authRoutes');
const courseRoutes = require('./courseRoutes');
const reviewRoutes = require('./reviewRoutes');
const tutorRoutes = require('./tutorRoutes');
const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');

const router = express.Router();

router.use(authRoutes);
router.use(courseRoutes);
router.use(reviewRoutes);
router.use(tutorRoutes);
router.use(userRoutes);
router.use(bookingRoutes);

module.exports = router;