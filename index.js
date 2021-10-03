var os = require('os');
var path = require('path');
process.env['MAGICK_HOME'] = path.join(
  __dirname,
  'bin',
  'osx',
  'imagemagick',
  'ImageMagick-7.0.10',
);
process.env['DYLD_LIBRARY_PATH'] = path.join(
  __dirname,
  'bin',
  'osx',
  'imagemagick',
  'ImageMagick-7.0.10',
  'lib'
);

var platform = os.platform();
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.');
  process.exit(1);
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

var imagemagickPath = path.join(
  __dirname,
  'bin',
  'osx',
  'imagemagick',
  'ImageMagick-7.0.10',
  'bin'
);

exports.path = imagemagickPath;
