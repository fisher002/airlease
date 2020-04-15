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
  let flag = navigator.userAgent.match(
    // match方法可在字符串内检索指定的值
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (sessionStorage.getItem('isLogin') === 'true') { // 查询本地存储信息是否已经登陆
      next();
    } else {
      next({
        path: '/index', // 未登录则跳转至index页面
      });
    }
  } else {
    // pc 移动端判断
    if (flag) {
      next({
        path: '/indexMobile'
      });
    } else {
      next({
        path: '/index'
      });
    }
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
