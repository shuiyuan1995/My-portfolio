<template>
  <div class="contact">
    <div class="contact-content">
      <div class="con-con-l">
        <div class="arrow">
          <div class="arrow-l">联系我</div>
          <div class="arrow-r"></div>
        </div>
        <div class="con-con-main">
          <div class="title">
            <span :key="tar.index" v-for="tar in contact.target">{{tar}}</span>
          </div>
          <div class="main-content">
            <p :key="p.index" v-for="p in contact.p">{{p}}</p>
          </div>
        </div>
      </div>
      <div class="con-con-r">
        <form action="#" method="post">
          <input type="text" placeholder="姓名">
          <input type="email" placeholder="邮箱">
          <input type="text" placeholder="联系电话">
          <textarea cols="30" rows="10" placeholder="备注"></textarea>
          <div class="submit">
            <input type="submit" value="Send">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0
export default {
  data () {
    return {
      contact: {}
    }
  },
  created () {
    this.$http.get('/api/contact').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.contact = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact
    position absolute
    top 0
    left 0
    width 100%
    min-width 766px
    min-height 800px
    background url("bg3.jpg")
    background-size 100% 100%
    .contact-content
      width 80%
      margin 180px auto 0
      min-height 550px
      display flex
      .con-con-l
        flex 1
        background #e0c67f
        margin-right 20px
        border-radius 20px
        .arrow
          width 227px
          position relative
          top 6%
          left 26%
          transition all 0.2s ease-out
          cursor pointer
          &:hover
            left 32%
          .arrow-l
            width 75%
            height 50px
            border 4px solid #fff
            background #7cff7c
            color #fff
            font-weight 700
            text-align center
            font-size 30px
            line-height 50px
            position absolute
            top 10px
            z-index 2
            border-radius 20px 0 0 20px
          .arrow-r
            &:after
              content ""
              width 80px
              height 123px
              position absolute
              border-right 4px solid #fff
              right 21%
              top -20px
              z-index 1
              background #e0c67f
            &:before
              content ""
              width 80px
              height 80px
              position absolute
              right 2%
              top -1px
              border-right 4px solid #fff
              border-top 4px solid #fff
              transform rotate(45deg)
              border-left 4px solid transparent
              border-bottom 4px solid transparent
              background #7cff7c
              z-index 0
        .con-con-main
          margin 180px auto 0
          width 80%
          .title
            display flex
            span
              flex 1
              text-align center
              font-size 22px
              font-weight 500
              &:nth-of-type(1)
                color red
              &:nth-of-type(2)
                color blue
              &:nth-of-type(3)
                color #fff
              &:nth-of-type(4)
                color green
          .main-content
            margin-top 30px
            p
              margin-top 30px
              font-size 16px
              text-align center
              color #fff
      .con-con-r
        flex 1
        background #e0c67f
        margin-left 20px
        padding-top 30px
        border-radius 20px
        input
          width 80%
          margin 0 auto 30px
          border 2px solid #00a78e
          display block
          height 40px
          outline none
          padding-left 10px
          padding-right 10px
          box-sizing border-box
          color #777
          font-weight bold
        textarea
          width 80%
          display block
          outline none
          margin 0 auto 30px
          box-sizing border-box
          border 2px solid #00a78e
          color #777
          font-weight bold
          font-size 16px
          padding 10px
        .submit
          width 80%
          margin 0 auto
          input
            width 120px
            border none
            cursor pointer
            background #212322
            color #fff
            margin-left 0
            &:hover
              background #00a78e
</style>
