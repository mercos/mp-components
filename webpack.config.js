var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    Button: './src/components/Button/Button.jsx',
    CategoryNode: './src/components/CategoryNode/CategoryNode.jsx',
    InlineAlert: ['./src/components/InlineAlert/InlineAlert.jsx'],
    Input: './src/components/Input/Input.jsx',
    Link: ['./src/components/Link/Link.jsx'],
    Node: ['./src/components/Node/Node.jsx'],
    NodeOptions: ['./src/components/NodeOptions/NodeOptions.jsx'],
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
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css', {allChunks: true}),
  ]
}
