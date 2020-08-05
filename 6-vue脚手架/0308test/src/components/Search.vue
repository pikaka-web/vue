<template>
    <div id="warp">
        <input type="text" v-model="word" @input="fn">
        <ul>
            <li v-for="item in jsonArr">
                <a href="https://www.baidu.com/s?wd='+item" target="_blank">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "Search",
		methods: {
			fn() {
				fetch("http://localhost:2333/search?word="+this.word)
					.then(res=>res.json())
					.then(msg=>{
						this.jsonArr = msg;
					});
			}
		},
        data() {
			return {
				jsonArr:[],
                word: ""
            }
        }
	}
</script>

<style scoped>

</style>