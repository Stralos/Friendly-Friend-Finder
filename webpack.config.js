'use strict';

var path = require('path');

var config = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader?sourceMap&modules&localIdentName=[local]---[hash:base64:5]', 'less-loader?sourceMap']
      }
    ]
  }
};

module.exports = config;

