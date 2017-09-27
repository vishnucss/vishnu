'use strict'

const gulp = require('gulp')
, pkg = require('./package.json')
, postcss = require('gulp-postcss')
, cssnano = require('cssnano')
, cssnext = require('postcss-cssnext')
, selector = require('postcss-custom-selectors')
, nesting = require('postcss-nesting')
, customMedia = require("postcss-custom-media")
, copyright = `/**
* vishnucss v${pkg.version}
* ${pkg.description}
* https://vishnucss.github.io/vishnu
*/\r\n`
, $ = require('gulp-load-plugins')()
, browserSync = require('browser-sync').create(); // create a browser sync instance.

gulp.task('build', function () {
  let plugins = [
    selector(),
    nesting(),
    customMedia(),
    cssnext({browsers: ['last 1 version']})
  ]
  return gulp.src([
      './src/variables.css', 
      './src/reset.css', 
      './src/typography.css', 
      './src/links.css', 
      './src/buttons.css', 
      './src/forms.css', 
      './src/lists.css', 
      './src/tables.css', 
      './src/images.css', 
      './src/utils.css', 
      './src/misc.css',
      './src/grid.css', 
      './src/responsive.css'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('vishnu.css'))
    .pipe(postcss(plugins))
    .pipe($.header(copyright + '\n'))
    .pipe($.size())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('minify', ['build'], function() {
  let plugins = [
    selector(),
    cssnano(),
    nesting(),
    customMedia(),
    cssnext({browsers: ['last 1 version']})
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
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./docs"
    }
  })
})

gulp.task('watch', function() {
  gulp.watch(['src/*.css'], ['default'])
  gulp.watch("./docs/*.html").on('change', browserSync.reload)
})

gulp.task('serve', ['browserSync', 'watch'])
gulp.task('default', ['build', 'minify'])
