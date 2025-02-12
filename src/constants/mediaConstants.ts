import contactPageCover from '@/assets/images/contacts-page-cover.jpg';
import homePageCover from '@/assets/images/home-page-cover.jpg';
import performancePageCover from '@/assets/images/performance-page-cover.jpg';
import whoWeArePageCover from '@/assets/images/who-we-are-page-cover.jpg';
import antonioRomanoCv from '@/assets/docs/antonio-romano-cv.pdf';

export type MediaName =
  | 'contactPageCoverImg'
  | 'homePageCoverImg'
  | 'performancePageCoverImg'
  | 'whoWeArePageCoverImg'
  | 'antonioRomanoCvDoc';

export const MEDIA: Record<MediaName, string> = {
  contactPageCoverImg: contactPageCover,
  homePageCoverImg: homePageCover,
  performancePageCoverImg: performancePageCover,
  whoWeArePageCoverImg: whoWeArePageCover,
  antonioRomanoCvDoc: antonioRomanoCv,
};
