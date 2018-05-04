const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
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
      { test: /.pug$/,
        use: {
          loader: 'pug-loader',
          options: { pretty: true }
        }
      },
      { test: /.scss$/,
        use: ExtractTextPlugin.extract([
          { loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2  /*postcss+sass*/ }
          },
          { loader: 'postcss-loader',
            options: { sourceMap: true, plugins: [require('autoprefixer')] }
          },
          { loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ])
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('css/style.css')
  ],

  devServer: {
    contentBase: WWW_PATH,
    port: 5555
  }
};
