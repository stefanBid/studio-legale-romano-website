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
  index: {
    title: string;
    items: {
      title: string;
      shortcutId: string;
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
    }[];
  };
  openingHours: {
    heading: string;
    description: string;
    weeklySchedule: WeeklySchedule;
  };
}

/** WHO WE ARE PAGE **/
interface WhoWeArePageContent {
  firstHeading: string;
  secondHeading: string;
  team: {
    heading: string;
    description: string;
    members: {
      id: string;
      imagePath?: string;
      name: string;
      surname: string;
      birthDate: string;
      number: string;
      role: string;
      description: string;
    }[];
  };
  office: {
    heading: string;
    description: string;
  };
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
  WeeklySchedule,
  ContactPageContent,
  WhoWeArePageContent,
  NotFoundPageContent,
};
