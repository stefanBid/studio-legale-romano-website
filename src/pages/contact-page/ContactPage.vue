<script setup lang="ts">
import { computed, h } from 'vue';
import type { ExternalOperation } from '@/types';
import { useI18nStore, useStyleStore } from '@/stores';
import { usePageMeta } from '@/hooks';
import { openLink, sendEmail, sendWhatsAppMessage } from '@/utils';
import {
  ThePageContainer,
  BaseCard,
  BaseElementsContainer,
  BaseBadge,
  BaseIcon,
} from '@/components';
import OfficeMap from '@/pages/contact-page/components/office-map/OfficeMap.vue';
import OpeningHourBox from '@/pages/contact-page/components/opening-hour-box/OpeningHourBox.vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();

// SEO Feature Manage Meta Tags
usePageMeta({
  meta: computed(() => i18nStore.contactPageI18nContent.metaDescription),
  currentLang: computed(() => i18nStore.currentLanguage),
});

//Feature 1: Manage spacing based on the breakpoint
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

const executeChannelOperation = (operation: ExternalOperation, value: string): void => {
  switch (operation) {
    case 'sendEmail':
      sendEmail(value, 'generalInformation');
      break;
    case 'openLink':
      openLink(value);
      break;
    case 'callNumber':
      openLink(`tel:${value}`);
      break;
    case 'sendWhatsAppMessage':
      sendWhatsAppMessage(value, 'generalInformation');
      break;
    default:
      break;
  }
};
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.contactPageI18nContent.firstHeading,
      subtitle: i18nStore.contactPageI18nContent.secondHeading,
      imgPath: i18nStore.contactPageI18nContent.coverImage,
    }"
  >
    <template #page-content>
      <!--Opening Hour Section-->
      <div id="opening-hour-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]" class="transition-all duration-300 ease-in-out">
          <h1
            :class="[styleStore.textSizeXL]"
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair text-rm-main"
          >
            {{ i18nStore.contactPageI18nContent.openingHours.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora text-rm-main-light"
          >
            {{ i18nStore.contactPageI18nContent.openingHours.description }}
          </p>
        </div>
        <BaseElementsContainer>
          <OpeningHourBox
            :weekly-schedule="i18nStore.contactPageI18nContent.openingHours.weeklySchedule"
          />
        </BaseElementsContainer>
      </div>

      <!-- Reach Us Sections -->
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
          class="transition-all duration-300 ease-in-out"
        >
          <h1
            :class="[styleStore.textSizeXL]"
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair text-rm-main"
          >
            {{ i18nStore.contactPageI18nContent.reachUs.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora text-rm-main-light"
          >
            {{ i18nStore.contactPageI18nContent.reachUs.description }}
          </p>
        </div>
        <!-- Reach Us Cards Section -->
        <div
          :class="[
            styleStore.elementTotalGapM,
            {
              'grid-cols-1':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'grid-cols-2':
                styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
              'grid-cols-3':
                styleStore.activeBreakpoint !== 'xs' &&
                styleStore.activeBreakpoint !== 'sm' &&
                styleStore.activeBreakpoint !== 'md' &&
                styleStore.activeBreakpoint !== 'lg',
            },
          ]"
          class="grid transition-all duration-300 ease-in-out"
        >
          <!-- By Car Section -->
          <BaseElementsContainer class="min-h-[375px]">
            <BaseCard
              class="h-full"
              :aria-label="i18nStore.contactPageI18nContent.reachUs.withCar.title"
              :title="i18nStore.contactPageI18nContent.reachUs.withCar.title"
            >
              <template #content>
                <!-- Parking -->
                <div
                  :class="[styleStore.elementTotalPaddingS]"
                  class="transition-all duration-300 ease-in-out"
                >
                  <p
                    :class="[styleStore.textSizeXS]"
                    class="transition-all duration-300 ease-in-out font-lora text-rm-main-light"
                  >
                    {{ i18nStore.contactPageI18nContent.reachUs.withCar.description }}
                  </p>
                  <ul class="mt-3 ml-6 list-disc">
                    <li
                      v-for="parking in i18nStore.contactPageI18nContent.reachUs.withCar.parkings"
                      :key="parking.name"
                      class="mb-2"
                    >
                      <h4
                        :class="[styleStore.textSizeS]"
                        class="font-bold transition-all duration-300 ease-in-out font-playfair text-rm-main"
                      >
                        {{ parking.name }}
                        <span
                          v-if="parking.distance"
                          class="font-normal transition-all duration-300 ease-in-out"
                          >({{ parking.distance }})</span
                        >
                      </h4>
                      <p
                        :class="[styleStore.textSizeXS]"
                        class="transition-all duration-300 ease-in-out font-lora text-rm-main-light"
                      >
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
              :title="i18nStore.contactPageI18nContent.reachUs.withPublicTransport.title"
              :text-content="
                i18nStore.contactPageI18nContent.reachUs.withPublicTransport.description
              "
            >
              <template #content>
                <!-- Bus Stops -->
                <div :class="[styleStore.elementTotalPaddingS]">
                  <p
                    :class="[styleStore.textSizeXS]"
                    class="transition-all duration-300 ease-in-out font-lora text-rm-main-light"
                  >
                    {{ i18nStore.contactPageI18nContent.reachUs.withPublicTransport.description }}
                  </p>

                  <ul class="mt-3 ml-6 list-disc">
                    <li
                      v-for="busStop in i18nStore.contactPageI18nContent.reachUs.withPublicTransport
                        .busStops"
                      :key="busStop.name"
                      class="mb-2"
                    >
                      <h4
                        :class="[styleStore.textSizeS]"
                        class="font-bold transition-all duration-300 ease-in-out font-playfair text-rm-main"
                      >
                        {{ busStop.name }}
                        <span
                          v-if="busStop.distance"
                          class="font-normal transition-all duration-300 ease-in-out"
                          >({{ busStop.distance }})</span
                        >
                      </h4>
                      <p
                        :class="[styleStore.textSizeXS]"
                        class="transition-all duration-300 ease-in-out font-lora text-rm-main-light"
                      >
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
              :title="i18nStore.contactPageI18nContent.reachUs.withFoot.title"
              :text-content="i18nStore.contactPageI18nContent.reachUs.withFoot.description"
            >
              <template #content>
                <!-- Landmars -->
                <div :class="[styleStore.elementTotalPaddingS]">
                  <p
                    :class="[styleStore.textSizeXS]"
                    class="transition-all duration-300 ease-in-out font-lora text-rm-main-light"
                  >
                    {{ i18nStore.contactPageI18nContent.reachUs.withFoot.description }}
                  </p>
                  <ul class="mt-3 ml-6 list-disc">
                    <li
                      v-for="landmark in i18nStore.contactPageI18nContent.reachUs.withFoot
                        .landmarks"
                      :key="landmark.name"
                      class="mb-2"
                    >
                      <h4
                        :class="[styleStore.textSizeS]"
                        class="font-bold transition-all duration-300 ease-in-out font-playfair text-rm-main"
                      >
                        {{ landmark.name }}
                        <span
                          v-if="landmark.distance"
                          class="font-normal transition-all duration-300 ease-in-out"
                          >({{ landmark.distance }})</span
                        >
                      </h4>
                      <p
                        :class="[styleStore.textSizeXS]"
                        class="transition-all duration-300 ease-in-out font-lora text-rm-main-light"
                      >
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
            'mt-4': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'mt-5': styleStore.activeBreakpoint === 'md',
            'mt-6':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          }"
        >
          <OfficeMap
            :lat-coordinate="40.9150884"
            :lng-coordinate="14.79021"
            :zoom-level="19"
            google-maps-link="https://maps.app.goo.gl/owcGowBbw1GumvNNA"
            point-icon-public-path="/map-logo.svg"
          />
        </BaseElementsContainer>
      </div>

      <!--Contact Section-->
      <div id="contact-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]" class="transition-all duration-300 ease-in-out">
          <h1
            :class="[styleStore.textSizeXL]"
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair text-rm-main"
          >
            {{ i18nStore.contactPageI18nContent.contacts.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora text-rm-main-light"
          >
            {{ i18nStore.contactPageI18nContent.contacts.description }}
          </p>
        </div>
        <div
          :class="[
            styleStore.elementTotalGapM,
            {
              'grid-cols-1':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'grid-cols-2':
                styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
              'grid-cols-3':
                styleStore.activeBreakpoint !== 'xs' &&
                styleStore.activeBreakpoint !== 'sm' &&
                styleStore.activeBreakpoint !== 'md' &&
                styleStore.activeBreakpoint !== 'lg',
            },
          ]"
          class="grid transition-all duration-300 ease-in-out"
        >
          <BaseElementsContainer
            v-for="(channel, index) in i18nStore.contactPageI18nContent.contacts.channels"
            :key="index"
          >
            <BaseBadge
              :class="{
                'grayscale pointer-events-none opacity-40 !text-rm-main-light': index >= 3,
              }"
              class="no-underline transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-105 outline-0 ring-0 focus-visible:scale-105"
              :aria-label="`Contact us via ${channel.value}`"
              :tabindex="index < 3 ? 0 : undefined"
              :icon="() => h(BaseIcon, { icon: channel.icon })"
              :text-content="channel.value"
              @click.stop="executeChannelOperation(channel.operation, channel.value)"
              @keypress.enter.stop="executeChannelOperation(channel.operation, channel.value)"
            />
          </BaseElementsContainer>
        </div>
      </div>
    </template>
  </ThePageContainer>
</template>
