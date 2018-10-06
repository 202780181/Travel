import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import city from '@/pages/City/City'
import detail from '@/pages/detail/Detail'
import sweep from '@/pages/Home/components/Sweep'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/detail/:id',  // :id 动态路由
      name: 'detail',
      component: detail
    },
    {
      path: '/sweep',  // 扫一扫页面
      name: 'sweep',
      component: sweep
    }
  ]
})
