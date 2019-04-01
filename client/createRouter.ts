import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [{
      path: '/',
      redirect: { name: 'Login' }
    }, {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Main.vue')
    }, {
      path: '/foo',
      name: 'foo',
      component: () => import('./views/foo.vue')
    }, {
      path: '/cs',
      name: 'cs',
      component: () => import('./views/cs.vue')
    }
    ]
  })
