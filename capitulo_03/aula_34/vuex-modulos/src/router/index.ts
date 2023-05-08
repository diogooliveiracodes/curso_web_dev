import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ContadorView from '../views/ContadorView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/contador',
    name: 'contador',
    component: ContadorView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
