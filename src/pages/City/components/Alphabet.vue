<template>
    <div class="lsit">
      <ul>
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart="heandleTouch"
            @touchmove="heandleTouchMove"
            @touchend="hendleTouchEnd"
            @click="handleLetterClick"
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Alphabet",
      props:{
        cityes:Object,
        letter:String
      },
      data (){   //定义touchstart 的标识位 触发touchmove
        return {
          touchstauts :false,
          startY:0,
          timer:null // 节流
        }
      },
      updated (){
        this.startY = this.$refs['A'][0].offsetTop
      },
      computed:{
        letters(){
          const  letters=[]
          for (let i in this.cityes){
            letters.push(i)
          }
          return letters
        }
      },
      methods:{
        handleLetterClick(e){
          this.$emit('change',e.target.innerText)
        },
        heandleTouch (){
          this.touchstauts = true
        },
        heandleTouchMove (e){
          if (this.timer){
            clearTimeout(this.timer)
          }
          this.timer =setTimeout(()=>{
            if (this.touchstauts){
              const touchY = e.touches[0].clientY -64     // 79 为header 元素的高
              const index = Math.floor((touchY - this.startY)/20)  //  手指滑动对应字母的下标的距离
              if (index >= 0 && index < this.letters.length){   //防止index 出现问题
                this.$emit('change',this.letters[index])
              }
            }
          },16)

        },
        hendleTouchEnd (){
          this.touchstauts = false
        }
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

<!--
  右侧字母滑动实现思路
   ->  判断每个字母距离顶部的距离来计算是哪个元素
-->
