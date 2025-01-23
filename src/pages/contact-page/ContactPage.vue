<script setup lang="ts">
import { useStyleStore, useTitleStore, useI18nStore } from '@/stores';
import { ThePageContainer } from '@/components';
import OfficeMap from '@/pages/contact-page/components/office-map/OfficeMap.vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Contatti');
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.contactPageI18nContent.firstHeading,
      subtitle: i18nStore.contactPageI18nContent.secondHeading,
      imgPath: i18nStore.contactPageI18nContent.imagePath,
    }"
  >
    <template #page-content>
      <OfficeMap />
    </template>
  </ThePageContainer>
</template>
