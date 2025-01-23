<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { ref } from 'vue';

interface BaseElementsContainerProps {
  intersectionObserverSettings?: {
    rootElement: HTMLElement | null;
    rootMargin?: string;
    threshold?: number;
  };
}

const props = withDefaults(defineProps<BaseElementsContainerProps>(), {
  intersectionObserverSettings: () => ({
    rootElement: null,
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.1,
  }),
});

const isVisible = ref(false);

const onIntersectionObserver = ([{ isIntersecting }]: IntersectionObserverEntry[]): void => {
  if (isIntersecting !== isVisible.value) {
    isVisible.value = isIntersecting;
  }
};
</script>

<template>
  <div
    v-intersection-observer="[
      onIntersectionObserver,
      {
        root: props.intersectionObserverSettings.rootElement,
        threshold: props.intersectionObserverSettings.threshold,
        rootMargin: props.intersectionObserverSettings.rootMargin,
      },
    ]"
    v-bind="$attrs"
    class="transition-all duration-300 ease-in-out"
    :class="{
      'opacity-0': !isVisible,
      'opacity-100': isVisible,
    }"
  >
    <slot></slot>
  </div>
</template>
