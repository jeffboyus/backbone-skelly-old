var async = require('async'),
    colors = require('colors'),
	crypto = require('crypto'),
	fs = require('fs'),
	ncp = require('ncp').ncp,
	rimraf = require('rimraf'),
    stitchPackage = require('./stitchPackage'),
	UglifyJS = require('uglify-js');

var version;
console.log('Starting BUILD process...'.magenta);

async.series([
	function (cb) {
		rimraf('build', cb);
	},
	function (cb) {
		console.log('Making build folders...'.green);
		fs.mkdir('build', cb);
	},
	function (cb) {
		fs.mkdir('build/dev', cb);
	},
	function (cb) {
		fs.mkdir('build/prod', cb);
	},
	function (cb) {
		console.log('Moving images to DEV...'.green);
		ncp('public/img', 'build/dev/img', cb);
	},
	function (cb) {
		console.log('Moving CSS to DEV...'.green);
		ncp('public/css', 'build/dev/css', cb);
	},
	function (cb) {
		console.log('Moving images to PROD...'.green);
		ncp('public/img', 'build/prod/img', cb);
	},
	function (cb) {
		console.log('Moving CSS to PROD...'.green);
		ncp('public/css', 'build/prod/css', cb);
	},
	function (cb) {
		console.log('Creating packages...'.magenta);
		stitchPackage.compile(function (err, source) {
			var shasum = crypto.createHash('sha1');
			shasum.update(source);
			version = shasum.digest('hex').slice(0, 8);

			console.log('Writing DEV version %s to file...'.green, version);
		    fs.writeFile('build/dev/app.' + version + '.js', source, cb);

			console.log('Writing and minifying PROD version %s to file...'.green, version);
			var minSource = UglifyJS.minify(source, {fromString: true}).code;
		    fs.writeFile('build/prod/app.' + version + '.js', minSource, cb);
		});
	},
	function (cb) {
		fs.readFile('index.html', 'utf-8', function (error, buffer) {
			var source = buffer.toString();
			console.log('Replacing version string in HTML index file to be %s...'.green, version);
			source = source.replace(/\{\{version\}\}/g, version);
			console.log('Moving HTML index files...'.green);
			fs.writeFile('build/dev/index.html', source, null);
			fs.writeFile('build/prod/index.html', source, cb);
		});
	}
], function (error) { 
	if (error === null) {
		console.log('No errors from build process.'.green);
	} else {
		console.log(error .red);
	}
});

