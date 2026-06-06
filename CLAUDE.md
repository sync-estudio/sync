# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use **pnpm** (preferred over npm).

- `pnpm dev` — Astro dev server (localhost:4321, host 0.0.0.0).
- `pnpm build` — production build to `./dist/` (SSR via `@astrojs/node` standalone).
- `pnpm start` — run built SSR server: `node ./dist/server/entry.mjs`.
- `pnpm preview` — preview production build locally.
- `pnpm astro -- check` — type-check Astro + TS (no separate lint/test setup).

No test framework configured. No linter configured.

## Architecture

Astro 5 marketing site for **SYNC Estudio**, **bilingual** (Spanish default at root `/`, English under `/en/` with translated slugs — see i18n section). SSR output mode (`@astrojs/node` standalone) with selective `export const prerender = true` on landing/solution/case-study pages for static HTML. React 19 + MDX integrations are enabled, but the site is currently 100% `.astro` — no React islands in use yet; reserve React for genuinely interactive widgets.

### Path aliases (configured in both `astro.config.mjs` and `tsconfig.json`)

- `@app/*` → `src/app/*` — global layout + styles
- `@features/*` → `src/features/*` — feature-scoped components and data
- `@shared/*` → `src/shared/*` — reusable UI primitives, layout chrome, utils
- `@assets/*` → `src/assets/*`
- `@i18n/*` → `src/i18n/*` — locale dictionaries, content modules, route map, helpers

Use aliases for cross-folder imports; relative imports only within the same folder.

### Layout / page structure

- `src/app/layouts/Layout.astro` — single root layout. Owns `<head>` metadata, Open Graph/Twitter tags, `<html lang>`, hreflang + `og:locale`, canonical URL, Google Fonts preload, and SEO JSON-LD. It derives `lang` from `Astro.currentLocale`; pages pass `title`/`description`/`ogTitle`/`ogDescription` plus `routeKey` and/or `alternates` so the layout can emit the correct hreflang pair and feed the navbar language switcher. Localized meta defaults come from `ui.ts` via `t()`.
- `src/pages/` — routes. ES pages live at the root (`index.astro`, `contacto.astro`, …); their EN twins live under `src/pages/en/` with translated slugs. Page files are thin — they set `lang`-correct Layout props and delegate to feature components or shared templates. `index.astro` composes `@features/home/components/*` (hero, featured, about, workflow, services, faq).
- Dynamic routes use `getStaticPaths` + `prerender = true`, one ES file + one EN twin, both rendering the same shared template:
  - `pages/soluciones/[slug].astro` + `pages/en/solutions/[slug].astro` → `getSolutions(lang)` from `@features/solutions/data.ts`, render `features/solutions/components/solution-page.astro`.
  - `pages/casos-de-estudio/[slug].astro` + `pages/en/case-studies/[slug].astro` → filter the `blog` collection by `lang`, render `shared/components/layout/case-study-page.astro`.
  - Landing + pricing + 404 follow the same ES/`en/` split over shared templates (`landing-template.astro`, `pricing-page.astro`, `not-found.astro`).

### Content collections

`src/content.config.ts` defines a `blog` collection loaded via `glob` from `src/case-studies/**/*.{md,mdx}` with schema `{ title, description, pubDate, lang, urlSlug }`. Add an ES case study by dropping an `.mdx` in `src/case-studies/`; its EN twin goes in `src/case-studies/en/` with the **same `urlSlug`** and `lang: "en"`. Routes resolve the URL via `entry.data.urlSlug ?? entry.id`, filtered by `entry.data.lang`.

**Gotcha — never name a frontmatter field `slug`**: Astro's `glob` loader treats `slug` as the entry `id`. Two files sharing a `slug` collapse to one `id` and silently overwrite each other (no error). That is why the URL field is `urlSlug`, not `slug`.

### Internationalization (`src/i18n/`)

Native Astro i18n: `astro.config.mjs` sets `locales: ["es","en"]`, `defaultLocale: "es"`, `routing.prefixDefaultLocale: false` — so ES stays at the root and `Astro.currentLocale` resolves from the URL (`/en/*` → `"en"`, else `"es"`) for both SSR and prerendered routes. No prop-drilling of `lang` is needed; any `.astro` component reads it.

Standard pattern in a component:

```ts
import { getLang } from "@i18n/utils";
const lang = getLang(Astro.currentLocale); // "es" | "en", defaults to es
```

The `src/i18n/` modules:

