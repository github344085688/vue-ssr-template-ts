import { createApp } from './createApp'

export default (context: any, y: any) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('404'))
      }

      Promise.all(matchedComponents.map(component => {
        if (typeof (<any>component).options.asyncData === 'function') {
          return (<any>component).options.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
