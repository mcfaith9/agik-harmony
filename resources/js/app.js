import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { fetchUser, user } from '@/lib/user.js';

const app = createApp(App);

fetchUser().then(() => {
  app.provide('user', user);
  app.use(router);
  app.mount('#app');
});
