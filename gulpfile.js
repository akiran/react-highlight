let gulp = require('gulp');
let sass = require('gulp-ruby-sass');
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

gulp.task('copy', function () {
  gulp.src('./docs/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  return sass(['./docs/**/*.scss'], {loadPath: ['bower_components', 'node_modules']})
    .on('error', function (err) {
      console.error(err.message);
    })
    .pipe(gulp.dest('./build'));
});

gulp.task('server', ['copy', 'sass'], function (callback) {
  let myConfig = require('./webpack.config.js');

  let webpackCompiler = webpack(myConfig, function (err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true
  }).listen(8000, 'localhost', function (err, result) {

  });
});

gulp.task('watch', function () {
  gulp.watch(['./docs/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html'], ['copy']);
});