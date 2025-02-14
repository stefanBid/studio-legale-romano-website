<script setup lang="ts">
import { MEDIA } from '@/constants';
import { useTitleStore, useI18nStore, useStyleStore } from '@/stores';
import { ThePageContainer, BaseCard, BaseElementsContainer, BaseBadge } from '@/components';
import { CONTACT_CHANNEL_ICONS } from '@/constants';
import OfficeMap from '@/pages/contact-page/components/office-map/OfficeMap.vue';
import OpeningHourBox from '@/pages/contact-page/components/opening-hour-box/OpeningHourBox.vue';
import { computed } from 'vue';
// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Contatti');

//Feature 2: Manage spacing based on the breakpoint
const getMarginBottomOfHeading = computed(() => {
  switch (styleStore.activeBreakpoint) {
    case 'xs':
    case 'sm':
      return 'mb-7';
    case 'md':
      return 'mb-8';
    default:
      return 'mb-9';
  }
});
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.contactPageI18nContent.firstHeading,
      subtitle: i18nStore.contactPageI18nContent.secondHeading,
      imgPath: MEDIA.contactPageCoverImg,
    }"
  >
    <template #page-content>
      <!--Opening Hour Section-->
      <div id="opening-hour-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]" class="transition-all duration-300 ease-in-out">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.contactPageI18nContent.openingHours.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.contactPageI18nContent.openingHours.description }}
          </p>
        </div>
        <BaseElementsContainer>
          <OpeningHourBox
            :weekly-schedule="i18nStore.contactPageI18nContent.openingHours.weeklySchedule"
          />
        </BaseElementsContainer>
      </div>

      <!--Map Section-->
      <div id="map-section" class="flex flex-col">
        <!-- Heading -->
        <div
          :class="{
            'mb-7': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'mb-8': styleStore.activeBreakpoint === 'md',
            'mb-9':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          }"
        >
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.contactPageI18nContent.reachUs.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.contactPageI18nContent.reachUs.description }}
          </p>
        </div>

        <!-- Reach Us Sections -->
        <div
          :class="{
            'grid-cols-1 gap-6':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'grid-cols-2 gap-7':
              styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
            'grid-cols-3 gap-8':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md' &&
              styleStore.activeBreakpoint !== 'lg',
          }"
          class="grid grid-col"
        >
          <!-- By Car Section -->
          <BaseElementsContainer class="min-h-[375px]">
            <BaseCard
              class="h-full"
              :aria-label="i18nStore.contactPageI18nContent.reachUs.withCar.title"
              content-type="custom"
              :title="i18nStore.contactPageI18nContent.reachUs.withCar.title"
            >
              <template #content>
                <!-- Parking -->
                <div :class="[styleStore.elementTotalPaddingS]">
                  <p :class="[styleStore.textSizeXS]" class="font-lora">
                    {{ i18nStore.contactPageI18nContent.reachUs.withCar.description }}
                  </p>
                  <ul class="mt-3 ml-6 list-disc">
                    <li
                      v-for="parking in i18nStore.contactPageI18nContent.reachUs.withCar.parkings"
                      :key="parking.name"
                      class="mb-2"
                    >
                      <h4 :class="[styleStore.textSizeS]" class="font-bold font-playfair">
                        {{ parking.name }}
                        <span v-if="parking.distance" class="font-normal"
                          >({{ parking.distance }})</span
                        >
                      </h4>
                      <p :class="[styleStore.textSizeXS]" class="font-lora">
                        {{ parking.description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </template>
            </BaseCard>
          </BaseElementsContainer>
          <!-- By Public Transport Section -->
          <BaseElementsContainer class="min-h-[375px]">
            <BaseCard
              class="h-full"
              :aria-label="i18nStore.contactPageI18nContent.reachUs.withPublicTransport.title"
              content-type="custom"
              :title="i18nStore.contactPageI18nContent.reachUs.withPublicTransport.title"
              :text-content="
                i18nStore.contactPageI18nContent.reachUs.withPublicTransport.description
              "
            >
              <template #content>
                <!-- Bus Stops -->
                <div :class="[styleStore.elementTotalPaddingS]">
                  <p :class="[styleStore.textSizeXS]" class="font-lora">
                    {{ i18nStore.contactPageI18nContent.reachUs.withPublicTransport.description }}
                  </p>

                  <ul class="mt-3 ml-6 list-disc">
                    <li
                      v-for="busStop in i18nStore.contactPageI18nContent.reachUs.withPublicTransport
                        .busStops"
                      :key="busStop.name"
                      class="mb-2"
                    >
                      <h4 :class="[styleStore.textSizeS]" class="font-bold font-playfair">
                        {{ busStop.name }}
                        <span v-if="busStop.distance" class="font-normal"
                          >({{ busStop.distance }})</span
                        >
                      </h4>
                      <p :class="[styleStore.textSizeXS]" class="font-lora">
                        {{ busStop.description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </template>
            </BaseCard>
          </BaseElementsContainer>
          <!-- By Foot Section -->
          <BaseElementsContainer
            class="min-h-[375px]"
            :class="{
              'col-span-2 ':
                styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
            }"
          >
            <BaseCard
              class="h-full"
              :aria-label="i18nStore.contactPageI18nContent.reachUs.withFoot.title"
              content-type="custom"
              :title="i18nStore.contactPageI18nContent.reachUs.withFoot.title"
              :text-content="i18nStore.contactPageI18nContent.reachUs.withFoot.description"
            >
              <template #content>
                <!-- Landmars -->
                <div :class="[styleStore.elementTotalPaddingS]">
                  <p :class="[styleStore.textSizeXS]" class="font-lora">
                    {{ i18nStore.contactPageI18nContent.reachUs.withFoot.description }}
                  </p>
                  <ul class="mt-3 ml-6 list-disc">
                    <li
                      v-for="landmark in i18nStore.contactPageI18nContent.reachUs.withFoot
                        .landmarks"
                      :key="landmark.name"
                      class="mb-2"
                    >
                      <h4 :class="[styleStore.textSizeS]" class="font-bold font-playfair">
                        {{ landmark.name }}
                        <span v-if="landmark.distance" class="font-normal"
                          >({{ landmark.distance }})</span
                        >
                      </h4>
                      <p :class="[styleStore.textSizeXS]" class="font-lora">
                        {{ landmark.description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </template>
            </BaseCard>
          </BaseElementsContainer>
        </div>
        <!--Map Section-->
        <BaseElementsContainer
          :class="{
            'mt-6': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'mt-7': styleStore.activeBreakpoint === 'md',
            'mt-8':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          }"
        >
          <OfficeMap />
        </BaseElementsContainer>
      </div>

      <!--Contact Section-->
      <div id="contact-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]" class="transition-all duration-300 ease-in-out">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.contactPageI18nContent.contacts.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.contactPageI18nContent.contacts.description }}
          </p>
        </div>
        <div
          :class="{
            'grid-cols-1 gap-6':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'grid-cols-2 gap-7':
              styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
            'grid-cols-3 gap-8':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md' &&
              styleStore.activeBreakpoint !== 'lg',
          }"
          class="grid grid-col"
        >
          <BaseElementsContainer
            v-for="channel in i18nStore.contactPageI18nContent.contacts.channels"
            :key="channel.id"
          >
            <BaseBadge
              :icon="CONTACT_CHANNEL_ICONS[channel.id]"
              icon-size="small"
              :text-content="channel.value"
            />
          </BaseElementsContainer>
        </div>
      </div>
    </template>
  </ThePageContainer>
</template>
