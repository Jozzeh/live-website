const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename');

gulp.task('watch', function(){
  gulp.watch("public/dev-assets/css/*.css", function() {
    return gulp.src('public/dev-assets/css/*.css')
      .pipe(concatCss("main.css"))
      .pipe(cleanCSS())
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('public/assets/css/'));
  });
});

function print(cb) {
  // body omitted
  gulp.src('public/dev-assets/print/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('public/assets/css/'));
  cb();
}

function bundle(cb) {
  // body omitted
  gulp.src('public/dev-assets/css/*.css')
    .pipe(concatCss("main.css"))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('public/assets/css/'));
  cb();
}

exports.default = gulp.series(bundle, print);