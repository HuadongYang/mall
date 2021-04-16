import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router';
import 'flex.css';
import Net from "./net/net"
const {
  INIT_NET } = Net;


Vue.config.productionTip = false
Vue.use(ElementUI);

let BASE_URL = "http://localhost:8082";
//初始化NET
INIT_NET({
  basePath: BASE_URL,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
