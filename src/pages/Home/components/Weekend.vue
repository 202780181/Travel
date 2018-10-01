<template>
    <div class="lazy-load" id="weekend-trip">
      <h2 class="mp-modtitle">周末去哪儿</h2>
      <div>
        <div class="mp-product-item" v-for="item of list" :key="item.id">
          <a href="" :title="item.title" class="mp-fulllink">
            <div class="product-imgcontainer image-ready">
              <img :src="item.imgUrl">
            </div>
            <div class="mp-product-info">
              <p class="product-name">{{item.Tname}}</p>
              <p class="product-desc">{{item.Tdesc}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Weekend",
    props:{
      list:Array
    },
  }
</script>

<style lang="stylus" scoped>
    #weekend-trip
      .mp-modtitle
        height .8rem
        padding-left .26rem
        line-height .8rem
        color #212121
        font-size .35rem
      .mp-product-item
          position relative
          margin-bottom .1rem
          background #fff
          .mp-fulllink
            display block
            width 100%
            height 100%
            .image-ready
              overflow: hidden;
              height: 0;
              padding-bottom: 37.4375%;
              background: url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg) no-repeat center #dcdcdc;
              background-size: 100% 100%;
          .image-ready
            img
              opacity 1
              transition opacity 400ms
              width: 100%

          .mp-product-info
            position relative
            padding .14rem .2rem .2rem .2rem
            .product-name
              overflow hidden
              padding-right 1.4rem
              color: #212121
              font-size .38rem
              line-height .68rem
              white-space nowrap
              text-overflow ellipsis
            .product-desc
              overflow hidden
              padding-right 1.4rem
              color #616161
              font-size .34rem
              line-height .62rem
              white-space nowrap
              text-overflow ellipsis

</style>
