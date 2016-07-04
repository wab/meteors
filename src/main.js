import Vue from 'vue'
import vueResource from 'vue-resource'

import './main.scss'

import App from './App'

Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {App}
})
