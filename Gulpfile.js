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
//requerir wachify despues de crear el scritp de ejecucion en package json
var watchify = require('watchify')

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


function compile(watch){
	var bundle =watchify(browserify('./src/index.js'));
	function rebundle() {
		bundle
		.transform(babel)
		.bundle()
		.on('error',function(err){console.log(err);this.emit('end')})
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
	}
	if (watch) {
		bundle.on('update', function(){
			console.log('--> Compilando..')
			rebundle();
		})
	}
	rebundle();
}

gulp.task('build', function () {
	return compile();
});

gulp.task('watch', function () {
	return compile(true);
});

gulp.task('default',['styles', 'assets','build']);