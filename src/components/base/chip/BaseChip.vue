<script setup lang="ts">
import { useStyleStore } from '@/stores';
import type { FunctionalComponent, Component } from 'vue';
interface BaseChipProps {
  text: string;
  icon?: FunctionalComponent | Component | string;
  variant?: 'main' | 'secondary';
  ariaLabel?: string;
}
const props = withDefaults(defineProps<BaseChipProps>(), {
  icon: undefined,
  variant: 'main',
  ariaLabel: 'general chip',
});

// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <span
    :aria-label="props.ariaLabel"
    :class="{
      'bg-rm-main text-rm-secondary': props.variant === 'main',
      'bg-rm-secondary text-white': props.variant === 'secondary',
      'h-8 px-2.5':
        styleStore.activeBreakpoint !== 'md' &&
        styleStore.activeBreakpoint !== 'sm' &&
        styleStore.activeBreakpoint !== 'xs',
      'h-7 px-2': styleStore.activeBreakpoint === 'md',
      'h-7 px-1.5': styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
    }"
    class="inline-flex items-center gap-2 transition-all duration-300 ease-in-out rounded"
  >
    <component
      :is="props.icon"
      v-if="props.icon"
      :class="[styleStore.iconSizeS]"
      class="stroke-2"
    />
    <span :class="[styleStore.textSizeXS]" class="truncate font-lora">{{ props.text }}</span>
  </span>
</template>
