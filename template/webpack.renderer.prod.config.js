'use strict';

const webpack      = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  plugins: [
    new BabiliPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
