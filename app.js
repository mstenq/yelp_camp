const express     = require("express");
const app         = express();
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
const nunjucks    = require("nunjucks");
const Campground  = require("./models/campground");
const Comment     = require("./models/comment");
const seedDB      = require("./seeds");


//seedDB();

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");

nunjucks.configure('views', {
    autoescape: true,
    express: app
});



app.get("/", function(req, res){
   res.render("landing/index");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }else{
           res.render("./campgrounds/index", {campgrounds: campgrounds}); 
        }
    });
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description };
    Campground.create(newCampground, function(err, campground){
            if(err){
                console.log(err);
            }else{
                res.redirect("/campgrounds");
            }
        }
    );
    
})

app.get("/campgrounds/new", function(req, res){
    res.render("./campgrounds/new");
    
})

app.get("/campgrounds/:id", function(req, res){
    var id = req.params.id;
    Campground.findById(id, function(err, campground){
        if(err){
            console.log(err);
        }else{
           res.render("./campgrounds/show", {campground: campground}); 
        }
    });
})

//========================
//COMMENTS ROUTES
//========================

app.get("/campgrounds/:id/comments/new", function(req, res){
    var id = req.params.id;
    Campground.findById(id, function(err, campground){
        if(err){
            console.log(err);
        }else{
           res.render("./comments/new", { campground: campground});
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req, res){
    var id = req.params.id;
    Campground.findById(id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            console.log(req.body);
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect( "/campgrounds/" + id );
                }
            })
        }
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
})