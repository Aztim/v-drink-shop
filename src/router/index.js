import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/catalog/:id',
    name: 'Catalogtem',
    component: () => import('../views/Catalogtem.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/:type',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
    meta: {
      layout: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
