const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function comprimeSass() {
    return gulp.src('./src/styles/*.scss').pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist/styles'));
}
function comprimeImages(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}
function comprimeJs(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.series(comprimeImages,comprimeSass,comprimeJs);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.series(comprimeSass))
}