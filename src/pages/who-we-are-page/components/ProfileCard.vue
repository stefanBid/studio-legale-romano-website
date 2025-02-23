<script setup lang="ts">
import { useStyleStore } from '@/stores';
import { BaseButton, BaseCard, BaseProfileImageBox } from '@/components';
import { type FunctionalComponent, type Component, computed } from 'vue';

interface Generality {
  name: string;
  surname: string;
  birthDate: string;
  number: string;
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

// Feature 1: Manage generality data

const getGeneralityData = computed(() => {
  return [
    { label: 'Nome', value: props.generality.name },
    { label: 'Cognome', value: props.generality.surname },
    { label: 'Data di Nascita', value: props.generality.birthDate },
    { label: 'Telefono', value: props.generality.number },
  ];
});
</script>

<template>
  <BaseCard
    :aria-label="`${props.generality.name}-${props.generality.surname}-card`"
    header-type="custom"
    content-type="custom"
  >
    <template #header>
      <div
        :class="{
          'p-2.5': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
          'p-3': styleStore.activeBreakpoint === 'md',
          'p-6':
            styleStore.activeBreakpoint !== 'xs' &&
            styleStore.activeBreakpoint !== 'sm' &&
            styleStore.activeBreakpoint !== 'md',
        }"
        class="relative w-full transition-all duration-300 ease-in-out"
      >
        <h2
          :class="[styleStore.textSizeM]"
          class="font-bold transition-all duration-300 ease-in-out text-rm-main font-playfair"
        >
          {{ `${props.generality.name} ${props.generality.surname}` }}
        </h2>
        <BaseProfileImageBox
          :class="{
            '-bottom-8 right-2.5':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            '-bottom-10 right-3': styleStore.activeBreakpoint === 'md',
            '-bottom-16 right-6':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          }"
          class="absolute"
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
          :class="[styleStore.elementTotalGapS]"
          class="flex flex-col flex-1 transition-all duration-300 ease-in-out"
        >
          <span v-for="data in getGeneralityData" :key="data.label" class="text-rm-main">
            <span :class="[styleStore.textSizeS]" class="font-bold font-playfair">
              {{ `${data.label}: ` }}
            </span>
            <span :class="[styleStore.textSizeS]" class="font-lora">{{ data.value }}</span>
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
            content-size="small"
            spacing-size="small"
            @click.stop="cta.onClick()"
          >
            {{ cta.content }}
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseCard>
</template>
