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
import axios from 'axios'
import Homeheader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
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
            .then(function(res) {
              res=res.data
              if(res.ret){
                const data= res.data
                this.city=data.city
                this.iconList=data.iconList
                this.recommendList =data.recommendList

              }
            });
        }
      },
      computed:{

      },
      mounted (){
        this.gethomeinfo()
      }
    }
</script>

<style scoped>

</style>
