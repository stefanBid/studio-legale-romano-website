<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline';
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
    :class="[styleStore.containerPadding]"
    class="flex flex-col items-center justify-center h-screen pt-20 text-center text-rm-main gap-y-4"
  >
    <h1
      :class="[styleStore.textSizeXXL]"
      class="font-medium whitespace-normal transition-all duration-300 ease-in-out font-playfair"
    >
      {{ i18nStore.notFoundPageI18nContent.firstHeading }}
    </h1>
    <p
      :class="[styleStore.textSizeL]"
      class="font-medium whitespace-normal transition-all duration-300 ease-in-out font-lora"
    >
      {{ i18nStore.notFoundPageI18nContent.secondHeading }}
    </p>
    <component
      :is="ICONS.LogoIcon"
      class="transition-all duration-300 ease-in-out animate-pulse"
      :class="{
        'size-72':
          styleStore.activeBreakpoint !== 'xs' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'md',
        'size-52': styleStore.activeBreakpoint === 'md',
        'size-32': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
      }"
    />

    <BaseButton
      id="goHomeButton"
      name="go_home_button"
      aria-label="click to go to the home page"
      :icon="HomeIcon"
      @click.stop="router.push({ name: i18nStore.notFoundPageI18nContent.goHomeButton.link })"
    >
      {{ i18nStore.notFoundPageI18nContent.goHomeButton.text }}
    </BaseButton>
  </div>
</template>
