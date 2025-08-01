import { defineStore } from 'pinia';
import { useBreakpoints } from '@vueuse/core';
import type { Breakpoint } from '@/types';
import { computed, type ComputedRef } from 'vue';

export const useStyleStore = defineStore('style', () => {
  const breakpoints = useBreakpoints({
    xs: 0, // From 0 to 639px
    sm: 640, // From 640px to 767px
    md: 768, // From 768px to 1023px
    lg: 1024, // From 1024px to 1279px
    xl: 1280, // From 1280px to 1535px
    xxl: 1536, // From 1536px and up
  });

  // Reactive state for style
  const activeBreakpoint = breakpoints.active() as ComputedRef<Breakpoint | undefined>;

  const containerPadding = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'px-[3%]';
    }
    if (activeBreakpoint.value === 'md') {
      return 'px-[4%]';
    }
    return 'px-[5%]';
  });

  const elementTotalPaddingXS = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'p-1.5';
    }
    if (activeBreakpoint.value === 'md') {
      return 'p-2';
    }
    return 'p-2.5';
  });

  const elementTotalPaddingS = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'p-2.5';
    }
    if (activeBreakpoint.value === 'md') {
      return 'p-3';
    }
    return 'p-4';
  });

  const elementTotalPaddingM = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'p-4';
    }
    if (activeBreakpoint.value === 'md') {
      return 'p-5';
    }
    return 'p-6';
  });

  const containerGapElements = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'gap-y-20';
    }
    if (activeBreakpoint.value === 'md' || activeBreakpoint.value === 'lg') {
      return 'gap-y-24';
    }
    return ' gap-y-28';
  });

  const elementTotalGapXS = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'gap-1.5';
    }
    if (activeBreakpoint.value === 'md') {
      return 'gap-2';
    }
    return 'gap-3';
  });

  const elementTotalGapS = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'gap-2.5';
    }
    if (activeBreakpoint.value === 'md') {
      return 'gap-3';
    }
    return 'gap-4';
  });

  const elementTotalGapM = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'gap-4';
    }
    if (activeBreakpoint.value === 'md') {
      return 'gap-5';
    }
    return 'gap-6';
  });

  const firstLetterSize = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'first-letter:text-rm-3xl';
    }
    if (activeBreakpoint.value === 'md') {
      return 'first-letter:text-rm-4xl';
    }
    return 'first-letter:text-rm-5xl';
  });

  // Common style for text elements
  const textSizeXXL = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'text-rm-4xl';
    }
    if (activeBreakpoint.value === 'md') {
      return 'text-rm-6xl';
    }
    return 'text-rm-7xl';
  });

  const textSizeXL = computed(() => {
    if (activeBreakpoint.value === 'xs') {
      return 'text-rm-2xl';
    }
    if (activeBreakpoint.value === 'sm') {
      return 'text-rm-3xl';
    }
    if (activeBreakpoint.value === 'md') {
      return 'text-rm-4xl';
    }
    return 'text-rm-5xl';
  });

  const textSizeL = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'text-rm-lg';
    }
    if (activeBreakpoint.value === 'md') {
      return 'text-rm-xl';
    }
    return 'text-rm-2xl';
  });

  const textSizeM = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'text-rm-base';
    }
    if (activeBreakpoint.value === 'md') {
      return 'text-rm-lg';
    }
    return 'text-rm-xl';
  });

  const textSizeS = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'text-rm-sm';
    }
    if (activeBreakpoint.value === 'md') {
      return 'text-rm-base';
    }
    return 'text-rm-lg';
  });

  const textSizeXS = computed(() => {
    if (
      activeBreakpoint.value === 'xs' ||
      activeBreakpoint.value === 'sm' ||
      activeBreakpoint.value === 'md'
    ) {
      return 'text-rm-xs';
    }
    return 'text-rm-sm';
  });

  // Common style for icons elements
  const iconSizeXXL = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'size-16';
    }
    if (activeBreakpoint.value === 'md') {
      return 'size-20';
    }
    return 'size-32';
  });
  const iconSizeXL = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'size-14';
    }
    if (activeBreakpoint.value === 'md') {
      return 'size-16';
    }
    return 'size-20';
  });

  const iconSizeL = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'size-12';
    }
    if (activeBreakpoint.value === 'md') {
      return 'size-14';
    }
    return 'size-16';
  });

  const iconSizeM = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'size-6';
    }
    if (activeBreakpoint.value === 'md') {
      return 'size-8';
    }
    return 'size-10';
  });

  const iconSizeS = computed(() => {
    if (activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm') {
      return 'size-4';
    }
    if (activeBreakpoint.value === 'md') {
      return 'size-5';
    }
    return 'size-6';
  });

  const iconSizeXS = computed(() => {
    if (
      activeBreakpoint.value === 'xs' ||
      activeBreakpoint.value === 'sm' ||
      activeBreakpoint.value === 'md'
    ) {
      return 'size-4';
    }
    return 'size-5';
  });

  return {
    activeBreakpoint,
    containerPadding,
    containerGapElements,
    elementTotalPaddingXS,
    elementTotalPaddingS,
    elementTotalPaddingM,
    elementTotalGapXS,
    elementTotalGapS,
    elementTotalGapM,
    firstLetterSize,
    textSizeXXL,
    textSizeXL,
    textSizeL,
    textSizeM,
    textSizeS,
    textSizeXS,
    iconSizeXXL,
    iconSizeXL,
    iconSizeL,
    iconSizeM,
    iconSizeS,
    iconSizeXS,
  };
});
