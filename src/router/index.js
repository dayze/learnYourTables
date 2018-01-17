import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LearningMode from '@/components/mode/LearningMode'
import TestMode from '@/components/mode/TestMode'
import MysteryTestMode from '@/components/mode/MysteryTestMode'
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
      path: '/learning-mode',
      name: 'LearningMode',
      component: LearningMode
    },
    {
      path: '/test-mode',
      name: 'TestMode',
      component: TestMode
    },
    {
      path: '/mystery-test-mode',
      name: 'MysteryTestMode',
      component: MysteryTestMode
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      props: true
    }

  ]
})
