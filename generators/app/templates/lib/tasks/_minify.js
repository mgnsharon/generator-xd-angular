/*global require*/
var gulp = require('gulp'),
  config = require('../config.js'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jade = require('gulp-jade'),
  ngtemplates = require('gulp-angular-templatecache'),
  plumber = require('gulp-plumber')
  ngAnnotate = require('gulp-ng-annotate');

  // Create template cache
  gulp.task('build:templateCache', function () {
    return gulp.src(config.filesets.templateCache)
      .pipe(plumber())
      .pipe(jade({pretty: true}))
      .pipe(ngtemplates('<%= projectSlug %>.tpls.js', {module: '<%= vendorPrefix %>.tmpls', root: '/', standalone: true}))
      .pipe(gulp.dest(config.paths.prod)); 
  });

  gulp.task('minify', ['build:templateCache'], function (){
    gulp.src(config.filesets.minified)
      .pipe(ngAnnotate())
      .pipe(concat('<%= projectSlug %>.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.paths.prod));
  });

  gulp.task('build', ['minify']);