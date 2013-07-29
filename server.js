var templatizer = require('templatizer'),
    fs = require('fs'),
    express = require('express'),
    stitch = require('./stitch'),
    stitchPackage = require('./stitchPackage'),
    uglify = require('uglify-js'),
    app = express(),
    sass = require('node-sass');

templatizer(__dirname + '/clienttemplates', __dirname + '/clientmodules/templates.js');

app.use(express['static'](__dirname + '/public'));

//automatically looks in css folder for sass or scss files and then places them in same folder
app.use(sass.middleware({
	src: __dirname + '/public/',
	dest: __dirname + '/public/',
	debug: true
}));

app.get('/', function (req, res) {
    res.send(fs.readFileSync('index.html', 'utf-8'), 200);
});

app.get('/app*.js', stitchPackage.createServer());

app.listen(3000);
console.log("Need to run Chrome with disabled policy. 'open -a Google\\ Chrome --args -disable-web-security'");
console.log("Node server running. Open your browser to http://localhost:3000 to see the app");