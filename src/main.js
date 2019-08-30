// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import api from './api/index'
import {mkTree} from './mk'
import VueRouter from 'vue-router'
import routes from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$httpSystem = api.httpSystem
Vue.prototype.$api = api.api
Vue.use(ElementUI)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})
let addRoutes = [{
  path: '/main-page',
  component: require('./page/MainPage.vue'),
  name: '首页',
  isMenu: true,
  children: mkTree(JSON.parse(localStorage.getItem('mks')))
}]
router.addRoutes(addRoutes)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
