import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about-me',
      name: 'perso',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersoView.vue')
    },
    {
      path: '/professional-journey',
      name: 'pro',
      component: () => import('../views/ProView.vue')
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
  ]
});

export default router;
