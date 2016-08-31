const gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('default', () => {
    browserSync.init({
      server: './'
    });
    gulp.watch('./**/*.html').on('change', browserSync.reload);
  }
);
