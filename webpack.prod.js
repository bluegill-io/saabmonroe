const S3Plugin = require('webpack-s3-plugin')
const webpack = require('webpack');
const baseConfig = require('./webpack.config.js');
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VERSION  = require('./package.json').version;
const fileName = 'saabmonroe-' + VERSION + '.min.js';

const config = Object.create(baseConfig);

config.plugins = [
  new UglifyJSPlugin({sourceMap: true}),
  new S3Plugin({
    s3Options: {
      region: 'us-east-1'
    },
    s3UploadOptions: {
      Bucket: 'saabmonroe-assets'
    }
  }),
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
  path: path.resolve(__dirname, "dist"),
  filename: fileName,
  libraryTarget: 'umd'
},

module.exports = config;
