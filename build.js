var async = require('async'),
	fs = require('fs'),
	UglifyJS = require('uglify-js'),
	crypto = require('crypto')
	rimraf = require('rimraf'),
    stitchPackage = require('./stitchPackage'),
	ncp = require('ncp').ncp;

var version;

async.series([
	function (cb) {
		rimraf('build', cb);
	},
	function (cb) {
		fs.mkdir('build', cb);
	},
	function (cb) {
		fs.mkdir('build/dev', cb);
	},
	function (cb) {
		fs.mkdir('build/prod', cb);
	},
	function (cb) {
		ncp('public/img', 'build/dev/img', cb);
	},
	function (cb) {
		ncp('public/css', 'build/dev/css', cb);
	},
	function (cb) {
		ncp('public/img', 'build/prod/img', cb);
	},
	function (cb) {
		ncp('public/css', 'build/prod/css', cb);
	},
	function (cb) {
		stitchPackage.compile(function (err, source) {
			var shasum = crypto.createHash('sha1');
			shasum.update(source);
			version = shasum.digest('hex').slice(0, 8);

		    fs.writeFile('build/dev/app.' + version + '.js', source, cb);

			var minSource = UglifyJS.minify(source, {fromString: true}).code;
		    fs.writeFile('build/prod/app.' + version + '.js', minSource, cb);
		});
	},
	function (cb) {
		fs.readFile('index.html', 'utf-8', function (error, buffer) {
			var source = buffer.toString();
			source = source.replace(/\{\{version\}\}/g, version);
			fs.writeFile('build/dev/index.html', source, null);
			fs.writeFile('build/prod/index.html', source, cb);
		});
	}
], function (error) { console.log(error);});

