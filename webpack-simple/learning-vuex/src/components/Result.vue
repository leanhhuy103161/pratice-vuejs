<template>
  <div>
    <!-- <h2>Result components</h2> -->
    <p>This is Result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
      
  //   }
  // },
  // props: ['result'],
  computed: {
    result () {
      return this.$store.state.result
    }
  }
};
</script>

<style scoped>
</style>