/**
 * Created by Gaplo917 on 16/7/2016.
 */
const browserify = require('browserify');
const babelify = require('babelify');
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const run = require('gulp-run');
const webserver = require('gulp-webserver')
const stripDebug = require('gulp-strip-debug');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename')

gulp.task('browserify', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/es6/app.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [
        babelify.configure({
          presets: ["es2015"]
        })
    ]
  });

  return b.bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./www/js/'));
});

gulp.task('compress', () => {
  gulp.src('./www/js/app.js')
      .pipe(stripDebug()) // remove debug log
      .pipe(uglify({mangle: false}))
      .pipe(rename({suffix: '.min'}))
      .on('error', gutil.log)
      .pipe(gulp.dest('./www/js/'))
})

gulp.task('release',['browserify','sass'])

gulp.task('sass', function(done) {
  gulp.src(['./src/scss/app.scss'])
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('./www/css/'))
      .on('end', done);
})

gulp.task('run', () => {
  gulp.watch(['src/es6/**/*.js'], ['browserify'])
  gulp.watch(['./src/scss/**/*'], ['sass'])

  return gulp.src('./www')
      .pipe(webserver({
        host: '0.0.0.0',
        port: 3000,
        livereload: true,
        open: true,
      }));
})