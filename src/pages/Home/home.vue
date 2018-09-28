<template>
    <div>
      <homeheader></homeheader>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
    </div>
</template>

<script>
  import Homeheader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
    export default {
        name: 'home',
      components:{
        Homeheader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
      }
    }
</script>

<style scoped>

</style>
