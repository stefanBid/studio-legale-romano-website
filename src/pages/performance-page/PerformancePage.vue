<script setup lang="ts">
import { useRouter } from 'vue-router';
import { BookOpenIcon, BookmarkIcon } from '@heroicons/vue/24/solid';
import { IMAGES } from '@/constants';
import { useStyleStore, useTitleStore, useI18nStore } from '@/stores';
import { BaseAccordion, BaseElementsContainer, ThePageContainer, BaseBadge } from '@/components';
import { scrollToElement, stringPurifier } from '@/utils';
import { onMounted, ref } from 'vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Hooks Declarations
const router = useRouter();

// Feature 1: Page Title
titleStore.setTitleSuffix('Prestazioni');

// Feature 2: Manage Open Accordion Section on Route Change
const defaultAccordionIdOpen = ref<string>();

onMounted(() => {
  defaultAccordionIdOpen.value =
    router.currentRoute.value.hash !== '' ? router.currentRoute.value.hash.slice(1) : undefined;
});
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.performancePageI18nContent.firstHeading,
      subtitle: i18nStore.performancePageI18nContent.secondHeading,
      imgPath: IMAGES.performancePageCoverImg,
    }"
  >
    <template #page-content>
      <BaseElementsContainer>
        <BaseBadge :icon="BookmarkIcon">
          <div
            :class="[styleStore.elementTotalPaddingS]"
            class="w-full transition-all duration-300 ease-in-out"
          >
            <h1
              :class="[styleStore.textSizeL]"
              class="font-medium text-left transition-all duration-300 ease-in-out font-playfair"
            >
              {{ i18nStore.performancePageI18nContent.index.title }}
            </h1>

            <ol
              :class="[styleStore.textSizeS]"
              class="list-inside list-[upper-roman] font-lora pl-3"
            >
              <li
                v-for="item in i18nStore.performancePageI18nContent.index.items"
                :key="item.shortcutId"
                tabindex="0"
                class="transition-all duration-300 ease-in-out outline-none cursor-pointer ring-0 w-fit hover:text-rm-secondary hover:underline focus-visible:text-rm-secondary focus-visible:underline focus-visible:ring-0"
                @click.stop="scrollToElement(item.shortcutId.slice(1))"
                @keypress.enter.stop="scrollToElement(item.shortcutId.slice(1))"
              >
                {{ item.title }}
              </li>
            </ol>
          </div>
        </BaseBadge>
      </BaseElementsContainer>
      <BaseElementsContainer
        v-for="(item, index) in i18nStore.performancePageI18nContent.index.items"
        :key="item.shortcutId"
        :intersection-observer-settings="{
          rootElement: null,
          rootMargin: '-80px 0px 0px 0px',
          threshold: 0.05,
        }"
      >
        <BaseAccordion
          :id="item.shortcutId.slice(1)"
          tabindex="0"
          :external-open="
            defaultAccordionIdOpen
              ? item.shortcutId.slice(1) === defaultAccordionIdOpen
              : index === 0
          "
        >
          <template #section-visibility-content>
            <div class="flex items-center w-full gap-2">
              <BookOpenIcon
                :class="[styleStore.iconSizeM]"
                class="transition-all duration-300 ease-in-out text-rm-secondary shrink-0"
              />
              <h2
                :class="[styleStore.textSizeL]"
                class="font-medium text-left transition-all duration-300 ease-in-out text-rm-secondary font-playfair"
              >
                {{ item.title }}
              </h2>
            </div>
          </template>
          <template #section-hidden-content>
            <div class="w-full">
              <div
                class="relative border-2 rounded-md border-rm-secondary p-2 h-[300px] w-full transition-all duration-300 ease-in-out"
                :class="{
                  'mb-4':
                    styleStore.activeBreakpoint !== 'xs' &&
                    styleStore.activeBreakpoint !== 'sm' &&
                    styleStore.activeBreakpoint !== 'md',
                  'mb-3': styleStore.activeBreakpoint === 'md',
                  'mb-2.5':
                    styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
                }"
              >
                <div
                  class="absolute inset-0 m-2 rounded-md bg-rm-main z-rm-base-1 opacity-20"
                ></div>
                <picture>
                  <source :srcset="IMAGES.accordionTestImg.webp" type="image/webp" />
                  <img
                    :src="IMAGES.accordionTestImg.jpg"
                    :alt="item.title"
                    loading="lazy"
                    decoding="async"
                    class="object-cover object-center w-full h-full rounded-md"
                  />
                </picture>
              </div>
              <p
                :class="[styleStore.textSizeS, styleStore.firstLetterSize]"
                class="text-justify transition-all duration-300 ease-in-out text-rm-main font-lora first-letter:text-rm-secondary"
                v-html="stringPurifier(item.description)"
              ></p>
            </div>
          </template>
        </BaseAccordion>
      </BaseElementsContainer>
    </template>
  </ThePageContainer>
</template>
