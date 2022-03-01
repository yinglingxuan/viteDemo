import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: '/',
        component: () => import('../views/Index/index.vue'),
        meta: {
          title: '柏易官网'
        }
      }
    ]
  },

  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
