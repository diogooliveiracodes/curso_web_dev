import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!user.authenticated) {
//     next('/login')
//   }
//   if (!user.hasPermission) {
//     next('/login')
//   }
//   next()
// })

// router.beforeResolve((to, from, next) => {
//   if (user.isAdmin) {
//     next('/dashboard-admin')
//   }
//   next()
// })

export default router
