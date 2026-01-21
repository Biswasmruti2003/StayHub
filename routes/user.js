const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedUrl } = require("../middleware");
const router = express.Router();

const userController = require("../controller/user");

router.route("/signup")
    .get( userController.signUpForm)
    .post( wrapAsync(userController.signUpUser));

router.route("/login")
    .get( userController.loginForm)
    .post(
        savedUrl,
        passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
        userController.loginUser,
    );

router.get("/logout", userController.logoutUser);

module.exports = router;
