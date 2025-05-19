import { createRouter, createWebHistory } from 'vue-router';
import { user, fetchUser } from '@/lib/user.js';

import AppLogin from '@/components/pages/AppLogin.vue';
import AppRegister from '@/components/pages/AppRegister.vue';
import AppDashboard from '@/components/pages/AppDashboard.vue';

const routes = [
  { 
    path: '/', 
    name: 'login',
    component: AppLogin,
    meta: { requiresAuth: false },
  },
  { 
    path: '/register', 
    name: 'register',
    component: AppRegister,
    meta: { requiresAuth: false },
  },
  { 
    path: '/app', 
    name: 'app',
    component: AppDashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!user.data) {
      try {
        await fetchUser();
        next();
      } catch (err) {
        next({ name: 'login' });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
