import { MAIL_MESSAGES_MAP, WHATS_APP_MESSAGES_MAP } from '@/constants';
import type { ExternalMessageInfo } from '@/types';

export const openLink = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const sendEmail = (email: string, messageType: ExternalMessageInfo): void => {
  const cleanedEmail = email.replace(/\s+/g, '');
  openLink(
    `mailto:${cleanedEmail}?subject=${encodeURIComponent(MAIL_MESSAGES_MAP[messageType].subject)}&body=${encodeURIComponent(MAIL_MESSAGES_MAP[messageType].body)}`,
  );
};

export const sendWhatsAppMessage = (
  phoneNumber: string,
  messageType: ExternalMessageInfo,
): void => {
  const cleanedPhoneNumber = phoneNumber.replace(/\s+/g, '');
  openLink(
    `https://wa.me/${cleanedPhoneNumber}?text=${encodeURIComponent(WHATS_APP_MESSAGES_MAP[messageType])}`,
  );
};

export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
};
