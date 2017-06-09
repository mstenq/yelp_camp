# Yelp-Camp

### Running Server

You can start the server by running the folowing command.

    nodemon app.js -e js,html
    
### Saving to GIT

Save and push changes using the following commands.

    //for first time you must init the git repository and add orgin
    git init
    git remote add origin git@github.com:<<user_name>>/<<repository>>.git
    
    //Force git to look for all file changes
    git add .
    
    //Create a new commit with notes
    git commit -m "First Init"
    
    //Pushing changes
    git push -u origin master
    