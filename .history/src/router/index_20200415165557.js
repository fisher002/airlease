import Vue from 'vue'
import Router from 'vue-router'
import defaultIndex from '@/views/defaultIndex'
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
import listairinfo from '@/views/admin/airinfoManage/listairinfo'
import detailairinfo from '@/views/admin/airinfoManage/detailairinfo'
import listairlease from '@/views/admin/airleaseManage/listairlease'
import detailairlease from '@/views/admin/airleaseManage/detailairlease'
import listusercom from '@/views/admin/usercomManage/listusercom'
import detailusercom from '@/views/admin/usercomManage/detailusercom'
// 移动端
import indexMobile from '@/views/view-mobile/indexMobile'
import loginMain from '@/views/view-mobile/mobile-index/loginMain'
import indexMain from '@/views/view-mobile/mobile-index/indexMain'
import detailMain from '@/views/view-mobile/mobile-index/detailMain'
import indexPersonal from '@/views/view-mobile/mobile-personal/indexPersonal'
import detaillease from '@/views/view-mobile/mobile-personal/detaillease'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/defaultIndex'
    },
    {
      path: '/defaultIndex',
      name: 'defaultIndex',
      component: defaultIndex
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
        },
        {
          path: '/listairinfo',
          name: 'listairinfo',
          component: listairinfo
        },
        {
          path: '/detailairinfo',
          name: 'detailairinfo',
          component: detailairinfo
        },
        {
          path: '/listairlease',
          name: 'listairlease',
          component: listairlease
        },
        {
          path: '/detailairlease',
          name: 'detailairlease',
          component: detailairlease
        },
        {
          path: '/listusercom',
          name: 'listusercom',
          component: listusercom
        },
        {
          path: '/detailusercom',
          name: 'detailusercom',
          component: detailusercom
        }
      ]
    },
    // 移动端
    {
      path: '/indexMobile',
      name: 'indexMobile',
      component: indexMobile,
      redirect: 'indexMain',
      children: [
        {
          path: '/indexMain',
          name: 'indexMain',
          component: indexMain
        },
        {
          path: '/detailMain',
          meta: {
            requireAuth: true
          },
          name: 'detailMain',
          component: detailMain
        },
        {
          path: '/loginMain',
          name: 'loginMain',
          component: loginMain
        },
        {
          path: '/indexPersonal',
          meta: {
            requireAuth: true
          },
          name: 'indexPersonal',
          component: indexPersonal
        },
        {
          path: '/detaillease',
          meta: {
            requireAuth: true
          },
          name: 'detaillease',
          component: detaillease
        }
      ]
    }
  ]
})
