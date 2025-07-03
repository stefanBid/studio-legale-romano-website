<script setup lang="ts"></script>
<template>
  <div
    class="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen transition-all duration-300 ease-in-out bg-white z-rm-base-5"
    role="alert"
    aria-live="assertive"
  >
    <div class="relative inline-flex items-center justify-center">
      <IconCustomLogo class="size-20 z-rm-base-4" />
      <div
        class="absolute border-2 rounded size-32 border-rm-main bg-rm-main z-rm-base-3 animate-spin"
      ></div>
    </div>
  </div>
</template>
