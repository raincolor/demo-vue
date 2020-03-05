<template>
<div class="goodDetail" id="transitionName">
    <mt-button  @click="fanhui"  style="color:red;">back</mt-button>
    <Detail-Header    title="商品详情"  > <mt-button  style="color:red;  background:#ff5500" icon="back">back</mt-button>  </Detail-Header>
      <div class="goodDetailList">
            <ul style="background: white;">
                <li v-for="(goodDetail,index) in goodDetails" :key="index">
                    <div class="goodDetaiSwipe">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item v-for="list in goodDetail.homeSwipe"> 
                                <img :src="list.swipe" alt="图片">
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                    <div class="goodDetailMain">
                        <div class="gooDetailNumber">商品编号：{{goodDetail.number}}</div>
                        <div class="goodDetailName">{{goodDetail.homeName}}</div>
                        <div style="text-align: justify;font-size: 0.348rem;">
                            <span style="margin-left:-.2rem;color:#FF4B3D;">【{{goodDetail.homeBright}}】</span>
                            {{goodDetail.homeTitle}}
                        </div>
                        <div class="goodDetailColor">{{goodDetail.color}}</div>
                        <div class="goodDetailPaid">￥{{goodDetail.homePrice}}</div>
                    </div>
                    
                    <div class="goodDetailValue">
                        <div class="_Value">购买数量：</div>
                        <div class="_cartNumber" style="margin-left: 2rem;">
                            <a href="javascript:;" @click="jian(index)" class="goodDetailReduce">-</a>
                            <input type="text"   v-model="goodDetail.homeValue" readonly="readonly"/>
                            <a href="javascript:;" @click="jia(index)" class="goodDetailAdd">+</a>
                        </div>
                    </div>

                    <Detail-Layer></Detail-Layer>
                  
                    <div class="goodDetailBox">
                        <mt-navbar v-model="selected" >
                            <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
                            <mt-tab-item id="tab-container2">参数</mt-tab-item>
                        </mt-navbar>


                        <mt-tab-container v-model="selected" swipeable>
                            <mt-tab-container-item id="tab-container1">
                               <div class="goodDetailImg">
                                   <p v-for="Image in goodDetail.Images">
                                       <img v-bind:src="Image.one" alt="详情图片">
                                    </p>
                                </div>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="tab-container2">
                                <div class="peizhi" v-html="goodDetail.homePeizhi"></div>
                            </mt-tab-container-item>
                        </mt-tab-container>

                    </div>


                    <div class="goodDetailFooter">
                        <div class="left">
                            <div class="cart" @click="pay">
                                <div class="cartlength">{{cartlength}}</div>
                                <i class="iconfont">&#xe607;</i>
                                <span>购物车</span>
                            </div>
                            
                                <div class="collection-box" >
                                    <i class="iconfont ">&#xe602;</i>
                                    <span>收藏</span>
                                </div>
                                <div class="collection-box" @click="addCollection(goodDetail)"  v-show="$store.state.ces">
                                    <i class="iconfont icon-shoucangxuanzhong1" style="color:red"></i>
                                    <span style="color:red">取消</span>
                                </div>
                            
                            <div class="shop">
                               <i class="iconfont"> &#xe601;</i>
                                <!-- <i class="iconfont icon-xuanzekuangxuanzhong" v-show="!$store.state.collection"></i>
                                <i class="iconfont icon-xuanzekuangxuanzhong" v-show="$store.state.collection" style="color:red"></i> -->
                                <span>店铺</span>
                            </div>
                        </div>
                        <div class="rigth">
                            <div class="add">
                                <a href="javascript:void(0);" @click="add(goodDetail)">加入购物车</a>
                            </div>
                            <div class="purchase">
                                <a href="javascript:void(0);" @click="pay(goodDetail.id,goodDetail.homeValue)">提交订单</a>
                            </div>
                        </div>
                       
                    </div>
                    
                </li>
            </ul>
      </div>
  </div>
</template>

<script >
import { Toast,MessageBox,Navbar,TabItem,TabContainer,TabContainerItem } from "mint-ui";
import { mapGetters, mapMutations } from "vuex";
import DetailHeader from "./component/DetailHeader";
import DetailLayer from "./component/DetailLayer";

