'use strict';

const webpack = require('webpack');

module.exports = {
  output: {
    filename: 'xslet.platform.min.js',
    library: ['xslet', 'platform'],
    libraryTarget: 'var',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    })
  ],
};
