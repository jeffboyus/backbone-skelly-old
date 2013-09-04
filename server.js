var fs = require('fs');
var express = require('express');
var colors = require('colors');
var api = require('dummy-api');
var clientPackage = require('./clientPackage');
var app = express();


app.use(express['static'](__dirname + '/public'));
app.use(express.bodyParser());

var clientApp = clientPackage(true, app);



//automatically looks in css folder for sass or scss files and then places them in same folder
/*
app.use(sass.middleware({
    src: __dirname + '/public/',
    dest: __dirname + '/public/',
    debug: true
}));*/

// a fake, dummy API
app.get('/api/people', api.list);
app.get('/api/people/:id', api.get);
app.delete('/api/people/:id', api.delete);
app.put('/api/people/:id', api.update);
app.post('/api/people', api.add);

app.get('*', clientApp.html());

app.listen(3000);
console.log("Need to run Chrome with disabled policy: ".bold.red,
            "'open -a Google\\ Chrome --args -disable-web-security'".red);
console.log("Node server running. Open your browser to http://localhost:3000".italic.green);
