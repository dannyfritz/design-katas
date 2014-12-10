var gulp = require('gulp');
var debug = require('gulp-debug');
var browserify = require('browserify');
var hbsfy = require('hbsfy');
var transform = require('vinyl-transform');
var mainBowerFiles = require('main-bower-files');
var less = require('gulp-less');

gulp.task('html', function () {
	gulp
		.src(['src/html/*.html', 'src/index.html'])
		.pipe(gulp.dest('dist/'));
});

gulp.task('bower', function () {
	return gulp
		.src(mainBowerFiles(), {base: './bower_components'})
		.pipe(gulp.dest('./dist/libs/'))
});

gulp.task('scripts', function () {
	var browserified = transform(function(filename) {
		var b = browserify(filename);
		b.transform(hbsfy);
		return b.bundle();
	});
	return gulp
		.src(['./src/scripts/*.js'])
		.pipe(browserified)
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles', function () {
	return gulp
		.src(['./src/styles/*.less'])
		.pipe(less())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['html', 'bower', 'scripts', 'styles']);
