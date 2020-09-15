<template>
    <div>
        <h1>这是文章页</h1>
        <h6>文章名：{{msg}}</h6>
        <p>
            <router-link to="/article/2222">到另外的一篇文章</router-link>
        </p>
    </div>
</template>

<script>
	export default {
		name: "Article",
		data() {
			return {
				msg: 0
			}
		},

		//组件内是守卫 --能够在这里监听到路由的变化，并且可以后续使用实例this。

		//监听路由的进入
		beforeRouteEnter(to, from, next) {
			console.log('to', to);
			console.log('from', from);


			//组件还未创建
			//console.log(this); undefined

			//如果需要在before的时候用this的化，可以传递给next一个回调函数
			next(vm => {
				console.log(vm);
				//要注意数据每次进入路由都会刷新
				vm.msg++;
			});
		},

		//监听路由的更新
		beforeRouteUpdate(to, from, next) {
			/*console.log('to:',to)
            console.log('from:',from)*/

			let ifupdate = confirm('确定要离开进入下一篇文章？');
			if (ifupdate) {
				//console.log(this);
				this.msg = to.params.id;
				//ajax问后台当前id对应的文章相关信息
				next();
			} else {
				next(false);
			}
		},

		//监听路由的离开
		beforeRouteLeave(to, from, next) {
			let ifLeave = confirm("当前表单数据未提交，是否确定离开？");
			if (ifLeave) {
				next();
			} else {
				next(false);
			}

		}


	}
</script>

<style scoped>

</style>