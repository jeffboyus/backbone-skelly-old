var async = require('async'),
    colors = require('colors'),
	crypto = require('crypto'),
	fs = require('fs'),
	ncp = require('ncp').ncp,
	rimraf = require('rimraf'),
    clientPackage = require('./clientPackage'),
	UglifyJS = require('uglify-js');

var version;
console.log('Starting BUILD process...'.magenta);

async.series([
	function (cb) {
		rimraf('build', cb);
	},
	function (cb) {
		console.log('Making build folders...'.green);
		fs.mkdirSync('build');
		//fs.mkdirSync('build/dev');
		fs.mkdirSync('build/prod');
		cb();
	},
	/*
	function (cb) {
		console.log('Moving images to DEV...'.green);
		ncp('public/img', 'build/dev/img', cb);
	},
	*/
	function (cb) {
		console.log('Moving images to PROD...'.green);
		ncp('public/img', 'build/prod/img', cb);
	},
	function (cb) {
		console.log('Creating packages...'.magenta);
		var clientApp = clientPackage(false);
		clientApp._ensureReady(function (err, source) {
			var result = clientApp.result;

			console.log('Writing minified CSS to PROD folder...'.green);
			//fs.writeFileSync('build/dev/' + result.cssFileName, result.css);
			fs.writeFileSync('build/prod/' + result.cssFileName, result.css);

			console.log('Writing html template to PROD folder...'.green);
			//fs.writeFileSync('build/dev/index.html', result.html);
			fs.writeFileSync('build/prod/index.html', result.html);

			console.log('Writing minified PROD version to file...'.green);
			fs.writeFileSync('build/prod/' + result.jsMinFileName, result.minSource);

			cb();
		});
	}
], function (error) {
	if (error === null) {
		console.log('No errors from build process.'.green);
	} else {
		console.log(error .red);
	}
});

