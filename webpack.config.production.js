var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: false,
  devtool: 'cheap-module-source-map',
  entry: './src/App',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    path: 'dist/assets/',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.csv?$/,
        loader: 'dsv-loader'
      }
    ]
  }
};
