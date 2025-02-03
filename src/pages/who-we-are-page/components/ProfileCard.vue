<script setup lang="ts">
import { BaseButton } from '@/components';
</script>

<template>
  <div
    class="flex flex-col items-center justify-center p-8 border-2 rounded-md border-rm-secondary w-[400px] bg-white"
  >
    <!--Profile Summay-->
    <div class="flex items-center justify-between w-full gap-4 pb-4 border-b border-main">
      <img
        class="rounded-full size-32 shrink-0"
        src="https://picsum.photos/200/300"
        alt="Profile Image"
      />
      <div class="flex flex-col items-center justify-center flex-1">
        <h2 class="text-2xl font-bold">John</h2>
        <p class="text-sm">Doe</p>
      </div>
    </div>
    <!--Call to Action-->
    <div class="flex items-center w-full gap-4 pt-4">
      <BaseButton
        class="w-full"
        color="secondary"
        content-size="small"
        spacing-size="small"
        @click="console.log('Button Clicked')"
      >
        View Profile
      </BaseButton>
      <BaseButton
        class="w-full"
        color="secondary"
        content-size="small"
        spacing-size="small"
        @click="console.log('Button Clicked')"
      >
        Contact
      </BaseButton>
    </div>
  </div>
</template>
