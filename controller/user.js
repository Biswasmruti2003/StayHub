const User = require("../models/user");

module.exports.signUpForm = (req, res) => {
    res.render("users/signup");
};

module.exports.signUpUser = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const data = await User.register(newUser, password);
        req.logIn(data, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "User Registered Successfully");
            res.redirect("/listings");
        })

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.loginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.loginUser = (req, res) => {
    req.flash("success", `Hello ${req.user.username} , Welcome back to Airbnb`);
    let finalUrl = res.locals.registeredUrl || "listings";
    res.redirect(finalUrl);
};


module.exports.logoutUser =  (req, res) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        req.flash("error", "You Logged-Out !");
        res.redirect("/listings");
    });
};
