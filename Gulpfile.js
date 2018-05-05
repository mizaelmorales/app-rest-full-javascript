//para requerir gulp 
var gulp = require('gulp');
//para requerir gulp sass
var sass = require('gulp-sass');
//gulp-rename
var rename = require('gulp-rename');

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

gulp.task('default',['styles', 'assets'])