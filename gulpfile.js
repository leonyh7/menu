const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const watch = require('gulp-watch')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const minify = require('gulp-clean-css')

gulp.task('theme', function () {
  return gulp.src('./src/assets/style/themes/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(autoprefixer({
                  browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
                  cascade: false
              }))
             .pipe(rename({
               dirname: '',
               prefix: 'theme-',
               extname: '.css'
             }))
             
             .pipe(gulp.dest('./dist/themes'))
             .pipe(minify())
             .pipe(rename({
               suffix: '.min'
             }))
             .pipe(gulp.dest('./dist/themes'))
})

gulp.task('default', function () {
    gulp.watch('src/assets/style/**/*.scss', ['theme'])
});