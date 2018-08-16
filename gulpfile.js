const gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  connect = require('gulp-connect'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  argv = require('yargs').argv;

const inputFolder = './src/',
  outputFolder = './docs/',
  tsSource = inputFolder + '**/**/*.ts',
  sassSource = inputFolder + '**/**/*.scss',
  htmlSource = inputFolder + '**/**/*.html',
  htmlEntry = inputFolder + 'index.html',
  htmlWatch = [htmlSource, "!" + htmlEntry],
  tsEntry = inputFolder + 'index.ts';

gulp.task('bundle', () => {
  var isProd = argv.prod !== undefined;
  var config = require('./webpack.config.js');
  config.mode = isProd ? 'production' : 'development';
  config.devtool = isProd ? 'cheap-module-source-map' : 'inline-source-map';
  return gulp.src(tsEntry)
    .pipe(webpackStream(config), webpack)
    .pipe(gulp.dest(outputFolder))
    .pipe(connect.reload());
});

gulp.task('html', () => {
  return gulp.src(htmlEntry)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(outputFolder))
    .pipe(connect.reload());
});

gulp.task('connect', () => {
  connect.server({
    root: outputFolder,
    livereload: true
  });
});

gulp.task('watch', () => {
  gulp.watch([tsSource, sassSource, htmlWatch], ['bundle']);
  gulp.watch(htmlEntry, ['html']);
});

gulp.task('build', ['bundle', 'html']);
gulp.task('serve', ['connect', 'watch']);
