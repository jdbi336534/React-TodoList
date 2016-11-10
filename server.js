var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/prd',
  inline: true,
  hot: true,
  historyApiFallback: true,
  // proxy: {
  //   '/rest/*': {
  //     target: 'http://localhost:8888',
  //     secure: true,
  //     pathRewrite: {
  //       '^/rest': ''
  //     }
  //   }
  // }
})
.listen(80, 'localhost', function(err, result){
  if (err) {
    console.log(err);
  } else {
    console.log('Listening at localhost:80');
  }
});
