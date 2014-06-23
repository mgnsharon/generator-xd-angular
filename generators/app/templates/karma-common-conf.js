
module.exports = {
  basePath: '',

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['mocha', 'chai', 'sinon-chai'],

  // list of files / patterns to load in the browser
  files: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/sass-bootstrap/dist/js/bootstrap.js',
    'bower_components/lodash/dist/lodash.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/restangular/dist/restangular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/toastr/toastr.js',
    'bower_components/moment/moment.js',
    'test/spec/<%= _.slugify(projectName) %>.tpls.js',
    'app/**/*.js'
  ],


  // list of files to exclude
  exclude: [
    'app/app.js'
  ],

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['mocha'],


  // web server port
  port: 9876,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: 'INFO',


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['PhantomJS'],
  plugins: [
    'karma-mocha',
    'karma-chai',
    'karma-sinon-chai',
    'karma-phantomjs-launcher',
    'karma-mocha-reporter'
  ]
}