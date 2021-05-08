<template>
  <div id="app">
    <app-header/>
    <!-- <router-view name="page-header"></router-view> -->
    <div class="col-xs-12 cl-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left">
      <br>
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import appHeader from './components/layouts/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appHeader
  }
}
</script>

<style>
  .slide-enter-active {
    transition: opacity 0.8s ease;
    opacity: 1;
    animation: slide-in 0.8s ease-in forwards  
  }

  .slide-enter {
    opacity: 0;
    transform: translateX(0);
  }

  .slide-leave-active {
    transition: opacity 0.8s ease;
    opacity: 0;
    animation: slide-out 0.8s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0); 
  }

  @keyframes slide-out {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(30px);
    }
  }

  @keyframes slide-in {
    100% {
      transform: translateX(0);
    }    
    0% {
      transform: translateX(-30px);
    }
  }
</style>
