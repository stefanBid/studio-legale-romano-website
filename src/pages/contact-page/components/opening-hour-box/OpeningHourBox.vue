<script setup lang="ts">
import type { WeeklySchedule } from '@/types';
import { useStyleStore } from '@/stores';

interface OpeningHourBoxProps {
  weeklySchedule: WeeklySchedule;
}

// Props
const props = defineProps<OpeningHourBoxProps>();

// Store Declarations
const styleStore = useStyleStore();

//Feature 1: Manage generality data
</script>

<template>
  <div class="flex flex-col p-6 border-2 rounded-md shadow-lg border-rm-secondary">
    <div
      v-for="(day, index) in props.weeklySchedule"
      :key="index"
      :class="{
        'border-b-2 border-rm-main': index !== 'sunday',
      }"
      class="flex items-center justify-between p-4 gap-x-4"
    >
      <span :class="[styleStore.textSizeS]" class="flex-1 text-rm-main">{{ day.name }}</span>
      <div class="flex items-center">
        <div v-if="day.openingHours" class="flex flex-wrap items-center justify-end gap-4">
          <span
            v-if="day.openingHours.morning"
            :class="[styleStore.textSizeXS]"
            class="inline-flex items-center h-8 px-2 text-white rounded-md bg-rm-secondary"
          >
            {{ day.openingHours.morning.start }} - {{ day.openingHours.morning.end }}
          </span>
          <span
            v-if="!day.openingHours.morning"
            :class="[styleStore.textSizeS]"
            class="inline-flex items-center h-8 px-2 text-white rounded-md bg-rm-secondary"
            >Chiuso</span
          >
          <span
            v-if="day.openingHours.afternoon"
            :class="[styleStore.textSizeXS]"
            class="inline-flex items-center h-8 px-2 text-white rounded-md bg-rm-secondary"
          >
            {{ day.openingHours.afternoon.start }} - {{ day.openingHours.afternoon.end }}
          </span>
          <span
            v-if="!day.openingHours.afternoon"
            :class="[styleStore.textSizeXS]"
            class="inline-flex items-center h-8 px-2 text-white rounded-md bg-rm-secondary"
            >Chiuso</span
          >
        </div>
        <span
          v-else
          :class="[styleStore.textSizeXS]"
          class="inline-flex items-center h-8 px-2 text-white rounded-md bg-rm-secondary"
          >Chiuso</span
        >
      </div>
    </div>
  </div>
</template>
