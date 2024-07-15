'use strict'

const gulp = require('gulp')
const browser = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

gulp.task('server', function () {
	browser.init({
		server: {
			baseDir: 'src',
		},
	})

	gulp.watch('src/sass/**/*.+(scss|sass)', gulp.parallel('styles'))
	gulp.watch('src/*.html').on('change', browser.reload)
})

gulp.task('styles', function () {
	return gulp
		.src('src/sass/**/*.+(scss|sass)')
		.pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('src/css'))
		.pipe(browser.stream())
})

gulp.task('default', gulp.parallel('server', 'styles'))
