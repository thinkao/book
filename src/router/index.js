import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import MainPage from '../page/MainPage.vue'
import Launcher from '../page/Launcher.vue'
import HomePage from '../page/HomePage.vue'
import Qinggan from '../page/comedy/Qinggan.vue'
import Children from '../page/comedy/Children.vue'
import MySet from '@/page/personal/myset/MySet'

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
    //redirect: '/page/comedy/Qinggan',
    name: '情感',
    component: Qinggan
  },
  {
    path: '/page/comedy/Children',
    //redirect: '/page/comedy/Children',
    name: '儿童',
    component: Children
  },
  {
    path:'/page/personal/myset/MySet',
    name: '我的设置',
    component: MySet
  }
]
export default routes
