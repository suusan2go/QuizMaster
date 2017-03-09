const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    ServerRouter: [
      'babel-polyfill',
      `${__dirname}/client/javascripts/ServerRouter.jsx`,
    ],
  },
  target: 'node',
  output: {
    path: 'hypernova/dist',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        include: /\.modules\.(css|scss)$/,
        loader: 'null-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name]-[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.js.jsx', '.css', '.scss'],
    modules: [
      path.resolve(__dirname, 'client/javascripts'),
      path.resolve(__dirname, 'client'),
      'node_modules',
    ],
  },
};
