'use strict'
const path = require('path')
const baseURL = 'http://localhost:3000'
module.exports = {
  public: {
    assetsSubDirectory: './'
  },
  client: {
    serverRunPort: 4000,
    assetsSubDirectory: './',
    cssSourceMap: false,
    productionSourceMap: true
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    //  proxyTable: {
    //       '/api': {
    //           target: 'http://localhost:3000',  //目标接口域名
    //           changeOrigin: true,  //是否跨域
    //           pathRewrite: {
    //               '^/api': ''   //重写接口
    //           }
    //       }
    // },
    // host: 'localhost',
    // port: 7000,
    // autoOpenBrowser: false,
    // errorOverlay: true,
    // notifyOnErrors: true,
    // poll: false,
    // useEslint: true,
    // showEslintErrorsInOverlay: false,
    // devtool: 'eval-source-map',
    // cacheBusting: true,
    //
  },

  server: {
    serverRunPort: 8000,
    assetsSubDirectory: './',
    productionSourceMap: true
    // index: path.resolve(__dirname, '../dist/index.html'),
    // assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: './',
    // productionSourceMap: true,
    // devtool: '#source-map',
    // productionGzip: false,
    // productionGzipExtensions: ['js', 'css'],
    // bundleAnalyzerReport: process.env.npm_config_report
  }
}
