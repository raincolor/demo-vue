<template>
  <div class="mine">
    <div class="container">
      <div class="container-bj">
        <img src="/static/img/tou.jpg"
             alt="">
        <span class="user-name">{{userInfo.displayName}}</span>
        <p class="user-signature">不要被人言左右，要相信自己的判断</p>
      </div>

      <ul class="container-integral">
        <li><span>0</span><span>优惠券</span></li>
        <li><span>0</span><span>换鼓励金</span></li>
        <li><span>0</span><span>积分</span></li>
      </ul>

      <div class="container-order">
        <div class="container-order-header">
          <p class="container-order-header-left">我的订单</p>
          <p class="container-order-header-right">全部订单 ></p>
        </div>

        <ul class="container-order-btn">
          <li><i>&#xe603;</i><span>待付款</span></li>
          <li><i>&#xe604;</i><span>待收货</span></li>
          <li><i>&#xe602;</i><span>待评价</span></li>
          <li><i>&#xe617;</i><span>退货/退款</span></li>
        </ul>

      </div>

      <ul class="container-footer">
        <li>
          <div class="left"><i>&#xe61c;</i><span>我的收藏</span></div>
          <div class="right"><span>&#xe627;</span></div>
        </li>
        <li>
          <div class="left"><i>&#xe611;</i><span>我的收货地址</span></div>
          <div class="right"><span>&#xe627;</span></div>
        </li>
        <li>
          <div class="left"><i>&#xe611;</i><span>我的购物车</span></div>
          <div class="right"><span>&#xe627;</span></div>
        </li>
        <li>
          <div class="left"><i>&#xe62f;</i><span>扫码分享</span></div>
          <div class="right"><span>&#xe627;</span></div>
        </li>
        <li>
          <div class="left"><i>&#xe600;</i><span>关于我</span></div>
          <div class="right"><span>&#xe627;</span></div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 5rem;
  // position: absolute;
  // top: 1.45rem;

  &-bj {
    width: 100%;
    height: 100%;
    background: url(/static/img/bj.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > img {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
      border: 0;
      vertical-align: middle;
    }

    & > span {
      color: #fff;
      font-size: 0.5rem;
      margin: 0.2rem 0;
    }
    & > p {
      color: #fff;
      font-size: 0.35rem;
    }
  }
  &-integral {
    width: 100%;
    height: 2rem;
    background: #fff;
    display: flex;
    justify-content: center;

    & li {
      width: 33%;
      height: 100%;
      font-size: 0.36rem;
      line-height: 0.6rem;
      font-weight: 500;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      color: #333;
    }
  }

  &-order {
    width: 100%;
    height: 3.5rem;
    background: #fff;
    display: block;
    margin-bottom: 0.15rem;
    margin-top: 0.15rem;
    font-size: 0.35rem;

    &-header {
      width: 100%;
      height: 1.5rem;

      &-left {
        float: left;
        display: block;
        line-height: 1.5rem;
        margin-left: 0.5rem;
        font-size: 0.4rem;
      }
      &-right {
        float: right;
        line-height: 1.5rem;
        margin-right: 0.6rem;
        font-size: 0.4rem;
      }
    }

    &-btn {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      & > li {
        width: 25%;
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;
        text-align: center;

        & > i {
          font-family: "lclfont";
          font-size: 0.7rem;
          color: #00ffee;
          font-weight: 500;
        }
      }
    }
  }
  &-footer {
    margin-bottom: 1.45rem;

    li {
      width: 100%;
      height: 1.41rem;
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      color: #232323;
      .left {
        float: left;
        padding-left: 0.47rem;
        i {
          font-size: 0.5rem;
          font-family: "lclfont";
        }
        span {
          font-size: 0.37rem;
          padding-left: 0.1rem;
        }
      }
      .right {
        float: right;
        padding-right: 0.4rem;
        font-size: 0.5rem;

        span {
          font-family: "lclfont";
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>
