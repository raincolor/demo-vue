/* eslint-disable no-return-assign */
<template>
  <div class="lcl-myorder">

    <ul class="order">
      <li v-for="order in orders"
          :key="order.id"
          tag="li"
          @click="switchOrder(order.id)"
          :class="{'current':currentId === order.id}">
        {{order.title}}
        <!-- <li class="current"
            @click="switchOrder">待付款</li>
        <li>待收货</li>
        <li>待评价</li>
        <li>退货/退款</li> -->
      </li>
    </ul>
    <div class="myorder-warp">
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      fghjgjgjgjg<br />
      end<br />
    </div>
  </div>
</template>

<script>

export default {
  name: 'myorder',
  data () {
    return {
      orders: [{
        id: 1,
        title: '待付款'
      }, {
        id: 2,
        title: '待收货'
      }, {
        id: 3,
        title: '待评价'
      }, {
        id: 4,
        title: '退货/退款'
      }
      ],
      currentId: null
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   // 这里还没有this，所以，想要使用this，可以在next里传一个回调，这个回
  //   // 这个回调的参数就是this，当然你不能把this当成参数往下传

  //   next(vm => {

  //   })
  // },
  methods: {
    switchOrder (id) {
      // console.log(id)
      this.$router.push({
        name: 'order',
        params: {
          id
        }
      })
      const hasId = Boolean(this.$route.params.id)

      this.currentId = hasId
        ? Number(this.$route.params.id)
        : this.orders[0].id
    }
  }
}
</script>

<style lang="scss" scoped>
.lcl-myorder {
  .order {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.5rem;
    height: 1rem;
    width: 100%;
    // background: #ccc;
    // color: #00ffee;
    color: #999;
    & > li {
      // width: 25%;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 2px solid transparent;
      // border-left: 1px solid #999;
    }
    .current {
      color: #f00;
      border-bottom: 2px solid #f00;
    }
  }
  .myorder-warp {
    // flex: 1;
    width: 100%;
    // height: 15rem;
    background: #eee;
    font-size: 0.5rem;
    line-height: 0.7rem;
  }
}
</style>
