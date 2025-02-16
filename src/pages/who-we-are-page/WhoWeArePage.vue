<script setup lang="ts">
import type { Member } from '@/types';
import { MEDIA } from '@/constants';
import { dowloadFile, emailTo, stringPurifier } from '@/utils';
import { useTitleStore, useI18nStore, useStyleStore } from '@/stores';
import {
  ThePageContainer,
  BaseElementsContainer,
  BaseDialog,
  BaseProfileImageBox,
} from '@/components';
import { UserCircleIcon, EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
import ProfileCard from './components/ProfileCard.vue';
import { computed, ref } from 'vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Chi Siamo');

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
      imgPath: MEDIA.whoWeArePageCoverImg,
    }"
  >
    <template #page-content>
      <div id="team-section" class="flex flex-col">
        <!-- Heading -->
        <div :class="[getMarginBottomOfHeading]">
          <h1
            :class="[styleStore.textSizeXL]"
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair"
          >
            {{ i18nStore.whoWeArePageI18nContent.team.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora"
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
                birthDate: member.birthDate,
                number: member.number,
              }"
              :avatar="
                member.imagePath ? { imageUrl: member.imagePath, alt: member.name } : undefined
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
                    emailTo(member.email);
                  },
                },
                {
                  id: `${member.id}-download-cv`,
                  content: 'Scarica CV',
                  icon: DocumentArrowDownIcon,
                  onClick: () => {
                    if (member.idDoc) dowloadFile(`${member.id}-cv`, MEDIA[member.idDoc]);
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
            class="font-bold text-left transition-all duration-300 ease-in-out font-playfair"
          >
            {{ i18nStore.whoWeArePageI18nContent.office.heading }}
          </h1>
          <p
            :class="[styleStore.textSizeS]"
            class="text-left transition-all duration-300 ease-in-out font-lora"
          >
            {{ i18nStore.whoWeArePageI18nContent.office.description }}
          </p>
        </div>
      </div>
    </template>
  </ThePageContainer>

  <BaseDialog
    :dialog-title="`Profilo professionale di ${currentMemberProfile?.name} ${currentMemberProfile?.surname}`"
    block-dialog-height
    :is-open="isOpenProfileDialog"
    :on-close-modal="(falsyValue) => handleCloseDialogProfile(falsyValue)"
  >
    <template #modal-content>
      <div
        v-if="currentMemberProfile"
        :class="[styleStore.elementTotalGapM]"
        class="flex flex-col items-center w-full h-full overflow-y-hidden transition-all duration-300 ease-in-out"
      >
        <BaseProfileImageBox
          class="shrink-0"
          :avatar="
            currentMemberProfile?.imagePath
              ? { imageUrl: currentMemberProfile.imagePath, alt: currentMemberProfile.name }
              : undefined
          "
          :name="currentMemberProfile.name"
          :surname="currentMemberProfile.surname"
        />
        <div class="h-full overflow-y-auto">
          <p
            :class="[styleStore.textSizeS]"
            class="transition-all duration-300 ease-in-out text-rm-main font-lora"
            v-html="stringPurifier(currentMemberProfile.description)"
          ></p>
        </div>
      </div>
    </template>
  </BaseDialog>
</template>
