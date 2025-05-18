import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { user } from '@/lib/user.js';

const app = createApp(App);

app.provide('user', user);
app.use(router);
app.mount('#app');