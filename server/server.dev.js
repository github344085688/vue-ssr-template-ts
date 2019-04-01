const Koa = require('koa')
const fs = require('fs')
const koaStatic = require('koa-static')
const koaWebpack = require('koa-webpack')
const path = require('path')
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const config = require('../config')
const { createBundleRenderer } = require('vue-server-renderer')
const clientConfig = require('../build/webpack.client')
const serverConfig = require('../build/webpack.server')

const resolve = file => path.resolve(__dirname, file)

//
const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFs()
serverCompiler.outputFileSystem = mfs
let serverBundle
serverCompiler.watch({}, (err, stats) => {
  if (err) {
    throw err
  }
  stats = stats.toJson()
  const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json')
  serverBundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
})

//
const server = new Koa()

const compiler = webpack(clientConfig)
koaWebpack({ compiler, devMiddleware: { serverSideRender: true, publicPath: '/' } }).then(middleware => {
  server.use(middleware)
  server.use(async context => {
    if (!serverBundle) {
      context.body = '正在打包中...'
    }
    const clientManifestPath = path.join(clientConfig.output.path, 'vue-ssr-client-manifest.json')
    const clientManifest = JSON.parse(middleware.devMiddleware.fileSystem.readFileSync(clientManifestPath, 'utf-8'))
    const template = fs.readFileSync(resolve('./template.html'), 'utf-8')
    const renderer = createBundleRenderer(serverBundle, {
      runInNewContext: false,
      template,
      clientManifest
    })
    const html = await renderer.renderToString({
      url: context.url
    })
    context.body = html
  })
  const port = process.env.PORT || config.client.serverRunPort ? config.client.serverRunPort : 3000
  server.listen(port, () => {
    console.log(`Server start at port ${port}`)
  })
})
