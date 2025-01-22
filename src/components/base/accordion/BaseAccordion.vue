<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { BaseButton } from '@/components';
import { useStyleStore } from '@/stores';
import { ref, watch } from 'vue';

interface BaseAccordionProps {
  externalOpen?: boolean;
  id?: string;
  dataTestid?: string;
  marginAfterButton?: boolean;
}

const props = withDefaults(defineProps<BaseAccordionProps>(), {
  externalOpen: undefined,
  id: 'base-accordion-id',
  dataTestid: 'base-accordion',
  marginAfterButton: true,
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
    if (newValue !== undefined) {
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
      spacing-size="custom"
      content-size="custom"
      variant="custom"
      :data-testid="`${props.dataTestid}-header`"
      :class="{
        'hover:bg-rm-main/20 focus-visible:bg-rm-main/20': !isAccordionOpen,
        'bg-rm-main/20': isAccordionOpen,
      }"
      class="w-full px-4 py-2 border-b-2 gap-x-4 border-rm-main !rounded-b-none hover:bg-rm-main/20"
      @click.stop="changeAccordionVisibility()"
    >
      <div class="flex-1">
        <slot name="section-visibility-content"> </slot>
      </div>
      <ChevronDownIcon
        :class="[styleStore.iconSizeS, { 'rotate-180': isAccordionOpen }]"
        class="transition-all duration-300 ease-in-out shrink-0"
      />
    </BaseButton>
    <transition name="stretch">
      <div
        v-if="isAccordionOpen"
        :data-testid="`${props.dataTestid}-content`"
        class="w-full px-4"
        :class="{
          'mt-8': props.marginAfterButton,
        }"
      >
        <slot name="section-hidden-content"> </slot>
      </div>
    </transition>
  </div>
</template>
