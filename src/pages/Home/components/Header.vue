<template>
    <div class="header">
      <div class="header-left">
        <router-link tag="div" to="/sweep" class="iconfont icon-saoma back-icon"></router-link>
      </div>
      <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题</div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont icon-jiantou arrow-icon"></span>
        </div>
      </router-link>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: 'Header',
        props:{
          city:String
        },
      computed:{
        ...mapState(['city'])
      }
    }
</script>

<style lang="stylus" scoped >
  @import "~styles/varibles.styl"
  .header
     display flex
     line-height .86rem
     background $bgColor
     color #fff
    .header-left
      width .84rem
      line-height 1.1rem
      float left
      font-size .4rem
      font-weight bolder
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      height .84rem
      padding-left .2rem
      line-height .84rem
      margin-top .14rem
      margin-left .2rem
      flex 1
      background #fff
      border-radius .1rem
      color #ccc
    .header-right
      margin-left .2rem
      margin-right .2rem
      float right
      font-size .4rem
      line-height 1.1rem
      text-align center
      color #fff
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
