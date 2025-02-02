<script setup lang="ts">
import { inject, type Ref } from 'vue';
import { TheHeader, ThePageLoader } from '@/components';

const isLoading = inject<Ref<boolean>>('isLoading');
</script>

<template>
  <ThePageLoader v-if="isLoading" />
  <TheHeader />
  <div v-if="!isLoading" class="min-h-screen">
    <RouterView />
  </div>
</template>
