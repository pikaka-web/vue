<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <Rate></Rate>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Rate from './components/Rate.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Rate,
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px;*/
}
</style>
