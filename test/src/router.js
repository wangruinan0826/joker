import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import C from './views/C.vue'
import Error from './views/Error.vue'
import Count from './views/Count.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/a',
      component:A,
      children:[
        {
          path:'/test1',
          component:Test1
        },
        {
          path:'/test2',
          component:Test2
        }
      ]
    },
    {
      path:'/b',
      name:'b',
      component:B
    },
    {
      path:'/c/:id',
      component:C
    },
    {
      path:'/d/:id',
      redirect:'/c/:id'
    },{
      path:'/',
      component:Home,
      alias:'/zxy'
    },{
      path:'*',
      component:Error
    },
    {
      path:'/count',
      component:Count
    }
  ]
})
