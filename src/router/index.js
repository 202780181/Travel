import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import city from '@/pages/City/City'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
