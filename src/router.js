import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Employee from './views/Employee'
import FormEmployee from './views/FormEmployee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/employee',
      name: 'employee',
      component: Employee
    },
    {
      path: '/employee/create',
      name: 'formEmployee',
      component: FormEmployee
    },
  ]
})
