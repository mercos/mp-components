var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  entry: {
    Button: ['./src/components/Button/Button.jsx'],
    CategoryNode: './src/components/CategoryNode/CategoryNode.jsx',
    CategoryForm: ['./src/components/CategoryForm/CategoryForm.jsx'],
    InlineAlert: ['./src/components/InlineAlert/InlineAlert.jsx'],
    Input: ['./src/components/Input/Input.jsx'],
    Link: ['./src/components/Link/Link.jsx'],
    Node: ['./src/components/Node/Node.jsx'],
    NodeOptions: ['./src/components/NodeOptions/NodeOptions.jsx'],
    VerticalCard: './src/components/VerticalCard/VerticalCard.jsx',
    VerticalCard: './src/components/HorizontalCard/HorizontalCard.jsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/lib/components',
    publicPath: '/lib/',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
      publicPath: '../',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]
}
