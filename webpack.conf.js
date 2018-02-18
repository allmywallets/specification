const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    module: ['@babel/polyfill', path.resolve(process.cwd(), './module.js')]
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: './[name].js',
    library: "Module",
    libraryTarget: "var"
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  externals: {
    vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(process.cwd(), './'),
        options: {
          presets: ['@babel/preset-stage-2', '@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot|ico)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
