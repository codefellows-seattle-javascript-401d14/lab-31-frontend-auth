'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').load();

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/app/entry.js`,
  output : {
    path: `${__dirname}/build`,
    filename:'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(process.env.API_URL),
    }),
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new ExtractText('bundle.css'),
  ],
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
