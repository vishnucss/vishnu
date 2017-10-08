/* 
* Config Gulpfile
*/

'use strict';

const gulp = require('gulp'),
  pkg = require('./package.json'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  cssnext = require('postcss-cssnext'),
  selector = require('postcss-custom-selectors'),
  nesting = require('postcss-nesting'),
  customMedia = require('postcss-custom-media'),
  copyright = `/**
* vishnucss alert - v${pkg.version}
* https://vishnucss.github.io/vishnu#alert
*/\r\n`,
  $ = require('gulp-load-plugins')();

/* 
* Alert build task
*/
gulp.task('build', function() {
  let plugins = [
    selector(),
    nesting(),
    customMedia(),
    cssnext({ browsers: ['last 1 version'] })
  ];
  return gulp
    .src([
      './src/variables.css',
      './src/customs.css',
      './src/alert.css'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('vishnu.alert.css'))
    .pipe(postcss(plugins))
    .pipe($.header(copyright + '\n'))
    .pipe($.size())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

/* 
* Minify in build alert
*/
gulp.task('minify', ['build'], function() {
  let plugins = [
    selector(),
    cssnano(),
    nesting(),
    customMedia(),
    cssnext({ browsers: ['last 1 version'] })
  ];
  return gulp
    .src(['./dist/vishnu.alert.css'])
    .pipe($.sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe($.header(copyright))
    .pipe($.size())
    .pipe(
      $.size({
        gzip: true
      })
    )
    .pipe($.concat('vishnu.alert.min.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
});

/* 
* Watch tasks
*/
gulp.task('watch', function() {
  gulp.watch(['src/*.css'], ['default']);
});

/* 
* Running commands to development and build
*/
gulp.task('default', ['build', 'minify']);
