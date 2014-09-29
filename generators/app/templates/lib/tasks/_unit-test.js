/*jshint node:true, es3:false*/

var gulp = require('gulp'),
  karmaCommonConf = require('../../karma-common-conf.js'),
  jade = require('gulp-jade'),
  ngtemplates = require('gulp-angular-templatecache'),
  karma = require('karma').server,
  config = require('../config.js'),
  _ = require('lodash');
/**
 * Testing sub tasks
 */

gulp.task('createtesttmpls', function () {
  gulp.src(config.filesets.templateCache)
    .pipe(jade({pretty: true}))
    .pipe(ngtemplates('<%= projectSlug %>.tpls.js', {module: '<%= vendorPrefix %>.tmpls', root: '/', standalone: true}))
    .pipe(gulp.dest('test/spec'));
});

gulp.task('watch:testtemplates', function () {
  gulp.watch(config.filesets.templateCache, ['createtesttmpls']);
});

gulp.task('autotest', function (done) {
  karma.start(_.assign({}, karmaCommonConf), done);
});

gulp.task('test:ci', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});