export default {
  name: "goodDetail",
  data() {
    return {
      active: "1",
      goodDetailHeader: "商品详情",
      selected: "tab-container1",
      goodDetails: [],
      cartlength: 0
    };
  },
  components: {
    DetailHeader,
    DetailLayer
  },
  computed: {   
    paid: function() {
      var paid = 0;
      for (var i in this.goodDetails) {
        paid += this.goodDetails[i].value * this.goodDetails[i].price;
      }
      return paid;
    }
  },
//   computed: {
//     ...mapGetters(
//         ["this.$store.state.carts"],
//         ["this.$store.state.todos"],
//         ["this.$store.state.collection"],
//         ["this.$store.state.ces"]
//     )
//   },
  mounted() {
    if (this.$store.state.carts != undefined) {
      this.cartlength = this.$store.state.carts.length;
    }
  },
  created() {
    var _this = this;
    var id = this.$route.query.id;
    this.$ajax.get("/static/ceshi.json").then(res => {
      for (var i = 0; i < res.data.data.home.length;i++){
        if (res.data.data.home[i].id == id ) {
            _this.goodDetails.push(res.data.data.home[i]);
        }
      }
    });

    this.$ajax.get("/static/ceshi.json").then(res => {
      for (var i = 0; i < res.data.data.set.length;i++){
        if (res.data.data.set[i].id == id ) {
            _this.goodDetails.push(res.data.data.set[i]);
        }
      }
    });
   
  },

  methods: {
...mapMutations([
      'addToCart'
    ]),

    addCollection(index) {
      this.$store.state.ces=!this.$store.state.ces
       var data={
           id:index.id,
           img:index.homeImg,
           name:index.homeName,
           price:index.homePrice
       }
        this.$stor.dispatch("setGoods",data)
    },
    // 点击按钮时，首先判断该商品是否在购物车已存在，如果存在则不再加入
    add: function(index) {
        console.log(this.goodDetails)
      var idExist = this.$store.state.carts.find(todo => {
        return todo.id == index.id;
      });

      if (!idExist) {
        var data = {
          id:index.id,
          name:index.homeName,
          price:index.homePrice,
          value:index.homeValue,
          img:index.homeImg,
          danx1uan: ""
        };
        this.$store.dispatch('setCart', data);
        // this.$store.commit("SET_CARTS",data);
        this.cartlength = this.$store.state.carts.length;
        Toast({
          message: "加入购物车成功！",
          iconClass: "iconfont icon-goumaichenggong-copy",
          duration: 950
        });
      } else {
        MessageBox("提示", "商品已存在购物车");
      }
    },
    jia: function(index) {
        console.log(this.goodDetails[0])
      this.goodDetails[index].homeValue++;
  
    },
    jian: function(index) {
        console.log(this)
      if (this.goodDetails[index].homeValue == 1) {
        this.goodDetails[index].homeValue = 1;
      } else {
        this.goodDetails[index].homeValue--;
      }
    },
    //返回上一级
    fanhui: function() {
      this.$router.go(-1);
    },
    pay: function(id,value) {
        console.log(value)
        this.$router.push({
            path:"/cart1"
            
        })
        // Toast({
        //     message: `成功支付了${this.paid}元`,
        //     iconClass: "iconfont icon-goumaichenggong",
        //     duration: 750
        // });
      // alert(`成功支付了${this.paid}元`)
    //   var data = {
    //     id: this.goodDetails[index].id,
    //     name: this.goodDetails[index].homeName,
    //     price: this.goodDetails[index].homePrice,
    //     image: this.goodDetails[index].homeImg,
    //     value: this.goodDetails[index].homeValue,
        // order: this.goodDetails[index].order,
        // color: this.goodDetails[index].color,
        // number: this.goodDetails[index].number
    //   };
    //   this.$store.commit("addorder", data);
    // }
    }
  }
};
</script>

<style lang="stylus" scoped >
// .goodDetail {
// width: 100%;
// height: 100%;
// z-index: 999;
// top: 0;
// left: 0;
// background: white;
// }

