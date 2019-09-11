const { dest, series, src, watch } = require('gulp'),
  connect = require('gulp-connect'),
  htmlmin = require('gulp-htmlmin'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  argv = require('yargs').argv;

const config = require('./webpack.config.js');

const inputFolder = './src/',
  outputFolder = './docs/',
  tsEntry = inputFolder + 'index.ts',
  tsSource = inputFolder + '**/**/*.ts',
  sassSource = inputFolder + '**/**/*.scss',
  htmlEntry = inputFolder + 'index.html',
  htmlSource = inputFolder + '**/**/*.html',
  htmlWatch = [htmlSource, "!" + htmlEntry];

function bundle() {
  const isProd = argv.prod !== undefined;
  config.mode = isProd ? 'production' : 'development';
  config.devtool = isProd ? 'cheap-module-source-map' : 'inline-source-map';
  return src(tsEntry)
    .pipe(webpackStream(config), webpack)
    .pipe(dest(outputFolder))
    .pipe(connect.reload());
}

function template() {
  return src(htmlEntry)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(outputFolder))
    .pipe(connect.reload());
}

function reload() {
  connect.server({
    root: outputFolder,
    livereload: true
  });
}

function monitor() {
  watch([tsSource, sassSource, htmlWatch], ['bundle']);
  watch(htmlEntry, ['html']);
}

exports.build = series(bundle, template);
exports.serve = series(reload, monitor);
