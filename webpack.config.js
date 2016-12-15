var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

  entry: './app/js/app.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
                presets: ['es2015']
              }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "app/css")
      }
    ],

  },

  plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.html'
      })
    ]
};