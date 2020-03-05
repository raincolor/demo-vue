<template>
  <div class="container">
    <router-link class="container-box"
                 v-for="list in NewsContainer"
                 :key="list.id"
                 tag="div"
                 :to="{
           path: '/newsDetail', query: { plan: 'list.id' }
         }">
      <div class="container-title">
        {{list.newsTitle}}
      </div>
      <div class="container-img">
        <img :src="list.newsImg"
             alt="list.title">
      </div>
      <div class="container-con">
        {{list.newsCon}}
      </div>
      <div class="container-time">
        发布日期 2019-3-18
      </div>
      <router-view />

    </router-link>
  </div>

</template>

<script>

export default {
  // beforeRouteEnter (to, from, next) {
  //   // 在这里还没有this，若要使用this，可以在next里传一个回调
  //   // 这个回调的参数就是this，但是不能把this当成回调往下传，因为this是保留关键字
  //   next(vm => {
  //     vm.$ajax.getCateNav().then(resp => {
  //       vm.newsDetail = resp.data.data.list.newsDetail
  //     })
  //   })
  // },
  // name: 'NewsContainer',
  components: {

  },
  data () {
    return {
      NewsContainer: []
      // newsDetail: []
    }
  },
  created () {
    console.log(this)
    const _this = this
    this.$ajax.get('/static/ceshi.json').then(function (res) {
      _this.NewsContainer = res.data.data.news
    })
  },
  methods: {
    // toDetails (id) {
    //   //
    //   this.$router.push({
    //     name: 'newsDetail',
    //     params: {
    //       id
    //     }
    //   })
    // }
  }

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  // margin-top: 1.45rem;
  padding-bottom: 1.45rem;

  &-box {
    width: 100%;
   margin: 1rem 0;
    background: #fff;
    border-bottom: 1px dotted #ccc;
    text-decoration: none;
  }
  &-title {
    color: #505b63;
    width: 95%;
    margin: auto;
    text-align: left;
    font-size: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  &-img {
    width: 95%;
    height: auto;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      border: 0;
      vertical-align: middle;
    }
  }
  &-con {
    width: 95%;
    margin: auto;
    font-size: 1rem;
    line-height: 1rem;
    padding-top: 0.3rem;
    color: #696969;
    text-align: justify;
    font-size: 0.3rem;
  }
  &-time {
    width: 95%;
    margin: auto;
    padding-top: 0.2rem;
    font-size: 0.3rem;
    color: #696969;
  }
}
</style>
