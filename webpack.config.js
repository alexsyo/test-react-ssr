const path = require('path');
const debug = process.env.NODE_ENV != "production";
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: debug ? 'source-map' : null,
  entry: './client/src/start.js',
  output: {
    filename: 'bundle.js',
    path: './client/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"  // without .babelrc --> ?presets[]=es2015,presets[]=react,preset[]=stage-3"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!autoprefixer?browsers=last 4 version!sass')
      },
      {
        test: /\.html/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  resolve: {
    root: path.resolve('./client/src')
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
