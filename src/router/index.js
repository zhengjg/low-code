import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/award',
    component: () => import('../views/MyAward.vue')
  },
  {
    path: '/index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/rule',
    component: () => import('../views/Rule.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
