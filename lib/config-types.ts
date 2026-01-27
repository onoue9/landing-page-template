// Site configuration types
export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    logo: string;
    whatsapp: string;
    whatsappMessage: string;
  };
  seo: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
  };
}

// Theme configuration types
export interface ThemeConfig {
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

// Content types
export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  image: string;
  imageAlt: string;
  features: Array<{ emoji: string; text: string }>;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PlanTypeItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface OperatorItem {
  name: string;
  logoUrl: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentConfig {
  hero: HeroContent;
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  planTypes: {
    title: string;
    subtitle: string;
    items: PlanTypeItem[];
  };
  steps: {
    title: string;
    subtitle: string;
    items: StepItem[];
  };
  operators: {
    title: string;
    items: OperatorItem[];
  };
  form: {
    title: string;
    subtitle: string;
    submitButton: string;
    successTitle: string;
    successMessage: string;
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    note: string;
  };
}

// Full config type
export interface FullConfig {
  site: SiteConfig;
  theme: ThemeConfig;
  content: ContentConfig;
}
