<template>
  <div>
    <!-- <h2>Counter components</h2> -->
    <button 
      class="btn btn-outline-success"
      @click="increment">Increment * 10</button>
    <button 
      class="btn btn-outline-danger"
      @click="decrement">Decrement / 10</button>
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
      this.$store.state.result *= 10 
    },
    decrement() {
      // this.$emit('update', -1)
      this.$store.state.result /= 10
    }
  },
};
</script>

<style scoped>
</style>