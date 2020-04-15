// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import vueSession from 'vue-session'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueSession)

/* eslint-disable no-new */
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (sessionStorage.getItem('isLogin') === 'true') { // 查询本地存储信息是否已经登陆
      next();
    } else {
      next({
        path: '/defaultIndex', // 未登录则跳转至defaultIndex页面
      });
    }
  } else {
    next();
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
