import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import startApp from './startApp'

const compiler = webpack({
  entry: path.resolve(__dirname, 'client', 'js', 'main.js'),
  resolve: {
    alias: {
      Client: path.resolve(__dirname, 'client')
    }
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][name].[ext]&context=./public'
        ]
      }, {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  output: {filename: 'devBundle.js', path:'/', publicPath: "/"},
})

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: {colors: true}
})



startApp(app)
