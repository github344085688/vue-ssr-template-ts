import { createApp } from './createApp'
import Vue from 'vue'

export default (context: any) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('404'))
      }

      Promise.all(matchedComponents.map(component => {
        component = <Vue>component
        if (component.asyncData) {
          return component.asyncData({
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
