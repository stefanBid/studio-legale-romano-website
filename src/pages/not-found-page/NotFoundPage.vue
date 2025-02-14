<script setup lang="ts">
import { useRouter } from 'vue-router';

import { ICONS } from '@/constants';
import { BaseButton } from '@/components';
import { useI18nStore, useStyleStore, useTitleStore } from '@/stores';

// Stores declarations
const styleStore = useStyleStore();
const i18nStore = useI18nStore();
const titleStore = useTitleStore();

// Hooks declarations
const router = useRouter();

titleStore.setTitleSuffix('404 Pagina non trovata');
</script>

<template>
  <div
    :class="[styleStore.containerPadding, styleStore.elementTotalGapM]"
    class="flex flex-col items-center justify-center h-screen pt-20 text-center text-rm-main"
  >
    <h1
      :class="[styleStore.textSizeXL]"
      class="font-medium whitespace-normal transition-all duration-300 ease-in-out font-playfair"
    >
      {{ i18nStore.notFoundPageI18nContent.firstHeading }}
    </h1>
    <p
      :class="[styleStore.textSizeM]"
      class="font-medium whitespace-normal transition-all duration-300 ease-in-out font-lora"
    >
      {{ i18nStore.notFoundPageI18nContent.secondHeading }}
    </p>
    <component
      :is="ICONS.LogoIcon"
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
