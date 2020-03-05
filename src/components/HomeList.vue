<template>
   <div class="HomeList">
    <ul>
        <li><div @click="xuangou"><img src="/static/img/xuangou.jpg" alt="选购"></div></li>
        <li><div  @click="parts"><img src="/static/img/peijian.jpg" alt="配件"></div></li>
        <li><div @click="btn"><img src="/static/img/pingbao.jpg" alt="屏保"></div></li>
        <li><div @click="btn"><img src="/static/img/dingzhi.jpg" alt="定制"></div></li>
    </ul>
    </div>
</template>

<style lang="stylus" scoped>

.HomeList
    width 100%;
    height 5.5rem;
    background white;
    border-bottom 1px solid #f4f4f4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    li
        width: 25%;
        height 100%;
        float: left;
        margin: auto;
        div
            width: 4.58rem;
            height: 4.59rem;
            margin: auto;
        img 
            display: block;
            width: 100%;
            height: 100%
</style>

<script>
export default {
  methods: {
      xuangou(){
      this.$router.push({path:"/mall"})
    },
    parts(){
      this.$router.push({path:"/parts"})
    },
    btn(){
      MessageBox('提示', 'Vue的第一个项目能给个star么？Thank you');
    }
  },
}
</script>

