'use strict';

var path = require('path');
var _ = require('lodash');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var combiner = require('stream-combiner2');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });
var eslint = require('gulp-eslint');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var nodeResolve = require('resolve');
var to5ify = require('6to5ify');
var partialify = require('partialify/custom');

gulp.task('default', ['development']);
gulp.task('development',
	['clean', 'javascript:vendor', 'javascript:app', 'css', 'html']
);
//TODO: gulp task for distribution

function runBatchTasks(tasks)
{
	return batch(function (events, done) {
		events
			.on('error', done)
			.on('end', done)
			.on('close', done)
			.on('data', function (){
				gulp.start(tasks);
			});
	});
}

gulp.task('watch', function () {
	gulp.start(['default']);
	watch('src/scripts/**', runBatchTasks('javascript:app'));
	watch('package.json', runBatchTasks('javascript:vendor'));
	watch('src/styles/**', runBatchTasks('css'));
	watch('src/index.html', runBatchTasks('html'));
	watch('tests/**', runBatchTasks('test:javascript'));
});

gulp.task('clean', function (done) {
	del(['dist/**', '!dist'], done);
});

var getBundleName = function () {
	// var version = require('./package.json').version;
	// var name = require('./package.json').name;
	// return version + '.' + name + '.' + 'min';
	return 'bundle';
};

gulp.task('javascript:vendor', function () {
	var bundler = browserify({
		noParse: ['jquery']
	});
	var npmPackage = require('./package.json');
	var bundle = function () {
		_(npmPackage.dependencies)
			.keys()
			.each(function (moduleName) {
				bundler.require(nodeResolve.sync(moduleName), { expose: moduleName });
			})
			.value();
		return bundler
				.bundle()
				.on('error', function (error) {
					gulpUtil.log(gulpUtil.colors.red('Browserify Error:'), error.message);
				})
				.pipe(source('vendor.js'))
				.pipe(buffer())
				.pipe(gulp.dest('./dist'));
	};
	return bundle();
});

gulp.task('javascript:app', ['lint:javascript', 'test:javascript'], function (done) {
	var bundler = browserify({
		entries: ['./src/scripts/'],
		debug: true
	});
	var npmPackage = require('./package.json');
	var bundle = function () {
		_(npmPackage.dependencies)
			.keys()
			.each(function (moduleName) {
				bundler.external(moduleName);
			})
			.value();
		return bundler
				.transform(to5ify)
				.transform(partialify.alsoAllow(['vue']))
				.bundle()
				.on('error', function (error) {
					gulpUtil.log(gulpUtil.colors.red('Browserify Error:'), error.message);
					done(error);
				})
				.pipe(source(getBundleName() + '.js'))
				.pipe(buffer())
				.pipe(sourcemaps.init({loadMaps: true}))
				.pipe(sourcemaps.write('./'))
				.pipe(gulp.dest('./dist'));
	};
	return bundle();
});

gulp.task('css', function () {
	var combined = combiner.obj([
		gulp.src('./src/styles/main.less'),
		sourcemaps.init(),
		less({
			paths: [ path.join(__dirname, 'src', 'styles') ],
			plugins: [autoprefix]
		}),
		sourcemaps.write('./'),
		gulp.dest('./dist')
	]);
	return combined;
})

gulp.task('html', function () {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'));
})

gulp.task('lint:javascript', function () {
	return gulp.src(['src/scripts/**/*.js'])
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failOnError());
});

gulp.task('test:javascript', function (done) {
	done();
});
