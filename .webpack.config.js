'use strict';

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    filename: 'xslet.platform.min.js',
    library: ['xslet', 'platform'],
    libraryTarget: 'var',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
};
