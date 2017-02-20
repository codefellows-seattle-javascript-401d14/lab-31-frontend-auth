'use strict';

require('dotenv').load();

const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new ExtractText('bundle.css'),
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(process.env.API_URL),
    }),
  ],
  module: {
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
        test:/\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
