<template>
  <div>
    <HomeSwipe/>
    

 <HomeList/> 
  <HomeContainer/> 
  </div>
</template>

<script>
import HomeSwipe from '@/components/HomeSwipe'
import HomeList from '@/components/HomeList'
import HomeContainer from '@/components/HomeContainer'
export default {
 components:{
    HomeSwipe,
    HomeList,
    HomeContainer,
    
  }

}
</script>

<style scoped>
ul{
  display: flex;
}
</style>
