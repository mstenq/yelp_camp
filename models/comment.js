//REQUIRED MODULES
var mongoose    = require("mongoose");

//SCHEMA SETUP
var commentSchema = new mongoose.Schema({
    author: String,
    text: String
});

//CREATE MODEL
var Comment = mongoose.model("Comment", commentSchema);

//EXPORT MODEL
module.exports = Comment;