const path = require('path');

module.exports = {
  mode: 'development',

  entry: './frontend/main.js',

  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
    publicPath: '/assets/js/'
  },

  module: {
    rules: [
      {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
},

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../img/[name][ext]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  devtool: 'source-map'
};
