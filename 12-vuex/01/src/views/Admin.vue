<template>
    <div>
        <h1>Admin page</h1>
        <h3>{{num}}</h3>
        <h5>{{FULLNAME}}</h5>
        <button @click="addNumAsync(100)">按钮</button>
        <br>
    </div>
</template>

<script>
	import {mapState,mapActions} from "vuex"

	// console.log(mapState(['num',"pika"]));

	export default {
		name: "Admin",
		data() {
			return {
				firstName : "Gou",
				lastName : "Dan"
			}
		},
		computed: {
			//这边是我们当前页面自己定义的computed属性
			FULLNAME :function(){
				return this.lastName+"."+this.firstName;
			},

			//这里是引入的state的属性
			...mapState(['num'])
		},
		methods:{
			//...操作符拆开{}
			...mapActions(['addNumAsync'])
		}
	}



   /* let a = [4,5,6];
    let b = [1,2,3,...a];

    let c = {x:10,y:20};
    let d = {...c,z:30};*/

</script>

<style scoped>

</style>