import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(
    !sessionStorage.getItem('token') &&
    !localStorage.getItem('token') &&
    to.name !== 'login'
  ){
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
