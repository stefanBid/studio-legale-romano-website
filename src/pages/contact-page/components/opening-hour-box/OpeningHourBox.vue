<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ClockIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';
import type { WeeklySchedule } from '@/types';
import { useStyleStore } from '@/stores';
import { BaseChip } from '@/components';

interface OpeningHourBoxProps {
  weeklySchedule: WeeklySchedule;
}

// Props
const props = defineProps<OpeningHourBoxProps>();

// Store Declarations
const styleStore = useStyleStore();

// Feature 1: Update the current day
const today = ref(new Date().getDay());
const weekDays = Object.keys(props.weeklySchedule) as Array<keyof WeeklySchedule>;

let midnightTimeout: NodeJS.Timeout;

// Calculate the time until midnight
const getTimeUntilMidnight = (): number => {
  const now = new Date();
  return (
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0).getTime() -
    now.getTime()
  );
};

// Update the current day at midnight
const scheduleMidnightUpdate = (): void => {
  midnightTimeout = setTimeout(() => {
    today.value = new Date().getDay();
    scheduleMidnightUpdate(); // Richiama ricorsivamente per il prossimo aggiornamento
  }, getTimeUntilMidnight());
};

// Lifecycle hook
onMounted(() => {
  scheduleMidnightUpdate();
});

onBeforeUnmount(() => {
  clearTimeout(midnightTimeout);
});
</script>

<template>
  <div
    :class="{
      'p-2.5': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
      'p-3': styleStore.activeBreakpoint === 'md',
      'p-4':
        styleStore.activeBreakpoint !== 'xs' &&
        styleStore.activeBreakpoint !== 'sm' &&
        styleStore.activeBreakpoint !== 'md',
    }"
    class="flex flex-col transition-all duration-300 ease-in-out bg-white border-2 rounded-md shadow-lg border-rm-secondary"
  >
    <div
      v-for="(day, index) in props.weeklySchedule"
      :key="index"
      :class="{
        'border-b-2 border-rm-main': index !== 'sunday',
      }"
      class="flex items-center justify-between p-4 gap-x-4"
    >
      <div class="inline-flex items-center flex-1 gap-x-2">
        <CalendarDaysIcon :class="[styleStore.iconSizeS]" class="text-rm-main" />
        <span
          :class="[
            styleStore.textSizeS,
            {
              'font-bold': index === weekDays[today - 1],
            },
          ]"
          class="text-rm-main font-lora"
        >
          {{ day.name }}
        </span>
        <span
          v-if="index === weekDays[today - 1]"
          :class="[styleStore.iconSizeXS]"
          class="transition-all duration-300 ease-in-out rounded-full bg-rm-secondary animate-pulse"
        ></span>
      </div>
      <div class="flex items-center">
        <div v-if="day.openingHours" class="flex flex-wrap items-center justify-end gap-4">
          <BaseChip
            v-if="day.openingHours.morning"
            :icon="ClockIcon"
            :text="`${day.openingHours.morning.start} - ${day.openingHours.morning.end}`"
            variant="secondary"
          />
          <BaseChip
            v-if="day.openingHours.afternoon"
            :icon="ClockIcon"
            :text="`${day.openingHours.afternoon.start} - ${day.openingHours.afternoon.end}`"
            variant="secondary"
          />
        </div>
        <BaseChip v-else text="Chiuso" />
      </div>
    </div>
  </div>
</template>
