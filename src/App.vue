<template>
  <div id="app">
    <!--<img src="./assets/logo.png" @click="toTest">-->
    <!--组件化开发单页面思想,所有组件运行在app.vue上-->
    <router-view></router-view>
    <!--<Hello/>-->
  </div>
</template>

<script>
  // import Hello from './components/HelloWorld';
  // import test from './components/test';
  export default {
    name: 'App',
    components: {
      // Hello: 'Hello',
      // test: 'test'
    },
    // mounted: function(){
    //   this.$router.push({name: 'test'});
    // }
  };

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
