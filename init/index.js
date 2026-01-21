const mongoose = require("mongoose");
const Listing = require("../models/Listings.js");
const { data } = require("./data.js");

main()
    .then(() => {
        console.log("Connected Success");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb");
}

async function add() {
    await Listing.deleteMany({});
    let AddData = data.map((obj) => {
        return { ...obj, owner: "6933f8e4851baaaadd57575d"};
    });
    await Listing.insertMany(AddData);
}

add()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })