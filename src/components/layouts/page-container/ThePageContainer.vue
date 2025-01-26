<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue';
import { useStyleStore } from '@/stores';

interface PageContainerProps {
  introCover?: {
    title: string;
    subtitle?: string;
    imgPath: string;
  };
}

const props = withDefaults(defineProps<PageContainerProps>(), {
  introCover: undefined,
});

// Store Declarations
const styleStore = useStyleStore();

// Hooks Declarations
const slots = useSlots();

// Feature 1: Transition
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <div class="flex flex-col min-h-0">
    <div
      v-if="props.introCover"
      :class="[styleStore.containerPadding]"
      class="relative flex flex-col items-center justify-center h-[600px] pt-20 pb-8"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-rm-main z-rm-base-1 opacity-55"></div>
      <img
        :src="props.introCover.imgPath"
        class="absolute inset-0 object-cover object-center w-full h-full pointer-events-none"
      />
      <div
        class="absolute inset-0 flex w-full h-full pt-20 z-rm-base-2"
        :class="[styleStore.containerPadding]"
      >
        <transition name="scale-and-fade-slow">
          <div
            v-if="show"
            class="flex flex-col items-center justify-center w-full h-full transition-all duration-300 ease-in-out gap-y-4"
          >
            <h1
              class="font-bold text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
              :class="[styleStore.textSizeXXL]"
            >
              {{ props.introCover.title }}
            </h1>
            <h2
              v-if="props.introCover.subtitle"
              class="font-medium text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-playfair"
              :class="[styleStore.textSizeL]"
            >
              {{ props.introCover.subtitle }}
            </h2>
          </div>
        </transition>
      </div>
    </div>
    <div
      class="flex flex-col"
      :class="[
        styleStore.containerPadding,
        styleStore.containerGapElements,
        {
          'py-20': slots['page-content'],
        },
      ]"
    >
      <slot name="page-content"></slot>
    </div>
  </div>
</template>
