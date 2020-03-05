<template>
  <div class="nb-app">
    <router-view name="header" />
    <!-- <div  @click="findid">555555555555555555</div> -->

    <div class="nb-body">
      <router-view />
    </div>
    <div @click="findid">
      <router-view :ta="id" :tabs="tabs1" name="tabbar" />
    </div>
    <!-- <router-view  @click="findid" :tabs="tabs1" name="tabbar"/> -->
  </div>
</template>

<script>
import routes from "./router/routes";
export default {
  name: "App",
  data() {
    return {
      id: "",
      iddd: routes.filter(route => route.path === this.$route.fullPath),
      tabs1: routes.filter(route => route.isTabbar === true)
    };
  },
  created() {
    this.$ajax
      .get("http://www.xiongmaoyouxuan.com/api/tab/5?start=0")
      .then(resp => {
        console.log(resp);
      });
  },

  beforeRouteUpdate(to, from, next) {
    debugger;
    alert(23);
    // react to route changes...
    // don't forget to call next()
  },
  // watch: {
  //   $route(to, from) {
  //     debugger;
  //     alert(23);
  //     // 对路由变化作出响应...
  //   }
  // },
  methods: {
    findid() {
      console.log(this.$route.fullPath);
      if (this.$route.fullPath == "/home") {
        this.id = "VIVO";
      }
      if (this.$route.fullPath == "/mall") {
        this.id = "商品分类";
      }
      if (this.$route.fullPath == "/cart") {
        this.id = "咨询动态";
      }
      console.log(this.id);
    }
  }
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
body {
  height: 100%;
  overflow: hidden;
}
.nb-app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nb-body {
  flex: 1;
  overflow-x: hidden;
  // overflow: auto;
}

@font-face {
  font-family: "nbfont"; /* project id 1103772 */
  src: url("//at.alicdn.com/t/font_1103772_2yyhhm5ai61.eot");
  src: url("//at.alicdn.com/t/font_1103772_2yyhhm5ai61.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1103772_2yyhhm5ai61.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1103772_2yyhhm5ai61.woff") format("woff"),
    url("//at.alicdn.com/t/font_1103772_2yyhhm5ai61.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1103772_2yyhhm5ai61.svg#iconfont") format("svg");
}
</style>
