// router/index.ts

import { ref } from 'vue';
import HomePage from '@/pages/home-page/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const isLoading = ref(false);

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  },
  {
    path: '/prestazioni',
    name: 'performancePage',
    component: () =>
      import(
        /* webpackPrefetch: true, webpackPreload: true */ '@/pages/performance-page/PerformancePage.vue'
      ),
  },
  {
    path: '/contatti',
    name: 'contactPage',
    component: () =>
      import(
        /* webpackPrefetch: true, webpackPreload: true */ '@/pages/contact-page/ContactPage.vue'
      ),
  },
  {
    path: '/chi-siamo',
    name: 'whoWeArePage',
    component: () =>
      import(
        /* webpackPrefetch: true, webpackPreload: true */ '@/pages/who-we-are-page/WhoWeArePage.vue'
      ),
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicyPage',
    component: () =>
      import(
        /* webpackPrefetch: true, webpackPreload: true */ '@/pages/privacy-policy-page/PrivacyPolicyPage.vue'
      ),
  },

  {
    path: '/terms-and-conditions',
    name: 'termsAndConditionsPage',
    component: () =>
      import(
        /* webpackPrefetch: true, webpackPreload: true */ '@/pages/terms-and-conditions-page/TermsAndConditionsPage.vue'
      ),
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
