const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.m?js$/,
      type: 'javascript/auto'
      },]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map'
};