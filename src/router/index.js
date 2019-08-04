import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/views/login'
import home from '@/views/home'
import welcome from '@/views/welcome'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: login },
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/welcome',
      children: [{ path: '/welcome', name: 'welcome', component: welcome }]
    }
  ]
})

export default router
