"use strict";

var path = require("path");

var config = {
  devtool: "eval-source-map",
  entry: path.join(__dirname, "/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/dist/"),
    publicPath: path.join(__dirname, "/").replace(/\\/g, "/"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader?sourceMap&modules&localIdentName=[local]---[hash:base64:5]", "less-loader?sourceMap"]
      },
      { 
        test: /\.(woff|woff2|jpg|gif|png|svg)$/, 
        loader: `url-loader?limit=${65536}&mimetype=image/[ext]&name=[path][name].[ext]`
      }
    ]
  }
};

module.exports = config;

