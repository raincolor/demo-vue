import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const asyncStorgage = (store) => {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    window.localStorage.setItem('nb-cart', JSON.stringify(state.cart))
    window.localStorage.setItem('nb-userInfo', JSON.stringify(state.userInfo))
  })
}
export default new Vuex.Store({
  strict: true,
  plugins: [asyncStorgage],
  state,
  getters,
  mutations,
  actions
})
