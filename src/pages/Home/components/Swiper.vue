<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swipershow">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      name: "Swiper",
      props:{
        list:Array
      },
      data () {
          return {
            swiperOption: {
              notNextTick: true,
              autoplay: 3000,
              grabCursor : true,
              setWrapperSize :true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              observeParents:true,
              loop:true,
            },
          }
      },
      components: {
        swiper,
        swiperSlide
      },
      computed:{
        swipershow (){     //解决页面刚渲染时显示的总是第二页的问题
          return this.list.length
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom: 27.25%;
    .swiper-img
      width 100%




</style>
