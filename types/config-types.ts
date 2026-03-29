// Site configuration types
export interface SiteConfig {
  company: {
    name: string;
    namePrefix: string;
    nameHighlight: string;
    tagline: string;
    logo: string;
    email: string;
    whatsapp: string;
    whatsappMessage: string;
  };
  social: {
    instagram: string | null;
    facebook: string | null;
    linkedin: string | null;
  };
  nav: {
    links: Array<{ href: string; label: string }>;
    mobileLinks: Array<{ href: string; label: string }>;
    cta: string;
  };
  seo: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
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

export interface PricingItem {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface ContentConfig {
  layout?: LayoutConfig;
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
    planOptions: Array<{ value: string; label: string }>;
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
  pricing?: {
    title: string;
    subtitle: string;
    items: PricingItem[];
  };
  consultant?: {
    title: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    credentials: string[];
    whatsappLabel: string;
  };
}

// Layout variant types
export interface LayoutConfig {
  hero: 'hero-a' | 'hero-b' | 'hero-c';
  benefits: 'benefits-a' | 'benefits-b';
  steps: 'steps-a' | 'steps-b';
  socialProof: 'social-a' | 'social-b';
}

// Full config type
export interface FullConfig {
  site: SiteConfig;
  theme: ThemeConfig;
  content: ContentConfig;
}
