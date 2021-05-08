<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Filter & Mixins</h1>
        <p>{{msg | toLowercase | to-upperCase}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h3>Filter products</h3>
        <button class="btn btn-block btn-success"
                @click="products.push('Oppo')">Add new item</button>
        <input type="text" class="form-control mb-md-3 mt-md-3" 
                placeholder="name" 
                v-model="filteredProduct">
        <div class="card">
          <div class="card-body">
            <ul>
              <li v-for="(product, index) in filteredProducts" :key="index"> 
                {{product}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <app-list></app-list>
  </div>
</template>

<script>
import {productMixins} from './mixins/product.js'

import List from './components/List.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  filters: {
    toLowercase(msg) {
      return msg.toLowerCase()
    }
  },
  components: {
    appList: List,
  },
  mixins: [productMixins]
}
</script>

<style>

</style>
