//para requerir gulp 
var gulp = require('gulp');
//para requerir gulp sass
var sass = require('gulp-sass');
//gulp-rename
var rename = require('gulp-rename');
//requerir babel para poder usar el ultimo ecmascript
var babel = require('babelify');
//requerimos el browsify como emsanmblador
var browserify = require('browserify');
//para que gulp reciba el bundle
var source = require('vinyl-source-stream');
gulp.task('styles', function(){
    gulp
        .src('index.scss')
        .pipe(sass())//preprocesador
        .pipe(rename('app.css'))//renombra
        .pipe(gulp.dest('public'));
})

gulp.task('assets', function (){
    gulp
        .src('assets/*')//mover todos los archivos
        .pipe(gulp.dest('public'));
})

gulp.task('scripts', function () {
    browserify('./src/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
})

gulp.task('default',['styles', 'assets','scripts']);