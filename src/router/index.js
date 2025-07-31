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
  scrollBehavior() {
    // Revenir en haut de la page à chaque navigation
    return { top: 0 }
  }
});

router.afterEach((to) => {
  if (to.hash) {
    setTimeout(() => {
      const el = document.querySelector(to.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }
})

export default router;
