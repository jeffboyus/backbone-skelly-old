var stitch = require('./stitch');

var deps = __dirname + '/public/script'; // location of the dependancy scripts that need to be included (see below)

module.exports = stitch.createPackage({
    paths: [__dirname + '/clientmodules', __dirname + '/clientapp'],
    dependencies: [
        deps + '/jquery-2.0.3.min.js',	// used for DOM access and manipulation, may substitute for Zepto or different version
        deps + '/browserdetect.js',		// detects what the user is using, makes conditional css easier
        deps + '/render.js',			// helps DOM-based rendering on animations (may not need)
        deps + '/fastclick.js',			// reduces the 300ms delay for mobile browsers
        deps + '/init.js'				// starts your backbone application and calls the start function in main
    ]
});

