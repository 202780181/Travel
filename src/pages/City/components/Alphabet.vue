<template>
    <div class="lsit">
      <ul>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Alphabet"
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
    right 0
    top 1.58rem
    bottom 0
    .item
      line-height .44rem
      text-align center
      color $bgColor
</style>
