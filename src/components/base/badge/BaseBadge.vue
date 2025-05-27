<script setup lang="ts">
import { useStyleStore } from '@/stores';
import type { Component, FunctionalComponent } from 'vue';

interface BaseBadgeProps {
  icon: Component | FunctionalComponent | string;
  textContent?: string;
}

// stores declaration
const styleStore = useStyleStore();

const props = withDefaults(defineProps<BaseBadgeProps>(), {
  iconSize: 'medium',
  textContent: undefined,
  ariaLabel: 'general badge',
});
</script>

<template>
  <div v-bind="$attrs" class="flex bg-white border-2 rounded shadow-lg border-rm-secondary">
    <div
      :class="[styleStore.elementTotalPaddingXS]"
      class="inline-flex items-center justify-center transition-all duration-300 ease-in-out w-fit bg-rm-secondary shrink-0"
    >
      <component
        :is="props.icon"
        :class="[styleStore.iconSizeM]"
        class="text-white no-underline transition-all duration-300 ease-in-out"
      />
    </div>
    <div class="flex items-center justify-center flex-1 w-full">
      <p
        v-if="props.textContent"
        :class="[styleStore.textSizeS]"
        class="text-justify no-underline truncate transition-all duration-300 ease-in-out font-lora"
      >
        {{ props.textContent }}
      </p>
      <template v-else>
        <slot> </slot>
      </template>
    </div>
  </div>
</template>
