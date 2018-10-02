<template>
    <div class="lsit">
      <ul>
        <li class="item" v-for="(item,key) of cityes" :key="key">{{key}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Alphabet",
      props:{
        cityes:Object
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .lsit
    display flex
    flex-direction column
    justify-content center
    position absolute
    width .4rem
    right .1rem
    top 1.58rem
    bottom 0
    .item
      line-height 0.54rem
      text-align center
      color $bgColor
</style>
