/*
* Config Gulpfile
*/

'use strict';

const gulp = require('gulp'),
  pkg = require('./package.json'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  autoprefixer = require('autoprefixer'),
  selector = require('postcss-custom-selectors'),
  nesting = require('postcss-nesting'),
  customMedia = require('postcss-custom-media'),
  cssvariables = require('postcss-css-variables'),
  colorMod = require('postcss-color-mod-function'),
  copyright = `/**
* vishnucss toggle - v${pkg.version}
* https://vishnucss.github.io/vishnu#toggle
*/\r\n`,
  $ = require('gulp-load-plugins')();

/*
* Toggle build task
*/
gulp.task('build', function() {
  let plugins = [
    cssvariables(),
    selector(),
    nesting(),
    customMedia(),
    colorMod(),
    autoprefixer({browsers: ['last 1 version']})
  ];
  return gulp
    .src([
      './src/variables.css',
      './src/customs.css',
      './src/toggle.css'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('vishnu.toggle.css'))
    .pipe(postcss(plugins))
    .pipe($.header(copyright + '\n'))
    .pipe($.size())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

/*
* Minify in build toggle
*/
gulp.task('minify', ['build'], function() {
  let plugins = [
    cssvariables(),
    selector(),
    cssnano(),
    nesting(),
    customMedia(),
    colorMod(),
    autoprefixer({browsers: ['last 1 version']})
  ];
  return gulp
    .src(['./dist/vishnu.toggle.css'])
    .pipe($.sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe($.header(copyright))
    .pipe($.size())
    .pipe(
      $.size({
        gzip: true
      })
    )
    .pipe($.concat('vishnu.toggle.min.css'))
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
