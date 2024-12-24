<script setup lang="ts">
import { inject, type Ref } from 'vue';

const isLoading = inject<Ref<boolean>>('isLoading');
</script>

<template>
  <!--
  <TheHeader />
  <ThePageLoader v-if="isLoading" />
  -->
  <div v-if="!isLoading" class="min-h-screen">
    <RouterView />
  </div>
</template>
