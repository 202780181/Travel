<template>
    <div>
      <homeheader :city="city"></homeheader>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend  :list="recommendList"></home-recommend>
      <home-weekend :list="weekList"></home-weekend>
    </div>
</template>

<script>

import Homeheader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
 export default {
      name: 'home',
      data (){
        return{
          city:'',
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekList:[]
        }
      },
      components:{
        Homeheader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
      },
      methods:{
        gethomeinfo (){
          axios.get('/api/index.json')
            .then(this.getHomeinfosucc)
        },
        getHomeinfosucc(res){
          res =res.data
          const data = res.data
          if (res.ret && res.data) {
              this.city = data.city
              this.swiperList =data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekList = data.weekList

          }
        }
      },
      mounted (){
        this.gethomeinfo()
      }
    }
</script>

<style scoped>

</style>
