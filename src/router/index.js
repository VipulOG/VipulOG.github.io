import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/InProgressView.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/InProgressView.vue')
    },
    {
      path: '/writings',
      name: 'writings',
      component: () => import('../views/InProgressView.vue')
    }
  ]
})

export default router
