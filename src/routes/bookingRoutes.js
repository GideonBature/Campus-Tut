const express = require('express');
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/bookings', authMiddleware, bookingController.createBooking);
router.get('/bookings', authMiddleware, bookingController.getAllBookings);
router.get('/bookings/:id', authMiddleware, bookingController.getBookingById);
router.put('/bookings/:id', authMiddleware, bookingController.updateBooking);

module.exports = router;