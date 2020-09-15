import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/*/!*全局前置守卫  --路由即将切换机进行变化，触发回调*!/
						/!*to:从哪来   from：到哪去  next：放行*!/
router.beforeEach((to, from, next) => {
	/!* console.log('to:',to);
	 console.log('from:',from);

	 next();*!/

	if (to.name === "Article") {
		//如果是Article路由，我们需要检测是否登录了，
		//只有登录才能访问Article，否则跳转Hmoe
		//模拟一下后端登录的登录判断
		new Promise((res, rej) => {
			//res代表登录  rej代表失败
			rej();
		}).then(() => {
			next();//如果是登录的，我们就进入article
		}).catch(() => {
			router.push("/login") //如果我们没有登录，我们就进入login
			//router.replace("/login")
		})
	}else{
		//其他路路由不用拦截
		next();
	}
});

/!*全局后置守卫  --路由变化/切换完成之后，触发回调*!/
router.afterEach((to,from) => {
	console.log('to:',to);
	console.log('from:',from);
});*/


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
