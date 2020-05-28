const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat'); // склейка файлов
const del = require('del'); // удаление ненужных файлов
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');

function fonts(done) {
  gulp
    .src('./src/fonts/*{ttf,woff,woff2,svg,eot}')
    .pipe(gulp.dest('./build/fonts/'));
  done();
}

function styles() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(
      sass
        .sync({
          outputStyle: 'compressed'
        })
        .on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function compress(done) {
  gulp
    .src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
  done();
}

function scripts() {
  return gulp
    .src('./src/js/*.js')
    .pipe(concat('custom.js'))
    .pipe(minify())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

function clean() {
  return del(['build/*']);
}

function svg_sprite() {
  return gulp
    .src('./src/svg/*.svg') // svg files for sprite
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg' //sprite file name
          }
        }
      })
    )
    .pipe(gulp.dest('./build/svg/'));
}

// watch
function watch() {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./src/scss/**/*.scss', styles); // следить за scss
  gulp.watch('./src/js/**/*.js', scripts); // следить за js
  gulp.watch('./src/images/*.{jpg,jpeg,png}', compress); // следить за картинками
  gulp.watch('./src/svg/*.svg', svg_sprite); // следить за svg
  gulp.watch('./build/images/*.{jpg,jpeg,png}', browserSync.reload); // следить за картинками
  gulp.watch('./*.html').on('change', browserSync.reload); // следить за изменением html
}

gulp.task('styles', styles);
gulp.task('fonts', fonts);
gulp.task('scripts', scripts);
gulp.task('clean', clean);
gulp.task('compress', compress);
gulp.task('watch', watch);
gulp.task('svg', svg_sprite);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, fonts))); // последовательное выполнение функций
gulp.task('dev', gulp.series('build', 'watch'));
