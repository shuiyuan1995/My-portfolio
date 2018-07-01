<template>
  <div class="port">
    <div class="content">
      <div class="tab">
        <a href="#" :class="{active: active(0)}" @click="tabId=0">ALL</a>
        <a href="#" :class="{active: active(1)}" @click="tabId=1">PC</a>
        <a href="#" :class="{active: active(2)}" @click="tabId=2">APP</a>
        <a href="#" :class="{active: active(3)}" @click="tabId=3">其他</a>
      </div>
      <div class="box">
        <div v-show="tabId === 0">
          <ul>
            <li :key="pc.index" v-for="pc in porfolio.pcs" class="box-item">
              <a :href="pc.src">
                <img :src="pc.img">
              </a>
              <div class="item-bg"></div>
            </li>
            <li :key="app.index" v-for="app in porfolio.apps" class="box-item">
              <a :href="app.src">
                <img :src="app.img">
              </a>
              <div class="item-bg"></div>
            </li>
            <li :key="other.index" v-for="other in porfolio.others" class="box-item">
              <a :href="other.src">
                <img :src="other.img">
              </a>
              <div class="item-bg"></div>
            </li>
          </ul>
        </div>
        <div v-show="tabId === 1">
          <ul>
            <li :key="pc.index" v-for="pc in porfolio.pcs" class="box-item">
              <a :href="pc.src">
                <img :src="pc.img">
              </a>
              <div class="item-bg"></div>
            </li>
          </ul>
        </div>
        <div v-show="tabId === 2">
          <ul>
            <li :key="app.index" v-for="app in porfolio.apps" class="box-item">
              <a :href="app.src">
                <img :src="app.img">
              </a>
              <div class="item-bg"></div>
            </li>
          </ul>
        </div>
        <div v-show="tabId === 3">
          <ul>
            <li :key="other.index" v-for="other in porfolio.others" class="box-item">
              <a :href="other.src">
                <img :src="other.img">
              </a>
              <div class="item-bg"></div>
            </li>
          </ul>
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
      tabId: 0,
      porfolio: {}
    }
  },
  methods: {
    active (index) {
      if (this.tabId === index) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.$http.get('/api/porfolio').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.porfolio = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .port
    position absolute
    top 0
    left 0
    width 100%
    min-width 766px
    min-height 700px
    background rgba(0,0,0,0.3)
    .content
      width 80%
      margin 120px auto 0
      .tab
        font-size 0
        margin 0 auto
        width 640px
        a
          display inline-block
          height 40px
          width 100px
          background #00a78e
          color #fff
          line-height 40px
          text-align center
          font-size 16px
          margin 0 30px
          &.active
            background #fff
            color #00a78e
      .box
        width 100%
        margin-top 40px
        ul
          display flex
          flex-wrap wrap
          justify-content center
          .box-item
            flex 0 0 280px
            height 200px
            background green
            margin-right 20px
            margin-bottom 20px
            position relative
            overflow hidden
            &:hover
              .item-bg
                opacity 0
                z-index -1
            a
              display block
              img
                width 100%
            .item-bg
              position absolute
              width 100%
              height 100%
              background rgba(0,0,0,0.5)
              top 0
              left 0
              opacity 1
              transition all 0.5s ease
</style>
