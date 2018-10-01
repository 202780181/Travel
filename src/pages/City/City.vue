<template>
    <div>
      <city-header></city-header>
      <search></search>
      <city-list></city-list>
      <Alphabet></Alphabet>
    </div>
</template>

<script>
  import cityHeader from './components/Header'
  import Search from './components/search'
  import CityList from './components/list'
  import Alphabet from './components/Alphabet'
    export default {
        name: "City",
      components:{
        cityHeader,
        Search,
        CityList,
        Alphabet
      }
    }
</script>

<style lang="stylus" scoped>

</style>
