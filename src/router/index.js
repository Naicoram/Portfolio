import { createRouter, createWebHistory } from 'vue-router'
import ErrorView from '../views/404View.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainView
    },
    {
      path:'/404',//url
      name:'404',
      component: ErrorView
    },
    {
      path:'/:pathMatch(.*)*',
      redirect: to =>{
        return '404'      
      }
    }
  ]
})

export default router
