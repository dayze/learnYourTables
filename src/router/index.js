import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LearningMode from '@/components/mode/LearningMode'
import EvaluationMode from '@/components/mode/EvaluationMode'
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
      path: '/evaluation-mode',
      name: 'EvaluationMode',
      component: EvaluationMode
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      props: true
    }

  ]
})
