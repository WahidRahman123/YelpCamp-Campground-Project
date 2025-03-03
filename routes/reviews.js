const express = require('express');
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isReiviewAuthor, validateReview } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const { reviewSchema } = require('../schemas');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');


router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReiviewAuthor, catchAsync(reviews.deleteReview));


module.exports = router;