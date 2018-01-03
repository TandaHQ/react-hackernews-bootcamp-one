const Path = require('path');

const Autoprefixer      = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreCSS            = require('precss');
const Webpack           = require('webpack');

//
// Webpack is a javascript application bundling tool. it is used
// to package the applications assets for the web. learn
// more about webpack here https://webpack.js.org
//

const APP_BUILD  = Path.resolve(__dirname, 'build')
const APP_SOURCE = Path.resolve(__dirname, 'source')
const APP_TITLE  = 'Hacker News Reader'


const CSS_LOADER = [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: { modules: true, importLoaders: 1 },
  },
  {
    loader: 'postcss-loader',
    options: { plugins: [Autoprefixer(), PreCSS] },
  },
];


module.exports = {
  devtool: 'inline-source-map',
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
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css|scss)$/, loader: CSS_LOADER },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: APP_TITLE }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
};
