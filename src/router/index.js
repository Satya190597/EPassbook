import Vue from 'vue'
import VueRouter from 'vue-router'
import Manipulate from '../pages/Manipulate'
import Add from '../pages/Add'
import Reset from '../pages/Reset'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/transaction/new',
    name: 'NewTransaction',
    component: Add
  },
  {
    path: '/transactions/edit',
    name: 'EditTransaction',
    component: Manipulate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
