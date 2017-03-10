var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var pump = require('pump');
var uglify = require('gulp-uglify');

gulp.task('styles', function(){
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('scripts', function (cb) {
  pump([
    gulp.src('js/*.js'),
    uglify(),
    gulp.dest('build')
  ], cb);
});

gulp.task('watch', function(){
  gulp.watch('css/styles.css', ['styles']);
  gulp.watch('js/scripts.js', ['scripts']);
});
