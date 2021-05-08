<template>
  <div>
    <!-- <h2>Counter components</h2> -->
    <button 
      class="btn btn-outline-success"
      @click="increment">Increment</button>
    <button 
      class="btn btn-outline-danger"
      @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    increment() {
      // this.$emit('update', 1)
      this.$store.state.result++
    },
    decrement() {
      // this.$emit('update', -1)
      this.$store.state.result--
    }
  },
};
</script>

<style scoped>
</style>