.iconfont{
    font-family:"nbfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.peizhi {
    width: 90%;
    margin: auto;
    div{
        margin-bottom .5rem;
        margin-top .5rem;
    }
    h3 {
        height: 2rem;
        line-height: 2.3rem;
        font-size: 0.5rem;
        border-bottom: 1px solid #ccc;
    }
    span {
        font-size: 0.38rem;
        color: #888;
        margin-top: .3rem;
        display: block;
    }
    p {
         height .55rem
        color: #888;
    }
}

.cartlength {
    width: 25px;
    height: 15px;
    position: absolute;
    top: 1px;
    left: 30px;
    background: #f81301;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    color: white;
}

.goodDetailList {
    margin-bottom: 1rem;
    padding-top: 1.45rem;
}

.goodDetailHeader {
    width: 100%;
    z-index: 1;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 12px;
    background: white;
    position: fixed;
    box-shadow: 0 0 10px #cecece;
    text-align: center;
    font-size: 0.71rem;
}

.goodDetailHeader i {
    display: block;
    float: left;
    height: 50px;
    padding-left: 0.3rem;
    font-size: 0.71rem;
    color: black;
}

.goodDetaiSwipe {
    height: 10rem;
    margin: 1rem 0 1.5rem;
   
}

.goodDetaiSwipe img {
   height :100%;
    
    display: block;
     
    margin: 0 auto;
    
}

.goodDetailMain {
    /* height: 1.8rem; */
    background: white;
    border-bottom: 1px solid #cecece;
    // border-top: 1px solid #cecece;
    padding: 0.4rem;
    margin-top: -15px;
}

// .goodDetailBox {
// height: 1px;
// }
.goodDetailName {
    color: black;
    font-weight: 400;
    font-size: 0.5rem;
    line-height 1rem
}

.goodDetailPaid {
    color: #f81200;
    font-size: 1rem;
    margin-top: 0.5rem;
}

.goodDetailFooter {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 3rem;
    background: #f08850;
    border-top: 1px solid #efefef;

    .left {
        width: 45%;
        height :100%
        float: left;
        position: relative
        font-size: .5rem;
        display:flex;
        justify-content :space-saround
        align-items:center
        &>div {
            width 33%;
            height 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
             align-items:center
        }
    }

    .rigth {
        width: 55%;
        float: right;

        .add {
            a {
                display: block;
                width: 50%;
                
                line-height: 3rem;
                text-align: center;
                background: #FF9800;
                color: white;
                font-size: 0.5rem;
                float: left;
            }
        }

        .purchase {
            a {
                float: left;
                display: block;
                width: 50%;
               
                line-height: 3rem;
                text-align: center;
                color: white;
                font-size: 0.5rem;
                background: #E3211E;
            }
        }
    }
}

.gooDetailNumber {
    display: none;
}

.add a {
}

.purchase a {
}

.goodDetailImg {
    margin-top: 4px;
    margin-bottom: 6px;
}

.goodDetailImg img {
    width: 100%;
    height: auto;
    display: block;
}

table td {
    font-size: 0.31rem;
    text-align: center;
    color: #000;
}

.goodDetailValue {
    height: 2rem;
    border-bottom: 1px solid #cecece;
    padding: 0.4rem;
}

.goodDetailAdd {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    display: block;
    background: white;
    float: left;
    border: 1px solid #b2b2b2;
    border-left: none;
    text-align: center;
    font-size: 0.5rem;
    color: black;
}

.goodDetailReduce {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    display: block;
    background: white;
    float: left;
    border: 1px solid #b2b2b2;
    border-right: none;
    text-align: center;
    font-size: 0.5rem;
    color: black;
}

._cartNumber input {
    width: 2rem;
    height: 1.9rem;
    line-height: 2rem;
    float: left;
    border: 1px solid #b2b2b2;
    text-align: center;
    color: black;
}

._Value {
    float: left;
    margin-top: 0.2rem;
    font-size 0.5rem
}

.goodDetailColor {
    display: none;
}
</style>
