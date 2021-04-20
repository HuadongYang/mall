import Vue from 'vue'
import Router from 'vue-router'
import Mall from "../components/mall.vue"
import Phone from "../components/phone.vue"
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/shoe',
      name: 'shoe',
      component: Mall
    },{
      path: '/phone',
      name: 'phone',
      component: Phone
    }
  ]
})