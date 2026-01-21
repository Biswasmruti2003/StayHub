const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingValidation, isLoggedIn, isOwner } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controller/listings.js");
const Listing = require("../models/Listings.js");

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, listingValidation, upload.single("Listing[image]"), wrapAsync(listingController.createListing));

router.route("/filter")
    .get(listingController.category);

router.route("/search")
    .post(listingController.search);

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListings))
    .patch(isLoggedIn, isOwner, upload.single("Listing[image]"), wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListings));

router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderUpdateForm));


module.exports = router;