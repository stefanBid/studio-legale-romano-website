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
  ariaLabel: 'general button',
});

// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <button
    v-bind="$attrs"
    :type="props.type"
    :disabled="props.disabled || props.loading"
    :aria-label="props.ariaLabel"
    class="inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out rounded outline-none ring-0 focus-visible:ring-0 group"
    :tabindex="props.disabled || props.loading ? -1 : 0"
    :class="[
      {
        'px-6 py-4':
          props.spacingSize === 'medium' &&
          styleStore.activeBreakpoint !== 'md' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'xs',
        'px-5 py-3': props.spacingSize === 'medium' && styleStore.activeBreakpoint === 'md',
        'px-4 py-2.5':
          props.spacingSize === 'medium' &&
          (styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs'),
      },
      {
        'px-4 py-2':
          props.spacingSize === 'small' &&
          styleStore.activeBreakpoint !== 'md' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'xs',
        'px-3 py-1.5': props.spacingSize === 'small' && styleStore.activeBreakpoint === 'md',
        'px-2.5 py-1':
          props.spacingSize === 'small' &&
          (styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs'),
      },
      {
        'bg-rm-secondary border border-rm-secondary hover:border-white hover:bg-white  focus-visible:border-white focus-visible:bg-white':
          props.variant === 'primary',
        'bg-rm-secondary border border-rm-secondary hover:border-rm-main hover:bg-rm-main  focus-visible:border-rm-main focus-visible:bg-rm-main':
          props.variant === 'secondary',
        'pointer-events-none opacity-50': props.disabled || props.loading,
        'cursor-pointer': !props.disabled && !props.loading,
      },
    ]"
  >
    <span
      v-if="$slots.default"
      class="flex-1 font-bold transition-all duration-300 ease-in-out font-playfair"
      :class="[
        props.contentSize === 'medium' ? styleStore.textSizeS : undefined,
        props.contentSize === 'small' ? styleStore.textSizeXS : undefined,
        {
          'text-rm-main group-hover:text-rm-secondary group-focus-visible:text-rm-secondary':
            props.variant !== 'custom',
        },
      ]"
    >
      <slot></slot>
    </span>
    <component
      :is="props.loading ? ArrowPathIcon : props.icon"
      class="transition-all duration-300 ease-in-out shrink-0"
      :class="[
        props.contentSize === 'medium' ? styleStore.iconSizeM : undefined,
        props.contentSize === 'small' ? styleStore.iconSizeS : undefined,
        {
          'text-rm-main group-hover:text-rm-secondary group-focus-visible:text-rm-secondary':
            props.variant !== 'custom',
          'animate-spin': props.loading,
        },
      ]"
    />
  </button>
</template>
