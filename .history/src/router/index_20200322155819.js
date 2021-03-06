import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login'
import index from '@/views/index/index'
import airdetail from '@/views/index/airdetail'
import personalInfo from '@/views/personalInfo/personalInfolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/airdetail',
      name: 'airdetail',
      component: airdetail
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo
    }
  ]
})
