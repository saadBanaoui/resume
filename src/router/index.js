import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Experiences from '@/components/Experiences'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'About', component: About },
    { path: '/', name: 'Experiences', component: Experiences }
  ]
})
