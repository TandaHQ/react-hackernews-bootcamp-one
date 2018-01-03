const Path = require('path');

const Autoprefixer      = require('autoprefixer');
const PreCSS            = require('precss');
const Webpack           = require('webpack');

//
// Webpack is a javascript application bundling tool. it is used
// to package the applications assets for the web. learn
// more about webpack here https://webpack.js.org
//

const APP_BUILD  = Path.resolve(__dirname, 'dist')
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
    contentBase: APP_BUILD,
    historyApiFallback: true,
    host: "0.0.0.0",
    open: true,
  },
  entry: APP_SOURCE,
  output: {
    filename: 'bundle.js',
    path: APP_BUILD,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css|scss)$/, loader: CSS_LOADER },
    ],
  },
  plugins: [
    new Webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
};
