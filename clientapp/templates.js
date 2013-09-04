(function () {
var root = this, exports = {};

// The jade runtime:
var jade = exports.jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});


// create our folder objects
exports.includes = {};
exports.pages = {};

// body.jade compiled template
exports.body = function anonymous(locals) {
    var buf = [];
    buf.push('<body><div class="container"><nav role="navigation" class="navbar navbar-default"><div class="navbar-header"><a href="/" class="navbar-brand">PNNL - Skeleton App</a></div><div class="navbar-collapse"><ul class="nav navbar-nav"><li><a href="/people">people</a></li><li><a href="/links">links</a></li></ul></div></nav><main id="pages"></main><footer></footer></div></body>');
    return buf.join("");
};

// head.jade compiled template
exports.head = function anonymous(locals) {
    var buf = [];
    buf.push('<meta name="viewport" content="user-scalable=0, initial-scale=1.0"/><meta content="yes" name="apple-mobile-web-app-capable"/><meta name="apple-mobile-web-app-status-bar-style" content="black"/><!-- iPhone --><link href="img/ETR_App_Icon_57x57.png" sizes="57x57" rel="apple-touch-icon-precomposed"/><link href="img/ETR_Splash_screen_320x460.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image"/><!-- iPhone (Retina) --><link href="img/ETR_App_Icon_114x114.png" sizes="114x114" rel="apple-touch-icon-precomposed"/><link href="img/ETR_Splash_screen_640x920.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image"/><!-- iPhone 5 --><link href="img/ETR_Splash_screen_640x1096.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image"/><!-- iPad --><link href="img/ETR_App_Icon_72x72.png" sizes="72x72" rel="apple-touch-icon-precomposed"/><link href="img/ETR_Splash_screen_768x1004.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image"/><link href="img/ETR_Splash_screen_748x1024.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image"/>');
    return buf.join("");
};

// person.jade compiled template
exports.includes.person = function anonymous(locals) {
    var buf = [];
    var locals_ = locals || {}, person = locals_.person;
    buf.push('<li class="person"><img' + jade.attrs({
        width: "40",
        height: "40",
        src: person.avatar(40),
        "class": [ "avatar" ]
    }, {
        width: true,
        height: true,
        src: true
    }) + '/><span class="name">' + jade.escape(null == (jade.interp = person.fullName()) ? "" : jade.interp) + "</span><span> <a" + jade.attrs({
        href: person.appUrl(),
        "class": [ "view" ]
    }, {
        href: true
    }) + '>view</a> <a class="delete">delete</a></span></li>');
    return buf.join("");
};

// home.jade compiled template
exports.pages.home = function anonymous(locals) {
    var buf = [];
    buf.push('<div id="home" class="page"><div class="page-header"><h1>PNNL <small>Sample/Demo Single Page App</small></h1></div><p>Built by <a href="http://twitter.com/henrikjoreteg">Henrik Joreteg</a> of <a href="http://andyet.com">&yet</a> in the style of <a href="http://humanjavascript.com">human javascript</a></p></div>');
    return buf.join("");
};

// links.jade compiled template
exports.pages.links = function anonymous(locals) {
    var buf = [];
    buf.push('<div id="links" class="page"><div class="page-header"><h1>Helpful Resources</h1></div><ul><li><a href="http://andyet.com">&yet</a> - The team behind this work</li><li><a href="http://backbonejs.org">Backbone.js</a> - Official Backbone Documentation</li><li><a href="http://underscorejs.org">underscore.js</a> - Official Underscore Documentation</li><li><a href="http://humanjavascript.com">human javascript</a> - The book (this site, soon to include lots more)</li><li><a href="https://github.com/henrikjoreteg/human-view">human-view</a> - The Backbone View extension used in this demo</li><li><a href="https://github.com/henrikjoreteg/human-model">human-model</a> - An alternate (more explicit) to Backbone Models</li></ul></div>');
    return buf.join("");
};

// notFound.jade compiled template
exports.pages.notFound = function anonymous(locals) {
    var buf = [];
    buf.push('<div id="notFound" class="page"><h1>Nothing Here <small>404</small></h1></div>');
    return buf.join("");
};

// people.jade compiled template
exports.pages.people = function anonymous(locals) {
    var buf = [];
    buf.push('<div id="people" class="page"><div class="page-header"><h1>Collections <small>don\'t have to be hard</small></h1></div><p>Intelligently rendering collections can be a bit tricky. </p><p><a href="https://github.com/henrikjoreteg/human-view">HumanView\'s</a> <code>renderCollection()</code> method makes it sipmle.</p><p>The only code requried to manage the collection is:</p><pre><code>this.renderCollection(\n   this.collection, \n   PersonView, \n   this.$(\'.people\')[0]\n);</code></pre><h3>People container:</h3><div class="people"></div><p>Try it by clicking the buttons</p><div class="buttons"><button type="button" class="btn btn-default reset">.reset()</button><button class="btn btn-default fetch">.fetch()</button><button class="btn btn-default shuffle">.shuffle()</button><button class="btn btn-default add">Generate Random Person</button></div><p>Events are always managed so you don\'t get any leaks.</p></div>');
    return buf.join("");
};

// person.jade compiled template
exports.pages.person = function anonymous(locals) {
    var buf = [];
    var locals_ = locals || {}, person = locals_.person;
    buf.push('<div id="person" class="page"><img' + jade.attrs({
        src: person.avatar(200),
        width: "200",
        height: "200",
        "class": [ "img-circle", "img-thumbnail" ]
    }, {
        src: true,
        width: true,
        height: true
    }) + "/><h1>" + jade.escape(null == (jade.interp = person.fullName()) ? "" : jade.interp) + "</h1></div>");
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();