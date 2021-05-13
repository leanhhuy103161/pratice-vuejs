<template>
  <div :class="mode" class="app">
    <app-header :mode="mode" @changeMode="changeMode"/>
    <app-content :mode="mode" />
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      mode: 'light',
    }
  },
  components: {
    appHeader: Header,
    appContent: Content,
  },
  methods: {
    changeMode() {
      if(this.mode == 'dark') {
        this.mode = 'light'
      } else this.mode = 'dark'
    },
    keyPress(e) {
      if (e.key == 't') {
        this.changeMode()
      }
    }
  },
  created() {
    window.addEventListener('keyup', this.keyPress)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #15202b;
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #e8e8e8;
}




</style>
