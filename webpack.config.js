var HtmlWebpackPlugin = require('html-webpack-plugin');

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
      }
    ],

  },

  plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.html'
      })
    ]
};