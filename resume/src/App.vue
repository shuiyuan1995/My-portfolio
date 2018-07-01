<template>
  <div>
    <div class="header">
      <div class="logo">
        <router-link to="/home">
          <img src="./logo.png">
        </router-link>
      </div>
      <div class="header-nav">
        <nav>
          <ul class="nav">
            <li :key="navItem.index" v-for="navItem in navs">
              <router-link :data-title="navItem.title" :to="navItem.titleSrc">{{navItem.title}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          title: '首页',
          titleSrc: '/home'
        },
        {
          title: '关于我',
          titleSrc: '/about'
        },
        {
          title: '能力',
          titleSrc: '/skill'
        },
        {
          title: '作品',
          titleSrc: '/portfolio'
        },
        {
          title: '经历',
          titleSrc: '/experience'
        },
        {
          title: '联系我',
          titleSrc: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position relative
    z-index 200
    width 80%
    margin 32px auto
    display flex
    min-width 766px
    .logo
      flex 0 0 100px
    .header-nav
      flex 1
      margin-left 20%
      .nav
        display flex
        li
          flex 1
          text-align center
          line-height 45px
          a
            display inline-block
            margin 20px 0
            font-size 22px
            font-weight 700
            position relative
            white-space nowrap
            color #fff
            &:after
              content attr(data-title)
              border-bottom 3px solid #00a78e
              position absolute
              top 0
              left 0
              color #00a78e
              overflow hidden
              width 0
              transition width 0.6s
              white-space nowrap
            &:hover:after,&.router-link-exact-active:after
              width 100%
</style>
