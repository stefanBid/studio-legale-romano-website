<script setup lang="ts">
import { useTitleStore, useI18nStore, useStyleStore } from '@/stores';
import { ThePageContainer } from '@/components';
import ProfileCard from './components/ProfileCard.vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Chi Siamo');
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.whoWeArePageI18nContent.firstHeading,
      subtitle: i18nStore.whoWeArePageI18nContent.secondHeading,
      imgPath: i18nStore.whoWeArePageI18nContent.imagePath,
    }"
  >
    <template #page-content>
      <div id="team-section" class="flex flex-col">
        <!-- Heading -->
        <div class="mb-8">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.whoWeArePageI18nContent.team.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.whoWeArePageI18nContent.team.description }}
          </p>
        </div>
        <ProfileCard />
      </div>

      <div id="office-section" class="flex flex-col">
        <!-- Heading -->
        <div class="mb-8">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.whoWeArePageI18nContent.office.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.whoWeArePageI18nContent.office.description }}
          </p>
        </div>
      </div>
    </template>
  </ThePageContainer>
</template>
