const merge = require('webpack-merge')
const config = require('./webpack.config')
const path = require('path')
const webpack = require('webpack')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(config, {
  entry: ['./client/entry-client.ts'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  mode: 'production',
  plugins: [
    new VueClientPlugin()
  ]
})
