import { createRouter, createWebHistory } from 'vue-router';
import MainMenu from '../components/MainMenu.vue';
import Login from '../components/login.vue';
import AuthCallback from '../components/AuthCallback.vue'; // Asegúrate de crear este componente

const routes = [
  { path: '/', component: MainMenu },
  { path: '/login', component: Login },
  { path: '/auth/callback', component: AuthCallback }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/auth/callback'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token');

  if (authRequired && !token) {
    return next('/login');
  }

  next();
});

export default router;