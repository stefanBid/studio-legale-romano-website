<script setup lang="ts">
import { useStyleStore } from '@/stores';

interface BaseCardProps {
  headerType?: 'default' | 'custom';
  contentType?: 'default' | 'custom';
  title?: string;
  textContent?: string;
  ariaLabel?: string;
}

// stores declaration
const styleStore = useStyleStore();

const props = withDefaults(defineProps<BaseCardProps>(), {
  headerType: 'default',
  contentType: 'default',
  title: undefined,
  textContent: undefined,
  ariaLabel: 'general card',
});
</script>

<template>
  <div
    :aria-label="props.ariaLabel"
    class="flex flex-col bg-white border-2 rounded-md shadow-lg border-rm-secondary"
  >
    <div class="w-full rounded-t-sm bg-rm-secondary shrink-0">
      <div
        v-if="props.headerType === 'default'"
        :class="[styleStore.elementTotalPaddingS]"
        class="inline-flex items-center justify-center w-full transition-all duration-300 ease-in-out"
      >
        <h2
          :class="[styleStore.textSizeL]"
          class="font-bold text-white transition-all duration-300 ease-in-out font-playfair"
        >
          {{ props.title }}
        </h2>
      </div>
      <template v-if="props.headerType === 'custom'">
        <slot name="header"> </slot>
      </template>
    </div>
    <div class="flex-1">
      <div
        v-if="props.contentType === 'default'"
        :class="[styleStore.elementTotalPaddingS]"
        class="inline-flex items-center justify-center w-full h-full transition-all duration-300 ease-in-out"
      >
        <p
          :class="[styleStore.textSizeXS]"
          class="text-justify transition-all duration-300 ease-in-out font-lora"
        >
          {{ props.textContent }}
        </p>
      </div>
      <template v-if="props.contentType === 'custom'">
        <slot name="content"> </slot>
      </template>
    </div>
  </div>
</template>
