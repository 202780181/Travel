<template>
    <div>
      <div class="item" v-for="(item,index) of list" :key="index">
        <div class="item-title">
          <h3 class="mp-ticket-type border-bottom">
            <span class="mp-ticketype-ticket"></span>
            {{item.title}}
          </h3>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "list",
      props:{
          list:Array
      }
    }
</script>

<style lang="stylus" scoped>
  .item-title
    position relative
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .mp-ticket-type {
    overflow hidden
    position relative
    z-index 4
    height .88rem
    background #fff
    color #333
    font-size .32rem
    line-height .88rem
    text-indent .4rem
    .mp-ticketype-ticket {
      display inline-block
      position absolute
      width .36rem
      height .36rem
      top .26rem
      left 0
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right .1rem
      background-size .4rem 3rem
    }
  }
</style>
