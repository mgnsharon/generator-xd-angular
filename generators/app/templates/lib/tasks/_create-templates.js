var gulp = require('gulp'),
  jade = require('gulp-jade'),
  ngtemplates = require('gulp-angular-templatecache'),
  config = require('../config.js'),
  plumber = require('gulp-plumber');

gulp.task('jade:index', function () {
  return gulp.src('app/index.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('dev'));
});

gulp.task('templateCache', function () {
  return gulp.src(config.filesets.templateCache)
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(ngtemplates('<%= projectSlug %>.tpls.js', {module: '<%= vendorPrefix %>.tmpls', root: '/', standalone: true}))
    .pipe(gulp.dest(config.paths.dev));
});