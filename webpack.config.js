var path = require('path');

module.exports = {
  entry: "./app/App.js",
  output: {
    path: __dirname,
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
    ]
  }
}
