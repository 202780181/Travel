<template>
    <div class="search">
      <input class="serach-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name: "search",
      methods: {
        handleCityClick(city){
          this.$store.dispatch('change',city)
          this.$router.push('/')
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem .13rem
    background $bgColor
    .serach-input
      box-sizing border-box
      padding 0 .1rem
      height .72rem
      line-height .72rem
      width 100%
      text-align center
      border-radius .1rem
      border 0
      outline none
      color #666

</style>
