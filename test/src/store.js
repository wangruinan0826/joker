import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      msg:'hahaha'
  },
  mutations: {
      add(state,num){
        state.count=state.count+num;
      },
      reduce(state,num){
        state.count=state.count-num;
      }
  },
  getters:{
      xxx(state){
        return state.msg+state.count;
      }
  },
  actions: {
      addAction({commit},num){
        commit('add',num)
      }
  }
})
