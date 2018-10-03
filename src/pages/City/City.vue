<template>
    <div>
      <city-header></city-header>
      <search :cities="cities"></search>
      <city-list :cityes="cities"
                 :hotCities="hotCities"
                 :letter="letter">
      </city-list>
      <Alphabet
        :cityes="cities"
        @change="headLetterChange"
      ></Alphabet>
    </div>
</template>

<script>
  import cityHeader from './components/Header'
  import Search from './components/search'
  import CityList from './components/list'
  import Alphabet from './components/Alphabet'
  import axios from 'axios'
    export default {
        name: "City",
      data (){
        return {
          cities:{},
          hotCities:[],
          letter:''
        }
      },
      components:{
        cityHeader,
        Search,
        CityList,
        Alphabet
      },
      methods:{
        getcityinfo(){
          axios.get('/api/city.json')
            .then(this.handleGetCityInfosucc)
        },
        handleGetCityInfosucc(res){
          res = res.data
          if (res.ret && res.data){
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        },
        headLetterChange(letter){
          this.letter =letter
        }
     },
      mounted (){
        this.getcityinfo()
      }
    }
</script>

<style lang="stylus" scoped>

</style>
