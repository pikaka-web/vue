<template>
    <div>
        <h1>Portfolio</h1>
        <ul>
            <li><router-link :to="{name:'All'}">All</router-link></li>
            <li><router-link :to="{name:'Logo'}">Logo</router-link></li>
            <li><router-link :to="{name:'Coding'}">Coding</router-link></li>
            <li><router-link :to="{name:'Design'}">Design</router-link></li>
        </ul>
        <br><br><br><br><br>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style scoped>
    h1{
        border-bottom: 1px solid #999;
    }
    ul{
        width: 30%;
        display: flex;
    }
    ul li{
        flex: 1;
    }
</style>