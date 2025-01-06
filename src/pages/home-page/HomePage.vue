<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStyleStore, useTitleStore } from '@/stores';
import { BaseButton } from '@/components';

// Store Declarations
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Home');

// Feature 2: Manage effects
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <div class="relative w-full h-screen overflow-x-hidden bg-rm-main">
    <!-- Background -->
    <img
      src="/images/home-page-cover.jpg"
      class="absolute inset-0 object-cover object-center w-full h-full pointer-events-none"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-white z-rm-base-1 opacity-55"></div>

    <div
      class="absolute inset-0 flex w-full h-full pt-20 z-rm-base-2"
      :class="[styleStore.containerPadding]"
    >
      <transition name="scale-and-fade-slow">
        <div
          v-if="show"
          class="flex flex-col items-center justify-center w-full h-full transition-all duration-300 ease-in-out gap-y-4 font-bebas"
        >
          <h1
            class="text-center whitespace-normal transition-all duration-300 ease-in-out text-rm-main font-playfair"
            :class="[styleStore.textSizeXL]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <h2
            class="text-center text-white whitespace-normal transition-all duration-300 ease-in-out font-lora"
            :class="[styleStore.textSizeL]"
          >
            Quis anim reprehenderit commodo aute. Ut commodo anim sunt dolor incididunt. Dolore duis
            ipsum commodo proident aliquip exercitation culpa mollit aliquip adipisicing occaecat
            dolore dolor culpa.
          </h2>
          <BaseButton variant="secondary" content-size="medium" spacing-size="medium">
            Scopri di più
          </BaseButton>
        </div>
      </transition>
    </div>
  </div>
</template>
