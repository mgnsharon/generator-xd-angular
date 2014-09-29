var gulp = require('gulp'),
  config = require('../config.js'),
  bowerFiles = require('main-bower-files');

gulp.task('copy:vendor', function () {
  return gulp.src(bowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest(config.paths.vendor_dev))
});

gulp.task('copy:js', function () {
  return gulp.src(config.filesets.js)
    .pipe(gulp.dest(config.paths.dev));
});