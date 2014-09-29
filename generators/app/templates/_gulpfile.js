/*global require*/
var gulp = require('gulp'),
  config = require('./lib/config.js'),
  requireDir = require('require-dir'),
  ngAnnotate = require('gulp-ng-annotate'),
  del = require('del');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

requireDir('./lib/tasks', { recurse: true });

/**
 *  Main Tasks
 */
gulp.task('dev', ['open:dev']);
gulp.task('test', ['createtesttmpls', 'test:ci']);
gulp.task('tdd', ['createtesttmpls', 'autotest', 'watch:testtemplates']);


/**
 *  Development Sub Tasks
 */

gulp.task('dev:build', ['clean:dev', 'lint', 'templateCache', 'jade:index', 'sass', 'copy:vendor', 'copy:js']);

gulp.task('clean:dev', function () {
  del.sync([config.filesets.dev]);
});