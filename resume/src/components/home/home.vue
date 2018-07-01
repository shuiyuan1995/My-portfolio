<template>
  <div class="home">
    <div class="background">
      <transition appear name="move">
        <div class="content">
          <div class="content-img">
            <img :src="basis.photo">
          </div>
          <div class="information">
            <h2 class="info-title">{{basis.post}}</h2>
            <ul>
              <li class="info-content" :key="info.index" v-for="info in infos">
                <div class="title">{{info}}</div>
                <div class="title-content">{{basis.info[info]}}</div>
              </li>
            </ul>
          </div>
          <div class="content-icon">
            <div :key="icon1.index" v-for="(icon1, index) in basis.icons[0]">
              <a :title="icon1" :alt="icon1" href="#"><i :class="icon[0][index]"></i></a>
            </div>
            <div :key="icon2.index" v-for="(icon2, index) in basis.icons[1]">
              <a :title="icon2" :alt="icon2" :href="icon2"><i :class="icon[1][index]"></i></a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0
export default {
  data () {
    return {
      infos: ['姓名', '出生日期', '电话', 'QQ', 'e-mail', 'github'],
      icon: [['icon-weixin', 'icon-youxiang'], ['icon-codepen', 'icon-github']],
      basis: {}
    }
  },
  created () {
    this.$http.get('/api/basis').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.basis = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    position absolute
    top 0
    left 0
    width 100%
    min-width 858px
    min-height 700px
    background url("bg1.jpg")
    background-size 100% 100%
    background-repeat no-repeat
    .background
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      background rgba(255,255,255,0.1)
      .move-enter-active
        transition all 1s ease
      .move-enter
        transform scaleX(0)
      .move-enter-to
        transform scaleX(1)
      .content
        width 52%
        height 438px
        background rgba(181, 205, 233,0.68)
        margin 148px auto 40px
        color #fff
        box-shadow 0 1px 27px 4px #fff
        border-radius 15px
        .information
          padding 38px 15px 0 15px
          .info-title
            color #C7C7C7
            text-align center
            margin-bottom 15px
            font-size 22px
            font-weight 600
            padding-bottom 15px
            border-bottom 1px solid #C7C7C7
            margin-right 200px
          .info-content
            font-size 16px
            line-height 24px
            .title
              min-width 120px
              float left
              font-weight 500
            .title-content
              text-align left
              padding-left 120px
              word-wrap:break-word
              word-break:normal
              margin-right 178px
              font-weight 200
        .content-img
          float right
          width 145px
          margin-top 38px
          margin-right 5%
          border-radius 15px
          border 1px solid #000
          height 211px
          padding 4px
          box-shadow 0 0 27px 4px #000 inset
          img
            width 100%
            border-radius 15px
            box-shadow 0 0 27px 4px #fff
        .content-icon
          margin-top 10%
          display flex
          flex-wrap nowrap
          justify-content center
          div
            flex 1
            text-align center
            font-size 40px
            i:hover
              color #fff
</style>
