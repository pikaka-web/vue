<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{$store.getters.mint.mintInfo}}
    <h3>{{mint}}</h3>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default  {
    name: "Abput",
    computed: {
      ...mapGetters(['mintInfo'])
    }
  }
</script>