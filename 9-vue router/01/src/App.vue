<template>
  <div id="app">
    <div id="nav">
       <!-- router-link路由链接&ndash;&gt;
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
        <router-link to="/admin">Admin</router-link> |-->
        <router-link
                v-for="item in linkList"
                v-if="item.path !== '*' "
                :to="item.path">{{item.name}} |</router-link>
    </div>
      <!--router-view路由输出-->
      <!--只有一个 用一个全新的组件替代所有-->
    <router-view/>
  </div>
</template>
<script>
    import routerList from "./router/routerList";
    export default {
    	data() {
    		return {
    			linkList: routerList
            }        }
    }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
