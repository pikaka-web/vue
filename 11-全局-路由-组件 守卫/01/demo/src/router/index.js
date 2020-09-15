import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('../views/About.vue')
		},
		{
			path: '/article',
			name: 'Article',
			component: () => import('../views/Article.vue'),
			//局部守卫只有beforeEnter
			/*beforeEnter(to,from,next) {
				console.log('to:',to);
				console.log('from:',from);
				next();
			}*/
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/Login.vue')
		}
	]

})

export default router
