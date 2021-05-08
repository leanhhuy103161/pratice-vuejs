<template>
  <div class="container">
    <h1>Vuex section</h1>
    <hr>
    <!-- <app-result :result="result"></app-result> -->
    <app-result></app-result>
    <hr>
    <!-- <app-counter @update="result += $event"></app-counter> -->
    <app-counter></app-counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      result: 0
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result
  }
}
</script>

<style>

</style>
