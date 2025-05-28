// types/index.ts

/** GLOBAL **/
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type NotificationCategory = 'info' | 'success' | 'error';
type Locale = 'it';
type IconsName = 'LogoIcon' | 'InstagramIcon' | 'FacebookIcon' | 'TwitterIcon';
type ImageName =
  | 'contactPageCoverImg'
  | 'homePageCoverImg'
  | 'performancePageCoverImg'
  | 'whoWeArePageCoverImg'
  | 'accordionTestImg';

type DocName = 'antonioRomanoCvDoc';
type ExternalOperation = 'openLink' | 'sendEmail' | 'sendWhatsAppMessage' | 'callNumber';
type ExternalMessageInfo =
  | 'legalConsultation'
  | 'appointment'
  | 'generalInformation'
  | 'professionalCollaboration';

interface MetaDescription {
  title: string;
  author: string;
  robots: string;
  description?: string;
  keywords?: string[];
  copyright?: string;
}

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

/** HEADER **/
interface HeaderContent {
  navbarRoutes: {
    text: string;
    path: string;
  }[];
}

/** FOOTER **/
interface FooterContent {
  intro: {
    title: string;
    description: string;
    socials: {
      id: string;
      value: string;
    }[];
  };
  quickLinks: {
    title: string;
    links: {
      text: string;
      link: string;
    }[];
  };
  contacts: {
    title: string;
    channels: {
      id: string;
      value: string;
    }[];
  };
  helpAndSupport: {
    title: string;
    links: {
      text: string;
      link: string;
    }[];
  };
}

/** HOME PAGE **/
interface HomePageContent {
  metaDescription: MetaDescription;
  firstHeading: string;
  secondHeading: string;
  firstCta: Button;
  secondCta: Button;
}

/** PERFORMANCE PAGE **/
interface PerformancePageContent {
  metaDescription: MetaDescription;
  firstHeading: string;
  secondHeading: string;
  index: {
    title: string;
    items: {
      title: string;
      shortcutId: string;
      description: string;
    }[];
  };
}

/** CONTACT PAGE **/
interface TimeRange {
  start: string; // Formato 'HH:mm'
  end: string; // Formato 'HH:mm'
}

interface OpeningHours {
  morning?: TimeRange;
  afternoon?: TimeRange;
}

interface WeeklySchedule {
  monday: {
    name: string;
    openingHours?: OpeningHours;
  };
  tuesday: {
    name: string;
    openingHours?: OpeningHours;
  };
  wednesday: {
    name: string;
    openingHours?: OpeningHours;
  };
  thursday: {
    name: string;
    openingHours?: OpeningHours;
  };
  friday: {
    name: string;
    openingHours?: OpeningHours;
  };
  saturday: {
    name: string;
    openingHours?: OpeningHours;
  };
  sunday: {
    name: string;
    openingHours?: OpeningHours;
  };
}

interface ContactPageContent {
  metaDescription: MetaDescription;
  firstHeading: string;
  secondHeading: string;
  reachUs: {
    heading: string;
    description: string;
    withCar: {
      title: string;
      description: string;
      parkings: {
        name: string;
        description: string;
        distance?: string;
      }[];
    };
    withPublicTransport: {
      title: string;
      description: string;
      busStops: {
        name: string;
        description: string;
        distance?: string;
      }[];
    };
    withFoot: {
      title: string;
      description: string;
      landmarks: {
        name: string;
        description: string;
        distance?: string;
      }[];
    };
  };
  contacts: {
    heading: string;
    description: string;
    channels: {
      id: string;
      value: string;
      operation: ExternalOperation;
    }[];
  };
  openingHours: {
    heading: string;
    description: string;
    weeklySchedule: WeeklySchedule;
  };
}

/** WHO WE ARE PAGE **/
interface Member {
  id: string;
  idDoc?: DocName;
  imagePath?: string;
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  number: string;
  role: string;
  description: string;
}

interface WhoWeArePageContent {
  metaDescription: MetaDescription;
  firstHeading: string;
  secondHeading: string;
  team: {
    heading: string;
    description: string;
    members: Member[];
  };
  office: {
    heading: string;
    description: string;
  };
}

/** NOT FOUND PAGE **/
interface NotFoundPageContent {
  metaDescription: MetaDescription;
  firstHeading: string;
  secondHeading: string;
  goHomeButton: Button;
}

export type {
  Breakpoint,
  Locale,
  IconsName,
  ImageName,
  DocName,
  ExternalOperation,
  ExternalMessageInfo,
  NotificationCategory,
  Notification,
  MetaDescription,
  HeaderContent,
  FooterContent,
  HomePageContent,
  PerformancePageContent,
  WeeklySchedule,
  ContactPageContent,
  Member,
  WhoWeArePageContent,
  NotFoundPageContent,
};
