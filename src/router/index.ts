import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/test',
    name: 'ProductItem',
    component: () => import('../components/ProductItem.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../components/Catalog.vue'),
    meta: {
      layout: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
