if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const { log } = require("console");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");
const localStatergy = require("passport-local");

const listingsRoute = require("./routes/listings.js");
const reviewsRoute = require("./routes/reviews.js");
const userRoute = require("./routes/user.js");
const User = require("./models/user.js");

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.engine("ejs", ejsMate);

main()
    .then(() => {
        console.log("Connected Success");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(process.env.MONGOATLAS_URL);
}


// Root-Path
// app.get("/", (req, res) => {
//     res.send("<h1> Well Come to  Airbnb</h1>");
// });

// Sessions
const store = MongoStore.create({
    mongoUrl: process.env.MONGOATLAS_URL,
    crypto: {
        secret: process.env.SESSION_SECRETE
    },
    touchAfter: 24 * 3600, // (in second)
})
store.on("error", (err) => {
    console.log("Error in SESSION STORE", err);
})
const sessionOption = {
    store,
    secret: process.env.SESSION_SECRETE,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }
}
app.use(session(sessionOption));
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStatergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
// All Express Routes
app.use("/listings", listingsRoute);
app.use("/listings/:id/reviews", reviewsRoute);
app.use("/", userRoute);

// For all unmatched route
app.get("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Error-Handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "something went wrong" } = err;
    res.status(status).render("Error.ejs", { status, message });
})

app.listen(8080, () => {
    console.log("Server Start at Port : 8080 ");
})