/*
* Config Gulpfile
*/

'use strict';

const gulp = require('gulp'),
  pkg = require('./package.json'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  selector = require('postcss-custom-selectors'),
  nesting = require('postcss-nesting'),
  customMedia = require('postcss-custom-media'),
  cssvariables = require('postcss-css-variables'),
  colorMod = require('postcss-color-mod-function'),
  copyright = `/**
* vishnucss grid - v${pkg.version}
* https://vishnucss.github.io/vishnu#grid
*/\r\n`,
  $ = require('gulp-load-plugins')();

/*
* Grid build task
*/
gulp.task('build', () => {
  let plugins = [
    cssvariables(),
    selector(),
    nesting(),
    customMedia(),
    colorMod()
  ];
  return gulp
    .src([
      './src/custom.css',
      './src/grid.css'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('vishnu.grid.css'))
    .pipe(postcss(plugins))
    .pipe($.header(copyright + '\n'))
    .pipe($.size())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

/*
* Minify in build grid
*/
gulp.task('minify', ['build'], () => {
  let plugins = [
    cssvariables(),
    selector(),
    cssnano(),
    nesting(),
    customMedia(),
    colorMod()
  ];
  return gulp
    .src(['./dist/vishnu.grid.css'])
    .pipe($.sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe($.header(copyright))
    .pipe($.size())
    .pipe(
      $.size({
        gzip: true
      })
    )
    .pipe($.concat('vishnu.grid.min.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
});

/*
* Watch tasks
*/
gulp.task('watch', () => {
  gulp.watch(['src/*.css'], ['default']);
});

/*
* Running commands to development and build
*/
gulp.task('default', ['build', 'minify']);
