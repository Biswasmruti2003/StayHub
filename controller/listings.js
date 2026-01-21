const { model } = require("mongoose");
const Listing = require("../models/Listings");

module.exports.index = async (req, res, next) => {
    const allListings = await Listing.find();
    res.render("./listings/index.ejs", { allListings });
};

module.exports.category = async (req, res, next) => {
    let category = req.query;
    let allListings = await Listing.find(category);
    res.render("./listings/index.ejs", { allListings});
}
module.exports.search = async (req, res, next) => {
    let allListings = await Listing.find(req.body);
    res.render("./listings/index.ejs", { allListings});
}

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const data = new Listing(req.body.Listing);
    data.owner = req.user._id;
    data.image = { url, filename };
    await data.save();
    req.flash("success", "New Listing Added Successfully!");
    res.redirect("/listings");
};

module.exports.showListings = async (req, res, next) => {
    let { id } = req.params;
    const data = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!data) {
        req.flash("error", "Requsted Listing doesn't exits.");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { data });
}

module.exports.renderUpdateForm = async (req, res, next) => {
    let { id } = req.params;
    const data = await Listing.findById(id);
    if (!data) {
        req.flash("error", "Requsted Listing doesn't exits.");
        res.redirect("/listings");
    } else {
        let originalImage = data.image.url;
        // originalImage = originalImage.replace("/upload","/upload/w_300,h_200");
        res.render("./listings/edit.ejs", { data, originalImage });
    }
};

module.exports.updateListing = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, req.body.Listing);

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListings = async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("error", " Listing Deleted Successfully ");
    res.redirect("/listings");
};
