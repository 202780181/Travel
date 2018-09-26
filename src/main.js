
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible'
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
