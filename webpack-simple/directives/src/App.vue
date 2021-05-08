<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>default/ built-in directives</h1>
        <p v-text="'somthing else ...'"></p>
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom directives</h1>
        <p v-local-custom.blink="{mainColor:'red', secondColor:'blue', delayColor:'100' }">color style by directives</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  directives: {
    "local-custom": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              
              if (binding.arg == "background") {
                el.style.backgroundColor = binding.value;
              } else {
                // console.log(currentColor);
                el.style.color = currentColor;
              }
            }, binding.value.delayColor);
        }
        setTimeout(() => {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value;
          } else el.style.color = binding.value;
        }, delay);
      },
    },
  },
};
</script>

<style>
</style>
