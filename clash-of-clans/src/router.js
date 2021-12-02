import { createRouter, createWebHistory } from 'vue-router'

import items from '@/seeders/items'

import Home from '@/views/Home'
import About from '@/views/About'
import NotFound from '@/views/NotFound'
import ItemAlias from '@/views/_ItemAlias'

const router = createRouter({
  history: createWebHistory(),
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
      path: '/:itemAlias',
      name: 'alias',
      component: ItemAlias,
      beforeEnter(to, from, next) {
        const item = items.find(item => item.alias === to.params.itemAlias)

        to.meta = {
          item
        }

        if (item) {
          next()
        } else {
          next({
            name: '404'
          })
        }
      }
    },
    {
      path: '/:catchAll(.*)*',
      name: '404',
      component: NotFound
    }
  ]
})

export default router
