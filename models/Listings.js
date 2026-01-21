const mongoose = require("mongoose");
const Review = require("./Reviews");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        Required: true,
    },
    description: String,
    price: Number,
    location: String,
    image: {
        url: String,
        filename: String,
    },
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category : {
        type : String,
        enum : ["mountain","camp","cafe","castle","home","trending","pool","farm","arctic","beach","island"]
    }
});

// Listings Middleware
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing.reviews.length) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;