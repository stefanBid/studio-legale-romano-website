<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStyleStore } from '@/stores';
import type { Image } from '@/types';

interface PageContainerProps {
  introCover?: {
    title: string;
    subtitle?: string;
    imgPath: Image;
  };
}

const props = withDefaults(defineProps<PageContainerProps>(), {
  introCover: undefined,
});

// Store Declarations
const styleStore = useStyleStore();

// Feature 1: Transition
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <div class="flex flex-col min-h-0">
    <div
      v-if="props.introCover"
      :class="[
        styleStore.containerPadding,
        {
          'pb-9 h-[600px]':
            styleStore.activeBreakpoint !== 'xs' &&
            styleStore.activeBreakpoint !== 'sm' &&
            styleStore.activeBreakpoint !== 'md',
          'pb-8 h-[550px]': styleStore.activeBreakpoint === 'md',
          'pb-7 h-[500px]':
            styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
        },
      ]"
      class="relative flex flex-col items-center justify-center pt-20 transition-all duration-300 ease-in-out bg-rm-secondary"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-rm-main z-rm-base-1 opacity-55"></div>
      <picture>
        <source :srcset="props.introCover.imgPath.webp" type="image/webp" />
        <img
          :src="props.introCover.imgPath.jpg"
          class="absolute inset-0 object-cover object-center w-full h-full pointer-events-none"
          decoding="async"
        />
      </picture>
      <transition name="scale-and-fade-slow">
        <div
          v-if="show"
          class="absolute inset-0 flex w-full h-full pt-20 z-rm-base-2"
          :class="[styleStore.containerPadding]"
        >
          <div
            :class="{
              'gap-y-2.5':
                styleStore.activeBreakpoint == 'xs' || styleStore.activeBreakpoint == 'sm',
              'gap-y-3': styleStore.activeBreakpoint == 'md',
              'gap-y-4':
                styleStore.activeBreakpoint != 'xs' &&
                styleStore.activeBreakpoint != 'sm' &&
                styleStore.activeBreakpoint != 'md',
            }"
            class="flex flex-col items-center justify-center w-full h-full transition-all duration-300 ease-in-out"
          >
            <h1
              class="font-bold text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
              :class="[styleStore.textSizeXXL]"
            >
              {{ props.introCover.title }}
            </h1>
            <h2
              v-if="props.introCover.subtitle"
              class="font-medium text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
              :class="[styleStore.textSizeL]"
            >
              {{ props.introCover.subtitle }}
            </h2>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="flex flex-col"
      :class="[
        styleStore.containerPadding,
        {
          'py-20 gap-20': $slots['page-content'],
        },
      ]"
    >
      <slot name="page-content"></slot>
    </div>
  </div>
</template>
