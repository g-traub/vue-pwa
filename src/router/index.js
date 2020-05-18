import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/:articleName',
    name: 'Article',
    component: () => import('../views/Article.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
