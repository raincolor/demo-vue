







<template>
<div>

  <div class="calssify-con" >
        <div class="calssify-left" ref="wrapper">
            <ul class="calssify-left-ul" >
                <li v-for="(list,index) in left" :key="index" @click="qiehuan(index)" :class="{active:index===classifyIndex}">
                    {{list.name}}
                </li>
            </ul>
        </div>
        <div class="calssify-rigth" ref="wrapper2">
            <ul class="calssify-left-ul">
                <li v-for="(list,index) in right.rigth_data" :key="index" @click="goDetails(list.id)">
                     <img v-lazy="list.img">
                    <span>{{list.name}}</span>
                </li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      right:[],
      left: [],
      rigth: [],
      list: [],
      ce: [],
      key2: "",
      classifyIndex: 0
    };
  },
  
  //    mounted(){
  //       this.$nextTick(() => {
  //         this.scroll = new BScroll(this.$refs.wrapper, {})
  //         this.scroll = new BScroll(this.$refs.wrapper2, {})
  //       })
  //   },
  computed: {
    ...mapGetters(["this.$store.state.sindex"])
  },
  created() {
    var _this = this;
    this.$ajax.get("/static/ceshi.json").then(function(res) {
      console.log(res)
     _this.left = res.data.data.classify.left;
      _this.list = res.data.data.classify.right;
      _this.right = _this.list[0];
    });
  },
  methods: {
    
    qiehuan(index) {

      
      this.classifyIndex = index;
      this.right = this.list[index];
    },
    goDetails(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.active 
    border-left 0.5rem  solid  red
    background #ffffff
    color #199cfe


.calssify-con {
    display: flex;

    

    .calssify-left {
        flex 1;
        width 5rem;
        height 100%;
        background #f6f6f6;
        

        li {
            height: 3rem;
            line-height:3rem;
            text-align: center;
            font-size 0.85rem
        }
    }

    .calssify-rigth {
        flex: 3.5;
        height: 100%;
        background: white;
        margin-bottom: 4rem;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                display: flex;
                flex-direction: column;
                text-align: center;
                width: 33%;
                margin-top: 0.3rem;
                font-size: 0.34rem;
                float: left;

                img {
                    width: 3.98rem;
                    display: block;
                    margin: 1rem;
                }

                span {
                    color: #999;
                    line-height: 1.1rem;
                    font-size: 0.6rem;
                }
            }
        }
    }
}
</style>