<template>
    <!--需要路由组件切换的动画的话，需要用transition组件包裹着router-view-->
    <div id="component"
         :style="{
            overflow:name==='scroll'?'hidden':''
         }"
    >
        <!--mode:out-in    mode:in-out-->
        <transition :name="name">
            <router-view
                    class="view"/>
        </transition>
    </div>
</template>

<script>
	export default {
		name: "AppTs",
		props:["name"]
	}
</script>

<style scoped lang="less">
    #component{
        /*overflow: hidden;*/
        width: 500px;
        height: 500px;
        /*border: 1px solid red;*/
        margin: 0 auto;
        position: relative;
        perspective: 800px;
        transform-style: preserve-3d;
    }

    .view{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;

        width: 500px;
        height: 500px;
        background-color: pink;
        transition: all .3s;
        transform-origin: center center -250px;
    }

    //fade的切换样式
    //进入的样式变化
    .fade-enter{//进入初始状态
        opacity: 0;
    }
    .fade-enter-to{//进入的最终状态
        opacity: 1;
    }
    .fade-enter-active{
        /*transition: opacity 2s; //进入动画激活过程中*/
    }
    //离开的样式变化
    .fade-leave{
        opacity: 1;//离开的初始样式
    }
    .fade-leave-to{
        opacity: 0;//离开的最终样式
    }
    .fade-leave-active{
        /*transition: opacity 2s; //离开动画激活过程中*/
    }

    //左右滑入的切换样式
    .scroll-enter{
        transform: translateX(100%);
    }
    .scroll-enter-to{
        transform: translateX(0);

    }
    .scroll-leave{
        transform: translateX(0);
    }
    .scroll-leave-to{
        transform: translateX(-100%);
    }

    //翻转动画
    .rotate-enter{
        transform: rotateY(90deg);
    }
    .rotate-enter-to{
        transform: rotateY(0deg);
    }
    .rotate-leave{
        transform: rotateY(0deg);
    }
    .rotate-leave-to{
        transform: rotateY(-90deg);
    }
</style>