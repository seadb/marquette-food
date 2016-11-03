module.exports = {
  entry: [
    __dirname + '/client/app.js'
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
    },
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
    }]
  },
  devServer: {
    inline: true
  }
};
