<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
            swiperList:[
              {
                id:'001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg'
              },
              {
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
              },
              {
                id:'003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg'
              }
              ]
          }
      },
      components: {
        swiper,
        swiperSlide
      },
    }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    .swiper-img
      width 100%




</style>
