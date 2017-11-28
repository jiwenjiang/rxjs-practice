import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimerEvent from '@/components/TimerEvent'
import Observable from '@/components/Observable'
import Subject from '@/components/Subject'
import Operators from '@/components/Operators'
import Transformation from '@/components/Transformation'
import Map from '@/components/Map'
import Filter from '@/components/filter'

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
    },
    {
      path: '/Transformation',
      name: 'Transformation',
      component: Transformation
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/Filter',
      name: 'Filter',
      component: Filter
    }
  ]
})
