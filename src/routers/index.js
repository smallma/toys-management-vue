import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/modules/main/Intro'
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
          path: '*',
          component: notFoundTemplate
        }
      ]
    },
    {
      path: '*',
      component: notFoundTemplate
    }
  ]
})
