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
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (this.$session.get('user')) { // 查询本地存储信息是否已经登陆
      next();
    } else {
      console.log('未登录');
      next({
        path: '/index', // 未登录则跳转至index页面
        // query: { redirect: to.fullPath } // 登陆成功后回到当前页面，这里传值给index页面，to.fullPath为当前点击的页面
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
