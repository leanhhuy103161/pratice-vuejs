import Vue from 'vue'
import A from './App.vue'
export const eventBus = new Vue();
new Vue({
  el: '#app',
  render: h => h(A)
})
