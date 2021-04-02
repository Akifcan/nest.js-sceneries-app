import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('@/views/Share')
  },
  {
    path: '/preview/:id',
    name: 'preview',
    component: () => import('@/views/Preview')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
