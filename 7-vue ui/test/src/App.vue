<template>
  <div id="app">
  <Mint></Mint>
  <Pika></Pika>
  </div>
</template>

<script>
import Mint from './components/Mint.vue'
import Pika from './components/Pika.vue'
export default {
  name: 'App',
  components: {
    Mint,
    Pika
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
