import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PreviewGame from '../views/PreviewGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PreviewGame',
    name: 'PreviewGame',
    component: PreviewGame
  },
  {
    path: '/SelectSubject',
    name: 'SelectSubject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SelectSubject.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
