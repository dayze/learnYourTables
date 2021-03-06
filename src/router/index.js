import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LearningMode from '@/components/mods/LearningMode'
import Choices from '@/components/mods/Choices'
import Test from '@/components/Test'
import Dashboard from '@/components/Dashboard'
import Account from '@/components/Account'
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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: false
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      props: false
    }
  ]
})
