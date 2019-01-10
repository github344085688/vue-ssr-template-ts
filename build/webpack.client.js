const merge = require('webpack-merge')
const config = require('./webpack.config')
const path = require('path')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(config, {
  entry: ['./client/entry-client.ts'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  devtool: '#source-map',
  mode: isProd ? 'production' : 'development',
  plugins: [
    new VueClientPlugin()
  ]
})
