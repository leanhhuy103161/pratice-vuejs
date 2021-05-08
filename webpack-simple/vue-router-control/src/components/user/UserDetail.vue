<template>
  <div>
    <h1>User Detail</h1>
    <p>ID user: {{ id }}</p>
    <router-link
      :to="{ name: 'useredit', params: { id: $route.params.id }, 
      query: {locate: 'vi', browser: 'chrome'},
      hash: '#react' }"
      custom
      v-slot="{navigate}"
    >
      <button class="btn btn-warning" @click="navigate">
        User Edit
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
    id: function () {
      console.log("id changed");
    },
  },
  beforeRouteEnter (to, from, next) {
      console.log('calling beforeRouteEnter in UserDetail');
      if(true) {
        next()
      }
    next(false)
  }
};
</script>

<style scoped>
    
</style>