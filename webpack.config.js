var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    'docs.js': './docs/index'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loaders: ['babel']},
      // {
      //   test: /\.scss$/,
      //   loader: "style!css!postcss!sass?outputStyle=expanded&includePaths[]=" + 
      //       (path.resolve(__dirname, './node_modules')) + "&includePaths[]=" + (path.resolve(__dirname, './bower_components'))
      // },
      { test: /\.md$/, loader: "raw!markdown" },
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
  resolve : {
    alias: {

    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ]
};