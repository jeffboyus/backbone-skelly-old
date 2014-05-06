# Mobile Backbone Template
The assembly of this template is the method for which we make mobile HTML5 apps at PNNL. This application structure was developed by a local company called [&amp;yet](http://andyet.net "&amp;yet"). It was based of a project that they dubbed ["Human Javascript"](http://docs.humanjavascript.com/ "Human JavaScript").  It's highly recommend that you take some time and read through their introduction to the "framework" they have given the community.  Also, the book that they wrote to go along with this is highly recommended reading as well.  It will give you an insight as to why they made this and why you should use it... today.

Basically, this is a "framework" for creating single-page JavaScript applications using a variety of other frameworks assembled in an intuitive fashion. If you really want to know why you would consider doing this, then take a look at the book that was mentioned above. By no means is this everything you would need to make a mobile, or any, application.  But, it is a great start to a functional application right out of the gate.

```
Want to use this as a framework to create a regular old desktop browser app?

In its current form, it will only work on modern browsers and IE9+. Basically this boils down to ES5 support.  Sorry.  It is what it is.
```


## How to run

1. Install node.js, by downloading from [http://nodejs.org/](http://nodejs.org/ "Node Home Page") and installing.
2. Clone or pull down this Git repo to a local project folder.
3. Open a shell/terminal of some kind and `cd` to the root of the project directory.
4. Run `npm install` and wait a bit while the dependencies are installed.
5. Run `node server.js` (you should see a message that tells you to open your browser).
6. Open your brower to `http://localhost:3000` (you should now see the app)
7. That's it! The app is running through nodejs on your local machine.

## Building your application for placement on a server
 To build your application, run `node build.js` from the command line. This will place a build folder (not tracked by git) in the root of your directory with dev and prod versions of the file. These files can be moved to the appropriate web server for further testing or deployment. 

 Please see/edit the `build.js` file in this project to see/edit details about your build.

## How it's structured

1. All of the JS is now served up as a single file. You can see it by going to `http://localhost:3000/app.js`
2. Any code you change in `clientapp` or `clientmodules` folders will be included in that file as long as you are running the server you started in step 5 above.

```
Note: 

When committing your application to git, a script called JS Hint will run and 
require some linting procedures.  This will validate your code against some coding 
standards. These standards can be changed in the .jshintrc file.  You can also add 
files/folders to the .jshintignore file to remove them from the linting process. 
To disable this linting process, visit the package.json file and change the boolean 
value for linting on pre-commit.
```
