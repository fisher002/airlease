import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login'
import index from '@/views/index/index'
import airdetail from '@/views/index/airdetail'
import personalInfo from '@/views/personalInfo/personalInfolist'
import adminIndex from '@/views/admin/adminIndex'
import listadmin from '@/views/admin/adminManage/listadmin'
import detailadmin from '@/views/admin/adminManage/detailadmin'
import listuser from '@/views/admin/userManage/listuser'
import detailuser from '@/views/admin/userManage/detailuser'
import listair from '@/views/admin/airManage/listair'
import detailair from '@/views/admin/airManage/detailair'

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
      meta: {
        requireAuth: false // 配置此条，进入页面前判断是否需要登陆
      },
      component: index
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        requireAuth: false
      },
      component: login
    },
    {
      path: '/airdetail',
      name: 'airdetail',
      meta: {
        requireAuth: false
      },
      component: airdetail
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      meta: {
        requireAuth: true
      },
      component: personalInfo
    },
    {
      path: '/adminIndex',
      name: 'adminIndex',
      meta: {
        requireAuth: true
      },
      component: adminIndex,
      redirect: '/listadmin',// 重定向到指定页面(管理员登陆默认显示页面)
      children: [
        {
          path: '/listadmin',
          name: 'listadmin',
          component: listadmin
        },
        {
          path: '/detailadmin',
          name: 'detailadmin',
          component: detailadmin
        },
        {
          path: '/listuser',
          name: 'listuser',
          component: listuser
        },
        {
          path: '/detailuser',
          name: 'detailuser',
          component: detailuser
        },
        {
          path: '/listair',
          name: 'listair',
          component: listair
        },
        {
          path: '/detailair',
          name: 'detailair',
          component: detailair
        }
      ]
    }
  ]
})
