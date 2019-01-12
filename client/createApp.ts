import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './createRouter'
import { createStore } from './createStore'
import Component from 'vue-class-component'

Component.registerHooks([
  'asyncData' // for ssr
])

export const createApp = () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
