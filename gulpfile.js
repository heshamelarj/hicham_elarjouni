var gulp = require('gulp');
var gulp_sass = require('gulp-sass');
var browser_sync = require('browser-sync').create();
var uglifyjs = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var gh_pages = require('gulp-gh-pages');
var clean = require('gulp-clean');
var run_sequence = require('run-sequence');

// move  js  files
gulp.task('movejs',function () {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js','./src/js/navbar-fixed.js'])
  .pipe(gulp.dest('./src/js/'))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(browser_sync.stream());
})
//move fonts
gulp.task('movefonts',function(){
  return gulp.src('./src/fonts/*')
  .pipe(gulp.dest('./dist/fonts/'));
})

//html files 
gulp.task('htmlmin',function(){
  return gulp.src('./*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('./dist/'));
})
//min js task
gulp.task('minjs',function () {
  return gulp.src(['./src/js/app.js'])
  .pipe(uglifyjs())
  .pipe(gulp.dest('./dist/js/'));  
})
//create sass compilation  task 
gulp.task('sass', function () {
  return gulp.src('./src/scss/main/styles.scss')
    .pipe(gulp_sass().on('error', gulp_sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browser_sync.stream());
});
//watch filres [scss,html] if change reload browser
gulp.task('serve',['sass'],function () {
  browser_sync.init({
    server : "./src"
  });
  gulp.watch("./src/scss/main/styles.scss",['sass']);
  gulp.watch('./*.html').on('change',browser_sync.reload);  
})

//minify images 
gulp.task('minimg',function(){
  return gulp.src('./src/img/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('./src/img/'));
})
//move images 
gulp.task('moveimg',function(){
  return gulp.src('./src/img/*')
  .pipe(gulp.dest('./dist/img/'));
})
//clean dist folder
gulp.task('clean',function(){
  return gulp.src(['./dist/js/*.js','./dist/css/*.css','./dist/fonts/*.*','./dist/img/*.*','./dist/*.html'],{read : false}) //make cleaning the folder mush faster
  .pipe(clean());
})
//publish to gh-pages
gulp.task('deploy',function(){
  return gulp.src('./dist/**/*')
  .pipe(gh_pages());
})

//default task 
// gulp.task('default', ['clean', 'movejs', 'movefonts', 'minimg', 'moveimg', 'htmlmin', 'minjs', 'serve'])
gulp.task('default', function(){
 
 run_sequence ('clean','movejs','movefonts','minimg','moveimg','htmlmin','minjs','serve');

});