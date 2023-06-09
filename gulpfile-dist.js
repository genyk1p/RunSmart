const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const shell = require('gulp-shell');
const exec = require('gulp-exec');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
    gulp.watch("dist/js/*.js").on('change', browserSync.reload);
    gulp.watch("dist/css/*.css").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Задача для выполнения npx webpack
gulp.task('webpack', function() {
    return gulp.src('.')
      .pipe(exec('npx webpack'))
      .pipe(exec.reporter());
  });

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch(["src/js/bundle.js", "src/js/bundle.js.map"]).on('change', gulp.parallel('scripts'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src(["src/js/bundle.js", "src/js/bundle.js.map"])
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('json-server', shell.task('json-server --watch db.json --port 4000'));

gulp.task('default', gulp.parallel('watch', 'webpack', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images', 'json-server'));