const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewValidation, isLoggedIn, isAuthor } = require("../middleware.js");

const reviewController = require("../controller/reviews.js");

// Create Review
router.post("/",isLoggedIn, reviewValidation, wrapAsync(reviewController.createReview));

// Destroy or Delete review 
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;