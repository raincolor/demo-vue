<template>
 <mt-header title="我的资料">
  <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>

<script>
export default {
  props: ['tabs'],

  data(){
    return{
      a:this.$route.fullPath
    }
  },
 methods:{
    findid(){
     this.$router.go(-1)
      
      
  
    }
  }

}

</script>

<style lang="scss" scoped>
  .nb-header {
    height: 45px;
    line-height: 45px;
   
    justify-content: space-around;

    & div {
      float: left;
      background-color: rgb(23, 165, 111);
      width: 10%;
    }
     p {  color: black;
         width: 90%;
         text-align: center;}

  }
</style>
