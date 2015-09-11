module.exports = function(config) {

  config.set({
    basePath: '',
    files: [
      'node_modules/polyfill-function-prototype-bind/bind.js',
      'src/**/*.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-nested-reporter'
    ],
    autoWatch: true,
    singleRun: false,
    reporters: ['nested', 'coverage'],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    preprocessors: {'src/**/*.js': ['coverage']},
    coverageReporter: {
      type: 'html',
      dir: 'report/',
      file: 'report.html'
    }

  });
};
