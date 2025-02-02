import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import type {
  Locale,
  HeaderContent,
  HomePageContent,
  PerformancePageContent,
  ContactPageContent,
  WhoWeArePageContent,
  NotFoundPageContent,
} from '@/types';
import { ref } from 'vue';

export const useI18nStore = defineStore('i18n', () => {
  const { locale, messages } = useI18n();

  // Reactive state for localized content

  // Header content initialization
  const headerI18nContent = ref(messages.value[locale.value].header as HeaderContent);

  // Home page content initialization
  const homePageI18nContent = ref(messages.value[locale.value].homePage as HomePageContent);

  // Performance page content initialization
  const performancePageI18nContent = ref(
    messages.value[locale.value].performancePage as PerformancePageContent,
  );

  // Contact page content initialization
  const contactPageI18nContent = ref(
    messages.value[locale.value].contactPage as ContactPageContent,
  );

  // Who we are page content initialization
  const whoWeArePageI18nContent = ref(
    messages.value[locale.value].whoWeArePage as WhoWeArePageContent,
  );

  // Not found page content initialization
  const notFoundPageI18nContent = ref(
    messages.value[locale.value].notFoundPage as NotFoundPageContent,
  );

  // Action to change the language
  const changeLanguage = (newLang: Locale): void => {
    if (newLang !== locale.value) {
      locale.value = newLang;
      // Update the localized content

      // Header content update
      headerI18nContent.value = messages.value[locale.value].header as HeaderContent;

      // Home page content update
      homePageI18nContent.value = messages.value[locale.value].homePage as HomePageContent;

      // Performance page content update
      performancePageI18nContent.value = messages.value[locale.value]
        .performancePage as PerformancePageContent;

      // Contact page content update
      contactPageI18nContent.value = messages.value[locale.value].contactPage as ContactPageContent;

      // Who we are page content update
      whoWeArePageI18nContent.value = messages.value[locale.value]
        .whoWeArePage as WhoWeArePageContent;

      // Not found page content update
      notFoundPageI18nContent.value = messages.value[locale.value]
        .notFoundPage as NotFoundPageContent;
    }
  };

  return {
    currentLanguage: locale,
    headerI18nContent,
    homePageI18nContent,
    performancePageI18nContent,
    contactPageI18nContent,
    whoWeArePageI18nContent,
    notFoundPageI18nContent,
    changeLanguage,
  };
});
