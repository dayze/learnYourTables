// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vmodal from 'vue-js-modal'
import 'magic-monkey'
import './assets/css/fonts.min.css'
import './assets/css/layout/header.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.use(vmodal)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
