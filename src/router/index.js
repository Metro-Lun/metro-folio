import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/projects',
      name: 'projs',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import ('../views/SkillsView.vue')
    }
  ],
  scrollBehavior() {
    // Revenir en haut de la page à chaque navigation
    return { top: 0 }
  }
});

export default router;
