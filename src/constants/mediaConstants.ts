import contactPageCoverJpg from '@/assets/images/contacts-page-cover.jpg';
import contactPageCoverWebp from '@/assets/images/contacts-page-cover.webp';
import homePageCoverJpg from '@/assets/images/home-page-cover.jpg';
import homePageCoverWebp from '@/assets/images/home-page-cover.webp';
import performancePageCoverJpg from '@/assets/images/performance-page-cover.jpg';
import performancePageCoverWebp from '@/assets/images/performance-page-cover.webp';
import whoWeArePageCoverJpg from '@/assets/images/who-we-are-page-cover.jpg';
import whoWeArePageCoverWebp from '@/assets/images/who-we-are-page-cover.webp';
import accordionTestImgJpg from '@/assets/images/accordion-test.jpg';
import accordionTestImgWebp from '@/assets/images/accordion-test.webp';
import antonioRomanoCv from '@/assets/docs/antonio-romano-cv.pdf';
import type { ImageName, DocName } from '@/types';

export const IMAGES: Record<ImageName, { jpg: string; webp: string }> = {
  contactPageCoverImg: {
    jpg: contactPageCoverJpg,
    webp: contactPageCoverWebp,
  },
  homePageCoverImg: {
    jpg: homePageCoverJpg,
    webp: homePageCoverWebp,
  },
  performancePageCoverImg: {
    jpg: performancePageCoverJpg,
    webp: performancePageCoverWebp,
  },
  whoWeArePageCoverImg: {
    jpg: whoWeArePageCoverJpg,
    webp: whoWeArePageCoverWebp,
  },
  accordionTestImg: {
    jpg: accordionTestImgJpg,
    webp: accordionTestImgWebp,
  },
};

export const DOCS: Record<DocName, string> = {
  antonioRomanoCvDoc: antonioRomanoCv,
};
