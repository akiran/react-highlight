var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('copy', function () {
  gulp.src('./docs/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    return gulp.src('./docs/**/*.scss')
      .pipe(sass({ loadPath : ['bower_components', 'node_modules'],}).on('error', sass.logError))
      .pipe(gulp.dest('./build'));
});

gulp.task('server', ['copy', 'sass'], function (callback) {
  var myConfig = require('./webpack.config.js');

  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, 'localhost', function (err, result) {
    
  });
});

gulp.task('watch', function () {
  gulp.watch(['./docs/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html'], ['copy']);
});