<template>
  <div class="home-swiper">
    <div class="swip" >
      <mt-swipe :auto="1000">
          <mt-swipe-item v-for="(list,index) in swiper" :key="index">
            <img :src="list.img" :alt="index">
          </mt-swipe-item>
        </mt-swipe>
        
    </div>
        
  </div>
</template>

<script>
export default {
  name:"HomeSwipe",
  data(){
    return{
      swiper:[
        {
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
        },
        {
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .home-swiper{
     width: 100%;
     height: 0;
      padding-top: percentage(740/1080);
      // padding-top: percentage(400 / 1080);
     position: relative;
      .swip{
       position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
        img{
         
             max-width: 100%;
           }
      }
    }
    
</style>