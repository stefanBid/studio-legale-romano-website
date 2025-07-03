<script setup lang="ts">
import type { Member } from '@/types';
import { downloadFile, sendEmail, stringPurifier } from '@/utils';
import { useI18nStore, useStyleStore } from '@/stores';
import { usePageMeta } from '@/hooks';
import {
  ThePageContainer,
  BaseElementsContainer,
  BaseDialog,
  BaseCarousel,
  BaseButton,
} from '@/components';
import { UserCircleIcon, EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import ProfileCard from './components/ProfileCard.vue';
import { computed, ref } from 'vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();

// SEO Feature Manage Meta Tags
usePageMeta({
  meta: computed(() => i18nStore.whoWeArePageI18nContent.metaDescription),
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

//Feature 2: Manage Profile

const isOpenProfileDialog = ref(false);
const currentMemberProfile = ref<Member>();

const handleOpenDialogProfile = (id: string): void => {
  currentMemberProfile.value = i18nStore.whoWeArePageI18nContent.team.members.find(
    (member) => member.id === id,
  );
  if (!currentMemberProfile.value) return;
  isOpenProfileDialog.value = true;
};

const handleCloseDialogProfile = (falsyValue: boolean): void => {
  isOpenProfileDialog.value = falsyValue;
};
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.whoWeArePageI18nContent.firstHeading,
      subtitle: i18nStore.whoWeArePageI18nContent.secondHeading,
      imgPath: i18nStore.whoWeArePageI18nContent.coverImage,
    }"
  >
    <template #page-content>
      <div id="team-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]">
          <h1
            :class="[styleStore.textSizeXL]"
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair text-rm-main"
          >
            {{ i18nStore.whoWeArePageI18nContent.team.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora text-rm-main-light"
          >
            {{ i18nStore.whoWeArePageI18nContent.team.description }}
          </p>
        </div>
        <div
          :class="[
            styleStore.elementTotalGapM,
            {
              'grid-cols-1':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'grid-cols-2':
                styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
            },
          ]"
          class="grid transition-all duration-300 ease-in-out"
        >
          <BaseElementsContainer
            v-for="member in i18nStore.whoWeArePageI18nContent.team.members"
            :key="member.id"
            :class="
              i18nStore.whoWeArePageI18nContent.team.members.length === 1
                ? 'col-span-2'
                : 'col-span-1'
            "
          >
            <ProfileCard
              class="h-full"
              :generality="{
                name: member.name,
                surname: member.surname,
                description: member.role,
              }"
              :avatar="
                member.imageProfile ? { image: member.imageProfile, alt: member.name } : undefined
              "
              :call-to-actions="[
                {
                  id: `${member.id}-open-profile`,
                  content: 'Apri Profilo',
                  icon: UserCircleIcon,
                  onClick: () => {
                    handleOpenDialogProfile(member.id);
                  },
                },
                {
                  id: `${member.id}-email`,
                  content: 'Contatta',
                  icon: EnvelopeIcon,
                  onClick: () => {
                    sendEmail(member.email, 'legalConsultation');
                  },
                },
                {
                  id: `${member.id}-download-cv`,
                  content: 'Scarica CV',
                  icon: DocumentArrowDownIcon,
                  onClick: () => {
                    if (member.cvFilePath) downloadFile(`${member.id}-cv`, member.cvFilePath);
                  },
                },
              ]"
            />
          </BaseElementsContainer>
        </div>
      </div>

      <div id="office-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]">
          <h1
            :class="[styleStore.textSizeXL]"
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair text-rm-main"
          >
            {{ i18nStore.whoWeArePageI18nContent.office.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora text-rm-main-light"
          >
            {{ i18nStore.whoWeArePageI18nContent.office.description }}
          </p>
        </div>
        <BaseElementsContainer>
          <BaseCarousel
            :number-of-items="i18nStore.whoWeArePageI18nContent.office.photoGallery.length"
            auto-play
          >
            <template #carousel-item="{ index }">
              <div
                :class="{
                  'h-[400px]':
                    styleStore.activeBreakpoint !== 'xs' &&
                    styleStore.activeBreakpoint !== 'sm' &&
                    styleStore.activeBreakpoint !== 'md',
                  'h-[375px]': styleStore.activeBreakpoint === 'md',
                  'h-[300px]':
                    styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
                }"
                class="flex w-full transition-all duration-300 ease-in-out"
              >
                <img
                  class="object-cover w-full h-full"
                  :src="i18nStore.whoWeArePageI18nContent.office.photoGallery[index].jpg"
                  alt="placeholder"
                />
              </div>
            </template>
          </BaseCarousel>
        </BaseElementsContainer>
      </div>
    </template>
  </ThePageContainer>

  <BaseDialog
    block-dialog-height
    :is-open="isOpenProfileDialog"
    hide-dialog-header
    :on-close-modal="(falsyValue) => handleCloseDialogProfile(falsyValue)"
  >
    <template #modal-content="{ closeModal }">
      <div
        v-if="currentMemberProfile"
        :class="[styleStore.elementTotalGapM]"
        class="flex flex-col items-center w-full h-full overflow-y-hidden transition-all duration-300 ease-in-out"
      >
        <div
          class="relative w-full overflow-hidden transition-all duration-300 ease-in-out bg-white h-1/3"
        >
          <BaseButton
            :class="{
              'right-2.5 top-2.5':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'right-3 top-3': styleStore.activeBreakpoint === 'md',
              'right-4 top-4':
                styleStore.activeBreakpoint !== 'xs' &&
                styleStore.activeBreakpoint !== 'sm' &&
                styleStore.activeBreakpoint !== 'md',
            }"
            class="absolute text-white border border-transparent rounded z-rm-base-3 w-fit h-fit hover:rotate-90 focus-visible:border-white"
            aria-label="close modal"
            variant="custom"
            size="custom"
            @click.stop="closeModal"
            @keydown.enter.stop="closeModal"
          >
            <XMarkIcon :class="[styleStore.iconSizeS]" class="stroke-[2.5px]" />
          </BaseButton>
          <h1
            class="absolute w-full font-bold text-center text-white whitespace-normal transition-all duration-300 ease-in-out -translate-y-1/2 z-rm-base-3 top-1/2 font-playfair"
            :class="[styleStore.textSizeXL]"
          >
            {{ currentMemberProfile.name }} {{ currentMemberProfile.surname }}
          </h1>
          <div class="absolute bottom-0 left-0 size-full bg-black/30 z-rm-base-1"></div>
          <div
            class="absolute bottom-0 left-0 w-full h-[150px] z-rm-base-2"
            style="background: linear-gradient(to bottom, transparent, #fdfcf9)"
          ></div>
          <picture>
            <source :srcset="currentMemberProfile.imageCover?.webp" type="image/webp" />
            <img
              :src="currentMemberProfile.imageCover?.jpg"
              :alt="currentMemberProfile.name"
              loading="lazy"
              decoding="async"
              class="object-cover object-center w-full h-full"
            />
          </picture>
        </div>
        <div
          :class="{
            'px-4 pb-4':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'px-5 pb-5': styleStore.activeBreakpoint === 'md',
            'px-6 pb-6':
              styleStore.activeBreakpoint !== 'xs' &&
              styleStore.activeBreakpoint !== 'sm' &&
              styleStore.activeBreakpoint !== 'md',
          }"
          class="flex-1 overflow-y-auto outline-none ring-0"
        >
          <p
            :class="[styleStore.textSizeS]"
            class="transition-all duration-300 ease-in-out text-rm-main-light font-lora"
            v-html="stringPurifier(currentMemberProfile.description)"
          ></p>
        </div>
      </div>
    </template>
  </BaseDialog>
</template>
