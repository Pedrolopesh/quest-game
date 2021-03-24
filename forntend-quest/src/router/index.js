import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Public/Home.vue'
import PreviewGame from '../views/Public/PreviewGame.vue'
import SelectSubject from '../views/Public/SelectSubject.vue'
import dashboardAdmin from '../views/Admin/Dash.vue'

import HumanMatter from '../views/Private/HumanMatter.vue'
import ExactMatter from '../views/Private/ExactMatter.vue'
import NatureMatter from '../views/Private/NatureMatter.vue'
import SelectedMatter from '../views/Private/SelectedMatter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Public',
    component: () => import('../views/viewsPublic.vue'),
    children: [
      {
        path: '/Home',
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
        component: SelectSubject
      },
    ]
  },

  {
    path: '/Private',
    component: () => import('../views/viewsPrivate.vue'),
    children: [
      {
        path: '/HumanMatter',
        name: 'Ciências Humanas',
        component: HumanMatter
      },
      {
        path: '/NatureMatter',
        name: 'Ciências da Natureza',
        component: NatureMatter
      },
      {
        path: '/ExactMatter',
        name: 'Ciências exatas',
        component: ExactMatter
      },
      {
        path: '/SelectedMatter',
        name: 'Matéria Selecionada',
        component: SelectedMatter
      },
    ]
  },

  {
    path: '/Admin',
    component: () => import('../views/viewsAdmin.vue'),
    children:[
      {
        path: '/admin/dash',
        name: 'Admin Dashboard',
        component: dashboardAdmin
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
