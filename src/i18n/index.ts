// i18n/index.ts

import { createI18n } from 'vue-i18n';
import it from '@/i18n/locales/it.json';
const messages = {
  it,
};

const i18n = createI18n({
  legacy: false,
  locale: 'it',
  fallbackLocale: 'it',
  messages,
});

export default i18n;
