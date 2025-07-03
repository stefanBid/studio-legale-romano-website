<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { BaseButton } from '@/components';
import { useStyleStore } from '@/stores';
import { ref, watch } from 'vue';

interface BaseAccordionProps {
  externalOpen?: boolean;
  id?: string;
}

const props = withDefaults(defineProps<BaseAccordionProps>(), {
  externalOpen: undefined,
  id: 'base-accordion-id',
});

// Store Declarations
const styleStore = useStyleStore();

const isAccordionOpen = ref(false);

const changeAccordionVisibility = (): void => {
  isAccordionOpen.value = !isAccordionOpen.value;
};

watch(
  () => props.externalOpen,
  (newValue) => {
    if (newValue !== undefined && newValue !== isAccordionOpen.value) {
      isAccordionOpen.value = newValue;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="w-full">
    <BaseButton
      :id="props.id"
      :aria-label="`Accordion section ${props.id}`"
      size="medium"
      variant="custom"
      :class="{
        'hover:bg-rm-main/20 focus-visible:bg-rm-main/20': !isAccordionOpen,
        'bg-rm-main/20': isAccordionOpen,
      }"
      class="w-full border-b-2 border-rm-main !rounded-t hover:bg-rm-main/20"
      @click.stop="changeAccordionVisibility()"
    >
      <div class="flex items-center justify-between w-full gap-2">
        <div class="flex-1">
          <slot name="section-visibility-content"> </slot>
        </div>
        <ChevronDownIcon
          :class="[styleStore.iconSizeS, { 'rotate-180': isAccordionOpen }]"
          class="transition-all duration-300 ease-in-out shrink-0 stroke-[2.5px]"
        />
      </div>
    </BaseButton>
    <transition name="stretch">
      <div
        v-if="isAccordionOpen"
        class="w-full transition-all duration-300 ease-in-out bg-white rounded-b shadow-lg"
      >
        <slot name="section-hidden-content"> </slot>
      </div>
    </transition>
  </div>
</template>
