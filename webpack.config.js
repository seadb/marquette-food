module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    __dirname + '/client/app/index.js'
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
      loader: 'style-loader!css-loader?modules&camelCase&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
    }]
  },
  devServer: {
    inline: true
  }
};
