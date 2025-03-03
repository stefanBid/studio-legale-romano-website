<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IMAGES } from '@/constants';
import { useStyleStore, useTitleStore, useI18nStore } from '@/stores';
import { BaseButton } from '@/components';
import { useRouter } from 'vue-router';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Hooks Declarations
const router = useRouter();

// Feature 1: Page Title
titleStore.setTitleSuffix('Home');

// Feature 2: Manage effects
const show = ref(false);
const imageRef = ref<HTMLImageElement | null>(null);
const isImageLoaded = ref(false);

onMounted(() => {
  show.value = true;
  if (imageRef.value) {
    imageRef.value.onload = () => {
      isImageLoaded.value = true;
    };
  }
});
</script>

<template>
  <div class="relative w-full h-screen overflow-x-hidden bg-rm-main">
    <!-- Background -->
    <picture
      :class="{ 'opacity-100': isImageLoaded, 'opacity-0': !isImageLoaded }"
      class="transition-all duration-300 ease-in-out"
    >
      <source :srcset="IMAGES.homePageCoverImg.webp" type="image/webp" />
      <img
        ref="imageRef"
        :src="IMAGES.homePageCoverImg.jpg"
        class="absolute inset-0 object-cover object-center w-full h-full pointer-events-none"
        alt="Home Page Cover"
        loading="lazy"
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
          :class="[styleStore.elementTotalGapS]"
          class="flex flex-col items-center justify-center w-full h-full transition-all duration-300 ease-in-out"
        >
          <h1
            class="font-bold text-center whitespace-normal transition-all duration-300 ease-in-out text-rm-secondary font-playfair"
            :class="[styleStore.textSizeXXL]"
          >
            {{ i18nStore.homePageI18nContent.firstHeading }}
          </h1>
          <h2
            class="font-medium text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
            :class="[styleStore.textSizeL]"
          >
            {{ i18nStore.homePageI18nContent.secondHeading }}
          </h2>
          <div
            :class="[
              styleStore.elementTotalGapM,
              {
                'inline-flex items-center justify-center':
                  styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
                'flex flex-col items-center justify-center':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              },
            ]"
            class="mt-6"
          >
            <BaseButton
              id="firstCtaButton"
              variant="primary"
              content-size="medium"
              spacing-size="medium"
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
              content-size="medium"
              spacing-size="medium"
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
