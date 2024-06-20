import { createWebHistory, createRouter } from 'vue-router'

import AuthPage from '@/components/AuthPage.vue'
import BasicProfile from '@/components/BasicProfile.vue'
import MainPage from '@/components/MainPage.vue'
import AddUsers from '@/components/AddUsers.vue'

const routes = [
  { path: '/', name: '/', component: MainPage },
  { path: '/auth', name: 'auth', component: AuthPage },
  { path: '/profile', name:'profile',component: BasicProfile},
  { path: '/:table', name:'mainpage/table',component: MainPage},
  { path: '/:table/:id', name:'item',component: MainPage},
  { path: '/addUsers', name:'addUsers',component: AddUsers},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router