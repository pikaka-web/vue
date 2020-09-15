import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=>import('../views/Home')
  },
  {
    path: "/about",
    name: "About",
    component: ()=>import('../views/About')
  },
  {
    path: "/about/:id",
    name: "AboutId",
    component: ()=>import('../views/AboutId')
  },
  {
    path: "/resume",
    name: "Resume",
    component: ()=>import('../views/Resume')
  },
  {
    path: "/services",
    name: "Services",
    component: ()=>import('../views/Services')
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: ()=>import('../views/Portfolio'),
    /*子路由*/
    children: [
      {
        path: "",
        alias: ["all","afei"],//别名 -- 为path指定一个别名
        name: "All",
        component: ()=>import('../views/portfolio/All')
      },{
        path: "Logo",
        name: "Logo",
        component: ()=>import('../views/portfolio/Logo')
      },{
        path: "coding",
        name: "Coding",
        component: ()=>import('../views/portfolio/Coding')
      },{
        path: "design",
        name: "Design",
        component: ()=>import('../views/portfolio/Design')
      }
    ]
  },
  {
    path: "/Blog",
    name: "Blog",
    component: ()=>import('../views/Blog')
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ()=>import('../views/Contact')
  }
]

const router = new VueRouter({
  routes
})

export default router
