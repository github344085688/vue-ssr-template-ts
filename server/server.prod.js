const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const koaStatic = require('koa-static')
const config = require('../config')
const { createBundleRenderer } = require('vue-server-renderer')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')

const resolve = file => path.resolve(__dirname, file)

const template = fs.readFileSync(resolve('./template.html'), 'utf-8')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

const server = new Koa()
server.use(koaStatic(resolve('../dist')))
server.use(async (context, next) => {
  const html = await renderer.renderToString({
    url: context.url
  })
  context.body = html
})

const port = process.env.PORT || config.server.serverRunPort ? config.server.serverRunPort : 80
server.listen(port, () => {
  console.log(`Server start at port ${port}`)
})
