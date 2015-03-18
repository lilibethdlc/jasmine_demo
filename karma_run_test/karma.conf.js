module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '*.js',
    ],
    exclude: [
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],

    // Leave running or not
    autoWatch: true,
    singleRun: true
  });
};
