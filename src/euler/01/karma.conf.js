var path = require('path');

var baseConfig = require('../../../base-karma.conf.js');
var rootPath = baseConfig.rootPath;

module.exports = function(config) {
  baseConfig(config);

  config.set({
    basePath: path.relative('.', rootPath)
  });

  config.files.push(path.relative(rootPath, '.') + '/**/*.js');

};
