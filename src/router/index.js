import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import MainPage from '../page/MainPage.vue'
import Launcher from '../page/Launcher.vue'
import HomePage from '../page/HomePage.vue'
import Qinggan from '../page/comedy/Qinggan.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'launcher',
    component: Launcher
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/page/MainPage',
    name: '导航',
    component: MainPage
  },
  {
    path: '/page/HomePage',
    name: '首页',
    component: HomePage
  },
  {
    path: '/page/comedy/Qinggan',
    name: '首页',
    component: Qinggan
  }
]
export default routes
