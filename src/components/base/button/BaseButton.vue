<script setup lang="ts">
import { type Component, type FunctionalComponent } from 'vue';
import { ArrowPathIcon } from '@heroicons/vue/24/outline';
import { useStyleStore } from '@/stores';

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'custom';
  contentSize?: 'medium' | 'small' | 'custom';
  spacingSize?: 'medium' | 'small' | 'custom';
  disabled?: boolean;
  loading?: boolean;
  icon?: FunctionalComponent | Component | string;
  dataTestid?: string;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
  variant: 'primary',
  contentSize: 'medium',
  spacingSize: 'medium',
  disabled: false,
  loading: false,
  icon: undefined,
  dataTestid: 'base-button',
  ariaLabel: 'general button',
});

// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <button
    :data-testid="props.dataTestid"
    v-bind="$attrs"
    :type="props.type"
    :disabled="props.disabled || props.loading"
    :aria-label="props.ariaLabel"
    class="inline-flex items-center justify-center font-bold transition-all duration-300 ease-in-out rounded outline-0 ring-0 focus-visible:ring-0 font-playfair"
    :tabindex="props.disabled || props.loading ? -1 : 0"
    :class="[
      props.contentSize === 'medium' ? styleStore.textSizeS : undefined,
      props.contentSize === 'small' ? styleStore.textSizeXS : undefined,
      {
        'px-6 py-4 gap-x-3':
          props.spacingSize === 'medium' &&
          styleStore.activeBreakpoint !== 'md' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'xs',
        'px-5 py-3 gap-x-2.5':
          props.spacingSize === 'medium' && styleStore.activeBreakpoint === 'md',
        'px-4 py-2 gap-x-2.5':
          props.spacingSize === 'medium' &&
          (styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs'),
      },
      {
        'px-3.5 py-1.5 gap-x-2':
          props.spacingSize === 'small' &&
          styleStore.activeBreakpoint !== 'md' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'xs',
        'px-3 py-1.5 gap-x-1.5':
          props.spacingSize === 'small' && styleStore.activeBreakpoint === 'md',
        'px-3 py-1 gap-x-1.5':
          props.spacingSize === 'small' &&
          (styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs'),
      },
      {
        'bg-rm-secondary text-rm-main border border-rm-secondary hover:text-rm-secondary hover:border-white hover:bg-white focus-visible:text-rm-secondary focus-visible:border-white focus-visible:bg-white':
          props.variant === 'primary',
        'bg-rm-secondary text-rm-main border border-rm-secondary hover:text-rm-secondary hover:border-rm-main hover:bg-rm-main focus-visible:text-rm-secondary focus-visible:border-rm-main focus-visible:bg-rm-main':
          props.variant === 'secondary',
        'pointer-events-none opacity-50': props.disabled || props.loading,
      },
    ]"
  >
    <slot></slot>
    <component
      :is="props.loading ? ArrowPathIcon : props.icon"
      class="shrink-0"
      :class="[
        props.contentSize === 'medium' ? styleStore.iconSizeM : undefined,
        props.contentSize === 'small' ? styleStore.iconSizeS : undefined,
        { 'animate-spin': props.loading },
      ]"
    />
  </button>
</template>
