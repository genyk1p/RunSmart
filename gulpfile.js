const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const replace = require('gulp-replace');
const path = require('path');
const exec = require('gulp-exec');
const shell = require('gulp-shell');

gulp.task('server', function() {
    browserSync.init({
      server: {
        baseDir: "src"
      }
    });
    
    gulp.watch("src/*.html").on('change', browserSync.reload);
  });
  
gulp.task('replace', function() {
    gulp.watch('src/sass/**/*.sass').on('change', function(filePath) {
    gulp.src(path.resolve(filePath))
        .pipe(replace(';', ''))
        .pipe(gulp.dest(function(file) {
        return path.dirname(file.path); // сохранить в исходной папке файла
        }))
        .pipe(gulp.src("src/sass/**/*.+(scss|sass)"))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
    });
});
// Задача для выполнения npx webpack
gulp.task('webpack', function() {
  return gulp.src('.')
    .pipe(exec('npx webpack'))
    .pipe(exec.reporter());
});
gulp.task('json-server', shell.task('json-server --watch db.json --port 4000'));

gulp.task('default', gulp.parallel('json-server', 'server', 'replace', 'webpack'));