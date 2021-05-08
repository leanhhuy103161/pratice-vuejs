<template>
  <div>
    <h3>User edit component</h3>
    <p>User Info Client</p>
    <ul>
      <li>Locate: {{ $route.query.locate }}</li>
      <li>Browser: {{ $route.query.browser }}</li>
      <li>ID: {{ $route.params.id }}</li>
    </ul>
    <button @click="status = true" class="btn btn block btn-warning">
      Something
    </button>
    <div style="height: 700px"></div>
    <h3 id="react">Learn React with</h3>
    <div style="height: 1700px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.status) {
      next();
    } else {
      if (confirm("Are u sure? any data won'n be saved!!")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style scoped>
</style>