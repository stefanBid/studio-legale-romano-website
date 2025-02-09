<script setup lang="ts">
import { useStyleStore } from '@/stores';
import { BaseButton } from '@/components';
import { type FunctionalComponent, type Component } from 'vue';

interface CallToAction {
  id: string;
  content?: string;
  icon?: FunctionalComponent | Component | string;
  onClick: () => void;
}

interface ProfileCardProps {
  title?: string;
  avatar?: {
    initials: string;
    imageUrl?: string;
    alt?: string;
  };
  callToActions?: CallToAction[];
}

// Props
const props = withDefaults(defineProps<ProfileCardProps>(), {
  title: 'Profile Card',
  avatar: () => ({
    initials: 'AV',
    imageUrl: 'https://picsum.photos/200/300',
    alt: 'profile image',
  }),
  callToActions: undefined,
});
// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <div class="flex flex-col bg-white border-2 rounded-lg shadow-md border-rm-secondary">
    <!-- Header -->
    <div
      :class="{
        'p-2.5': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        'p-3': styleStore.activeBreakpoint === 'md',
        'p-6':
          styleStore.activeBreakpoint !== 'xs' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'md',
      }"
      class="relative transition-all duration-300 ease-in-out bg-rm-secondary"
    >
      <h2
        :class="[styleStore.textSizeM]"
        class="font-bold transition-all duration-300 ease-in-out text-rm-main font-playfair"
      >
        {{ props.title }}
      </h2>
      <div
        :class="[
          {
            '-bottom-8 right-2.5':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            '-bottom-10 right-3': styleStore.activeBreakpoint === 'md',
            '-bottom-16 right-6':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          },
          styleStore.iconSizeXXL,
        ]"
        class="absolute inline-flex items-center overflow-hidden transition-all duration-300 ease-in-out border-4 border-white rounded-full"
      >
        <img
          v-if="props.avatar.imageUrl"
          :src="props.avatar.imageUrl"
          :alt="props.avatar.alt"
          class="object-cover size-full"
        />
        <span
          v-else
          :class="[styleStore.textSizeL]"
          class="inline-flex items-center justify-center font-bold text-white bg-rm-main font-lora size-full"
          >{{ props.avatar.initials }}</span
        >
      </div>
    </div>
    <!-- Content -->
    <div
      :class="{
        'p-2.5': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        'p-3': styleStore.activeBreakpoint === 'md',
        'p-6':
          styleStore.activeBreakpoint !== 'xs' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'md',
      }"
      class="transition-all duration-300 ease-in-out min-h-24"
    >
      <div class="flex items-center justify-center">
        <BaseButton
          v-for="cta in props.callToActions"
          :id="cta.id"
          :key="cta.id"
          :aria-label="cta.content"
          :data-testid="cta.id"
          :icon="cta.icon"
          variant="primary"
          content-size="small"
          spacing-size="small"
          @click.stop="cta.onClick()"
        >
          {{ cta.content }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>
