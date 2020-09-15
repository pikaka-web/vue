<template>
    <div id="article">
        <h1>这是文章页</h1>
        <h2>假装这是文章标题</h2>
        <h3>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</h3>
       <router-link to="/">回到首页</router-link>
        <button @click="toHome">回到首页</button>
    </div>
</template>

<script>
	import Nav from "../components/Nav";
	export default {
		components:{
			Nav
		},
        methods:{
            toHome() {
            	//this.$router.go(-1);
                this.$router.push("/")
            }
        }
	}
</script>
<style scoped>

</style>