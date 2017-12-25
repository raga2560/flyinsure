var webpackConfig = require('./webpack.test.js');

/*
'node_modules/core-js/client/shim.js',
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/zone.js/dist/zone.js',
          'node_modules/zone.js/dist/long-stack-trace-zone.js',
          'node_modules/zone.js/dist/proxy.js',
          'node_modules/zone.js/dist/sync-test.js',
          'node_modules/zone.js/dist/jasmine-patch.js',
          'node_modules/zone.js/dist/async-test.js',
          'node_modules/zone.js/dist/fake-async-test.js',
		  
*/
module.exports = function(config) {
  var _config = {
    basePath: '../',

    frameworks: ['jasmine'],

    files: [

	'node_modules/core-js/client/shim.js',
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/zone.js/dist/zone.js',
          'node_modules/zone.js/dist/long-stack-trace-zone.js',
          'node_modules/zone.js/dist/proxy.js',
          'node_modules/zone.js/dist/sync-test.js',
          'node_modules/zone.js/dist/jasmine-patch.js',
          'node_modules/zone.js/dist/async-test.js',
          'node_modules/zone.js/dist/fake-async-test.js',
      {
        pattern: './test-config/karma-test-shim.js',
        watched: true
      },
	  
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],

    proxies: {
      '/assets/': '/base/src/assets/'
    },

    preprocessors: {
      './test-config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: false
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },

    reporters: config.coverage ? ['kjhtml', 'dots', 'coverage-istanbul'] : ['kjhtml', 'dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  };

  config.set(_config);
};
