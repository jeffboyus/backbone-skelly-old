# How to run

1. Install node.js, by downloading from [http://nodejs.org/](http://nodejs.org/ "Node Home Page") and installing.
2. Open a shell of some kind and `cd` to the root of this directory.
3. Run `npm install` and wait a bit while the dependencies are installed.
4. Run `node server.js` (you should see a message that tells you to open your browser).
5. Open your brower to `http://localhost:3000` (you should now see the app)

## Building your application for placement on a server
 To build your application, run `node build.js` from the command line. This will place a build folder (not tracked by git) in the root of your directory with dev and prod versions of the file. These files can be moved to the appropriate web server for further testing or deployment. 

 Please see/edit the `build.js` file in this project to see/edit details about your build.

## How it's structured

1. All the JS is now served up as a single file. You can see it by going to `http://localhost:3000/app.%7B%7Bversion%7D%7D.js`
2. Any code you change in `clientapp` or `clientmodules` folders will be included in that file as long as you are running the server you started in step 4 above.

```
Note: 

When committing your application to git, a script called JS Hint will run and 
require some linting procedures.  This will validate your code against some coding 
standards. These standards can be changed in the .jshintrc file.  You can also add 
files/folders to the .jshintignore file to remove them from the linting process. 
To disable this linting process, visit the package.json file and change the boolean 
value for linting on pre-commit.
```

## Need Git help?
1. Create the directory where you want the project to be tracked from.
2. Navigate to that directory in the Terminal/Command Line.
3. Assuming you have git installed and configured, do a `git init`, which will start tracking the current local repo.
4. Now you need to tell that local repo to also be configured to a remote repo by doing `git remote add Your_Remote_Alias_Name http://Your_NetworkID@git.pnnl.gov/Path_to_repository` (Which may prompt you for a network password)
5. At this point, you may need to force a master branch on your local repo by doing `git add .` (Which adds all the files to your local repo, which is nothing most likely)
6. To `fetch` and `merge` from the remote server at anytime, including intital startup, do a `git pull Your_Remote_Alias_Name master`. This will merge the remote repo's master branch into your current local master branch. (Should be prompted for a network password)
7. The code should be pulled down and your local git should be tracking changes!! Yippie!
8. Optional (but advised): Run the `npm i` command after everything is pulled down.  This will check to make sure you have the up to date node packages installed and add in some pre-commit hooks to your git repo. The package.json file contains the dependancies that need to be installed by node.

Need help in committing to your local repo and then pushing to the remote repo?  See this helpful guide for git commands: [http://www.atlassian.com/git/](http://www.atlassian.com/git/ "Atlassian Git Help")
