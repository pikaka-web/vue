<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{name}},{{age}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      name : "",
      age : ""
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.$route.query);
    this.name = this.$route.query.name;
    this.age = this.$route.query.age;
  }
}
</script>
