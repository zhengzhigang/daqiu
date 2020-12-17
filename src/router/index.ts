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
        path: 'article-list',
        name: 'ArticleList',
        component: () => import(/* webpackChunkName: "about" */ '../views/ArticleList.vue')
      },
      {
        path: 'edu-manage',
        name: 'EduManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/EduManage.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'article-detales',
        name: 'ArticleDetales',
        component: () => import(/* webpackChunkName: "about" */ '../views/ArticleDetales.vue')
      },
      {
        path: 'course-list',
        name: 'CourseList',
        component: () => import(/* webpackChunkName: "about" */ '../views/CourseList.vue')
      },
      {
        path: 'score-search',
        name: 'ScoreSearch',
        component: () => import(/* webpackChunkName: "about" */ '../views/ScoreSearch.vue')
      }
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
