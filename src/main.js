import Vue from 'vue'
import vueResource from 'vue-resource'
import loadGoogleMapsAPI from 'load-google-maps-api'
import './main.scss'
import App from './App'

Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {App},
  ready () {
    loadGoogleMapsAPI({
      key: 'AIzaSyCLb8bYvxTCYgV4EAgGD-atRN_fU_AwHvY'
    }).then((googleMaps) => {
      console.log(googleMaps)
    }).catch((err) => {
      console.error(err)
    })
  }
})

