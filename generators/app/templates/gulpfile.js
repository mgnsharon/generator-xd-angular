/*global require*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  ngmin = require('gulp-ngmin'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  clean = require('gulp-clean'),
  nodemon = require('gulp-nodemon'),
  jade = require('gulp-jade'),
  ngtemplates = require('gulp-angular-templatecache'),
  compass = require('gulp-compass'),
  bowerFiles = require('gulp-bower-files'),
  karmaCommonConf = require('./karma-common-conf.js'),
  karma = require('karma').server,
  open = require("gulp-open"),
  _ = require('lodash');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 *  Main Tasks
 */
gulp.task('dev', ['dev:build', 'serve:dev', 'watch', 'tdd', 'open:dev']);
gulp.task('test', ['createtesttmpls', 'test:ci']);
gulp.task('tdd', ['createtesttmpls', 'autotest', 'watch:testtemplates']);

/**
 *  Variables
 */
var paths = {
  dev: 'dev/',
  vendor_dev: 'dev/vendor/',
  prod: 'public/'
};

var filesets = {
  templateCache: ['app/**/*.jade', '!app/index.jade', '!app/partials'],
  templates: ['app/index.jade', 'app/partials/*.jade'],
  js: ['app/**/*.js', '!app/**/*.spec.js'],
  sass: ['app/**/*.sass'],
  dev: 'dev/**'
};

/**
 *  Development Sub Tasks
 */

gulp.task('watch', function () {
  gulp.watch(filesets.sass, ['sass']);
  gulp.watch(filesets.templates, ['jade:index']);
  gulp.watch(filesets.js, ['copy:js']);
  gulp.watch(filesets.templateCache, ['templateCache']);
});

gulp.task('dev:build', ['copy:js', 'templateCache', 'jade:index', 'sass', 'copy:vendor']);

gulp.task('clean:dev', function () {
  return gulp.src(filesets.dev, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('copy:vendor', function () {
  bowerFiles()
    .pipe(gulp.dest(paths.vendor_dev));
});

gulp.task('copy:js', function () {
  gulp.src(filesets.js)
    .pipe(gulp.dest(paths.dev));
});

gulp.task('jade:index', function () {
  gulp.src('app/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('dev'));
});

gulp.task('sass', function () {
  gulp.src('app/app.sass')
    .pipe(compass({
      project: __dirname,
      css: 'dev',
      sass: 'app'
    }));
});

gulp.task('templateCache', function () {
  gulp.src(filesets.templateCache)
    .pipe(jade({pretty: true}))
    .pipe(ngtemplates('marvel.tpls.js', {module: 'mc.tmpls', root: '/', standalone: true}))
    .pipe(gulp.dest(paths.dev));
});

gulp.task('open:dev', function () {
  gulp.src('dev/index.html')
    .pipe(open("", {url: 'http://localhost:3000'}))
})

gulp.task('serve:dev', function () {
  nodemon({
    script: 'srv/server.js',
    ext: 'js',
    ignore: [
      'app',
      'node_modules',
      'public',
      'test',
      'gulpfile.js',
      'karma.conf.js'
    ]})
    .on('restart', function () {
      console.log('restarted dog!');
    });

});

/**
 *  Production sub tasks
 */



/**
 * Testing sub tasks
 */

gulp.task('createtesttmpls', function () {
  gulp.src(filesets.templateCache)
    .pipe(jade({pretty: true}))
    .pipe(ngtemplates('marvel.tpls.js', {module: 'mc.tmpls', root: '/', standalone: true}))
    .pipe(gulp.dest('test/spec'));
});

gulp.task('watch:testtemplates', function () {
  gulp.watch(filesets.templateCache, ['createtesttmpls']);
});

gulp.task('autotest', function (done) {
  karma.start(_.assign({}, karmaCommonConf), done);
});

gulp.task('test:ci', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});

