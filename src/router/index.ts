import { createRouter, createWebHistory } from 'vue-router'
import PageView from '../views/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageView,
      children: [
        {
          path: '/achieves',
          name: 'achieves',
          component: () => import("@/components/Achieves/index.vue"),
        },
        {
          path: '/tags',
          name: 'tags',
          component: () => import("@/components/Tags/index.vue"),
        },
        {
          path: '/links',
          name: 'links',
          component: () => import("@/components/Links/index.vue"),
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/PageView.vue')
    // }
  ]
})

export default router
