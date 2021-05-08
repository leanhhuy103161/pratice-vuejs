<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <h1>Animation</h1>
        <br>
        <select v-model="typeAnimation" class="form-control mb-md-3">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <button @click="show = !show" 
                class="btn btn-block btn-success">
          show notification
        </button>
        <br>
        <br>
        <!-- <transition :name="typeAnimation">
          <div  v-if="show"
              class="alert alert-success">
          this is something about notification
          </div>
        </transition> -->
        <transition :name="typeAnimation" mode="out-in">
          <div  v-if="show"
                key="warning"
              class="alert alert-warning">
          this is something about notification
          </div>
          <div  v-else
                key="danger"
              class="alert alert-danger">
          this is something about notification
          </div>
        </transition>
        <hr>
        <button class="btn btn-success"
                @click="status = !status">Add or Remove
        </button>
        <transition 
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
          <div style="width: 200ox; height: 280px; background: blue" v-if="status">Umbala</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      typeAnimation: 'fade',
      status: true  ,
    }
  },
  methods: {
    beforeEnter: (el) => {
      // ...
      console.log("beforeEnter");
    },
    enter: (el, done) => {
      console.log("enter");
      done();
    },
    afterEnter: (el) => {
      console.log("afterEnter");
    },
    enterCancelled: (el) => {
      console.log("enterCancelled");
    },
    beforeLeave: (el) => {
      // ...
      console.log("beforeLeave");
    },
    leave: (el, done) => {
      console.log("Leave");
      done();
    },
    afterLeave: (el) => {
      console.log("afterLeave");
    },
    leaveCancelled: (el) => {
      console.log("LeaveCancelled");
    },
  },
}
</script>

<style>
  /* enter */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  /* leave */
  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-active {
    transition: opacity 1s;
  }

  /* Slide transiotion effect */
  /* enter */
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 2s;
  }

  /* leave */
  .slide-leave-to {
    opacity: 0;
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 2s;
  }
  
  /* key frames */
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
