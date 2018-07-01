<template>
  <div class="exper">
    <div class="background">
      <div class="main">
        <div class="content">
          <div class="line"></div>
          <div :key="exper.index" v-for="exper in experience">
            <div class="point">
              <div class="point-l">{{exper.year}}</div>
              <div class="point-r">
                <div class="point-r-in">
                  <h2>{{exper.content.title}}</h2>
                  <p>{{exper.content.matter}}</p>
                </div>
              </div>
            </div>
            <div class="line"></div>
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
      experience: {}
    }
  },
  created () {
    this.$http.get('/api/experience').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.experience = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .exper
    position absolute
    top 0
    left 0
    width 100%
    min-width 766px
    min-height 900px
    background url("bg4.jpg")
    background-size 100% 100%
    background-repeat no-repeat
    .background
      position absolute
      top 0
      left 0
      width 100%
      background rgba(0,0,0,0.2)
      .main
        width 80%
        margin 200px auto 0
        .content
          width 10px
          margin 0 auto
          .line
            width 10px
            height 150px
            background #795548
            border-radius 5px
            margin-bottom 10px
          .point
            width 10px
            height 10px
            margin-bottom 10px
            background #fff
            border-radius 5px
            cursor pointer
            position relative
            &:hover
              background #FFEB3B
              .point-l
                color green
              .point-r
                opacity 1
            .point-l
              position absolute
              width 100px
              height 40px
              background #fff
              left -115px
              top -13px
              text-align center
              line-height 40px
              &:after
                content ""
                border-left 10px solid #fff
                border-top 10px solid transparent
                border-bottom 10px solid transparent
                position absolute
                top 7px
                right -10px
            .point-r
              position absolute
              width 300px
              height 200px
              background #fff
              left 25px
              top -100px
              border-radius 30px
              opacity 0
              transition all 0.5s ease
              padding 20px
              box-sizing border-box
              .point-r-in
                border 2px solid blue
                height 100%
                border-radius 30px
                padding 10px
                box-sizing border-box
                h2
                  margin-top 10px
                  text-align center
                  margin-bottom 15px
                  padding-bottom 5px
                  border-bottom 2px solid #999
                p
                  text-indent 2em
                  padding 0 10px
              &:after
                content ""
                border-right 10px solid #fff
                border-top 10px solid transparent
                border-bottom 10px solid transparent
                position absolute
                top 97px
                left -10px
</style>
