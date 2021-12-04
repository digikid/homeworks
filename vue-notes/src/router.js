import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import NotFound from '@/views/NotFound'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFound
    }
  ]
})

export default router
