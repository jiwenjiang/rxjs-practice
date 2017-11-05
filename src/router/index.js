import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimerEvent from '@/components/TimerEvent'
import Observable from '@/components/Observable'
import Subject from '@/components/Subject'
import Operators from '@/components/Operators'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/TimerEvent',
      name: 'TimerEvent',
      component: TimerEvent
    },
    {
      path: '/Observable',
      name: 'Observable',
      component: Observable
    },
    {
      path: '/Subject',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/Operators',
      name: 'Operators',
      component: Operators
    }
  ]
})
