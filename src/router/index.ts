import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Container from '../views/Container.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Container',
    component: Container,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'rec',
        name: 'Reccommend',
        component: () => import(/* webpackChunkName: "about" */ '../views/RecInfo.vue')
      },
      {
        path: 'edu-manage',
        name: 'EduManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/EduManage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
