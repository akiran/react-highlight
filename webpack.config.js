let webpack = require('webpack');
let path = require('path');
let autoprefixer = require('autoprefixer');

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
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.md$/,
        loader: 'raw!markdown'
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer({ browsers: ['last 2 version']})
                ];
              }
            }
          }
        ]
      },
    ],
  },
  resolve : {
    alias: {
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ]
};