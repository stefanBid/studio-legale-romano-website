<script setup lang="ts">
import { useStyleStore } from '@/stores';
import { BaseButton, BaseCard, BaseProfileImageBox } from '@/components';
import { type FunctionalComponent, type Component } from 'vue';

interface Generality {
  name: string;
  surname: string;
  description?: string;
}

interface CallToAction {
  id: string;
  content?: string;
  icon?: FunctionalComponent | Component | string;
  onClick: () => void;
}

interface ProfileCardProps {
  generality: Generality;
  avatar?: {
    imageUrl: string;
    alt: string;
  };
  callToActions?: CallToAction[];
}

// Props
const props = withDefaults(defineProps<ProfileCardProps>(), {
  avatar: undefined,
  callToActions: undefined,
});
// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <BaseCard :aria-label="`${props.generality.name}-${props.generality.surname}-card`">
    <template #header>
      <div
        :class="{
          'h-14': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
          'h-16': styleStore.activeBreakpoint === 'md',
          'h-28':
            styleStore.activeBreakpoint !== 'xs' &&
            styleStore.activeBreakpoint !== 'sm' &&
            styleStore.activeBreakpoint !== 'md',
        }"
        class="relative w-full transition-all duration-300 ease-in-out"
      >
        <BaseProfileImageBox
          v-if="true"
          :class="{
            '-bottom-4':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            '-bottom-6': styleStore.activeBreakpoint === 'md',
            '-bottom-8':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          }"
          class="absolute translate-x-1/2 right-1/2"
          :avatar="props.avatar"
          :name="props.generality.name"
          :surname="props.generality.surname"
        />
      </div>
    </template>
    <template #content>
      <div
        :class="[
          styleStore.elementTotalGapM,
          {
            'p-2.5': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'p-3': styleStore.activeBreakpoint === 'md',
            'p-6':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          },
        ]"
        class="flex flex-col h-full transition-all duration-300 ease-in-out"
      >
        <div
          :class="[
            styleStore.elementTotalGapS,
            {
              'mt-4': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'mt-6': styleStore.activeBreakpoint === 'md',
              'mt-8':
                styleStore.activeBreakpoint !== 'xs' &&
                styleStore.activeBreakpoint !== 'sm' &&
                styleStore.activeBreakpoint !== 'md',
            },
          ]"
          class="flex flex-col items-center flex-1 transition-all duration-300 ease-in-out"
        >
          <span
            :class="[styleStore.textSizeL]"
            class="font-bold text-center font-playfair text-rm-main"
          >
            {{ `${props.generality.name} ${props.generality.surname}` }}
          </span>
          <span :class="[styleStore.textSizeS]" class="text-center font-lora text-rm-main-light">
            {{ props.generality.description }}
          </span>
        </div>
        <div
          :class="[styleStore.elementTotalGapS]"
          class="flex flex-wrap items-center justify-center mt-4 transition-all duration-300 ease-in-out"
        >
          <BaseButton
            v-for="cta in props.callToActions"
            :id="cta.id"
            :key="cta.id"
            class="w-36"
            :aria-label="cta.content"
            :icon="cta.icon"
            variant="secondary"
            size="small"
            @click.stop="cta.onClick()"
          >
            {{ cta.content }}
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseCard>
</template>
