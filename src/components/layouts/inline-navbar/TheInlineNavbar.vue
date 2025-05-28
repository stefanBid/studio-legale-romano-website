<script setup lang="ts">
import { vOnClickOutside, vIntersectionObserver } from '@vueuse/components';
import { useSbFloatingPanel } from 'sb-floating-panel-vue';
import { useStyleStore } from '@/stores';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface InlineNavbarProps {
  routes: { path: string; text: string }[];
}

interface ManagedRoutes {
  visibleRoutes: { path: string; text: string }[];
  collapsedRoutes: { path: string; text: string }[];
}

const props = defineProps<InlineNavbarProps>();
const route = useRoute();
const styleStore = useStyleStore();

const { isOpen, reference, floating, floatingStyle, toggle, close } = useSbFloatingPanel({
  placement: 'bottom',
  strategy: 'fixed',
  offsetValue: 5,
});

const onIntersectionObserver = ([{ isIntersecting }]: IntersectionObserverEntry[]): void => {
  if (!isIntersecting && isOpen.value) {
    close();
  }
};

const getVisibleRoutes = computed<ManagedRoutes>(() => {
  if (props.routes.length <= 4) {
    return {
      visibleRoutes: props.routes,
      collapsedRoutes: [],
    };
  }

  return {
    visibleRoutes: props.routes.slice(0, 3),
    collapsedRoutes: props.routes.slice(3),
  };
});
</script>

<template>
  <nav v-bind="$attrs" class="flex flex-row items-center justify-end">
    <div
      v-for="(routeItemV, index) in getVisibleRoutes.visibleRoutes"
      :key="index"
      :class="[
        index === getVisibleRoutes.visibleRoutes.length - 1 ? '' : 'border-r-2 border-rm-main',
      ]"
      class="inline-flex items-center justify-center px-4 py-2 min-w-20"
    >
      <router-link
        :to="routeItemV.path"
        tabindex="0"
        class="transition-all duration-300 ease-in-out outline-none font-lora ring-0 focus-visible:ring-0 underline-offset-2"
        :class="[
          styleStore.textSizeS,
          {
            'text-rm-secondary underline': route.path === routeItemV.path,
            'text-rm-main hover:text-rm-secondary hover:underline focus-visible:text-rm-secondary focus-visible:underline':
              route.path !== routeItemV.path,
          },
        ]"
      >
        {{ routeItemV.text }}
      </router-link>
    </div>
    <div
      v-if="getVisibleRoutes.collapsedRoutes.length > 0"
      ref="reference"
      class="inline-flex items-center justify-center px-4 py-2 border-l-2 min-w-20 border-rm-main"
    >
      <span class="inline-flex items-center justify-center group" @click="toggle()">
        <span
          :class="[styleStore.textSizeS]"
          class="transition-all duration-300 ease-in-out outline-none underline-offset-2 group-hover:cursor-pointer font-lora ring-0 group-focus-visible:ring-0 text-rm-main group-hover:text-rm-secondary group-hover:underline group-focus-visible:text-rm-secondary group-focus-visible:underline"
        >
          Altro
        </span>
        <ChevronDownIcon
          :class="[styleStore.iconSizeXS, isOpen ? 'rotate-180' : 'rotate-0']"
          class="shrink-0 ml-1.5 transition-all duration-300 ease-in-out group-hover:text-rm-secondary group-hover:cursor-pointer"
        />
      </span>
    </div>
    <teleport to="body">
      <transition name="scale-and-fade-fast">
        <div
          v-if="isOpen"
          ref="floating"
          v-on-click-outside="[(_: Event) => close(), { ignore: [reference] }]"
          v-intersection-observer="[
            onIntersectionObserver,
            {
              root: null,
              threshold: 0.05,
              rootMargin: '-80px 0px 0px 0px',
            },
          ]"
          :style="floatingStyle"
          class="box-border flex flex-col items-center justify-center p-4 bg-white border-2 rounded shadow-2xl min-w-36 gap-y-4 z-rm-dropdown border-rm-secondary shadow-black"
        >
          <router-link
            v-for="routeItemC in getVisibleRoutes.collapsedRoutes"
            :to="routeItemC.path"
            tabindex="0"
            class="transition-all duration-300 ease-in-out outline-none font-lora ring-0 focus-visible:ring-0 underline-offset-2"
            :class="[
              styleStore.textSizeS,
              {
                'text-rm-secondary underline': route.path === routeItemC.path,
                'text-rm-main hover:text-rm-secondary hover:underline focus-visible:text-rm-secondary focus-visible:underline':
                  route.path !== routeItemC.path,
              },
            ]"
          >
            {{ routeItemC.text }}
          </router-link>
        </div>
      </transition>
    </teleport>
  </nav>
</template>
