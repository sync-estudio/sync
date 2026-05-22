# SYNC Estudio — Web

Spanish-language marketing site for SYNC Estudio. Astro 5 + React 19 + Tailwind v4, SSR via `@astrojs/node` standalone with selective prerendering on landing, solution, and case-study pages.

## Requirements

- Node `>=18.20.8`
- pnpm (preferred)

## Setup

```sh
pnpm install
```

## Scripts

| Command | Action |
|---|---|
| `pnpm dev` | Astro dev server at `localhost:4321` (host `0.0.0.0`) |
| `pnpm build` | Production build to `./dist/` |
| `pnpm start` | Run built SSR server (`node ./dist/server/entry.mjs`) |
| `pnpm preview` | Preview production build locally |
| `pnpm astro -- check` | Type-check Astro + TypeScript |

No tests or linter configured.

## Structure

```
src/
├── app/            # Root layout + global styles
│   ├── layouts/Layout.astro
│   └── styles/global.css
├── features/       # Page-section components, scoped per feature
│   ├── home/       # hero, about, services, workflow, featured, faq
│   ├── solutions/  # data.ts — canonical Solution records
│   ├── projects/
│   └── contact/
├── shared/
│   ├── components/ui/      # Reusable primitives (Button, cards, headers, ...)
│   ├── components/layout/  # navbar, footer, article-layout
│   └── utils/utils.ts
├── pages/          # Routes
│   ├── index.astro
│   ├── soluciones/[slug].astro          # prerendered from features/solutions/data.ts
│   └── casos-de-estudio/[slug].astro    # prerendered from content collection
├── case-studies/   # MDX content collection (see content.config.ts)
└── content.config.ts
```

## Path aliases

Configured in `astro.config.mjs` and `tsconfig.json`:

- `@app/*` → `src/app/*`
- `@features/*` → `src/features/*`
- `@shared/*` → `src/shared/*`
- `@assets/*` → `src/assets/*`

Use aliases for cross-folder imports. Relative imports only within the same folder.

## Adding content

- **Case study**: drop a `.mdx` file into `src/case-studies/` with frontmatter `{ title, description, pubDate }`. Auto-routed at `/casos-de-estudio/<slug>`.
- **Solution page**: add a `Solution` record to `src/features/solutions/data.ts`. Auto-routed at `/soluciones/<id>`.

## Conventions

- **TypeScript**: no `any` unless modeling a true generic. Prefer concrete DOM types, unions, generics, `unknown`, or type guards.
- **Components**: any UI used in 2+ places must be extracted into a component (feature-scoped if local, `shared/components/ui/` if cross-feature). No inline duplication.
- **Commits** (mandatory format): `feat|chore|fix|update(<one-word-scope>): <message>` — one commit per completed subtask, no mixed scopes.

## Design system

`DESIGN.md` is the authoritative design spec. Quick invariants:

- Brand: single emerald voltage (`#1c5534`, Tailwind alias `sync`). Surfaces are paper-white or zinc-900 — never pure black.
- Type: Manrope everywhere; IBM Plex Serif italic only as inline single-word highlight inside an `emerald-200/60` marker span (`-rotate-1 px-1.5 inline-block`).
- Geometry: `rounded-2xl md:rounded-3xl` for cards/panels, `rounded-full` for buttons, `rounded-lg` for inputs. No hard corners.
- Motion: `cubic-bezier(0.22, 1, 0.36, 1)`, 150/300/600ms. Honor `prefers-reduced-motion` (already global in `global.css`).
- Buttons: single `<Button>` component at `src/shared/components/ui/button.astro` with `primary | outline | small | ghost` variants.
- Focus ring: `focus-visible:ring-2 ring-emerald-500 ring-offset-2` on every interactive element.

## Further reading

- `CLAUDE.md` — guidance for Claude Code instances working in this repo.
- `AGENTS.md` — commit + TypeScript + import conventions.
- `DESIGN.md` — full design tokens, components, and ready-to-use snippets.
