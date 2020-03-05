<template>

  <div class="detail-main">
   <mt-header title="详情">
  <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <div class="detail-box"
         v-for="list in newsDetail"
         :key="list.id"
         v-html="list.newsDetail">

    </div>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'newsDetail',
  data () {
    return {
      newsDetail: []
    }
  },
  created () {
    // console.log('111')
    const _this = this
    // let id = this.$route.query.id
    axios.get('/static/ceshi.json').then(function (res) {
      // console.log('111')
      _this.newsDetail = res.data.data.news

      // if (res.data.data.news[index].id === _this.$route.query.id) {
      //   _this.newsDetail.push(res.data.data.news[index])
      // }
    })
    // const _this = this
    // let id = this.$route.query.id
    // axios.get('/static/ceshi.json').then(function (res) {
    //   for (let i = 0; i < res.data.data.news.length; i++) {
    //     if (res.data.data.news[i].id === id) {
    //       _this.newsDetail.push(res.data.data.news[i])
    //     }
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
.detail {
  background-color: #811b1b;
  &-box {
    width: 90%;
    margin: auto;
    text-align: justify;
    font-weight: 400;
    padding-top: 1.45rem;
    font-size: 0.4rem;
    line-height: 0.59rem;
  }
}
</style>
