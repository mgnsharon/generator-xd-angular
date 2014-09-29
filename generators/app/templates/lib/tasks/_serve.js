var gulp = require('gulp'),
  <% if (webserver === 'express') { %>nodemon = require('gulp-nodemon'),<% } %>
  <% if (webserver === 'gulp-webserver') { %>webserver = require('gulp-webserver'),<% } %>
  open = require('gulp-open'),
  config = require('../config.js');

/**
 * Server tasks
 */
gulp.task('open:dev', ['serve:dev'], function () {
  return gulp.src('dev/index.html')
    .pipe(open("", {url: 'http://localhost:8081'}))
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
      port: 8081,
      fallback: 'index.html'
    }));<% } %>
});

gulp.task('watch', function () {
  gulp.watch(config.filesets.sass, ['sass']);
  gulp.watch(config.filesets.templates, ['jade:index']);
  gulp.watch(config.filesets.js, ['copy:js']);
  gulp.watch(config.filesets.templateCache, ['templateCache']);
});