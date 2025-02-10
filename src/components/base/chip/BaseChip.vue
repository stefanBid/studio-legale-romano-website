<script setup lang="ts">
import { useStyleStore } from '@/stores';
import type { FunctionalComponent, Component } from 'vue';
interface BaseChipProps {
  text: string;
  icon?: FunctionalComponent | Component | string;
  variant?: 'main' | 'secondary';
  ariaLabel?: string;
  dataTestid?: string;
}
const props = withDefaults(defineProps<BaseChipProps>(), {
  icon: undefined,
  variant: 'main',
  ariaLabel: 'general chip',
  dataTestid: 'base-chip',
});

// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <span
    :data-testid="props.dataTestid"
    :aria-label="props.ariaLabel"
    :class="{
      'bg-rm-main text-rm-secondary': props.variant === 'main',
      'bg-rm-secondary text-white': props.variant === 'secondary',
      'h-8':
        styleStore.activeBreakpoint !== 'md' &&
        styleStore.activeBreakpoint !== 'sm' &&
        styleStore.activeBreakpoint !== 'xs',
      'h-7': styleStore.activeBreakpoint === 'md',
      'h-6': styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
    }"
    class="inline-flex items-center h-8 px-2 transition-all duration-300 ease-in-out rounded-md gap-x-2"
  >
    <component :is="props.icon" v-if="props.icon" :class="[styleStore.iconSizeS]" />
    <span :class="[styleStore.textSizeXS]" class="font-lora">{{ props.text }}</span>
  </span>
</template>
