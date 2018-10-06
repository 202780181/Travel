<template>
    <div class="container" @click="gallayClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,key) in imgs" :key="key">
            <img class="gallary-img" :src="item">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Gallary",
      data (){
          return {
            swiperOptions:{
              pagination:'.swiper-pagination',
              paginationType:'fraction',
              observerParents:true,
              observer:true
            }
          }
      },
      props:{
          imgs:{
            type:Array,
            default (){
              return ['http://img1.qunarzz.com/sight/p0/201309/23/d1bbdb556d10383ac8d65eac.jpg_r_800x800_a4f21166.jpg']
            }
          }
      },
      methods:{
        gallayClick (){
          this.$emit('close')
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
      overflow inherit
    .container
      display flex
      z-index 99
      position fixed
      flex-direction column
      justify-content center
      left 0
      top 0
      right 0
      bottom 0
      background #000
      .wrapper
        height 0
        width 100%
        padding-bottom 100%
        .gallary-img
          width 100%
        .swiper-pagination
          color #fff
          bottom -1rem

</style>
