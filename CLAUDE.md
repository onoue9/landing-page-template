# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Development server (hot reload)
npm run build    # Production build → static output in /out
npm run start    # Serve built output locally
npm run lint     # ESLint validation
```

No test suite is configured.

## Architecture

This is a **Next.js 15 static-export landing page** (Brazilian health insurance lead generation). The build outputs pure HTML/CSS/JS to `/out/` with no server runtime — deployed to Netlify or GitHub Pages.

### Configuration-driven content

All business content lives in `config/` JSON files — components never hardcode text or data:

- `config/site.json` — company name, WhatsApp number, SEO metadata
- `config/content.json` — all section content (hero, benefits, plans, operators, testimonials, FAQ, consultant)
- `config/theme.json` — theme colors injected as CSS custom properties at build time

`lib/config.ts` re-exports these as typed objects. Components read config via `useConfig()` from `contexts/ConfigContext.tsx` — never import from `lib/config` directly in components. `getWhatsAppLink()` in `lib/config.ts` is the canonical way to build WhatsApp URLs.

### Component structure

Each page section is its own component in `components/`. The main page (`app/page.tsx`) simply composes them in order. Shared UI primitives are in `components/ui/`.

Custom hooks in `hooks/` handle: form submission with Netlify Forms (`useLeadForm.ts`), intersection observer for scroll animations (`useInView.ts`), and scroll progress tracking (`useScrollProgress.ts`).

### Styling

Tailwind CSS with CSS custom properties defined in `app/globals.css`. Theme colors are injected as `--color-*` CSS variables from `config/theme.json` in `app/layout.tsx`. The Tailwind config extends with `--font-jakarta` and a `float` animation. The design is mobile-first.

### Live preview system (`/preview`)

`app/preview/page.tsx` renders a configurator sidebar + iframe. The iframe loads `/` and communicates via `postMessage`:

- `PreviewListener` (mounted in `app/layout.tsx`) runs inside the iframe — receives `PREVIEW_CONFIG` messages and calls `setConfig()` to update the React context, plus sets CSS custom properties directly on `:root` for instant color updates.
- The preview page sends the full `ConfigContextValue` to the iframe on every config change.
- `CookieConsent` and `DemoBanner` detect `window !== window.top` to avoid rendering inside the iframe.

### Adding a new external image domain

Add it to the `remotePatterns` array in `next.config.mjs`.

## Customizing for a new client

1. Edit `config/site.json` (company info, WhatsApp, SEO)
2. Edit `config/content.json` (all page text and data)
3. Edit `config/theme.json` (brand colors)
4. Replace logos in `public/logos/` and consultant photo at `public/consultant.jpg`
5. Update `public/sitemap.xml` and `public/robots.txt` URLs
6. Deploy to Netlify (auto-detected via `netlify.toml`)
