var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  // 入口
  entry: [
    'webpack-dev-server/client?http://localhost',
    'webpack/hot/only-dev-server',
    __dirname + '/src/scripts/app.js'
  ],

  // 出口
  output: {
    path: __dirname + '/prd',
    // filename: '[name]-[hash].js'
    filename: 'bundle.js'
  },

  // sourcemap
  devtool: 'source-map',

  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modues/,
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modues/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
      }
    ]
  },

  vue: {
      loaders: {
          js: 'babel'
      }
  },

  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css', {
      allChunks: true
    }),

    new webpack.HotModuleReplacementPlugin()
  ]

}
