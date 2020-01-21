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
      "./src/alert.css",
      "./src/avatar.css",
      "./src/chips.css",
      "./src/card.css",
      "./src/collapse.css",
      "./src/dialog.css",
      "./src/toggle.css",
      "./src/grid.css",
      "./src/icons.css",
      "./src/utils.css"
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
    cssvariables(),
    selector(),
    cssnano(),
    nesting(),
    customMedia(),
    colorMod(),
    autoprefixer({browsers: ['last 1 version']})
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
