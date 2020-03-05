// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ajax from 'axios'
// import * as $ajaxx from './requests/refactor'
Vue.prototype.$ajax = ajax

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import router from './router'
import store from './vuex'

router.beforeEach((to, from, next) => {
  // ...
  // debugger
  next({path:'/404'})
})
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
