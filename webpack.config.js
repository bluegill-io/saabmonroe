const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./app/js/application.js', './app/stylesheets/application.sass'],
  resolve: {
    extensions: ['.es6', '.js'],
    modules: [
      path.join(__dirname),
      'app/js',
      'app/stylesheets',
      'app/images',
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test   : /\.(png|jpg)$/,
        loader : 'url-loader?limit=8192'
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: './app',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
