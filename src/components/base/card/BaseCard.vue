<script setup lang="ts">
import { useStyleStore } from '@/stores';
import type { FunctionalComponent, Component } from 'vue';

interface BaseCardProps {
  title?: string;
  icon?: FunctionalComponent | Component | string;
  textContent?: string;
}

// stores declaration
const styleStore = useStyleStore();

const props = withDefaults(defineProps<BaseCardProps>(), {
  title: undefined,
  icon: undefined,
  textContent: undefined,
});
</script>

<template>
  <div
    v-bind="$attrs"
    class="flex flex-col bg-white border-2 rounded shadow-lg border-rm-secondary"
  >
    <div class="w-full bg-rm-secondary shrink-0">
      <div
        v-if="!$slots.header"
        :class="[styleStore.elementTotalPaddingS]"
        class="inline-flex items-center justify-center w-full transition-all duration-300 ease-in-out"
      >
        <h2
          :class="[styleStore.textSizeL]"
          class="font-bold text-white truncate transition-all duration-300 ease-in-out font-playfair"
        >
          {{ props.title }}
        </h2>
        <component
          :is="props.icon"
          v-if="props.icon"
          :class="[styleStore.iconSizeM]"
          class="ml-2 text-white shrink-0"
        />
      </div>
      <template v-if="$slots.header">
        <slot name="header" :title="props.title"> </slot>
      </template>
    </div>
    <div class="flex-1">
      <div
        v-if="!$slots.content"
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
      <template v-if="$slots.content">
        <slot name="content" :text-content="props.textContent"> </slot>
      </template>
    </div>
  </div>
</template>
