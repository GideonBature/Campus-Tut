const express = require('express');
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/reviews', authMiddleware, reviewController.createReviews);
router.get('/reviews', authMiddleware, reviewController.getAllReviews);
router.get('/reviews/:id', authMiddleware, reviewController.getReviewById);

module.exports = router