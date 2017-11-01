import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimerEvent from '@/components/TimerEvent'

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
    }
  ]
})
