import { z } from 'zod';

const SiteConfigSchema = z.object({
  company: z.object({
    name: z.string().min(1),
    namePrefix: z.string(),
    nameHighlight: z.string(),
    tagline: z.string(),
    logo: z.string(),
    email: z.string().email(),
    whatsapp: z.string().min(10),
    whatsappMessage: z.string(),
  }),
  social: z.object({
    instagram: z.string().url().nullable(),
    facebook: z.string().url().nullable(),
    linkedin: z.string().url().nullable(),
  }),
  nav: z.object({
    links: z.array(z.object({ href: z.string(), label: z.string() })),
    mobileLinks: z.array(z.object({ href: z.string(), label: z.string() })),
    cta: z.string(),
  }),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    url: z.string().url(),
    ogImage: z.string(),
  }),
  footer: z.object({
    copyright: z.string(),
    disclaimer: z.string(),
  }),
});

const ThemeConfigSchema = z.object({
  colors: z.object({
    primary: z.string(),
    primaryHover: z.string(),
    secondary: z.string(),
    secondaryHover: z.string(),
    accent: z.string(),
    background: z.string(),
    surface: z.string(),
    text: z.string(),
    textMuted: z.string(),
  }),
  fonts: z.object({
    heading: z.string(),
    body: z.string(),
  }),
});

const LayoutConfigSchema = z.object({
  hero: z.enum(['hero-a', 'hero-b', 'hero-c']).default('hero-a'),
  benefits: z.enum(['benefits-a', 'benefits-b']).default('benefits-a'),
  steps: z.enum(['steps-a', 'steps-b']).default('steps-a'),
  socialProof: z.enum(['social-a', 'social-b']).default('social-a'),
});

const ContentConfigSchema = z.object({
  layout: LayoutConfigSchema.optional(),
  hero: z.object({
    badge: z.string(),
    title: z.string(),
    titleHighlight: z.string(),
    subtitle: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    features: z.array(z.object({ emoji: z.string(), text: z.string() })),
  }),
  benefits: z.object({
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })),
  }),
  planTypes: z.object({
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      image: z.string(),
      imageAlt: z.string(),
    })),
  }),
  steps: z.object({
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })),
  }),
  operators: z.object({
    title: z.string(),
    items: z.array(z.object({ name: z.string(), logoUrl: z.string() })),
  }),
  form: z.object({
    title: z.string(),
    subtitle: z.string(),
    submitButton: z.string(),
    successTitle: z.string(),
    successMessage: z.string(),
    planOptions: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
  testimonials: z.object({
    title: z.string(),
    items: z.array(z.object({
      id: z.number(),
      name: z.string(),
      role: z.string(),
      content: z.string(),
      rating: z.number().min(1).max(5),
    })),
  }),
  faq: z.object({
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
  cta: z.object({
    title: z.string(),
    subtitle: z.string(),
    buttonText: z.string(),
    note: z.string(),
  }),
  pricing: z.object({
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({
      id: z.number(),
      name: z.string(),
      price: z.string(),
      period: z.string(),
      description: z.string(),
      features: z.array(z.string()),
      highlighted: z.boolean(),
      cta: z.string(),
    })),
  }).optional(),
  consultant: z.object({
    title: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string(),
    credentials: z.array(z.string()),
    whatsappLabel: z.string(),
  }).optional(),
});

function validateConfig<T>(schema: z.ZodType<T>, data: unknown, name: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  • ${i.path.join('.')}: ${i.message}`)
      .join('\n');
    throw new Error(`Erro em config/${name}.json:\n${issues}`);
  }
  return result.data;
}

export { SiteConfigSchema, ThemeConfigSchema, ContentConfigSchema, validateConfig };
