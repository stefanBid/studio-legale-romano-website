<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { TheHeader, ThePageLoader, TheFooter } from '@/components';

const isLoading = inject<Ref<boolean>>('isLoading');

const route = useRoute();

const showFooter = computed(() => {
  return route.name !== 'homePage' && route.name !== 'notFoundPage';
});
</script>

<template>
  <ThePageLoader v-if="isLoading" />
  <TheHeader />
  <div v-if="!isLoading" class="min-h-screen">
    <RouterView />
    <TheFooter v-if="showFooter" />
  </div>
</template>
