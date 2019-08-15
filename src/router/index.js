import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import MainPage from '../page/MainPage.vue'
import Launcher from '../page/Launcher.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'launcher',
      component: Launcher
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/page/MainPage',
      name: '主页',
      component: MainPage
    }
  ]
})
