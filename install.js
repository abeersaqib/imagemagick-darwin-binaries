#!/usr/bin/env node

var fs = require('fs');
var fse = require('fs-extra');
var os = require('os');
var path = require('path');
var targz = require('node-tar.gz');
var version = "ImageMagick-x86_64-apple-darwin20.1.0";

// Using callbacks
console.log('Going to extract compressed imagemagick library, version: '+version);
targz().extract(path.join(__dirname, '/' + version + '.tar.gz'), path.join(__dirname, 'bin/osx/imagemagick'), function (err) {
  if (err)
    console.log('Something is wrong ', err.stack);

  fse.removeSync(path.join(__dirname, "bundle"));
  console.log('Successfully extracted;!');
});
