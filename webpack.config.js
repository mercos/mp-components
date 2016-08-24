var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var nodeModules = path.resolve(__dirname, 'node_modules')
var lib_path = path.resolve(__dirname, 'lib')

module.exports = {
  entry: {
    Button: './src/components/Button/Button.jsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/lib/components',
    publicPath: '/lib/',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react'
  },
  module: {
    loaders: [
      {
        test:   /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
        publicPath: '../',
        exclude: nodeModules
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: nodeModules
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css', {allChunks: true}),
  ]
}
