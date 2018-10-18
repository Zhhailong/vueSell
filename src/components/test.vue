<template>
  <div @click="toHello">111122222</div>
</template>

<script>
  export default {
    name: 'test',
    created: function(){
      this.$http.get('/api/seller').then((response)=>{
        var res =response.data.data;
        console.log("1111");
        console.log(JSON.stringify(res));
      }).catch((response)=>{
        console.log(response);
      })
    },
    methods: {
      toHello: function () {
        this.$router.replace({name: 'HelloWorld', params: {name: "小张"}})  //页面跳转还有push
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
