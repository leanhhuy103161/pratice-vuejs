<template>
  <div id="app">
    <pokemon/>
  </div>
</template>

<script>
import Pokemon from './components/Pokemon.vue'

export default {
  name: 'App',
  components: {
    Pokemon,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
