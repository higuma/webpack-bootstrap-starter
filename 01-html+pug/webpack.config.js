const HtmlWebpackPlugin = require('html-webpack-plugin'),
      WWW_PATH = require('path').join(__dirname, 'www');

module.exports = {
  mode: 'development',

  entry: './src/js/index.js',

  output: {
    path: WWW_PATH,
    filename: './js/main.js'
  },

  module: {
    rules: [
      { test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: { pretty: true }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: 'index.html'
    })
  ],

  devServer: {
    contentBase: WWW_PATH,
    port: 5555
  }
};
