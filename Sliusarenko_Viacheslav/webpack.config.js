const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve( __dirname, 'src', 'main.js' ),
  output: {
    path: path.resolve( __dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      hoc: path.resolve(__dirname, 'src', 'hoc'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      actions: path.resolve(__dirname, 'src', 'actions'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      middlewares: path.resolve(__dirname, 'src', 'middlewares'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bandle.css'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
};