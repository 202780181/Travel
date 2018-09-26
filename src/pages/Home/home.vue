<template>
    <div>
      <homeheader></homeheader>
      <swiper></swiper>
    </div>
</template>

<script>
  import Homeheader from './components/Header'
  import Swiper from './components/Swiper'
    export default {
        name: 'home',
      components:{
        Homeheader,
        Swiper
      }
    }
</script>

<style scoped>

</style>
