module.exports = {
  entry: [
    __dirname + '/client/index.js'
  ],
  output: {
      path: __dirname + '/public',
      publicPath: __dirname + '/public',
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, 
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    inline: true
  }
};
