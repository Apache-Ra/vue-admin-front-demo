/*
 * auto: Lei.Dong
 * data: 2018-04-04
 * message: 该文件结合router/router.config.js使用
 * 注：目前不支持二级路由
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './router.config';

Vue.use(VueRouter);

let routes = [];

for(let i in routerConfig){
  let item = routerConfig[i];
  let page = (item.path === '/') ? '/'+item.name : item.path;
  const Obj = {
    path: item.path,
    name: item.name,
    meta: {title: item.meta.title, requireAuth: item.meta.requireAuth},
    component: resolve => require(['../components'+page+'.vue'], resolve)
  }
  routes.push(Obj);
}

const router = new VueRouter({
  base: __dirname,
  likActiveClass: 'link-active', routes });

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
});
router.afterEach((transition) => {
  //网站title
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
});

export default router
