<template>
    <div class="list" ref="wripper">
      <div>
        <div class="aret">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{ this.currenCity }}</div>
            </div>
          </div>
        </div>
        <div class="aret">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item of hotCities"
                 :key="item.id"
                 @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="aret"
             v-for="(item,key) of cityes"
             :key="key"
             :ref="key"
        >
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-lsit"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >
            <ul>
              <li class="item border-topbottom">{{innerItem.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState,mapMutations } from 'vuex'
    export default {
        name: "list",
      props:{
          hotCities:Array,
          cityes:Object,
          letter:String
      },
      computed:{
        ...mapState({
          currenCity:'city'
        })
      },
      methods:{
        handleCityClick(city){
          this.change(city)
          this.$router.push('/')
        },
        ...mapMutations(['change'])
      },
      watch:{
        letter (){
          if(this.letter){
            const elment =this.$refs[this.letter][0]
            this.scroll.scrollToElement(elment)
          }
        }
      },
      mounted () {
        this.scroll = new Bscroll(this.$refs.wripper)
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:befor
      border-color:#ccc
    &:after
      border-color:#ccc
  .list
    overflow hidden
    position absolute
    left 0
    top 1.68rem
    right 0
    bottom 0
    .title
      line-height 0.74rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .2rem
          text-align center
          border-radius .1rem
          border .02rem solid #ccc

    .item-lsit
      .item
        line-height .86rem
        color #666
        padding-left .2rem
</style>








