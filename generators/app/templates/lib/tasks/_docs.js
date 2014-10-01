var gulp = require('gulp'),
  config = require('../config.js'),
  webserver = require('gulp-webserver'),
  open = require('gulp-open'),
  plumber = require('gulp-plumber'),
  ngdocs = require('gulp-ngdocs'),
  del = require('del');

gulp.task('clean:docs', function () {
  del.sync([config.paths.docs]);
});

gulp.task('ngdocs', ['clean:docs'], function () {
  return gulp.src(config.filesets.js)
    .pipe(plumber())
    .pipe(ngdocs.process({
      scripts: [],
      html5Mode: true,
      startPage: '/api',
      titleLink: '/api',
      title: '<%= appTitle %> Docs'
    }))
    .pipe(gulp.dest(config.paths.docs));
});

gulp.task('serve:docs', ['ngdocs'], function () {

  return gulp.src('docs')
    .pipe(webserver({
      livereload: true,
      host: config.server.HOST,
      port: config.server.DOCS_PORT,
      fallback: 'index.html'
    }));
  });

gulp.task('open:docs', ['serve:docs'], function () {
  return gulp.src('dev/index.html')
    .pipe(open("", {url: 'http://' + config.server.HOST + ':' + config.server.DOCS_PORT}))
});

gulp.task('watch:docs', function () {
  gulp.watch(config.filesets.js, ['ngdocs']);
});
