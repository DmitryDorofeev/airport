var gulp = require('gulp'),
	stylus = require('gulp-stylus');

gulp.task('stylus', function () {
	gulp.src('./styles/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'))
});

gulp.task('default', ['stylus'], function () {
	gulp.watch('./styles/*', ['stylus'])
});