<template>
  <div  class="nb-header">
    <div  @click="findid">
    <mt-header  title="VIVO首页"></mt-header>
    
    </div>
    
  </div>
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
      console.log(this)
      
  
    }
  }

}

</script>

<style lang="scss" scoped>
  .nb-header {
    height: 45px;
    line-height: 45px;

    & .mint-header {
      background-color: rgb(23, 165, 111);
    }
  }
</style>
