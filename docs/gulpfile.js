/* 
* Config Gulpfile
*/

'use strict';

const gulp = require('gulp'),
  symdest = require('gulp-symdest'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create(); // create a browser sync instance.

/* 
* Dev to docs web browser
*/
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

/* 
* Watch tasks
*/
gulp.task('watch', function() {
  gulp.watch('./src/*.html').on('change', browserSync.reload);
});

/* 
* Running commands to development and build
*/
gulp.task('serve', ['browserSync', 'watch']);