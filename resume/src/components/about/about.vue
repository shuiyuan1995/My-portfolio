<template>
  <div class="about">
    <div class="background">
      <div class="main">
        <div class="main-con">
          <div class="main-li" :key="main.index" v-for="(main, index) in about.mains">
            <div class="icon">
              <i class="iconfont" :class="iconImg[index]"></i>
            </div>
            <h2 class="title">{{main.title}}</h2>
            <div class="main-li-p">
              <p class="p">{{main.content1}}</p>
              <p class="p">{{main.content2}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0
export default {
  data () {
    return {
      about: {},
      iconImg: ['icon-pagelines', 'icon-xueli', 'icon-address', 'icon-dingdanzhuangtaidengdai']
    }
  },
  created () {
    this.$http.get('/api/about').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.about = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about
    position absolute
    top 0
    left 0
    width 100%
    min-width 766px
    min-height 800px
    background url("bg2.jpg")
    background-size 100% 100%
    background-repeat no-repeat
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background rgba(0,0,0,0.2)
      .main
        position relative
        width 80%
        height 600px
        margin 120px auto 0
        .main-con
          width: 100%
          height 100%
          .main-li
            flex 1
            width 50%
            float left
            height 300px
            text-align center
            padding 30px 20px 20px 20px
            box-sizing border-box
            &:hover
              .icon:before
                transform scale(2)
              .iconfont
                color #fff
                z-index 2
            &:nth-of-type(1),&:nth-of-type(3)
              border-right 1px solid #000
            &:nth-of-type(1),&:nth-of-type(2)
              border-bottom 1px solid #000
            .icon
              position relative
              width 80px
              height 80px
              border 2px solid #ff9800
              margin 0 auto
              overflow hidden
              &:before
                background #ff9800
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                content ""
                border-radius 50%
                transition all 0.4s ease-out
                transform scale(0)
              .iconfont
                position relative
                display block
                font-size 40px
                margin-top 20px
                vertical-align top
            .title
              margin-top 20px
              font-size 18px
              font-weight 600
            .main-li-p
              display inline-block
              background #9E9E9E
              margin-top 10px
              padding  0 15px
              border-radius 10px
              box-shadow 0 0px 2px 2px #fff
              .p
                line-height 30px
                color #fff
</style>
