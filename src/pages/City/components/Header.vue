<template>
    <div class="Header">
      城市选择
      <router-link to="/">
        <div class="iconfont icon-fanhui back-icon"></div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .Header
    position relative
    height $headHeight
    line-height $headHeight
    overflow hidden
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .iconfont
      position absolute
      top .01rem
      left .2rem
      font-size .4rem
      color #fff
      font-weight bolder
</style>
