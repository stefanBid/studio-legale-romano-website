<script setup lang="ts">
import { computed } from 'vue';
import MdiCalendarMultiselect from '~icons/mdi/calendar-multiselect';
import SvgSpinnersClock from '~icons/svg-spinners/clock';
import MdiClockOutline from '~icons/mdi/clock-outline';
import type { WeeklySchedule } from '@/types';
import { useStyleStore } from '@/stores';
import { BaseChip } from '@/components';
import { useNow } from '@vueuse/core';

interface OpeningHourBoxProps {
  weeklySchedule: WeeklySchedule;
}

// Props
const props = defineProps<OpeningHourBoxProps>();

// Store Declarations
const styleStore = useStyleStore();

// Feature 1: Update the current day
const now = useNow({ interval: 60 * 1000 });
const today = computed(() => now.value.getDay());
const weekDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as Array<keyof WeeklySchedule>;
</script>

<template>
  <div
    :class="[styleStore.elementTotalPaddingM]"
    class="flex flex-col transition-all duration-300 ease-in-out bg-white border-2 rounded shadow-lg border-rm-secondary"
  >
    <div
      v-for="(day, index) in props.weeklySchedule"
      :key="index"
      :class="[
        styleStore.elementTotalPaddingS,
        {
          'border-b-2 border-rm-main': index !== 'sunday',
        },
      ]"
      class="flex items-center justify-between transition-all duration-300 ease-in-out gap-x-4"
    >
      <div class="flex items-center flex-1 gap-2">
        <MdiCalendarMultiselect
          :class="[
            styleStore.iconSizeS,
            {
              'text-rm-main-light/70': !day.openingHours,
              'text-rm-main': day.openingHours,
            },
          ]"
          class="stroke-2"
        />
        <span
          :class="[
            styleStore.textSizeS,
            {
              'font-bold': index === weekDays[today],
              'text-rm-main-light/70': !day.openingHours,
              'text-rm-main': day.openingHours,
            },
          ]"
          class="transition-all duration-300 ease-in-out text-rm-main font-lora"
        >
          {{ day.name }}
        </span>
        <span
          v-if="index === weekDays[today]"
          :class="[styleStore.iconSizeXS]"
          class="transition-all duration-300 ease-in-out rounded-full bg-rm-secondary animate-pulse"
        ></span>
      </div>
      <div class="flex items-center">
        <div v-if="day.openingHours" class="flex flex-wrap items-center justify-end gap-2">
          <BaseChip
            v-if="day.openingHours.morning"
            :icon="index === weekDays[today] ? SvgSpinnersClock : MdiClockOutline"
            :text="`${day.openingHours.morning.start} - ${day.openingHours.morning.end}`"
            variant="secondary"
          />
          <BaseChip
            v-if="day.openingHours.afternoon"
            :icon="index === weekDays[today] ? SvgSpinnersClock : MdiClockOutline"
            :text="`${day.openingHours.afternoon.start} - ${day.openingHours.afternoon.end}`"
            variant="secondary"
          />
        </div>
        <BaseChip v-else text="Chiuso" />
      </div>
    </div>
  </div>
</template>
