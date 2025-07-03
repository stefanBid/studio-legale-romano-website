<script setup lang="ts">
import { useStyleStore } from '@/stores';
import type { Image } from '@/types';

interface BaseprofileImageBoxProps {
  avatar?: {
    image: Image;
    alt: string;
  };
  name: string;
  surname: string;
  type?: 'circle' | 'square';
  ciustomSize?: boolean;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<BaseprofileImageBoxProps>(), {
  avatar: undefined,
  type: 'circle',
  ciustomSize: false,
  ariaLabel: 'profile-image-box',
});

// Store Declarations
const styleStore = useStyleStore();
</script>

<template>
  <div
    :class="[
      {
        'rounded-full': props.type === 'circle',
        'rounded-lg': props.type === 'square',
      },
      props.ciustomSize ? '' : styleStore.iconSizeXXL,
    ]"
    class="inline-flex items-center overflow-hidden transition-all duration-300 ease-in-out border-4 border-white"
  >
    <picture v-if="props.avatar">
      <source :srcset="props.avatar.image.webp" type="image/webp" />
      <img
        v-if="props.avatar"
        :src="props.avatar.image.jpg"
        :alt="props.avatar.alt"
        class="object-cover size-full"
      />
    </picture>
    <span
      v-else
      :class="[styleStore.textSizeL]"
      class="inline-flex items-center justify-center font-bold text-white transition-all duration-300 ease-in-out bg-rm-main font-lora size-full"
      >{{ `${props.name[0]} ${props.surname[0]}` }}</span
    >
  </div>
</template>
