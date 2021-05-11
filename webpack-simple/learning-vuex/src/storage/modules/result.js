const state = () => ({
  result: 0
});

const getters = {
  tenCount: state => {
    console.log("calling getters in result module");
    return state.result * 10;
  },
  nameResult: state => {
    console.log("calling getters in result module");
    return state.result + ' name product'
  },
};

const mutations = {
  increment(state, n) {
    state.result += n;
  },
  decrement(state) {
    state.result--;
  },
};

const actions = {
  increment: ({
    commit
  }, n) => {
    console.log("calling actions in result module");
    commit('increment', n)
  },
  asyncDecrement: ({
    commit
  }) => {
    setTimeout(() => {
      console.log("calling actions in result module");
      commit('decrement')
    }, 3000)
  },
};

export default {
  state, getters, mutations, actions
}