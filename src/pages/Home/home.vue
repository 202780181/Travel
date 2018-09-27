<template>
    <div>
      <homeheader></homeheader>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
    </div>
</template>

<script>
  import Homeheader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
    export default {
        name: 'home',
      components:{
        Homeheader,
        HomeSwiper,
        HomeIcons
      }
    }
</script>

<style scoped>

</style>
