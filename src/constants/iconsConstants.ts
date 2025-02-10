import Logo from '@/assets/icons/logo.svg?component';
import Instagram from '@/assets/icons/instagram.svg?component';
import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';
import type { Component, FunctionalComponent } from 'vue';

export type IconsName = 'LogoIcon' | 'InstagramIcon';

export const ICONS: Record<IconsName, FunctionalComponent> = {
  LogoIcon: Logo,
  InstagramIcon: Instagram,
};

export const CONTACT_CHANNEL_ICONS_MAP: Record<string, FunctionalComponent | Component | string> = {
  MobileIcon: DevicePhoneMobileIcon,
  TelephoneIcon: PhoneIcon,
  EmailIcon: EnvelopeIcon,
  InstagramIcon: ICONS.InstagramIcon,
};
