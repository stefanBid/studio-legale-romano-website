import contactPageCover from '@/assets/images/contacts-page-cover.jpg';
import homePageCover from '@/assets/images/home-page-cover.jpg';
import performancePageCover from '@/assets/images/performance-page-cover.jpg';
import whoWeArePageCover from '@/assets/images/who-we-are-page-cover.jpg';

export type MediaName =
  | 'contactPageCoverImg'
  | 'homePageCoverImg'
  | 'performancePageCoverImg'
  | 'whoWeArePageCoverImg';

export const MEDIA: Record<MediaName, string> = {
  contactPageCoverImg: contactPageCover,
  homePageCoverImg: homePageCover,
  performancePageCoverImg: performancePageCover,
  whoWeArePageCoverImg: whoWeArePageCover,
};
