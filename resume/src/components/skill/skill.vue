<template>
  <div class="skill">
    <div class="main">
      <div class="main-l">
        <h2 class="main-l-title">简述</h2>
        <div class="main-l-content">
          <p :key="dscItem.index" v-for="dscItem in skill.dsc">{{dscItem}}</p>
        </div>
      </div>
      <div class="main-r">
        <div class="bar" :key="key" v-for="(value, key) in skill.bar">
          <div class="bar-title">{{key}}</div>
          <div class="bar-content">
            <div class="bar-init" :style="changeWidth(key)"></div>
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
      skill: {}
    }
  },
  created () {
    this.$http.get('/api/skill').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.skill = response.data
      }
      console.log(response)
    })
  },
  methods: {
    changeWidth (key) {
      let width = this.skill.bar[key]
      return 'width:' + width + '%'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .skill
    position absolute
    top 0
    left 0
    width 100%
    min-width 766px
    min-height 738px
    background rgba(0,0,0,0.2)
    .main
      margin 140px auto 0
      width 80%
      min-height 500px
      display flex
      .main-l
        flex 1
        margin-right 20px
        .main-l-title
          text-align center
          font-weight 700
          font-size 24px
          margin 20px 0
        .main-l-content
          p
            margin-top 15px
            line-height 1.6em
            color #765050
            text-indent 2em
      .main-r
        flex 1
        margin-left 20px
        padding-top 20px
        .bar
          height 50px
          background #7e8c8d
          border-radius 20px
          display flex
          padding 0 20px
          margin-top 20px
          .bar-title
            flex 0 0 50px
            line-height 50px
            color #fff
          .bar-content
            flex 1
            height 12px
            border-radius 6px
            box-shadow inset -2px -3px 17px rgba(0,0,0,0.5)
            margin-top 18px
            .bar-init
              height 12px
              border-radius 6px
              background-image linear-gradient(left, #009ecf, #2cfc2c)
              width 0px
</style>
