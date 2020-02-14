const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.[hash].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)?$/,
      use: [{
        loader: 'ts-loader',
      }]
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#ff5d5d',
            '@link-color': 'rgb(123, 123, 248)'
          }
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [{
        loader: 'file-loader',
      },],
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin()
  ]
}