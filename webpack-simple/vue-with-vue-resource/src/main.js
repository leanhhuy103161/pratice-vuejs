import Vue from 'vue'
import App from './App.vue'
// var VueResource = require('vue-resource');
import VueResource from 'vue-resource'

// use vue-resource package
Vue.use(VueResource);
Vue.http.options.root = 'https://vue-firebase-1-16011999-default-rtdb.firebaseio.com/data.json'
Vue.http.interceptors.push((req, next) => {
  // console.log(req);
  // if(req.method == 'POST') {
  //   req.method = 'PUT'
    // console.log(req);
  // }  
  next(res => {
    res.json = () => {
      return {
        message: res.body
      }
    }
  })
})


new Vue({
  el: '#app',
  render: h => h(App)
})
