import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {  // 全局公用数据
      city: '北京'
    },
  actions: {
    change(rex,city){
      rex.commit('changeCity',city)
    }
  },
  mutations: {
      changeCity (state,city){
        state.city =city
      }
  }
})
