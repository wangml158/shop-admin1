import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import Admin from './pages/Admin.vue';
import Login from './pages/Login.vue';

// element: 1.导入组件
import ElementUI from "element-ui";
import VueRouter from "vue-router";

// 注册路由
Vue.use(VueRouter);

// 配置路由
const routes = [
  {path: "/", component: Admin},
  {path: "/login", component: Login}
];

// 路由实例
const router = new VueRouter({ routes });
// element的样式
import 'element-ui/lib/theme-chalk/index.css';
// element: 2.注册element插件
Vue.use(ElementUI);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
