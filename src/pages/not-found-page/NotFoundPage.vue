<script setup lang="ts">
import { useRouter } from 'vue-router';
import { usePageMeta } from '@/hooks';
import { BaseButton } from '@/components';
import { useI18nStore, useStyleStore } from '@/stores';
import { computed } from 'vue';
import Logo from '~icons/custom/logo';

// Stores declarations
const styleStore = useStyleStore();
const i18nStore = useI18nStore();

// SEO Feature Manage Meta Tags
usePageMeta({
  meta: computed(() => i18nStore.notFoundPageI18nContent.metaDescription),
  currentLang: computed(() => i18nStore.currentLanguage),
});

// Hooks declarations
const router = useRouter();
</script>

<template>
  <div
    :class="[styleStore.containerPadding, styleStore.elementTotalGapM]"
    class="flex flex-col items-center justify-center h-screen py-20 text-center transition-all duration-300 ease-in-out text-rm-main"
  >
    <h1
      :class="[styleStore.textSizeXL]"
      class="font-medium whitespace-normal transition-all duration-300 ease-in-out font-playfair text-rm-main"
    >
      {{ i18nStore.notFoundPageI18nContent.firstHeading }}
    </h1>
    <p
      :class="[styleStore.textSizeM]"
      class="font-medium whitespace-normal transition-all duration-300 ease-in-out font-lora text-rm-main-light"
    >
      {{ i18nStore.notFoundPageI18nContent.secondHeading }}
    </p>
    <Logo
      class="transition-all duration-300 ease-in-out animate-pulse"
      :class="[styleStore.iconSizeXXL]"
    />

    <BaseButton
      id="goHomeButton"
      name="go_home_button"
      variant="secondary"
      aria-label="click to go to the home page"
      @click.stop="router.push({ name: i18nStore.notFoundPageI18nContent.goHomeButton.link })"
    >
      {{ i18nStore.notFoundPageI18nContent.goHomeButton.text }}
    </BaseButton>
  </div>
</template>
