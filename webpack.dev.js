const webpack = require('webpack');
const baseConfig = require('./webpack.config.js');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = Object.create(baseConfig);
config.devtool = 'eval-source-map';
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
  }),
  new ExtractTextPlugin({
    filename: 'bundle.css',
    allChunks: true,
  })
];

config.output = {
  path: path.resolve(__dirname, 'public'),
  filename: 'bundle.js'
},

module.exports = config;
