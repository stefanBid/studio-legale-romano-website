<script setup lang="ts">
import { XMarkIcon, Bars3Icon } from '@heroicons/vue/24/outline';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18nStore, useStyleStore } from '@/stores';
import Logo from '@/assets/icons/logo.svg?component';
import { TheInlineNavbar, TheSideNavbar } from '@/components';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();

// Composable Declarations
const route = useRoute();

// Feature 1: Manage Header Style
const isMenuOpen = ref(false);

const hideElementsForSomeRoutesPages = computed(() => {
  if (
    route.name === 'privacyPolicyPage' ||
    route.name === 'termsAndConditionsPage' ||
    route.name === 'notFoundPage'
  ) {
    return true;
  } else {
    return false;
  }
});

const isMenuCollapsed = computed(() => {
  if (
    styleStore.activeBreakpoint === 'xs' ||
    styleStore.activeBreakpoint === 'sm' ||
    styleStore.activeBreakpoint === 'md'
  ) {
    return true;
  } else {
    return false;
  }
});

const onChangeMenuVisibility = (newVisibility: boolean): void => {
  if (!isMenuCollapsed.value) {
    return;
  }

  isMenuOpen.value = newVisibility;

  if (isMenuOpen.value) {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }
};

watch(
  () => isMenuCollapsed.value,
  (newValue) => {
    if (!newValue) {
      isMenuOpen.value = false;
      document.documentElement.classList.remove('no-scroll');
    }
  },
);
</script>

<template>
  <header
    :class="[styleStore.containerPadding]"
    class="fixed left-0 w-screen h-20 bg-white z-rm-header"
  >
    <div class="flex items-center h-20 gap-x-4">
      <!-- Logo Section-->
      <div class="inline-flex items-center flex-1 transition-all duration-300 ease-in-out">
        <router-link
          to="/"
          class="flex items-center border border-transparent rounded outline-none text-rm-secondary gap-x-2 group ring-0 focus-visible:border-rm-main"
          @click="onChangeMenuVisibility(false)"
        >
          <component
            :is="Logo"
            :class="[styleStore.iconSizeM]"
            class="transition-all duration-300 ease-in-out shrink-0"
          />
          <span
            class="flex-1 font-medium transition-all duration-300 ease-in-out font-playfair group-hover:text-shadow-luminous"
            :class="{
              'text-rm-3xl':
                styleStore.activeBreakpoint !== 'xs' &&
                styleStore.activeBreakpoint !== 'sm' &&
                styleStore.activeBreakpoint !== 'md',
              'text-rm-2xl': styleStore.activeBreakpoint === 'md',
              'text-rm-xl':
                styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
            }"
          >
            Studio Legale Romano
          </span>
        </router-link>
      </div>

      <!-- Route Section and Menu -->
      <transition name="fade">
        <div v-if="!isMenuCollapsed" class="flex items-center w-fit gap-x-2">
          <!-- Route -->
          <TheInlineNavbar
            v-if="!hideElementsForSomeRoutesPages"
            :routes="i18nStore.headerI18nContent.navbarRoutes"
            class="flex-1"
          />
        </div>
      </transition>
      <!-- Menu Mobile Section -->
      <div
        v-if="isMenuCollapsed"
        tabindex="0"
        class="transition-all duration-300 ease-in-out border border-transparent rounded outline-none w-fit h-fit focus-visible:border-white active:rotate-90 ring-0"
        :aria-label="`click for ${isMenuOpen ? 'close' : 'open'} menu`"
        @click.stop="onChangeMenuVisibility(!isMenuOpen)"
        @keydown.enter="onChangeMenuVisibility(!isMenuOpen)"
      >
        <component
          :is="isMenuOpen ? XMarkIcon : Bars3Icon"
          v-if="!hideElementsForSomeRoutesPages"
          class="flex-none transition-all duration-300 ease-in-out cursor-pointer text-rm-main"
          :class="[styleStore.iconSizeM]"
        />
      </div>
    </div>
  </header>
  <transition name="slide-left">
    <div
      v-if="isMenuCollapsed && isMenuOpen && !hideElementsForSomeRoutesPages"
      class="fixed left-0 w-full h-full pt-20 bg-white z-rm-header-collapsed"
    >
      <TheSideNavbar
        :routes="i18nStore.headerI18nContent.navbarRoutes"
        @close-menu="onChangeMenuVisibility(false)"
      />
    </div>
  </transition>
</template>
