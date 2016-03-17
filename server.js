var env = {
  production: process.env.NODE_ENV === 'production'
};

if (env.production === false) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config.development');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(8000, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Webpack dev server started at http://localhost:8000/webpack-dev-server/');
  });
}
