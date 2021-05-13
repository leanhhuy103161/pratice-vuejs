<template>
  <header>
    <h1>{{ mode }} Mode</h1>
    <toggle 
      :mode="mode"
      @toggle="toggle" />
    <!-- toggle -->
    <nav>
      <div class="nav-link">Home</div>
      <div class="nav-link">About</div>
      <div class="nav-link">Portfolio</div>
      <div class="nav-link">Contact</div>
    </nav>
  </header>
</template>

<script>
import Toggle from './Toggle.vue';
export default {
  components: { Toggle },
  props: [
    'mode'
  ],
  methods: {
    toggle() {
        this.$emit('changeMode')
    }
  }
};
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    height: 60px;
    background: #c3c3c3;
    /* transition: background 0.3s ease-in-out; */
  }

  .dark header {
    background: #15202b;
  }

  header h1 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 900;
  }

  header nav {
    display: flex;
    height: 60px;
  }

  header nav .nav-link {
    display: flex;
    align-items: center;
    padding: 0px 15px;
  }

  header nav .nav-link:hover {
    background: #d0d0d0;
  }

  .dark header nav .nav-link:hover {
    background: #101520;
  }


</style>