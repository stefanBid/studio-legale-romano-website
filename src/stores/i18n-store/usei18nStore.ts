import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import type {
  Locale,
  HeaderContent,
  HomePageContent,
  PerformancePageContent,
  CollaborationPageContent,
  ContactPageContent,
  AboutUsPageContent,
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

  // Collaboration page content initialization
  const collaborationPageI18nContent = ref(
    messages.value[locale.value].collaborationPage as CollaborationPageContent,
  );

  // Contact page content initialization
  const contactPageI18nContent = ref(
    messages.value[locale.value].contactPage as ContactPageContent,
  );

  // About us page content initialization
  const aboutUsPageI18nContent = ref(
    messages.value[locale.value].aboutUsPage as AboutUsPageContent,
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

      // Collaboration page content update
      collaborationPageI18nContent.value = messages.value[locale.value]
        .collaborationPage as CollaborationPageContent;

      // Contact page content update
      contactPageI18nContent.value = messages.value[locale.value].contactPage as ContactPageContent;

      // About us page content update
      aboutUsPageI18nContent.value = messages.value[locale.value].aboutUsPage as AboutUsPageContent;

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
    collaborationPageI18nContent,
    contactPageI18nContent,
    aboutUsPageI18nContent,
    notFoundPageI18nContent,
    changeLanguage,
  };
});
