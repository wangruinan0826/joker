import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      msg:'hahaha',
      shuzhi:100
  },
  mutations: {
      add(state,num){
        state.count=state.count+num;
      },
      reduce(state,num){
        state.count=state.count-num;
      },
      jia(state,num){
        state.shuzhi+=num;
      },
      jian(state,num){
        state.shuzhi-=num
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
