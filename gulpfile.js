'use strict'

var gulp = require('gulp'),
    pkg = require('./package.json'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    copyright = `/**
    * vishnucss v${pkg.version}
    * https://vishnucss.github.io
    */\r\n`,
    $ = require('gulp-load-plugins')();

gulp.task('build', function () {
  return gulp.src([
      './src/variables.css', 
      './src/reset.css', 
      './src/typography.css', 
      './src/links.css', 
      './src/buttons.css', 
      './src/forms.css', 
      './src/grid.css', 
      './src/lists.css', 
      './src/tables.css', 
      './src/images.css', 
      './src/utils.css', 
      './src/misc.css'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('vishnu.css'))
    .pipe($.header(copyright + '\n'))
    .pipe($.size())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('minify', ['build'], function() {
  var plugins = [
    cssnano()
  ]
  return gulp.src(['./dist/vishnu.css'])
    .pipe($.sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe($.header(copyright))
    .pipe($.size())
    .pipe($.size({
      gzip: true
    }))
    .pipe($.concat('vishnu.min.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('watch', function() {
  gulp.watch(['src/*.css', 'postcss.config.js'], ['default'])
})

gulp.task('default', ['build', 'minify'])
