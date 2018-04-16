/*
 * auto: Lei.Dong
 * data: 2018-04-04
 * message: 该文件结合router/router.js使用，添加页面只需要添加对应的JSON文件即可
 * 注：目前不支持二级路由
 */
import router from "./router";
let routerConfig = [
  { path:'/', name:'init', meta:{title:'第一次加载的页面', requireAuth:true}},
  { path:'/test/pageOne', name:'pageOne', meta:{title:'测试一', requireAuth:true}},
  { path:'/test/pageTwo', name:'pageTwo', meta:{title:'测试二', requireAuth:false}}
]
export default routerConfig
