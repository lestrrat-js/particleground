const webpack = require("webpack");
const path = require('path');

module.exports = {
  entry: "./jquery.particleground.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "jquery.particleground.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};