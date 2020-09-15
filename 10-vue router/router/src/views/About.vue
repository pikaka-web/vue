<template>
  <div class="about">
    <Nav></Nav>
    <h1>This is an about page</h1>
    <h3>{{num}}</h3>
    <button @click="add">按钮</button>
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import Article from "./Article";
  export default {
    data(){
      return{
        num: 0
      }
    },
    methods:{
      add() {
        this.num++;
        if(this.num===10){
        /*编程式路由  --在js里面跳转理由*/
          //this.$router.push("/")
          this.$router.push({name:"Article"})
        }
      }
    },
    components:{
      Nav
    }
  }
</script>