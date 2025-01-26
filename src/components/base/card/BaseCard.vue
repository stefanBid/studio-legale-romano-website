<script setup lang="ts">
import { useStyleStore } from '@/stores';

interface BaseCardProps {
  title: string;
  textContent?: string;
  ariaLabel?: string;
  dataTestid?: string;
}

// stores declaration
const styleStore = useStyleStore();

const props = withDefaults(defineProps<BaseCardProps>(), {
  textContent: undefined,
  dataTestid: 'base-card',
  ariaLabel: 'general card',
});
</script>

<template>
  <div
    :data-testid="props.dataTestid"
    :aria-label="props.ariaLabel"
    class="flex flex-col bg-white border-2 rounded-md border-rm-secondary"
  >
    <div
      class="inline-flex items-center justify-center w-full p-2 rounded-t-sm bg-rm-secondary shrink-0"
    >
      <h2 :class="[styleStore.textSizeL]" class="font-bold text-white font-playfair">
        {{ props.title }}
      </h2>
    </div>
    <div class="flex-col flex-1 p-4">
      <div class="inline-flex items-center justify-center w-full">
        <p v-if="props.textContent" :class="[styleStore.textSizeXS]" class="text-justify font-lora">
          {{ props.textContent }}
        </p>
      </div>
      <slot> </slot>
    </div>
  </div>
</template>
