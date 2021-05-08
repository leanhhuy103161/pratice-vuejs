<template>
  <div id="app">
    <app-header :itemCount="items.length" :itemMax="maxItems"></app-header>
    <app-new-item @itemAdded="addItem"></app-new-item>
    <app-items-layout @itemRemoved='removeItem' :itemsLO="items"></app-items-layout>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Item to delete 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import App from '../../second-project/src/App.vue'
import Header from './components/Header.vue'
import ItemsLayout from './components/ItemsLayout.vue'
import NewItem from './components/NewItem.vue'

export default {
  name: 'app',
  data () {
    return {
      items: [
        'I got boards in Atlanta',
        'I rock a .44 just like Obama'
      ],
      maxItems: 10
    }
  },
  components: {
    appItemsLayout: ItemsLayout,
    appNewItem: NewItem,
    appHeader: Header,
    App
  },
  methods: {
    addItem(item) {
      if (this.items.length  >= this.maxItems) {
        return alert('Please remove item first!')
      }
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  },
}
</script>

<style>

</style>
