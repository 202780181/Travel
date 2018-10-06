<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="item"></div>
  </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/list'
    export default {
        name: "Detail",
      components:{
        DetailBanner,
        DetailHeader,
        DetailList

      },
      data (){
          return {
            list:[{
              title:'成人票'
            },{
              title:'学生票'
            },{
              title:'儿童票'
            },{
              title:'特价票'
            }]
          }
      }
    }
</script>

<style  lang="stylus" scoped>
  .item
    height 50rem
</style>
