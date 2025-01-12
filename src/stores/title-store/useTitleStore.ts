import { defineStore } from 'pinia';
import { useTitle } from '@vueuse/core';

export const useTitleStore = defineStore('title', () => {
  const DEFAULT_PREFIX = 'Studio Legale Romano';
  const title = useTitle();

  // Reactive state for title
  title.value = DEFAULT_PREFIX;

  const setTitleSuffix = (newSuffix: string): void => {
    title.value = `${DEFAULT_PREFIX} | ${newSuffix}`;
  };

  return {
    setTitleSuffix,
  };
});
