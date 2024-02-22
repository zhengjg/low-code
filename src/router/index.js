import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/createVm'
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
