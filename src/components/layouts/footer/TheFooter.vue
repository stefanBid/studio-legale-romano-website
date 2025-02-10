<script setup lang="ts">
import { useStyleStore } from '@/stores';

//Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <footer :class="[styleStore.containerPadding]" class="w-screen text-white bg-rm-main">
    <div class="flex items-center justify-center">
      <!--Logo and Info-->
      <div id="logo-info"></div>
      <!--Page Shortcut-->
      <div id="page-shortcut"></div>
      <!--Contact and Info-->
      <div id="contact-info"></div>
    </div>
    <!--Easter Egg-->
    <div id="easter-egg">
      Designed and Developed by
      <a href="https://www.linkedin.com/in/riccardo-montagnin/" target="_blank" class="underline"
        >Stefano Biddau
      </a>
    </div>
  </footer>
</template>
