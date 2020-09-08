import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManageTransaction from '../components/ManageTransaction'
import TransactionList from '../pages/TransactionsList'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ManageTransaction',
    component: ManageTransaction
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: TransactionList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
