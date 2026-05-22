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

Astro 5 site for **SYNC Estudio** (Spanish-language marketing site). SSR output mode with selective `export const prerender = true` on landing/solution/case-study pages for static HTML. React 19 and MDX integrations are enabled; most components are `.astro` — React is reserved for interactive islands (see `features/projects/components/react`).

### Path aliases (configured in both `astro.config.mjs` and `tsconfig.json`)

- `@app/*` → `src/app/*` — global layout + styles
- `@features/*` → `src/features/*` — feature-scoped components and data
- `@shared/*` → `src/shared/*` — reusable UI primitives, layout chrome, utils
- `@assets/*` → `src/assets/*`

Use aliases for cross-folder imports; relative imports only within the same folder.

### Layout / page structure

- `src/app/layouts/Layout.astro` — single root layout. Owns `<head>` metadata, Open Graph/Twitter tags, canonical URL, Google Fonts preload, and SEO JSON-LD. Pages pass `title`/`description`/`ogTitle`/`ogDescription` props.
- `src/pages/` — routes. Landing pages compose feature components: `index.astro` pulls from `@features/home/components/*` (hero, featured, about, workflow, services, faq).
- Dynamic routes use `getStaticPaths` + `prerender = true`:
  - `pages/soluciones/[slug].astro` reads from `@features/solutions/data.ts` (typed `Solution` records).
  - `pages/casos-de-estudio/[slug].astro` reads from the `blog` content collection.

### Content collections

`src/content.config.ts` defines a `blog` collection loaded via `glob` from `src/case-studies/**/*.{md,mdx}` with schema `{ title, description, pubDate }`. Add a case study by dropping an `.mdx` file in `src/case-studies/`.

### Features vs shared

- `src/features/<feature>/components/` holds page-section components used by one route.
- `src/features/solutions/data.ts` is the canonical source for solution pages — the `Solution` type drives the `[slug].astro` template.
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
- **Copy**: Spanish, voice "del lado nuestro" — quiet, anti-flash. No exclamations, no sales badges.

See `DESIGN.md` for full token tables (colors, typography, spacing, motion) and ready-to-use snippets under "Agent Prompt Guide".

## Conventions (from AGENTS.md)

- **TypeScript**: never use `any` unless modeling a true generic. Prefer concrete DOM types, unions, generics, `unknown`, or type guards.
- **Imports**: prefer the `@app|@features|@shared|@assets` aliases over `../../` when crossing folders.
- **Commits**: one comprehensive commit per completed subtask. Format is mandatory:
  `feature|chore|fix|update(<one-word-scope>): <message>` — e.g. `feat(hero): ...`, `perf(landing): ...`. Don't mix unrelated subtasks.
