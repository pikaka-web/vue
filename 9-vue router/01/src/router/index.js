import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'  //或不这么写
import routerList from "./routerList";

console.log(routerList);

Vue.use(VueRouter)

/*const routes = [
  { //path component必选项 name可选项（可不写）
    path: '/',
    name: 'Home',
    component: Home
    //这么写
    //component: () =>('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },
  {
    path: "/admin",
    name: "/Admin",
    component: () => import('../views/Admin.vue')
  }
]*/

const routes = routerList.map(item=>{
  item.component = ()=>import('../views/'+item.name);
  return item;
});



const router = new VueRouter({
  routes
})

//导出router
export default router
