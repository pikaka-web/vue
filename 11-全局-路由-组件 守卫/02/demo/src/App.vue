<template>
  <div id="app">
    <Nav></Nav>
    <AppTs :name="name"></AppTs>
  </div>
</template>
<script>
  import Nav from "./components/App/Nav";
  import AppTs from "./components/App/AppTs";
  export default {
    data(){
      return {
        name : "rotate"
      }
    },
    components: {
      Nav,AppTs
    },
    //App中路由的变化监听
    watch : {
      $route(){
        this.name = ["fade","scroll","rotate"][Math.floor(Math.random()*3)];
      }
    }
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
</style>
