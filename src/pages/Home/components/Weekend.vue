<template>
    <div class="lazy-load" id="weekend-trip">
      <h2 class="mp-modtitle">周末去哪儿</h2>
      <div>
        <div class="mp-product-item" v-for="item of weekList" :key="item.id">
          <a href="" :title="item.titleg" class="mp-fulllink">
            <div class="product-imgcontainer image-ready">
              <img :src="item.imgUrl">
            </div>
            <div class="mp-product-info">
              <p class="product-name">{{item.Tname}}</p>
              <p class="product-desc">{{item.Tdesc}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Weekend",
    data (){
      return {
        weekList: [{
          id:'001',
          title:'漂流勇进，烧烤露营',
          href:'http://piao.qunar.com/touch/toSku.htm?skuId=367&skuName=漂流勇进，烧烤露营&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E6%25BC%2582%25E6%25B5%2581%25E5%258B%2587%25E8%25BF%259B%25EF%25BC%258C%25E7%2583%25A7%25E7%2583%25A4%25E9%259C%25B2%25E8%2590%25A5%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC',
          imgUrl:'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          Tname:"漂流勇进，烧烤露营",
          Tdesc:'轻松水上漂，任我乐逍遥'
        },{
          id:'002',
          title:'北京清凉避暑胜地',
          href:'http://piao.qunar.com/touch/toSku.htm?skuId=366&skuName=北京清凉避暑胜地&cat=from_area%3Dts_sku%26from_index%3D1%26from_value%3D%25E5%258C%2597%25E4%25BA%25AC%25E6%25B8%2585%25E5%2587%2589%25E9%2581%25BF%25E6%259A%2591%25E8%2583%259C%25E5%259C%25B0%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          Tname:"北京清凉避暑胜地",
          Tdesc:'到大自然中享受“天然空调”的清凉'
        },{
          id:'003',
          title:'北京必游TOP10',
          href:'http://piao.qunar.com/touch/toSku.htm?skuId=256&skuName=北京必游TOP10&cat=from_area%3Dts_sku%26from_index%3D2%26from_value%3D%25E5%258C%2597%25E4%25BA%25AC%25E5%25BF%2585%25E6%25B8%25B8TOP10%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          Tname:"北京必游TOP10",
          Tdesc:'来北京必去的景点非这些地方莫属'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
    #weekend-trip
      .mp-modtitle
        height .8rem
        padding-left .26rem
        line-height .8rem
        color #212121
        font-size .35rem
      .mp-product-item
          position relative
          margin-bottom .1rem
          background #fff
          .mp-fulllink
            display block
            width 100%
            height 100%
            .image-ready
              overflow: hidden;
              height: 0;
              padding-bottom: 37.4375%;
              background: url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg) no-repeat center #dcdcdc;
              background-size: 100% 100%;
          .image-ready
            img
              opacity 1
              transition opacity 400ms
              width: 100%

          .mp-product-info
            position relative
            padding .14rem .2rem .2rem .2rem
            .product-name
              overflow hidden
              padding-right 1.4rem
              color: #212121
              font-size .38rem
              line-height .68rem
              white-space nowrap
              text-overflow ellipsis
            .product-desc
              overflow hidden
              padding-right 1.4rem
              color #616161
              font-size .34rem
              line-height .62rem
              white-space nowrap
              text-overflow ellipsis

</style>
