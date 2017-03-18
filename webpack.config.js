const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      `${__dirname}/client/javascripts/AppRouter.jsx`,
    ],
  },
  output: {
    path: `${__dirname}/public/assets`,
    filename: isProduction ? '[name]-[hash].js' : '[name].js',
    publicPath: isProduction ? `https://${process.env.APP_HOST}/assets` : 'http://localhost:3500/assets/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ManifestPlugin({
      fileName: 'webpack-manifest.json',
    }),
    new FlowBabelWebpackPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProduction,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        include: /\.modules\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'client/stylesheets')],
              },
            },
          ],
        }),
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.modules\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'client/stylesheets')],
              },
            },
          ],
        }),
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=image/svg+xml',
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
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
  devServer: {
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': 'true' },
  },
};
