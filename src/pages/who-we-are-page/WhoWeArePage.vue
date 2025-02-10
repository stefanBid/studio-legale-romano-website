<script setup lang="ts">
import { MEDIA } from '@/constants';
import { useTitleStore, useI18nStore, useStyleStore } from '@/stores';
import { ThePageContainer, BaseElementsContainer } from '@/components';
import { UserCircleIcon, EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
import ProfileCard from './components/ProfileCard.vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Feature 1: Page Title
titleStore.setTitleSuffix('Chi Siamo');
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
        <div class="mb-8">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.whoWeArePageI18nContent.team.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.whoWeArePageI18nContent.team.description }}
          </p>
        </div>
        <div
          :class="{
            'grid-cols-1':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            'grid-cols-2':
              styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
          }"
          class="grid gap-8 grid-col"
        >
          <!-- By Car Section -->
          <BaseElementsContainer
            v-for="member in i18nStore.whoWeArePageI18nContent.team.members"
            :key="member.id"
            class=""
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
                    console.log('Email');
                  },
                },
                {
                  id: `${member.id}-email`,
                  content: 'Contatta',
                  icon: EnvelopeIcon,
                  onClick: () => {
                    console.log('Email');
                  },
                },
                {
                  id: `${member.id}-download-cv`,
                  content: 'Scarica CV',
                  icon: DocumentArrowDownIcon,
                  onClick: () => {
                    console.log('Email');
                  },
                },
              ]"
            />
          </BaseElementsContainer>
        </div>
      </div>

      <div id="office-section" class="flex flex-col">
        <!-- Heading -->
        <div class="mb-8">
          <h1 :class="[styleStore.textSizeXL]" class="font-bold text-left font-playfair">
            {{ i18nStore.whoWeArePageI18nContent.office.heading }}
          </h1>
          <p :class="[styleStore.textSizeS]" class="text-left font-lora">
            {{ i18nStore.whoWeArePageI18nContent.office.description }}
          </p>
        </div>
      </div>
    </template>
  </ThePageContainer>
</template>