- **`routes.ts`** — the single source of truth for every static path pair + anchors. Helpers: `localizedPath(key, lang)`, `homeHash(hash, lang)`, `solutionPath(slug, lang)`, `caseStudyPath(slug, lang)`. **Never hardcode an internal href** — go through these so EN pages link to EN targets and the switcher/hreflang stay correct.
- **`ui.ts`** — flat `ui = { es, en }` dictionary for chrome strings (nav, footer, buttons, breadcrumbs, form labels, validation, meta defaults). Typed `UiKey`.
- **`utils.ts`** — `getLang`, `otherLang`, and `useTranslations(lang)` returning `t(key)`; re-exports the route helpers.
- **`content/*`** (`home.ts`, `contact.ts`, `pricing.ts`) — structured page prose as `Record<Lang, …Copy>`. Components stay presentational and pull their block by `lang`.

**Storage rule of thumb**: short UI chrome → `ui.ts` `t()`; page prose → `content/*` modules; long structured records (solutions, landing) → their data files in the per-locale `{slug, copy}` shape; case studies → file-per-locale MDX. `src/shared/seo/schema.ts` and `sitemap.xml.ts` are locale-aware (pass `lang`; sitemap emits both trees).

To add a translatable string: chrome → add the key to both `es`/`en` in `ui.ts`; prose → add to the relevant `content/*` block. To add a route: add the pair to `routes.ts`, create the ES page + its `en/` twin.

### Features vs shared

- `src/features/<feature>/components/` holds page-section components used by one route.
- `src/features/solutions/data.ts` (and `features/landing/data.ts`) are the canonical sources for those pages. Each entry carries a stable locale-neutral `key`, plus `slug: Record<Lang, string>` and `copy: Record<Lang, …>` so both languages live side by side and the switcher can pair URLs. Internal hrefs inside this data are canonical route keys resolved at render via `localizedPath`.
- `src/shared/components/ui/` are small presentational primitives (buttons, cards, headers, faq items, etc.); `src/shared/components/layout/` is navbar/footer/article chrome. Reuse before creating new variants.
- **Component rule**: any UI element used in 2+ places must be extracted into a component (feature-scoped if local to one feature, `shared/components/ui/` if cross-feature). No inline duplication of markup.

### Styling

Tailwind v4 via `@tailwindcss/vite` plugin. Global CSS at `src/app/styles/global.css` (imported by `Layout.astro` and individual pages). `tailwind.config.js` adds `manrope` / `ibm-plex-serif` fonts and a custom `sync` brand color (`#1c5534`). `@tailwindcss/typography` available for MDX prose.

### Design system

`DESIGN.md` (root) is the authoritative design spec — read before adding UI. Key invariants:

- **Single brand voltage**: emerald (`sync` = `#1c5534`); no other accent colors. Surfaces are paper-white canvas or zinc-900 dark, never pure black.
- **Type**: Manrope for everything; **IBM Plex Serif italic only as inline single-word highlight** inside a `bg-emerald-200/60 -rotate-1 px-1.5 inline-block` marker span. Never use serif for full sentences/headings.
- **Geometry**: cards/panels `rounded-2xl md:rounded-3xl`; buttons always `rounded-full`; inputs `rounded-lg`. No hard corners.
- **Decoration**: emerald radial-dot pattern (18px spacing on light, 14px on dark) — pointer-tracked variant on hero, static elsewhere. Always `pointer-events-none` overlay.
- **Motion**: ease `cubic-bezier(0.22, 1, 0.36, 1)`; durations 150/300/600ms; Framer Motion for hero stagger (0.08s, 0.76s) and on-scroll card reveals (24px translateY, 0.55s, 0.09s stagger). `prefers-reduced-motion` flattens to 0.01ms globally.
- **Buttons**: use the single `<Button>` component (`shared/components/ui/button.astro`) with `primary | outline | small | ghost` variants. Outline/small use `border-current/25` so they adapt to surface color.
- **Focus ring**: `focus-visible:ring-2 ring-emerald-500 ring-offset-2` on every interactive element.
- **Container**: no global max-width; each section caps its own (`max-w-8xl` hero, `max-w-4xl` about, `max-w-3xl` services). Responsive horizontal padding 20→96px via `.container` class in `global.css`.
- **Copy**: ES default + full EN; voice "del lado nuestro" / "on our side" — quiet, anti-flash. No exclamations, no sales badges. Positioning is "based in Mexico, available worldwide" — not Mexico-only.

See `DESIGN.md` for full token tables (colors, typography, spacing, motion) and ready-to-use snippets under "Agent Prompt Guide".

## Conventions (from AGENTS.md)

- **TypeScript**: never use `any` unless modeling a true generic. Prefer concrete DOM types, unions, generics, `unknown`, or type guards.
- **Imports**: prefer the `@app|@features|@shared|@assets` aliases over `../../` when crossing folders.
- **Commits**: one comprehensive commit per completed subtask. Format is mandatory:
  `feature|chore|fix|update(<one-word-scope>): <message>` — e.g. `feat(hero): ...`, `perf(landing): ...`. Don't mix unrelated subtasks.
