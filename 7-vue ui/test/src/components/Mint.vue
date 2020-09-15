<template>
    <div id="mint">
        <img src="../assets/img/1.gif" alt="">
        <img :src="testSrc" alt="">
        <p  id="goudan" :style="{fontSize:size+'px'}" @click="changeSize">我是Mint组件</p>
    </div>
</template>

<script>

	import "../assets/js/toutie"

	export default {
		name: "Mint",
		data() {
			return {
				/*require帮我打包路径，否则回认为是字符串*/
				testSrc: require("../assets/img/1.gif"),
				size: 14
			}
		},
		methods:{
			changeSize(){
				this.size = 30;
			}
		}
		,mounted() {
			// console.log(document.getElementById("goudan"));
			/*let oGou = document.getElementById("goudan");
            oGou.onclick = function(){
                this.style.fontSize = "30px";
            };*/
			// $("#goudan").css("font-weight","bolder");
			// console.log(this.$);

			(function($){
				//杩欓噷鍐檍q
				$("#goudan").css("font-weight","bolder");
				$.ajax();
				$.get();
			})(this.$);

			/*a(this.$);
            function a($){
                //杩欓噷鍐檍q
                $("#goudan").css("font-weight","bolder");
                $.ajax();
                $.get();
            }*/
		}



	}


</script>

<style scoped>
    @import url(../assets/css/reset.css);
</style>