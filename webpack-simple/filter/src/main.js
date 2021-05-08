import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-upperCase', function (value) {
  return value.toUpperCase()
})


new Vue({
  el: '#app',
  render: h => h(App)
})
