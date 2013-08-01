var app = express(),
    colors = require('colors'),
    express = require('express'),
    fs = require('fs'),
    sass = require('node-sass'),
    stitch = require('./stitch'),
    stitchPackage = require('./stitchPackage'),
    templatizer = require('templatizer'),
    uglify = require('uglify-js');

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
console.log("Need to run Chrome with disabled policy: ".bold.red, 
            "'open -a Google\\ Chrome --args -disable-web-security'".red);
console.log("Node server running. Open your browser to http://localhost:3000".italic.green);