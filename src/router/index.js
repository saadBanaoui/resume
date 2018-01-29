import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Experiences from '@/components/Experiences'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/about', name: 'About', component: About },
    { path: '/experiences', name: 'Experiences', component: Experiences }
  ]
})
