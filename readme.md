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

### Directory
- [mongo models](./models/readme.md)
    
```java
/models                 //Used to store schema for mongo models, all DB operations should take place here
    comments.js
    user.js
/public
    /stylesheets
    /javscript
/view
    comments/
        index.html
        new.html
        show.html
    macros/
        forms.html
    partials/
        base.html
        header.html
        footer.html
app.js
package.json
seeds.js
```