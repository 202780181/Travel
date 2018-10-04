<template>
    <div>
      <homeheader></homeheader>
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
import { mapState } from 'vuex'
    export default {
        name: 'home',
      data (){
            return{
              lastCity:'',
              swiperList:[],
              iconList:[],
              recommendList:[],
              weekList:[]
            }
      },
      computed:{
        ...mapState(['city'])
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
          axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeinfosucc)
        },
        getHomeinfosucc(res){
          res =res.data
          const data = res.data
          if (res.ret && res.data) {
              this.swiperList =data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekList = data.weekList

          }
        }
      },
      mounted (){
        this.lastCity=this.city
        this.gethomeinfo()
      },
      activated (){
        if(this.lastCity !==this.city){
          this.lastCity= this.city
          this.gethomeinfo()
        }
      }
    }
</script>

<style scoped>

</style>
