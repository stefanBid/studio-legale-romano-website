<script setup lang="ts">
import { CONTACT_CHANNEL_ICONS, ICONS } from '@/constants';
import { useStyleStore, useI18nStore } from '@/stores';

//Store Declarations
const styleStore = useStyleStore();
const i18nStore = useI18nStore();
</script>

<template>
  <footer
    :class="[
      styleStore.containerPadding,
      {
        'py-6': styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        'py-7': styleStore.activeBreakpoint === 'md',
        'py-8':
          styleStore.activeBreakpoint !== 'xs' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'md',
      },
    ]"
    class="w-full text-white bg-rm-main"
  >
    <div
      class="grid w-full transition-all duration-300 ease-in-out grid-col"
      :class="{
        'grid-cols-1 gap-6 px-6 pb-6':
          styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        'grid-cols-[2fr_1fr] gap-7 px-7 pb-7': styleStore.activeBreakpoint === 'md',
        'grid-cols-[2fr_1fr_1fr_1fr] gap-8 px-8 pb-8':
          styleStore.activeBreakpoint !== 'xs' &&
          styleStore.activeBreakpoint !== 'sm' &&
          styleStore.activeBreakpoint !== 'md',
      }"
    >
      <!--Logo and Info-->
      <div
        id="logo-and-info"
        :class="{
          'items-center':
            styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        }"
        class="flex flex-col w-full gap-y-3"
      >
        <!--Logo-->
        <div
          id="logo"
          class="flex items-center transition-all duration-300 ease-in-out text-rm-secondary gap-x-2"
        >
          <component
            :is="ICONS.LogoIcon"
            :class="[styleStore.iconSizeS]"
            class="transition-all duration-300 ease-in-out shrink-0"
          />
          <span
            class="flex-1 font-medium transition-all duration-300 ease-in-out font-playfair group-hover:text-shadow-luminous"
            :class="[styleStore.textSizeM]"
          >
            {{ i18nStore.footerI18nContent.intro.title }}
          </span>
        </div>
        <!--Description-->
        <p
          id="description"
          :class="[
            styleStore.textSizeXS,
            {
              'text-center':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            },
          ]"
          class="text-white font-lora"
        >
          {{ i18nStore.footerI18nContent.intro.description }}
        </p>
        <!--Social Media-->
        <div id="social-media" class="flex gap-x-4">
          <a
            v-for="social in i18nStore.footerI18nContent.intro.socials"
            :key="social.id"
            :tabindex="0"
            :href="social.value"
            target="_blank"
            class="transition-all duration-300 ease-in-out outline-none group ring-0 focus-visible:ring-0 focus-visible:outline-none"
          >
            <component
              :is="CONTACT_CHANNEL_ICONS[social.id]"
              :class="[styleStore.iconSizeS]"
              class="text-white transition-all duration-300 ease-in-out group-hover:text-rm-secondary group-focus-visible:text-rm-secondary"
            />
          </a>
        </div>
      </div>
      <!--Quik Links-->
      <div
        id="quik-links"
        :class="{
          'items-center':
            styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        }"
        class="flex flex-col w-full gap-y-3"
      >
        <!--Title-->
        <span
          class="font-medium text-rm-secondary font-playfair"
          :class="[
            styleStore.textSizeS,
            {
              'text-center':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            },
          ]"
        >
          {{ i18nStore.footerI18nContent.quickLinks.title }}
        </span>

        <!--Links-->
        <div
          :class="{
            'items-center':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
          }"
          class="flex flex-col gap-y-1"
        >
          <router-link
            v-for="link in i18nStore.footerI18nContent.quickLinks.links"
            :key="link.text"
            :to="link.link"
            tabindex="0"
            class="text-white transition-all duration-300 ease-in-out outline-none w-fit ring-0 focus-visible:ring-0 focus-visible:outline-none font-lora group hover:text-rm-secondary focus-visible:text-rm-secondary"
            :class="[
              styleStore.textSizeXS,
              {
                'text-center':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              },
            ]"
          >
            {{ link.text }}
          </router-link>
        </div>
      </div>
      <!--Contact and Info-->
      <div
        id="contact"
        :class="{
          'items-center':
            styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        }"
        class="flex flex-col w-full gap-y-3"
      >
        <!--Title-->
        <span
          class="font-medium text-rm-secondary font-playfair"
          :class="[
            styleStore.textSizeS,
            {
              'text-center':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            },
          ]"
        >
          {{ i18nStore.footerI18nContent.contacts.title }}
        </span>
        <!--Contact Info-->
        <div
          :class="{
            'items-center':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
          }"
          class="flex flex-col gap-y-1"
        >
          <span
            v-for="channel in i18nStore.footerI18nContent.contacts.channels"
            :key="channel.id"
            :class="[
              styleStore.textSizeXS,
              {
                'justify-center':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              },
            ]"
            class="inline-flex items-center text-white font-lora gap-x-2"
          >
            <component
              :is="CONTACT_CHANNEL_ICONS[channel.id]"
              :class="[styleStore.iconSizeXS]"
              class="transition-all duration-300 ease-in-out shrink-0"
            />
            {{ channel.value }}
          </span>
        </div>
      </div>
      <!--Help And Support-->
      <div
        id="help-and-support"
        :class="{
          'items-center':
            styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
        }"
        class="flex flex-col w-full gap-y-3"
      >
        <!--Title-->
        <span
          class="font-medium text-rm-secondary font-playfair"
          :class="[
            styleStore.textSizeS,
            {
              'text-center':
                styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
            },
          ]"
        >
          {{ i18nStore.footerI18nContent.helpAndSupport.title }}
        </span>
        <!--Links-->
        <div
          :class="{
            'items-center':
              styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
          }"
          class="flex flex-col gap-y-1"
        >
          <router-link
            v-for="link in i18nStore.footerI18nContent.helpAndSupport.links"
            :key="link.text"
            :to="link.link"
            tabindex="0"
            class="text-white transition-all duration-300 ease-in-out outline-none font-lora hover:text-rm-secondary focus-visible:text-rm-secondary w-fit focus-visible:outline-none ring-0 focus-visible:ring-0"
            :class="[
              styleStore.textSizeXS,
              {
                'text-center':
                  styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',
              },
            ]"
          >
            {{ link.text }}
          </router-link>
        </div>
      </div>
    </div>
    <!--Easter Egg-->
    <div
      id="easter-egg"
      class="inline-flex items-center justify-center w-full px-8 pt-8 border-t border-white gap-x-1"
    >
      <span :class="[styleStore.textSizeXS]" class="text-center text-white font-lora">
        Designed and Developed by
      </span>
      <a
        href="https://www.linkedin.com/in/stefano-biddau-669149214/"
        target="_blank"
        class="inline-flex items-center text-white transition-all duration-300 ease-in-out gap-x-1 outline-rm-secondary outline-offset-0 ring-0 focus-visible:ring-0"
      >
        <img
          src="/egg.png"
          :class="[styleStore.iconSizeXS]"
          class="transition-all duration-300 ease-in-out shrink-0"
        />
        <span
          class="flex-1 font-medium transition-all duration-300 ease-in-out"
          :class="[styleStore.textSizeXS]"
        >
          Stefano Biddau
        </span>
      </a>
    </div>
  </footer>
</template>
