const merge = require('webpack-merge')
const config = require('./webpack.config')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(config, {
  entry: ['./client/entry-server.ts'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
    filename: 'server-build.js',
    publicPath: '/'
  },
  target: 'node',
  mode: isProd ? 'production' : 'development',
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [new VueServerPlugin()]
})
