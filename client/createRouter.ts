import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [{
      path: '/*',
      component: () => import('./views/Main.vue')
    }]
  })
