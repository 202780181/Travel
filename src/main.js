
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible'
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'

import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(vuex)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)


  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })


