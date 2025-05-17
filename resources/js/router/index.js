import { createRouter, createWebHistory } from 'vue-router';

import AppLogin from '@/components/pages/AppLogin.vue';
// import RegisterPage from '@/components/pages/RegisterPage.vue';
import AppDashboard from '@/components/pages/AppDashboard.vue';

const routes = [
  { path: '/', component: AppLogin },
  // { path: '/register', component: RegisterPage },
  { path: '/app', component: AppDashboard },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
