import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    meta: {
      layout: 'main'
    }
  },

  {
    path: '/catalog/:slug',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
    props: true,
    meta: {
      layout: 'main'
    }
  },

  {
    path: '/catalog/:slug/:id',
    name: 'Catalogtem',
    component: () => import('../views/Catalogtem.vue'),
    props: true,
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
