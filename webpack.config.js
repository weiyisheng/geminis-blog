var path = require('path')
var webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || "development"
const isProd = nodeEnv === 'production'

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, './views/login.ejs'),
    filename: isProd ? "./views/login.ejs" : "./views/login.html",
    //chunks: ["vendor", "login"],
    inject: true
  })
  // new HtmlWebpackPlugin({
  //   template: path.join(__dirname, './views/index.ejs'),
  //   filename: isProd ? "./views/index.ejs" : "./views/index.html",
  //   chunks: ["vendor", "main"],
  //   inject: true
  // })
]

if(isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    })
  )

} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  )
}

module.exports = {
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  context: path.join(__dirname, './client'),
  entry: {
    //main: './js/main.js',
    login: "./js/Login.js",
    //vendor: ['react', 'react-dom', "material-ui"]
  },
  output: {
    path: path.join(__dirname, 'public','dist'),
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    publicPath: isProd ? '/dist/' : '/'
  },
  module: {
    loaders: [{
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
  resolve: {
    alias: {
      Client: path.resolve(__dirname, 'client')
    }
  },
  plugins: plugins,
  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/login/, to: '/views/login.html' },
        { from: /./, to: '/views/index.html' }
      ]
    }
  }
}
