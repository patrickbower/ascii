// css
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
  gulp.watch('css/styles.css', ['styles']);
});

// js
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    var bundler = browserify('./js/scripts.js');
    bundler.transform("babelify", {presets: ["es2015"]});

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('build/scripts.js'))
        .pipe(buffer())
        .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(gulp.dest('build'));
});
