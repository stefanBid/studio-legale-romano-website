import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import type { Locale, HeaderContent, NotFoundPageContent } from '@/types';
import { ref } from 'vue';

export const useI18nStore = defineStore('i18n', () => {
  const { locale, messages } = useI18n();

  // Reactive state for localized content
  const headerI18nContent = ref(messages.value[locale.value].header as HeaderContent);
  const notFoundPageI18nContent = ref(
    messages.value[locale.value].notFoundPage as NotFoundPageContent,
  );

  // Action to change the language
  const changeLanguage = (newLang: Locale): void => {
    if (newLang !== locale.value) {
      locale.value = newLang;
      headerI18nContent.value = messages.value[locale.value].header as HeaderContent;
      notFoundPageI18nContent.value = messages.value[locale.value]
        .notFoundPage as NotFoundPageContent;
    }
  };

  return {
    currentLanguage: locale,
    headerI18nContent,
    notFoundPageI18nContent,
    changeLanguage,
  };
});
