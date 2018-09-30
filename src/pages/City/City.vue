<template>
    <div>
      <city-header></city-header>
      <search></search>
    </div>
</template>

<script>
  import cityHeader from './components/Header'
  import Search from './components/search'
    export default {
        name: "City",
      components:{
        cityHeader,
        Search
      }
    }
</script>

<style lang="stylus" scoped>

</style>
