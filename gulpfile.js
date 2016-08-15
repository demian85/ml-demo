const gulp = require('gulp');

gulp.task('html', function() {
    const htmlmin = require('gulp-html-minifier2');
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(__dirname));
});

gulp.task('css', function() {
    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');
    const cssnano = require('cssnano');
    const concatCss = require('gulp-concat-css');
    const processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(concatCss("app.bundle.css"))
        .pipe(postcss(processors))
        .pipe(gulp.dest(__dirname));
});

gulp.task('js', function() {
    const webpack = require('gulp-webpack');
    return gulp.src('./src/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(__dirname));
});

gulp.task('default', ['html', 'css', 'js']);
