<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button @click="selectedComponent = 'appCard'" class="btn btn-outline-danger">Card</button>
          <button @click="selectedComponent = 'appAbout'" class="btn btn-outline-danger">About</button>
          <button @click="selectedComponent = 'appContact'" class="btn btn-outline-danger">Contact</button>
        </div>
      </div>
      <div class="row">
         <!-- <div class="col-sm-12">
           <app-card :cardWords="cardTitle">
             <h2 slot="title">{{cardTitle}}</h2>
             <p slot="content">superStrange </p>
           </app-card>
         </div> -->
         <keep-alive><component :is="selectedComponent"></component></keep-alive>
         
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  data () {
    return {
      cardTitle: 'White cat',
      selectedComponent: 'appCard'
    }
  },
  components: {
    appCard: Card,
    appContact: Contact,
    appAbout: About
  }
}
</script>

<style>

</style>
