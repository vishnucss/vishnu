/* 
* Config Gulpfile
*/

'use strict';

const gulp = require('gulp'),
  pkg = require('./package.json'),
  postcss = require('gulp-postcss'),
  symdest = require('gulp-symdest'),
  cssnano = require('cssnano'),
  cssnext = require('postcss-cssnext'),
  selector = require('postcss-custom-selectors'),
  nesting = require('postcss-nesting'),
  customMedia = require('postcss-custom-media'),
  copyright = `/**
* vishnucss extensions - v${pkg.version}
* ${pkg.description}
* https://vishnucss.github.io/vishnu#extensions
*/\r\n`,
  $ = require('gulp-load-plugins')();

/* 
* Extensions build task
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
      './src/alert.css',
      './src/card.css',
      './src/grid.css',
      './src/utils.css'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('vishnu.extensions.css'))
    .pipe(postcss(plugins))
    .pipe($.header(copyright + '\n'))
    .pipe($.size())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

/* 
* Minify in build extensions
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
    .src(['./dist/vishnu.extensions.css'])
    .pipe($.sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe($.header(copyright))
    .pipe($.size())
    .pipe(
      $.size({
        gzip: true
      })
    )
    .pipe($.concat('vishnu.extensions.min.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(symdest('../../docs/src/assets'))
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
