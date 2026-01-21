const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/Listings");
const Review = require("./models/Reviews.js");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");


// Listings Validation
module.exports.listingValidation = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        next(new ExpressError(400, msg));
    } else {
        next();
    }
}

// Reviews Validation
module.exports.reviewValidation = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        next(new ExpressError(400, msg));
    } else {
        next();
    }
}


// To check whether user is  loggedIn/not.
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.currUrl = req.originalUrl;
        req.flash("error", "You needs to be Logged In");
        return res.redirect("/login");
    }
    next();
}
// To add :  Logged User -> To Locals
module.exports.savedUrl = (req, res, next) => {
    if (req.session.currUrl) {
        res.locals.registeredUrl = req.session.currUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let currUser = await Listing.findById(id);
    if (!currUser.owner.equals(res.locals.currUser._id)) {
        req.flash("error", " ! You Don't Have any Access.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isAuthor = async (req ,res , next) => {
    let { id , reviewId} = req.params ;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error" , "! You Don't Have any Access.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}