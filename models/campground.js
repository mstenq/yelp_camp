//REQUIRED MODULES
var mongoose    = require("mongoose");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: []
});

//CREATE MODEL
var Campground = mongoose.model("Campground", campgroundSchema);

//EXPORT MODEL
module.exports = Campground;