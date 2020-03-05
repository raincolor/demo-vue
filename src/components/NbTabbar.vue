<template>
  <ul class="nb-tabbar">
    <router-link
      v-for="tab in tabs"
      :key="tab.path"
      class="nb-tabbar-item"
      active-class="current"
      tag="li"
      :to="tab.path"
    >
      <i v-html="tab.icon" />

      <!-- 不能用<i>{{tab.icon}}<i> 会默认为值,-->
      <span>{{tab.title}}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: Array
  }
}
</script>

<style lang="scss" scoped>
.nb {
  &-tabbar {
    height: 64px;
    display: flex;
    border-top: 1px solid #dedede;
    background-color: #f2f2f2;

    &-item {
      flex: 1;
      text-align: center;
      color: #666;

      &.current {
        color: #F00;
      }
      & > i {
        font-family: 'nbfont';
        font-size: 32px;
        line-height: 44px;
      }
      & > span {
        display: block;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
