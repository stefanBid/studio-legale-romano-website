<script setup lang="ts">
import { useRouter } from 'vue-router';
import { BookOpenIcon } from '@heroicons/vue/24/solid';
import { useStyleStore, useTitleStore, useI18nStore } from '@/stores';
import { BaseAccordion, ThePageContainer } from '@/components';
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
      title: i18nStore.performancepageI18nContent.firstHeading,
      subtitle: i18nStore.performancepageI18nContent.secondHeading,
      imgPath: i18nStore.performancepageI18nContent.imagePath,
    }"
  >
    <template #page-content>
      <div
        :class="{
          'items-start':
            styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
          'items-center':
            styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        }"
        class="flex flex-col w-full gap-y-4"
      >
        <h1
          :class="[
            styleStore.textSizeL,
            {
              'text-center':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'text-left':
                styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
            },
          ]"
          class="font-medium transition-all duration-300 ease-in-out font-playfair"
        >
          {{ i18nStore.performancepageI18nContent.index.title }}
        </h1>

        <ol
          :class="[
            styleStore.textSizeS,
            {
              'pl-0 text-center':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              'pl-12 text-justify':
                styleStore.activeBreakpoint !== 'xs' && styleStore.activeBreakpoint !== 'sm',
            },
          ]"
          class="list-[upper-roman] font-lora"
        >
          <li
            v-for="item in i18nStore.performancepageI18nContent.index.items"
            :key="item.shortcutId"
            class="transition-all duration-300 ease-in-out cursor-pointer hover:text-rm-secondary hover:underline"
          >
            <a :href="item.shortcutId">{{ item.title }}</a>
          </li>
        </ol>
      </div>
      <BaseAccordion
        v-for="(item, index) in i18nStore.performancepageI18nContent.index.items"
        :id="item.shortcutId.slice(1)"
        :key="item.shortcutId"
        :external-open="
          defaultAccordionIdOpen ? item.shortcutId.slice(1) === defaultAccordionIdOpen : index === 0
        "
      >
        <template #section-visibility-content>
          <div class="inline-flex items-center w-full gap-x-4">
            <BookOpenIcon
              :class="[styleStore.iconSizeM]"
              class="transition-all duration-300 ease-in-out text-rm-secondary shrink-0 text-kl-icon"
            />
            <h2
              :class="[styleStore.textSizeL]"
              class="font-medium text-left text-rm-secondary font-playfair"
            >
              {{ item.title }}
            </h2>
          </div>
        </template>
        <template #section-hidden-content>
          <p
            :class="[styleStore.textSizeS, styleStore.firstLetterSize]"
            class="text-justify transition-all duration-300 ease-in-out text-rm-main font-lora first-letter:text-rm-secondary first-letter:mr-2"
          >
            Laboris velit occaecat sint do tempor pariatur. Ut anim enim duis quis est adipisicing
            aute ex ea consequat. Cupidatat labore id officia ipsum. Sit ipsum laboris occaecat
            ipsum. Amet cupidatat enim mollit adipisicing adipisicing non et enim. Eu reprehenderit
            quis nulla eiusmod. Sint do aute nostrud velit nostrud nisi do labore eu amet veniam ea.
            Aute labore proident velit aliquip officia quis occaecat minim ea sit mollit labore.
            Commodo mollit aute excepteur aliquip nostrud in duis amet in. Labore eu cupidatat
            reprehenderit veniam commodo irure tempor aliquip. Lorem culpa dolor ex dolor fugiat
            veniam nostrud reprehenderit incididunt enim Lorem incididunt. Esse nulla incididunt
            elit ipsum. Tempor irure ipsum sint esse et non culpa proident ad culpa amet aliqua.
            Amet commodo dolor sint veniam voluptate esse sit aliquip. Lorem officia ea in esse
            reprehenderit ullamco dolore fugiat labore aliquip excepteur. Eiusmod incididunt
            occaecat elit proident pariatur quis magna occaecat dolore Lorem veniam est ex amet.
            Cupidatat minim laborum anim consequat ullamco sit. Laboris laboris aliquip aliqua
            nostrud culpa voluptate consectetur deserunt esse anim voluptate dolore. Reprehenderit
            irure ut ad adipisicing velit mollit commodo consequat ex cillum cillum. Pariatur aliqua
            nulla id minim nulla irure id do. Qui non ad esse culpa culpa cillum id tempor esse sit
            incididunt. Officia fugiat anim fugiat aliqua. Commodo mollit esse mollit nostrud ad
            Lorem officia eu pariatur ea elit. Non incididunt officia magna nulla in dolor ut. Dolor
            labore amet occaecat laboris nostrud dolor veniam irure aliquip commodo do qui nisi
            officia. Enim quis commodo occaecat dolore. Ullamco pariatur dolor exercitation commodo
            laboris mollit esse dolore anim. Magna aute consectetur eu nisi id excepteur amet minim
            qui sint est duis fugiat. Nulla enim minim irure ipsum ex. Enim Lorem in anim sit dolore
            culpa et. Tempor eu commodo voluptate consectetur reprehenderit enim. Sint sit laboris
            occaecat aliquip adipisicing laborum dolore ea aute cupidatat. Elit eiusmod pariatur
            reprehenderit non cupidatat commodo fugiat eiusmod quis irure adipisicing amet. Culpa
            nostrud ad officia consectetur commodo. Ex officia ex Lorem proident ullamco. Deserunt
            non laborum in aliquip reprehenderit ut esse do aute voluptate. Cillum cupidatat non ut
            sit voluptate ex non exercitation. Magna laborum excepteur do deserunt enim mollit
            laborum. Nulla ex occaecat ipsum sint. Consequat dolore in non duis nulla. Et do irure
            deserunt ea magna excepteur. Elit aliquip velit officia eiusmod proident eu enim est.
            Magna aliquip dolor et nostrud anim qui ad cupidatat esse tempor nulla culpa qui. Et
            dolor non tempor est aliquip pariatur anim dolor velit aliquip officia. Elit anim
            reprehenderit nulla commodo officia fugiat magna culpa eiusmod. Commodo reprehenderit et
            est qui excepteur duis culpa sunt minim veniam cupidatat consequat enim. Ad consectetur
            sunt eu qui fugiat commodo non aliqua in.
          </p>
        </template>
      </BaseAccordion>
    </template>
  </ThePageContainer>
</template>
