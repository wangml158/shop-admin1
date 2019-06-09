import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import Admin from './pages/Admin.vue';
import Login from './pages/Login.vue';
import GoodList from './pages/GoodList.vue';
import CategoryList from './pages/CategoryList.vue';

// element: 1.导入组件
import ElementUI from "element-ui";
import VueRouter from "vue-router";

// 注册路由
Vue.use(VueRouter);

// 配置路由
const routes = [
  {path: "/",redirect:'/admin/good-list',meta: '首页'},
  {path: "/login", meta: '登录', component: Login},
  {path:'/admin',meta: '后台管理',component: Admin, children:[
    {path:'good-list',meta: '商品列表',component: GoodList},
    {path:'category-list',meta: '栏目列表',component: CategoryList}
  ]}
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
