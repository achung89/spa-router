var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
gulp.task('vulcanize', function() {
  gulp.src('spa-route.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist/spa-route'));
  gulp.src('spa-link.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
  }))
  .pipe(gulp.dest('dist/spa-link'));
  gulp.src('spa-index.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
  }))
  .pipe(gulp.dest('dist/spa-index'));
});
gulp.task('default', ['vulcanize']);