<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { useStyleStore } from '@/stores';

interface SideNavbarProps {
  routes: {
    path: string;
    text: string;
  }[];
}

const props = defineProps<SideNavbarProps>();
const emits = defineEmits(['close-menu']);

// Store Declarations
const styleStore = useStyleStore();

// Hooks Declarations
const route = useRoute();
</script>

<template>
  <nav v-bind="$attrs" class="flex flex-col w-full bg-white">
    <RouterLink
      v-for="(routeItem, index) in props.routes"
      :key="index"
      :to="routeItem.path"
      tabindex="0"
      class="inline-flex items-center transition-all duration-300 ease-in-out outline-none min-w-24 font-lora ring-0 focus-visible:ring-0"
      :class="[
        styleStore.containerPadding,
        styleStore.textSizeS,
        {
          'py-6': styleStore.activeBreakpoint === 'md',
          'py-4': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        },
        {
          'text-rm-main bg-rm-secondary': route.path === routeItem.path,
          'text-rm-main bg-white hover:bg-rm-secondary focus-visible:bg-rm-secondary':
            route.path !== routeItem.path,
        },
      ]"
      @click="() => emits('close-menu')"
    >
      {{ routeItem.text }}
    </RouterLink>
  </nav>
</template>
