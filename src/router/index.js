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
      path: '/skills',
      name: 'skills',
      component: () => import ('../views/SkillsView.vue')
    },
    {
      path: '/assets',
      redirect: {name: "home"}
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import ('../views/NotFoundView.vue')
    }
  ],
scrollBehavior(to) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    };
  }

  return { top: 0, left: 0 };
}
});

export default router;
