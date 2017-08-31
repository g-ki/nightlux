const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = resolve(__dirname, '..', 'dist');

module.exports = {
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './app/src/index.js'
    ],
    vendor: './app/src/vendor.js'
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      Components: resolve(__dirname, '..', 'app/src/components/'),
      Containers: resolve(__dirname, '..', 'app/src/containers/'),
      Assets: resolve(__dirname, '..', 'app/src/assets/'),
    }
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3000,
    contentBase: distPath,
    publicPath: '/',
    stats: 'minimal',
    proxy: {
      '/api': {
        target: 'http://api:4000/',
        secure: false,
        pathRewrite: { '^/api' : '' },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { 'modules': false }],
            'stage-1',
            'react'
          ],
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]?[hash]'
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'app', 'index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};
