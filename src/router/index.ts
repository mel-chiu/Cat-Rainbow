import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Cat from '../views/Cat.vue'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Cat',
    component: Cat
  },
  {
    path: '/rainbow',
    name: 'Rainbow',
    component: () => import('../views/Rainbow.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
