const gulp = require('gulp');

gulp.task('html', function() {
    const htmlmin = require('gulp-html-minifier2');
    gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');
    const cssnano = require('cssnano');
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
    ];
    gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    const webpack = require('gulp-webpack');
    gulp.src('./src/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['html', 'css', 'js']);
