const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const browser_sync = require('browser-sync').create();
const uglifyjs = require('uglify-js');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

//create sass compilation  task 
gulp.task('sass',function () {
  return  gulp.src('./sass/**/*.scss')
  .pipe(gulp_sass().on('error' ,sass.logError))
  .pipe(gulp.dest('./src/css'))
  .pipe(browser_sync.stream());
});

//create move  js  files
gulp.task('movejs',function () {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest('./js/'));
})

//min js task
gulp.task('minjs',function () {
  return gulp.src('./js/*.js')
  .pipe(uglifyjs.minify())
  .pipe(gulp.dest('./src/js'));  
})

//watch filres [scss,html] if change reload browser