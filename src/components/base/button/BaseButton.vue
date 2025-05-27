<script setup lang="ts">
import { type Component, type FunctionalComponent } from 'vue';
import { ArrowPathIcon } from '@heroicons/vue/24/outline';
import { useStyleStore } from '@/stores';

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'custom';
  size?: 'medium' | 'small' | 'custom';
  disabled?: boolean;
  loading?: boolean;
  icon?: FunctionalComponent | Component | string;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
  variant: 'primary',
  size: 'medium',
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
    :type="props.type"
    :disabled="props.disabled || props.loading"
    v-bind="$attrs"
    class="inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out outline-none ring-0"
    :tabindex="props.disabled || props.loading ? undefined : 0"
    :class="[
      props.size === 'medium' ? styleStore.textSizeS : undefined,
      props.size === 'small' ? styleStore.textSizeXS : undefined,
      {
        'rounded font-playfair font-bold': props.variant !== 'custom',
        'px-6 py-4':
          props.size === 'medium' &&
          styleStore.activeBreakpoint !== 'md' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'xs',
        'px-5 py-3': props.size === 'medium' && styleStore.activeBreakpoint === 'md',
        'px-4 py-2.5':
          props.size === 'medium' &&
          (styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs'),
      },
      {
        'px-4 py-2':
          props.size === 'small' &&
          styleStore.activeBreakpoint !== 'md' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'xs',
        'px-3 py-1.5': props.size === 'small' && styleStore.activeBreakpoint === 'md',
        'px-2.5 py-1':
          props.size === 'small' &&
          (styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs'),
      },
      {
        'bg-rm-secondary border border-rm-secondary hover:border-white hover:bg-white  focus-visible:border-white focus-visible:bg-white text-rm-main hover:text-rm-secondary focus-visible:text-rm-secondary':
          props.variant === 'primary',
        'bg-rm-secondary border border-rm-secondary hover:border-rm-main hover:bg-rm-main  focus-visible:border-rm-main focus-visible:bg-rm-main text-rm-main hover:text-rm-secondary focus-visible:text-rm-secondary':
          props.variant === 'secondary',
        'pointer-events-none opacity-50': props.disabled || props.loading,
        'cursor-pointer': !props.disabled && !props.loading,
      },
    ]"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <component
      :is="props.loading ? ArrowPathIcon : props.icon"
      class="shrink-0 stroke-[2.5px]"
      :class="[
        props.size === 'medium' ? styleStore.iconSizeS : undefined,
        props.size === 'small' ? styleStore.iconSizeXS : undefined,
        {
          'animate-spin': props.loading,
        },
      ]"
    />
  </button>
</template>
