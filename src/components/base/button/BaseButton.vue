<script setup lang="ts">
import { type Component, type FunctionalComponent } from 'vue';
import { ArrowPathIcon } from '@heroicons/vue/24/outline';
import { useStyleStore } from '@/stores';

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'custom';
  contentSize?: 'default' | 'custom';
  spacingSize?: 'default' | 'custom';
  disabled?: boolean;
  loading?: boolean;
  icon?: FunctionalComponent | Component | string;
  dataTestid?: string;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
  variant: 'secondary',
  contentSize: 'default',
  spacingSize: 'default',
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
    class="inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded outline-0 ring-0 focus-visible:ring-0 font-roboto"
    :tabindex="props.disabled || props.loading ? -1 : 0"
    :class="[
      props.contentSize === 'default' ? styleStore.textSizeS : undefined,
      {
        'px-4 py-2 gap-x-2': props.spacingSize === 'default',
      },
      {
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
        props.contentSize === 'default' ? styleStore.iconSizeS : undefined,
        { 'animate-spin': props.loading },
      ]"
    />
  </button>
</template>
