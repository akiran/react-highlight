// Karma configuration
// Generated on Sun Jul 12 2015 14:29:28 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/react/dist/react-with-addons.js',
      'test/**/*.js',
    ],


    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*.js': ['webpack'],
    },

    webpack: {
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env'],
                  plugins: [
                    'transform-class-properties',
                    'transform-react-jsx',
                  ],
                },
              },
            },
          ],
        },
        externals: {
            react: 'React'
        },
        resolve: {
          modules: [__dirname, 'node_modules']
        }
    },
    webpackServer: {
      quiet: true,
      // noInfo: true,
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
