import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/modules/main/Intro'
import SearchToy from '@/modules/main/pages/SearchToy'
import AddToy from '@/modules/main/pages/AddToy'
import Zoids from '@/modules/main/pages/Zoids'
import notFoundTemplate from '@/modules/main/components/notFoundTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Intro
    },
    {
      path: '/',
      name: 'category',
      component: Intro,
      children: [
        {
          path: 'zoids',
          component: Zoids
        },
        {
          path: '/add',
          component: AddToy
        },
        {
          path: '/search',
          component: SearchToy
        },
        {
          path: '*',
          component: notFoundTemplate
        },
      ]
    },
    {
      path: '*',
      component: notFoundTemplate
    }
  ]
})
