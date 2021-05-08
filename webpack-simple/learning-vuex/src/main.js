import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import VueRouter from 'vue-router'
import { store } from './storage/store.js'


Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { 
        selector: to.hash,
        behavior: 'smooth', }
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
