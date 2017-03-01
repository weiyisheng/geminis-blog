
var path = require('path')
var webpack = require('webpack')

var config = {
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][name].[ext]&context=./public'
        ]
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  //Warning: It looks like you're using a minified copy of the development build of React
  //add those plugins:
  plugins:[
   new webpack.DefinePlugin({
     'process.env':{
       'NODE_ENV': JSON.stringify('production')
     }
   }),
   new webpack.optimize.UglifyJsPlugin({
     compress:{
       warnings: true
     }
   })
 ]
};

module.exports = config;
