var gulp =require('gulp');

var sass = require('gulp-sass')

var sourcemaps=require('gulp-sourcemaps');


var browserify = require('browserify');

var watch = require('watchify');

var source = require('vinyl-source-stream');


gulp.task('browserify',function(){
	return browserify('./app/app.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('sass',function(){
	gulp.src('./sass/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'))
});

gulp.task('watch',function(){
	 gulp.watch('app/**/*.js', [browserify])

	  gulp.watch('sass/style.sass', [sass])
});



gulp.task('default',['watch']);