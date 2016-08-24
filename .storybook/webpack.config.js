const path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
        ],
        exclude: path.resolve(__dirname, '../node_modules/')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
