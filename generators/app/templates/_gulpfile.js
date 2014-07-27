/*global require*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  ngmin = require('gulp-ngmin'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  del = require('del'),
  <% if (webserver === 'express') { %>nodemon = require('gulp-nodemon'),<% } %>
  <% if (webserver === 'gulp-webserver') { %>webserver = require('gulp-webserver'),<% } %>
  jade = require('gulp-jade'),
  ngtemplates = require('gulp-angular-templatecache'),
  compass = require('gulp-compass'),
  bowerFiles = require('main-bower-files'),
  karmaCommonConf = require('./karma-common-conf.js'),
  karma = require('karma').server,
  open = require('gulp-open'),
  _ = require('lodash');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 *  Main Tasks
 */
gulp.task('dev', ['open:dev', 'watch']);
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
  templateCache: ['app/**/*.jade', '!app/index.jade', '!app/partials/**'],
  templates: ['app/index.jade', 'app/partials/*.jade'],
  js: ['app/**/*.js', '!app/**/*-spec.js'],
  sass: ['app/**/*.scss'],
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

gulp.task('dev:build', ['clean:dev', 'copy:js', 'templateCache', 'jade:index', 'sass', 'copy:vendor']);

gulp.task('clean:dev', function () {
  del.sync([filesets.dev]);
});

gulp.task('copy:vendor', function () {
  return gulp.src(bowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest(paths.vendor_dev))
});

gulp.task('copy:js', function () {
  return gulp.src(filesets.js)
    .pipe(gulp.dest(paths.dev));
});

gulp.task('jade:index', function () {
  return gulp.src('app/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('dev'));
});

gulp.task('sass', function () {
  return gulp.src('app/app.scss')
    .pipe(compass({
      project: __dirname,
      css: 'dev',
      sass: 'app'
    }));
});

gulp.task('templateCache', function () {
  return gulp.src(filesets.templateCache)
    .pipe(jade({pretty: true}))
    .pipe(ngtemplates('<%= _.slugify(projectName) %>.tpls.js', {module: '<%= vendorPrefix %>.tmpls', root: '/', standalone: true}))
    .pipe(gulp.dest(paths.dev));
});

gulp.task('open:dev', ['serve:dev'], function () {
  return gulp.src('dev/index.html')
    .pipe(open("", {url: 'http://localhost:3000'}))
});

gulp.task('serve:dev', ['dev:build'], function () {
  <% if (webserver === 'express') { %>nodemon({
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
    });<% } %>
  <% if (webserver === 'gulp-webserver') { %>return gulp.src('dev')
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
      port: 3000,
      fallback: 'index.html'
    }));<% } %>
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
    .pipe(ngtemplates('<%= _.slugify(projectName) %>.tpls.js', {module: '<%= vendorPrefix %>.tmpls', root: '/', standalone: true}))
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

