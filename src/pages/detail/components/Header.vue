<template>
  <div>
    <router-link tag="div" to="/" class="headers-abs" v-show="showAbs">
      <div class="iconfont icon-fanhui back-icon"></div>
    </router-link>
    <div class="headers-fixed" v-show="!showAbs" :style="optionStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont icon-fanhui back-icon"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
      data (){
          return {
            showAbs:true,
            optionStyle:{
              opacity :0,

            }
          }
      },
      methods:{
        handleScroll () {
          const  top = document.documentElement.scrollTop
          if (top>70){
            let opacity = top / 140
            opacity = opacity >1 ? 1:opacity
            this.optionStyle = { opacity }
            this.showAbs=false
          }else {
            this.showAbs=true
          }
        }
      },
      activated () {
        window.addEventListener('scroll', this.handleScroll)
      },
      deactivated () {   // 解绑全局事件
         window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .headers-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    color #fff
    text-align center
    line-height .8rem
    background rgba(0,0,0,.7)
  .headers-fixed
    position fixed
    top 0
    left 0
    right 0
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
