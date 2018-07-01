import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import About from '@/components/about/about'
import Skill from '@/components/skill/skill'
import Contact from '@/components/contact/contact'
import Experience from '@/components/experience/experience'
import Portfolio from '@/components/portfolio/portfolio'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/portfolio',
      component: Portfolio
    }
  ]
})
