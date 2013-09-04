var Moonboots = require('moonboots');
var templatizer = require('templatizer');
var scripts = __dirname + '/public/script';
var styles = __dirname + '/public/css';


module.exports = function (devMode, app) {
    return new Moonboots({
        main: './clientapp/APP_NAME',
        developmentMode: devMode,
        libraries: [
            scripts + '/jquery-2.0.3.min.js',  // used for DOM access and manipulation, may substitute for Zepto or different version
            scripts + '/browserdetect.js',     // detects what the user is using, makes conditional css easier
            scripts + '/render.js'             // helps DOM-based rendering on animations (may not need)
            //scripts + '/fastclick.js'        // reduces the 300ms delay for mobile browsers
        ],
        stylesheets: [
            styles + '/bootstrap.css'
        ],
        server: app,
        beforeBuild: function () {
            templatizer(__dirname + '/clienttemplates', __dirname + '/clientapp/templates.js');
        }
    });
};
