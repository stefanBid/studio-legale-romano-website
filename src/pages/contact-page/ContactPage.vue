<script setup lang="ts">
import { useTitleStore, useI18nStore, useStyleStore } from '@/stores';
import { ThePageContainer, BaseCard, BaseElementsContainer, BaseBadge } from '@/components';
import { CONTACT_CHANNEL_ICONS_MAP } from '@/constants';
import OfficeMap from '@/pages/contact-page/components/office-map/OfficeMap.vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Contatti');
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.contactPageI18nContent.firstHeading,
      subtitle: i18nStore.contactPageI18nContent.secondHeading,
      imgPath: i18nStore.contactPageI18nContent.imagePath,
    }"
  >
    <template #page-content>
      <div id="map-section" class="flex flex-col">
        <!-- Heading -->
        <div class="mb-8">
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
            'grid-cols-1':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'grid-cols-2':
              styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
            'grid-cols-3':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md' &&
              styleStore.activeBreakpoint !== 'lg',
          }"
          class="grid gap-8 grid-col"
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
                <div
                  :class="{
                    'p-2.5':
                      styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
                    'p-3': styleStore.activeBreakpoint === 'md',
                    'p-4':
                      styleStore.activeBreakpoint !== 'xs' &&
                      styleStore.activeBreakpoint !== 'sm' &&
                      styleStore.activeBreakpoint !== 'md',
                  }"
                >
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
                <div
                  :class="{
                    'p-2.5':
                      styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
                    'p-3': styleStore.activeBreakpoint === 'md',
                    'p-4':
                      styleStore.activeBreakpoint !== 'xs' &&
                      styleStore.activeBreakpoint !== 'sm' &&
                      styleStore.activeBreakpoint !== 'md',
                  }"
                >
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
                <div
                  :class="{
                    'p-2.5':
                      styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
                    'p-3': styleStore.activeBreakpoint === 'md',
                    'p-4':
                      styleStore.activeBreakpoint !== 'xs' &&
                      styleStore.activeBreakpoint !== 'sm' &&
                      styleStore.activeBreakpoint !== 'md',
                  }"
                >
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
        <BaseElementsContainer class="mt-8">
          <OfficeMap />
        </BaseElementsContainer>
      </div>

      <div id="contact-section" class="flex flex-col">
        <!-- Heading -->
        <div class="mb-8">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.contactPageI18nContent.contacts.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.contactPageI18nContent.contacts.description }}
          </p>
        </div>
        <div
          :class="{
            'grid-cols-1':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'grid-cols-2':
              styleStore.activeBreakpoint === 'md' || styleStore.activeBreakpoint === 'lg',
            'grid-cols-3':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md' &&
              styleStore.activeBreakpoint !== 'lg',
          }"
          class="grid gap-8 grid-col"
        >
          <BaseBadge
            v-for="channel in i18nStore.contactPageI18nContent.contacts.channels"
            :key="channel.id"
            :icon="CONTACT_CHANNEL_ICONS_MAP[channel.id]"
            icon-size="small"
            :text-content="channel.value"
          />
        </div>
      </div>
    </template>
  </ThePageContainer>
</template>
