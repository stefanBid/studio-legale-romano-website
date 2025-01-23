// types/index.ts

/** GLOBAL **/
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type NotificationCategory = 'info' | 'success' | 'error';
type Locale = 'it';

interface Notification {
  id: string;
  message: string;
  type: NotificationCategory;
  visibilityDuration: number;
}

interface Button {
  text: string;
  link?: string;
}
/**
interface InputField {
  label: string;
  placeholder: string;
}
interface Section {
  titleHeading: string;
  subTitleHeading: string;
  contentParagraph: string;
  imagePath?: string;
  imageDescription?: string;
}

interface Rating {
  name: string;
  value: number;
}

**/

/** HEADER **/
interface HeaderContent {
  navbarRoutes: {
    text: string;
    path: string;
  }[];
}

/** HOME PAGE **/
interface HomePageContent {
  firstHeading: string;
  secondHeading: string;
  firstCta: Button;
  secondCta: Button;
}

/** PERFORMANCE PAGE **/
interface PerformancePageContent {
  firstHeading: string;
  secondHeading: string;
  imagePath: string;
  index: {
    title: string;
    items: {
      title: string;
      shortcutId: string;
    }[];
  };
}
/** COLLABORATION PAGE **/
interface CollaborationPageContent {
  firstHeading: string;
  secondHeading: string;
  imagePath: string;
}

/** CONTACT PAGE **/
interface ContactPageContent {
  firstHeading: string;
  secondHeading: string;
  imagePath: string;
}

/** ABOUT US PAGE **/
interface AboutUsPageContent {
  firstHeading: string;
  secondHeading: string;
  imagePath: string;
}

/** NOT FOUND PAGE **/
interface NotFoundPageContent {
  firstHeading: string;
  secondHeading: string;
  goHomeButton: Button;
}

export type {
  Breakpoint,
  Locale,
  Notification,
  NotificationCategory,
  HeaderContent,
  HomePageContent,
  PerformancePageContent,
  CollaborationPageContent,
  ContactPageContent,
  AboutUsPageContent,
  NotFoundPageContent,
};
