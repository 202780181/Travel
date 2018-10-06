<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1505/c7/c77ffdc12cfba81d.water.jpg_600x330_fe19d8a0.jpg" alt="">
        <div class="banner-info">
          <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
          <div class="banner-number">
            <span class="iconfont icon-tupian"></span>
            <em class="mp-imgswipeicon-number">39</em>
          </div>
        </div>
      </div>
      <fade-animaction>
        <common-gallary :imgs="imgs"
                        v-show="showGallary"
                        @close="handleGallayClose"
        ></common-gallary>
      </fade-animaction>
    </div>
</template>

<script>
  import FadeAnimaction from 'common/fade/Fade'
  import commonGallary from 'common/gallary/Gallary'
    export default {
        name: "Banner",
      data (){
        return {
          showGallary:false,
          imgs:['http://img1.qunarzz.com/sight/p0/1610/41/41a9abe9685f22f1a3.water.jpg_r_800x800_f94a847b.jpg',
           'http://img1.qunarzz.com/sight/p0/1610/ec/ecb2634a0dabfad5a3.water.jpg_r_800x800_49e3bfe9.jpg',
            'http://img1.qunarzz.com/sight/p0/201407/04/55013bf95fecabcc59bb2b9e6811986a.jpg_r_800x800_ff64d150.jpg'
           ]
        }
      },
      components:{
        commonGallary,
        FadeAnimaction
      },
      methods: {
        handleBannerClick () {
          this.showGallary=true
        },
        handleGallayClose () {
          this.showGallary=false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      color #fff
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
        margin-bottom .2rem
      .banner-number
        padding 0 .4rem
        line-height .4rem
        height .5rem
        border-radius .2rem
        margin-top .1rem
        margin-right .2rem
        background rgba(0,0,0,.6)
        .icon-tupian
          position relative
          top 0.07rem
</style>
