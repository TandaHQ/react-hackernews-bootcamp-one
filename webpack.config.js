const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');


const APP_BUILD  = Path.resolve(__dirname, 'build')
const APP_SOURCE = Path.resolve(__dirname, 'source')
const APP_TITLE  = 'Hacker News Reader'

module.exports = {
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    open: true,
  },
  entry: APP_SOURCE,
  output: {
    filename: '[name].bundle.js',
    path: APP_BUILD,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [

    new HtmlWebpackPlugin({ title: APP_TITLE }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
};
