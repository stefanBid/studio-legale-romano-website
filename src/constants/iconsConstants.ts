import Logo from '@/assets/icons/logo.svg?component';
import Instagram from '@/assets/icons/instagram.svg?component';
import Facebook from '@/assets/icons/fecebook.svg?component';
import Twitter from '@/assets/icons/twitter.svg?component';
import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';
import type { Component, FunctionalComponent } from 'vue';

export type IconsName = 'LogoIcon' | 'InstagramIcon' | 'FacebookIcon' | 'TwitterIcon';

export const ICONS: Record<IconsName, FunctionalComponent> = {
  LogoIcon: Logo,
  InstagramIcon: Instagram,
  FacebookIcon: Facebook,
  TwitterIcon: Twitter,
};

export const CONTACT_CHANNEL_ICONS: Record<string, FunctionalComponent | Component | string> = {
  MobileIcon: DevicePhoneMobileIcon,
  TelephoneIcon: PhoneIcon,
  EmailIcon: EnvelopeIcon,
  InstagramIcon: ICONS.InstagramIcon,
  FacebookIcon: ICONS.FacebookIcon,
  TwitterIcon: ICONS.TwitterIcon,
};
