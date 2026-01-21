const Listing = require("../models/Listings");
const Review = require("../models/Reviews");

module.exports.createReview = async (req, res, next) => {
    let newReview = new Review(req.body.Review);
    let listing = await Listing.findById(req.params.id);
    newReview.author = req.user._id ;
    listing.reviews.unshift(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Added Successfully!");
    res.redirect(`/listings/${listing.id}`);
};


module.exports.destroyReview = async (req, res, next) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("error", " Review Deleted Successfully ");
    res.redirect(`/listings/${id}`);
};