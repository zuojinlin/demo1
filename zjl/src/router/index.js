import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/components/Category'
import Game from '@/components/Game'
import All from '@/components/All'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      children: [
      	{
      		path:'all',
      		name:'All',
      		component:All
      	}
      ]
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
    }

    
  ]
})
