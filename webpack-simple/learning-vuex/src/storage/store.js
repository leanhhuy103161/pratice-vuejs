import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    result: 0
  },
  getters: {
    tenCount: state => {
      return state.result * 10;
    },
    nameResult: state => {
      return state.result + ' name product'
    }
  },
  mutations: {
    increment(state, n) {
      state.result += n;
    },
    decrement(state) {
      state.result--;
    }
  },
  actions: {
    increment: ({ commit }, n) => {
      commit('increment', n)
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement')
      }, 3000)
    }
  }
})
