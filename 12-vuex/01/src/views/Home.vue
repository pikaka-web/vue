<template>
    <div class="home">
        <h1>This is a Home Page</h1>
        <!--   <h3>{{$store.state.num}}</h3>
           <h4>{{$store.state.pika}}</h4>
           <h4>{{$store.state.mint}}</h4>-->
        <h3>{{num}}</h3>
        <h4>{{pika}}</h4>
        <h4>{{mint.name+mint.age}}</h4>
       <!-- <button @click="fn">按钮</button>-->
        <br>
        <!--{{FULLNAME}}-->
        <!--调用store mutation定义的方法，使用 commit函数 -->
        <button @click="$store.commit('addNum',1)">按钮-直接调用</button>
        <br>
        <!--简化使用就不需要再调用commit了，直接用就行-->
        <button @click="addNum(5)">按钮-简化调用+5</button>
        <button @click="reduceNum(2)">按钮-简化调用-2</button>
        <h5>{{mint.name+mint.age}}</h5>

    </div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'

	//console.log(mapState(['num','pika','mint']));

	export default {
		name: 'Home',
		data() {
			return {
				/*firstName: 'Da',
				lastName: 'Chui',*/

			}
		},

		methods: {
			    /*
                  //这样写可以，但是不符合规范，
                 //因为设计上应该要保持，store里面的 数据 只有在store库里面定义修改 方法*/
		/*	fn() {
				this.$store.state.num++
			}*/
		...mapMutations(['addNum','reduceNum'])
		},
		/*computed:{
            num: function () {},
            pika: function () {},
            mint: function () {}
            }
        * */
		//最终简写模式
		computed: mapState(['num', 'pika', 'mint']),
		computed: {
			/*FULLNAME() {
			    return  this.lastName+'.'+this.firstName;
			}*/

			num: function () {
				return this.$store.state.num;
			},
			pika: function () {
				return this.$store.state.pika;
			},
			mint: function () {
				return this.$store.state.mint;
			}
			//使用mapState来解构数据
		},


	}
</script>
