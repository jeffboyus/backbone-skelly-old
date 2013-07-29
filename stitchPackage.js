var stitch = require('./stitch');

var deps = __dirname + '/public/script';

module.exports = stitch.createPackage({
    paths: [__dirname + '/clientmodules', __dirname + '/clientapp'],
    dependencies: [
        deps + '/jquery-2.0.3.min.js',
        deps + '/browserdetect.js',
        deps + '/render.js',
        deps + '/fastclick.js',
        deps + '/init.js'
    ]
});

