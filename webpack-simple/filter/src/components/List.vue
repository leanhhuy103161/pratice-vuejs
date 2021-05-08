<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h3>Filter products from List component</h3>
        <input type="text" class="form-control mb-md-6" v-model="filteredProduct">
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
</template>

<script>
import { productMixins } from '../mixins/product.js'

export default {
  mixins: [productMixins]
}
</script>

<style>

</style>
