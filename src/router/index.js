import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  base: __dirname,
  likActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      name: 'init',
      meta: {title: '第一次加载的页面', requireAuth: true},
      component: resolve => require(['../components/init.vue'], resolve)
    }, {
      path: '/test/pageOne',
      name: 'pageOne',
      meta: {title: '测试页面一', requireAuth: false},
      component: resolve => require(['../components/test/pageOne.vue'], resolve)
    }, {
      path: '/test/pageOne',
      name: 'pageOne',
      meta: {title: '测试页面二', requireAuth: false},
      component: resolve => require(['../components/test/pageTwo.vue'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    next()
  } else {
    next({
      path: '/',
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      query: {redirectUrl: to.fullPath}
    })
  }
})

router.afterEach((transition) => {
  //网站title
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})

export default router
