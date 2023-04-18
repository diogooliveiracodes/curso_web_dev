import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AlunoView from '../views/AlunoView.vue'
import CursoView from '../views/CursoView.vue'
import ModulosView from '../views/ModulosView.vue'
import DescricaoView from '../views/DescricaoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/aluno/:id',
    name: 'aluno',
    props: true,
    component: AlunoView
  },
  {
    path: '/curso',
    name: 'curso',
    component: CursoView,
    children: [
      {
        path: 'modulos',
        name: 'modulos',
        component: ModulosView
      },
      {
        path: 'descricao',
        name: 'descricao',
        component: DescricaoView
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
