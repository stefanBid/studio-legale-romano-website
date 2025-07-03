<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStyleStore, useI18nStore } from '@/stores';
import { usePageMeta } from '@/hooks';
import { BaseButton } from '@/components';
import { useRouter } from 'vue-router';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();

// Hooks Declarations
const router = useRouter();

// SEO Feature Manage Meta Tags
usePageMeta({
  meta: computed(() => i18nStore.homePageI18nContent.metaDescription),
  currentLang: computed(() => i18nStore.currentLanguage),
});

// Feature 1: Manage effects
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <div class="relative w-full h-screen overflow-x-hidden bg-rm-main">
    <!-- Background -->
    <picture class="transition-all duration-300 ease-in-out">
      <source :srcset="i18nStore.homePageI18nContent.bgImage.webp" type="image/webp" />
      <img
        :src="i18nStore.homePageI18nContent.bgImage.jpg"
        class="absolute inset-0 object-cover object-center w-full h-full pointer-events-none"
        alt="Home Page Cover"
        decoding="async"
      />
    </picture>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-rm-main z-rm-base-1 opacity-55"></div>

    <div
      class="absolute inset-0 flex w-full h-full pt-20 transition-all duration-300 ease-in-out z-rm-base-2"
      :class="[styleStore.containerPadding]"
    >
      <transition name="scale-and-fade-slow">
        <div
          v-if="show"
          class="flex flex-col items-center justify-center w-full h-full transition-all duration-300 ease-in-out"
        >
          <h1
            class="p-0 font-bold leading-none text-center whitespace-normal transition-all duration-300 ease-in-out text-rm-secondary font-playfair"
            :class="[styleStore.textSizeXXL]"
          >
            {{ i18nStore.homePageI18nContent.firstHeading }}
          </h1>
          <h2
            class="font-bold text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
            :class="[styleStore.textSizeXL]"
          >
            {{ i18nStore.homePageI18nContent.secondHeading }}
          </h2>
          <h3
            class="mt-2 font-medium text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
            :class="[styleStore.textSizeL]"
          >
            {{ i18nStore.homePageI18nContent.thirdHeading }}
          </h3>
          <div
            :class="[
              styleStore.elementTotalGapM,
              {
                'mt-12':
                  styleStore.activeBreakpoint !== 'xs' &&
                  styleStore.activeBreakpoint !== 'sm' &&
                  styleStore.activeBreakpoint !== 'md',
                'mt-10': styleStore.activeBreakpoint === 'md',
                'mt-8':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
                'inline-flex items-center justify-center':
                  styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
                'flex flex-col items-center justify-center':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              },
            ]"
          >
            <BaseButton
              id="firstCtaButton"
              variant="primary"
              :aria-label="i18nStore.homePageI18nContent.firstCta.text"
              :class="{
                'min-w-80':
                  styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
                'w-full':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              }"
              @click.stop="router.push({ name: i18nStore.homePageI18nContent.firstCta.link })"
            >
              {{ i18nStore.homePageI18nContent.firstCta.text }}
            </BaseButton>
            <BaseButton
              id="secondCtaButton"
              variant="primary"
              :aria-label="i18nStore.homePageI18nContent.secondCta.text"
              :class="{
                'min-w-80':
                  styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
                'w-full':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              }"
              @click.stop="router.push({ name: i18nStore.homePageI18nContent.secondCta.link })"
            >
              {{ i18nStore.homePageI18nContent.secondCta.text }}
            </BaseButton>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
