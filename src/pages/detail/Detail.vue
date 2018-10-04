<template>
  <div>
    <banner></banner>
    <Header></Header>
  </div>
</template>

<script>
    import banner from './components/Banner'
    import Header from './components/Header'
    export default {
        name: "Detail",
      components:{
        banner,
        Header
      }
    }
</script>

<style  lang="stylus" scoped>

</style>
