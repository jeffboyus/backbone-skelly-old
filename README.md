# How to run

1. Install node.js, by downloading from http://nodejs.org/ and installing.
2. Open a shell of some kind and "cd" to the root of this directory.
3. Run "npm install" and wait a bit while the dependencies are installed.
4. Run "node server.js" (you should see a message that tells you to open your browser).
5. Open your brower to http://localhost:3000 (you should now see the app)

## How it's structured

1. All the JS is now served up as a single file. You can see it by going to http://localhost:3000/app.js
2. Any code you change in "clientapp" or "clientmodules" folders will be included in that file as long as you are running the server you started in step 4 above.

## Need Git help?
1. Create the directory where you want the project to be tracked from.
2. Navigate to that directory in the Terminal/Command Line.
3. Assuming you have git installed and configured, do a **git init**, which will start tracking the current local repo.
4. Now you need to tell that local repo to also be configured to a remote repo by doing **git remote add Your_Remote_Alias_Name http://Your_NetworkID@git.pnnl.gov/Path_to_repository** (Which may prompt you for a network password)
5. At this point, you may need to force a master branch on your local repo by doing **git add .** (Which adds all the files to your local repo, which is nothing most likely)
6. To **fetch** and **merge** from the remote server at anytime, including intital startup, do a **git pull Your_Remote_Alias_Name master**. This will merge the remote repo's master branch into your current local master branch. (Should be prompted for a network password)
7. The code should be pulled down and your local git should be tracking changes!! Yippie!

Need help in committing to your local repo and then pushing to the remote repo?  See this helpful guide for git commands: [http://www.atlassian.com/git/](http://www.atlassian.com/git/ "Atlassian Git Help")