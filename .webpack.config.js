'use strict';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    filename: 'xslet.platform.min.js',
    library: ['xslet', 'platform'],
    libraryTarget: 'var',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        compress: { warnings: false },
        output: { comments: false },
      },
      sourceMap: true,
    }),
  ],
};
