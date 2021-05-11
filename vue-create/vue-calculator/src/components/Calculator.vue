<template>
  <div class="calculator">
    <span class="display">{{current || 0}}</span>  
    <span @click="clear" class="nonbootstrap-btn">AC</span>  
    <span @click="sign" class="nonbootstrap-btn">+/-</span>  
    <span @click="percent" class="nonbootstrap-btn">%</span>  
    <span @click="divide" class="nonbootstrap-btn operator">÷</span>  
    <span @click="append('7')" class="nonbootstrap-btn">7</span>  
    <span @click="append('8')" class="nonbootstrap-btn">8</span>  
    <span @click="append('9')" class="nonbootstrap-btn">9</span> 
    <span @click="time" class="nonbootstrap-btn operator">x</span> 
    <span @click="append('4')" class="nonbootstrap-btn">4</span>  
    <span @click="append('5')" class="nonbootstrap-btn">5</span>  
    <span @click="append('6')" class="nonbootstrap-btn">6</span>  
    <span @click="minus" class="nonbootstrap-btn operator">-</span>  
    <span @click="append('1')" class="nonbootstrap-btn">1</span>  
    <span @click="append('2')" class="nonbootstrap-btn">2</span>  
    <span @click="append('3')" class="nonbootstrap-btn">3</span>  
    <span @click="plus" class="nonbootstrap-btn operator">+</span>  
    <span @click="append('0')" class="nonbootstrap-btn zeros">0</span>  
    <span @click="dot" class="nonbootstrap-btn">.</span>  
    <span @click="equal" class="nonbootstrap-btn operator">=</span>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      previous: null,
      current: '12345',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear() {
      this.current = ''
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number) {
      if(this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },
    divide() {
      this.operator = (a,b) => b / a;
      this.setPrevious()
    },
    time() {
      this.operator = (a,b) => a * b;
      this.setPrevious()
    },
    minus() {
      this.operator = (a,b) => a - b;
      this.setPrevious()
    },
    plus() {
      this.operator = (a,b) => a + b;
      this.setPrevious()
    },
    equal() {
      console.log("current: ", this.current);
      console.log("previous: ",this.previous);
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  text-align: center;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.calculator span:hover {
  border-radius: 8px;
  display: block;
  color: rgb(255, 250, 250);
  background-color: #212121;
  cursor: pointer;
}

.display {
  grid-column: 1/5;
  background-color: #333;
  color: rgb(131, 130, 130);
}

.nonbootstrap-btn {
  background-color: #F2F2F2;
  border: 1px solid #999;
  border-radius: 8px;
}

.operator {
  background-color: orange;
  color: white;
}

.zeros {
  grid-column: 1/3;
}
</style>
