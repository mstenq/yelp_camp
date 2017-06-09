# Yelp-Camp

### Tutorial Source Code

Source code for tutorials can be found here [webdevbootcamp](https://ide.c9.io/learnwithcolt/webdevbootcamp)

### Running Server

You can start the server by running the folowing command.

```javascript
nodemon app.js -e js,html
```

This will monitor all change to javascript and html files, and restart the server on any changes.
    
### Saving to GIT

Save and push changes using the following commands.

```javascript
//for first time you must init the git repository and add orgin
git init
git remote add origin git@github.com:<<user_name>>/<<repository>>.git

//Force git to look for all file changes
git add .

//Create a new commit with notes
git commit -m "First Init"

//Pushing changes
git push -u origin master
```

### Mongo Model and Schema Sample
Models go in the `/models` directory and should always be named **singularly**. 

**FILE NAMING CONVENTION**
- Separate words with hyphens (i.e. `-`)
- Should be named singularly (e.g. `comment.js` not `comments.js`) Note that when they are saved to Mongo, they will automatically be pluralized.
- File names should have a terse one or two word name that describes the material covered in the document.

**FIELD NAMES**
- Use camelCase.
- Don’t use _ underscore as the starting character of the field name. The only field with _ undescore should be _id.
- Field names cannot contain . dots or null characters and must not start with a $ dollar sign.


Below is an example of `/models/comment.js`.
```javascript
//REQUIRE MONGOOSE
var mongoose = require("mongoose");

//SETUP SCHEMA
var commentSchema = new mongoose.Schema({
    author: String,
    text: String
});

//CREATE NEW MODEL
var Comment = mongoose.model("Comment", commentSchema);

//EXPORT MODEL FOR USE IN OTHER FILES
module.exports = Comment;
```
    