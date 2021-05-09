<template>
  <div>
    <!-- <h2>Result components</h2> -->
    <p>This is TenResult: {{ tenCount }}</p>
    <p>This is name result: {{ nameResult }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // data() {
  //   return { 
  //   }
  // },
  // props: ['result'],
  // computed: mapGetters(['tenCount', 'nameResult']),
  computed: {
    ...mapGetters(['tenCount', 'nameResult']),
    
  }
};
</script>

<style scoped>
</style>