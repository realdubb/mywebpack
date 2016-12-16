var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {

  entry: [
  './app/js/app.js',
  './app/css/app.scss'

  ],
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
        include: path.resolve(__dirname, "app/css")
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
      }
    ],

  },

  plugins: [
      new ExtractTextPlugin("app.css"),
      new HtmlWebpackPlugin({
        template: 'app/index.html'
      }),
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['dist'] }
      })
    ]
};