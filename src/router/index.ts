import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import AppDashboard from '@/components/dashboard/AppDashboard.vue'
import SqlQueryRunner from '@/components/sql-query-runner/SqlQueryRunner.vue'
import SqlQueryBuilder from '@/components/sql-query-builder/ToolContainer.vue'
import AppContainer from '@/views/AppContainer.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'app container',
      component: AppContainer,
      children:[
        {
        path: '/dashboard',
        name: 'dashboard',
        component: AppDashboard,
        },
        {
          path: '/sql-query-runner',
          name: 'Sql query runner',
          component: SqlQueryRunner
        },
        {
        path: '/sql-query-builder',
        name: 'Sql query builder',
        component: SqlQueryBuilder
      }
      ]
    },
    
  ]
})

export default router
