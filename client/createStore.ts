import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const createStore = () =>
  new Vuex.Store({
    actions: {
      getInfo () {
        // 1
      }
    }
  })
