<script setup lang="ts">
import { useRouter } from 'vue-router';
import { BookOpenIcon, BookmarkIcon } from '@heroicons/vue/24/solid';
import { MEDIA } from '@/constants';
import { useStyleStore, useTitleStore, useI18nStore } from '@/stores';
import { BaseAccordion, BaseElementsContainer, ThePageContainer, BaseBadge } from '@/components';
import { navigateTo } from '@/utils';
import { onMounted, ref } from 'vue';

// Store Declarations
const i18nStore = useI18nStore();
const styleStore = useStyleStore();
const titleStore = useTitleStore();

// Hooks Declarations
const router = useRouter();

// Feature 1: Page Title
titleStore.setTitleSuffix('Prestazioni');

// Feature 2: Manage Open Accordion Section on Route Change
const defaultAccordionIdOpen = ref<string>();

onMounted(() => {
  defaultAccordionIdOpen.value =
    router.currentRoute.value.hash !== '' ? router.currentRoute.value.hash.slice(1) : undefined;
});
</script>

<template>
  <ThePageContainer
    :intro-cover="{
      title: i18nStore.performancePageI18nContent.firstHeading,
      subtitle: i18nStore.performancePageI18nContent.secondHeading,
      imgPath: MEDIA.performancePageCoverImg,
    }"
  >
    <template #page-content>
      <BaseElementsContainer>
        <BaseBadge :icon="BookmarkIcon">
          <div
            :class="[styleStore.elementTotalPaddingS]"
            class="w-full transition-all duration-300 ease-in-out"
          >
            <h1
              :class="[styleStore.textSizeL]"
              class="font-medium text-left transition-all duration-300 ease-in-out font-playfair"
            >
              {{ i18nStore.performancePageI18nContent.index.title }}
            </h1>

            <ol
              :class="[styleStore.textSizeS]"
              class="list-inside list-[upper-roman] font-lora pl-3"
            >
              <li
                v-for="item in i18nStore.performancePageI18nContent.index.items"
                :key="item.shortcutId"
                tabindex="0"
                class="transition-all duration-300 ease-in-out cursor-pointer outline-0 ring-0 w-fit hover:text-rm-secondary hover:underline focus-visible:text-rm-secondary focus-visible:underline focus-visible:ring-0"
                @click.stop="navigateTo(item.shortcutId)"
                @keypress.enter.stop="navigateTo(item.shortcutId)"
              >
                {{ item.title }}
              </li>
            </ol>
          </div>
        </BaseBadge>
      </BaseElementsContainer>
      <BaseElementsContainer
        v-for="(item, index) in i18nStore.performancePageI18nContent.index.items"
        :key="item.shortcutId"
      >
        <span :id="item.shortcutId.slice(1)" tabindex="-1"></span>
        <BaseAccordion
          tabindex="0"
          :external-open="
            defaultAccordionIdOpen
              ? item.shortcutId.slice(1) === defaultAccordionIdOpen
              : index === 0
          "
        >
          <template #section-visibility-content>
            <div class="flex items-center w-full gap-2">
              <BookOpenIcon
                :class="[styleStore.iconSizeM]"
                class="transition-all duration-300 ease-in-out text-rm-secondary shrink-0 text-kl-icon"
              />
              <h2
                :class="[styleStore.textSizeL]"
                class="font-medium text-left transition-all duration-300 ease-in-out text-rm-secondary font-playfair"
              >
                {{ item.title }}
              </h2>
            </div>
          </template>
          <template #section-hidden-content>
            <div>
              <div
                class="p-3 rounded-md bg-rm-secondary h-[300px]"
                :class="{
                  'float-left w-auto mb-4 mr-4': styleStore.activeBreakpoint !== 'xs',
                  'float-none w-full': styleStore.activeBreakpoint === 'xs',
                }"
              >
                <img
                  src="https://picsum.photos/200/300"
                  alt="Descrizione dell'immagine"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <p
                :class="[styleStore.textSizeS, styleStore.firstLetterSize]"
                class="text-justify transition-all duration-300 ease-in-out text-rm-main font-lora first-letter:text-rm-secondary first-letter:mr-1.5"
              >
                Laboris velit occaecat sint do tempor pariatur. Ut anim enim duis quis est
                adipisicing aute ex ea consequat. Cupidatat labore id officia ipsum. Sit ipsum
                laboris occaecat ipsum. Amet cupidatat enim mollit adipisicing adipisicing non et
                enim. Eu reprehenderit quis nulla eiusmod. Sint do aute nostrud velit nostrud nisi
                do labore eu amet veniam ea. Aute labore proident velit aliquip officia quis
                occaecat minim ea sit mollit labore. Commodo mollit aute excepteur aliquip nostrud
                in duis amet in. Labore eu cupidatat reprehenderit veniam commodo irure tempor
                aliquip. Lorem culpa dolor ex dolor fugiat veniam nostrud reprehenderit incididunt
                enim Lorem incididunt. Esse nulla incididunt elit ipsum. Tempor irure ipsum sint
                esse et non culpa proident ad culpa amet aliqua. Amet commodo dolor sint veniam
                voluptate esse sit aliquip. Lorem officia ea in esse reprehenderit ullamco dolore
                fugiat labore aliquip excepteur. Eiusmod incididunt occaecat elit proident pariatur
                quis magna occaecat dolore Lorem veniam est ex amet. Cupidatat minim laborum anim
                consequat ullamco sit. Laboris laboris aliquip aliqua nostrud culpa voluptate
                consectetur deserunt esse anim voluptate dolore. Reprehenderit irure ut ad
                adipisicing velit mollit commodo consequat ex cillum cillum. Pariatur aliqua nulla
                id minim nulla irure id do. Qui non ad esse culpa culpa cillum id tempor esse sit
                incididunt. Officia fugiat anim fugiat aliqua. Commodo mollit esse mollit nostrud ad
                Lorem officia eu pariatur ea elit. Non incididunt officia magna nulla in dolor ut.
                Dolor labore amet occaecat laboris nostrud dolor veniam irure aliquip commodo do qui
                nisi officia. Enim quis commodo occaecat dolore. Ullamco pariatur dolor exercitation
                commodo laboris mollit esse dolore anim. Magna aute consectetur eu nisi id excepteur
                amet minim qui sint est duis fugiat. Nulla enim minim irure ipsum ex. Enim Lorem in
                anim sit dolore culpa et. Tempor eu commodo voluptate consectetur reprehenderit
                enim. Sint sit laboris occaecat aliquip adipisicing laborum dolore ea aute
                cupidatat. Elit eiusmod pariatur reprehenderit non cupidatat commodo fugiat eiusmod
                quis irure adipisicing amet. Culpa nostrud ad officia consectetur commodo. Ex
                officia ex Lorem proident ullamco. Deserunt non laborum in aliquip reprehenderit ut
                esse do aute voluptate. Cillum cupidatat non ut sit voluptate ex non exercitation.
                Magna laborum excepteur do deserunt enim mollit laborum. Nulla ex occaecat ipsum
                sint. Consequat dolore in non duis nulla. Et do irure deserunt ea magna excepteur.
                Elit aliquip velit officia eiusmod proident eu enim est. Magna aliquip dolor et
                nostrud anim qui ad cupidatat esse tempor nulla culpa qui. Et dolor non tempor est
                aliquip pariatur anim dolor velit aliquip officia. Elit anim reprehenderit nulla
                commodo officia fugiat magna culpa eiusmod. Commodo reprehenderit et est qui
                excepteur duis culpa sunt minim veniam cupidatat consequat enim. Ad consectetur sunt
                eu qui fugiat commodo non aliqua in.
              </p>
            </div>
          </template>
        </BaseAccordion>
      </BaseElementsContainer>
    </template>
  </ThePageContainer>
</template>
