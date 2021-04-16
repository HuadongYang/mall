import Vue from 'vue'
import Router from 'vue-router'
import Mall from "../components/mall.vue"
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    }
  ]
})