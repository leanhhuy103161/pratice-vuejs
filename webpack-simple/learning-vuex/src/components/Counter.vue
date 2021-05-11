<template>
  <div>
    <!-- <h2>Counter components</h2> -->
    <button 
      class="btn btn-outline-success"
      @click="increment">Increment</button>
    <button 
      class="btn btn-outline-danger"
      @click="decrement">Decrement</button>
    <hr />
    <br />
    <!-- <p>Value got when using 2 atribute value and input: {{ value1 }} </p>
    <input type="text" :value="value1" @input="updateValue" /> -->
    <hr />
    <br />
    <p>Value got when using v-model: {{ value }}</p>
    <input type="text" v-model="value">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    increment() {
      // this.$emit('update', 1)
      // this.$store.state.result++
      this.$store.dispatch('increment', 25)
    },
    decrement() {
      // this.$emit('update', -1)
      // this.$store.state.result--
      this.$store.dispatch('asyncDecrement')
    },
    // ...mapMutations(['decrement'])
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value)
    } 
  },
  computed: {
    value1() {
      return this.$store.getters.value
    },
    value: {
      get() {
        return this.$store.getters.value
      },
      set(n) {
        return this.$store.dispatch('updateValue', n)
      }
    }
  }
};
</script>

<style scoped>
</style>