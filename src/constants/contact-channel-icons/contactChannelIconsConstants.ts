import type { FunctionalComponent, Component } from 'vue';
import { InstagramIcon } from '@/assets';
import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

export const CONTACT_CHANNEL_ICONS_MAP: Record<string, FunctionalComponent | Component | string> = {
  mobile: DevicePhoneMobileIcon,
  telephone: PhoneIcon,
  email: EnvelopeIcon,
  instagram: InstagramIcon,
};
