// router/index.ts

import { ref } from 'vue';
import { HomePage } from '@/pages';
import { createRouter, createWebHistory } from 'vue-router';

const isLoading = ref(false);

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundPage',
    component: () =>
      import(
        /* webpackPrefetch: true, webpackPreload: true */ '@/pages/not-found-page/NotFoundPage.vue'
      ),
  },
];

// Create route instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((_, __, next) => {
  isLoading.value = true; // Show loading spinner
  next();
});

router.afterEach(() => {
  isLoading.value = false; // Hide loading spinner
});

export { router, isLoading };
