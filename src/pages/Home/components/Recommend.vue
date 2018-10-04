<template>
   <div>
     <div class="recommend-title">
       <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
       热销推荐</div>
     <ul>
       <router-link tag="li" class="item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    :to="'/detail/' + item.id"
       >
         <img class="item-img" :src="item.imgUrl">
         <div class="item-info">
           <p class="item-title">{{item.title}}</p>
           <p class="item-desc">
             <span class="iconfont-t">
               <i class="iconfont icon-xingxing"></i>
               <i class="iconfont icon-xingxing"></i>
               <i class="iconfont icon-xingxing"></i>
               <i class="iconfont icon-xingxing"></i>
               <i class="iconfont icon-xingxing"></i>
              </span>
             {{item.review}}条评论</p>
           <div class="mp-like-price">
             <span class="mpg-price">¥<em class="mpg-price-num">{{item.money}}</em></span>起
             <span class="mp-like-address">{{item.area}}</span>
           </div>
         </div>
       </router-link>
     </ul>
   </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
          list:Array
        }
    }
</script>

<style lang="stylus" scoped>
  .recommend-title
    font-size: .44rem;
    margin-top .3rem
    line-height .8rem
    background #eee
    .mp-title-img
      display: inline-block;
      margin-top: 0.18rem;
      overflow: hidden;
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.2rem;
      vertical-align: top;
  .item
    overflow hidden
    display flex
    height 2.667rem
    padding .2rem .1rem;
    .item-img
      height: 2.467rem
      width 2.467rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      .item-title
        margin-top .26rem
        line-height .54rem
        font-size .42rem
      .item-desc
        display flex
        margin-top .2rem
        font-size .24rem
        line-height .4rem
        color #616161
        .iconfont-t
          margin-right .3rem
          display flex
          .iconfont{
            width .4rem
            display block
            color #ff8300
          }

      .mp-like-price
        position relative
        margin-top 0.27rem
        color: #616161
        font-size: .24rem
        line-height: .4rem
        .mpg-price
          color: #ff8300
          .mpg-price-num
            font-size: .5rem
        .mp-like-address
          position: absolute
          right: .24rem
          bottom: 0
</style>
