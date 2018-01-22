import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LearningMode from '@/components/mods/LearningMode'
import Choices from '@/components/mods/Choices'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/learning-mods',
      name: 'LearningMode',
      component: LearningMode
    },
    {
      path: '/choices',
      name: 'Choices',
      component: Choices,
      props: true
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      props: true
    }

  ]
})
