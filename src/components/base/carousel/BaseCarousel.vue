<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from 'vue';
import { useStyleStore } from '@/stores';
import { BaseButton } from '@/components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

interface BaseCarouselProps {
  numberOfItems: number;
  autoPlay?: boolean;
  navigationDots?: boolean;
  autoPlayInterval?: number;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<BaseCarouselProps>(), {
  autoPlay: false,
  navigationDots: true,
  autoPlayInterval: 3000,
  ariaLabel: 'Carousel',
});

// Store Declarations
const styleStore = useStyleStore();

// Feature 1: Carousel Logic
const currentIndex = ref(0);
let timer: number | null = null;

const next = (): void => {
  currentIndex.value = (currentIndex.value + 1) % props.numberOfItems;
  if (props.autoPlay) {
    stopAutoPlay();
    startAutoPlay();
  }
};

const prev = (): void => {
  currentIndex.value = (currentIndex.value - 1 + props.numberOfItems) % props.numberOfItems;
  if (props.autoPlay) {
    stopAutoPlay();
    startAutoPlay();
  }
};

const startAutoPlay = (): void => {
  if (props.autoPlay) {
    timer = window.setInterval(() => {
      next();
    }, props.autoPlayInterval || 3000);
  }
};

const stopAutoPlay = (): void => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
};

const goTo = (index: number): void => {
  currentIndex.value = index;
  if (props.autoPlay) {
    stopAutoPlay();
    startAutoPlay();
  }
};

watch(
  () => props.autoPlay,
  (newVal) => {
    stopAutoPlay();
    if (newVal) {
      startAutoPlay();
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => stopAutoPlay());
</script>

<template>
  <div
    class="relative w-full overflow-hidden border-2 rounded-md shadow-lg border-rm-secondary"
    :aria-label="props.ariaLabel"
  >
    <!--Black Filter-->
    <div class="absolute inset-0 bg-black/40 z-rm-base-2"></div>
    <!-- Wrapper with the carousel items -->
    <div
      class="flex transition-transform duration-500 ease-in-out z-rm-base-1"
      :style="`transform: translateX(-${currentIndex * 100}%)`"
    >
      <div
        v-for="index in numberOfItems"
        :key="index"
        class="inline-flex items-center justify-center flex-shrink-0 w-full bg-white h-fit"
      >
        <slot name="carousel-item" :index="index - 1"></slot>
      </div>
    </div>
    <!-- Buttons for navigation -->
    <BaseButton
      content-size="medium"
      spacing-size="custom"
      variant="primary"
      aria-label="Previous"
      class="absolute transform -translate-y-1/2 top-1/2 z-rm-base-3"
      :class="[
        styleStore.elementTotalPaddingXS,
        {
          'left-4':
            styleStore.activeBreakpoint !== 'xs' &&
            styleStore.activeBreakpoint !== 'sm' &&
            styleStore.activeBreakpoint !== 'md',
          'left-3': styleStore.activeBreakpoint === 'md',
          'left-2.5': styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
        },
      ]"
      :icon="ChevronLeftIcon"
      @click.stop="prev()"
      @keydown.enter.stop="prev()"
    />
    <BaseButton
      content-size="medium"
      spacing-size="custom"
      variant="primary"
      aria-label="Next"
      class="absolute transform -translate-y-1/2 top-1/2 z-rm-base-3"
      :class="[
        styleStore.elementTotalPaddingXS,
        {
          'right-4':
            styleStore.activeBreakpoint !== 'xs' &&
            styleStore.activeBreakpoint !== 'sm' &&
            styleStore.activeBreakpoint !== 'md',
          'right-3': styleStore.activeBreakpoint === 'md',
          'right-2.5': styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
        },
      ]"
      :icon="ChevronRightIcon"
      @click.stop="next()"
      @keydown.enter.stop="next()"
    />
    <!--Bullet List-->
    <div
      v-if="props.navigationDots"
      :class="{
        'bottom-4':
          styleStore.activeBreakpoint !== 'xs' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'md',
        'bottom-3': styleStore.activeBreakpoint === 'md',
        'bottom-2.5': styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
      }"
      class="absolute flex space-x-2.5 transform -translate-x-1/2 left-1/2 z-rm-base-3 transition-all duration-300 ease-in-out"
    >
      <BaseButton
        v-for="index in props.numberOfItems"
        :key="index"
        content-size="custom"
        spacing-size="custom"
        variant="custom"
        :aria-label="`Go to ${index}`"
        class="rounded-full"
        :class="[
          currentIndex === index - 1
            ? 'bg-rm-secondary'
            : 'bg-white/60 hover:bg-rm-secondary/60 focus-visible:bg-rm-secondary/60',
          {
            'size-3.5':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
            'size-3': styleStore.activeBreakpoint === 'md',
            'size-2.5':
              styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
          },
        ]"
        @click.stop="goTo(index - 1)"
        @keydown.enter.stop="goTo(index - 1)"
      />
    </div>
  </div>
</template>
