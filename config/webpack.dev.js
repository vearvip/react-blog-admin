const { smart } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = smart(base, {
  mode: 'development',
  devServer: {
    port: 8080,
    open: true,
    progress: true
  },
  devtool: "source-map",
})