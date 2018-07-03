var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  hash: true,
  filename: 'index.html',
  inject: 'body'
});

var HotReloader = new webpack.HotModuleReplacementPlugin();

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/index.js'
  ],
  output: {
    path: 'dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: __dirname + '/app',
        exclude: /(node_modules|bower_compontents)/
      },
      {
        loader: 'babel-loader',
        exclude: /(node_modules|bower_compontents)/,
        query: {
            presets: ['es2015', 'es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins: [HTMLWebpackPluginConfig, HotReloader],
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true,
  }
};
