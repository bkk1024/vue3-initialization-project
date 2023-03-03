import { createRouter, createWebHashHistory } from 'vue-router'

const views = import.meta.glob('../views/**/*.vue') // 将 views 目录下的所有 .vue 文件导入进来

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: views['../views/Home.vue'],
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router