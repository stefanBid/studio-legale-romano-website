<script setup lang="ts">
import { useStyleStore } from '@/stores';
import type { Component, FunctionalComponent } from 'vue';

interface BaseBadgeProps {
  icon: Component | FunctionalComponent | string;
  iconSize?: 'medium' | 'small';
  textContent?: string;
  ariaLabel?: string;
  dataTestid?: string;
}

// stores declaration
const styleStore = useStyleStore();

const props = withDefaults(defineProps<BaseBadgeProps>(), {
  iconSize: 'medium',
  textContent: undefined,
  dataTestid: 'base-badge',
  ariaLabel: 'general badge',
});
</script>

<template>
  <div
    :data-testid="props.dataTestid"
    :aria-label="props.ariaLabel"
    class="flex bg-white border-2 rounded-md shadow-lg border-rm-secondary"
  >
    <div
      :class="[styleStore.elementTotalPaddingXS]"
      class="inline-flex items-center justify-center transition-all duration-300 ease-in-out rounded-l-sm w-fit bg-rm-secondary shrink-0"
    >
      <component
        :is="props.icon"
        :class="[props.iconSize === 'medium' ? styleStore.iconSizeL : styleStore.iconSizeM]"
        class="text-white"
      />
    </div>
    <div class="inline-flex items-center justify-center flex-1 w-full overflow-x-hidden">
      <p
        v-if="props.textContent"
        :class="[styleStore.textSizeS]"
        class="text-justify truncate font-lora"
      >
        {{ props.textContent }}
      </p>
      <template v-else>
        <slot> </slot>
      </template>
    </div>
  </div>
</template>
