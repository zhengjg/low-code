import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/createVm',
    component: () => import('../views/createVm.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
