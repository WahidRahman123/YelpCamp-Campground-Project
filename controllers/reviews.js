const Campground = require('../models/campground');
const Review = require('../models/review');


module.exports.createReview = async (req, res) => {
    const {review} = req.body;
    const campground = await Campground.findById(req.params.id);
    const newReview = new Review(review)
    newReview.author = req.user._id;
    campground.reviews.push(newReview);
    await newReview.save();
    await campground.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}


module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review');
    res.redirect(`/campgrounds/${id}`);
}