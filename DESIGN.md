---
version: beta
name: Sync-Estudio-design-analysis
description: A calm, editorial software-studio site on a paper-white canvas with a single deep emerald brand voltage (`{colors.brand-700}` — #1c5534) and high-contrast zinc-900 dark surfaces used for accent panels, service cards, and footer. Type is Manrope for everything — one typeface, no serif. Inline emphasis is a plain emerald color accent (`text-emerald-700`), never a marker swatch or italic. Geometry stays soft: cards/panels `rounded-2xl md:rounded-3xl`, every button `rounded-full`. The home page is built from full-viewport scroll-coupled sections — the decorative signature is an animated ASCII monospace wave (hero + offerings), a GSAP scroll-driven per-word color fill (about), and GSAP pin-stacked panels (offerings). The ASCII wave is used sparingly — at most one per page, behind the hero only. A pointer-tracked emerald dot pattern survives on the service cards and footer. Motion is restrained and scroll-led (GSAP ScrollTrigger for scroll coupling, Framer Motion + a dependency-free `data-reveal` observer for on-scroll reveals, CSS keyframes for entry; prefers-reduced-motion flattens everything to 0.01ms). Spanish-language site; voice is "del lado nuestro" — quiet, accountable, anti-SaaS-flash.

colors:
  brand-900: "#064e3b"
  brand-700: "#1c5534"
  brand-ink: "#022c22"
  emerald-50: "#ecfdf5"
  emerald-100: "#d1fae5"
  emerald-200: "#a7f3d0"
  emerald-300: "#6ee7b7"
  emerald-500: "#10b981"
  emerald-600: "#059669"
  emerald-700: "#047857"
  emerald-800: "#065f46"
  emerald-900: "#064e3b"
  emerald-950: "#022c22"
  emerald-soft-card: "#defbed"
  canvas: "#ffffff"
  ink: "#18181b"
  zinc-100: "#f4f4f5"
  zinc-200: "#e4e4e7"
  zinc-300: "#d4d4d8"
  zinc-400: "#a1a1aa"
  zinc-500: "#71717a"
  zinc-600: "#52525b"
  zinc-700: "#3f3f46"
  zinc-800: "#27272a"
  zinc-900: "#18181b"
  wave-emerald: "rgba(4, 120, 87, 0.45)"
  wave-emerald-soft: "rgba(4, 120, 87, 0.28)"
  dot-emerald: "rgba(4, 120, 87, 0.35)"
  dot-on-dark: "rgba(255, 255, 255, 0.18)"
  fill-dim: "#d4d4d8"
  fill-ink: "#27272a"
  fill-accent: "#047857"
  accent-emerald: "#047857 (text-emerald-700) — inline highlight color"

typography:
  hero-h1:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-4xl → lg:text-7xl (36 → 72px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em (tracking-tight)"
  panel-h2:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-4xl → lg:text-7xl (36 → 72px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "tracking-tight"
  section-h2:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-2xl → lg:text-5xl (24 → 48px)"
    fontWeight: 600-700
    lineHeight: 1.1
    letterSpacing: "tracking-tight"
  about-statement:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-2xl → md:text-4xl (24 → 36px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "tracking-tight"
  card-h3:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-xl → md:text-2xl (20 → 24px)"
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-lg → md:text-xl (18 → 20px)"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Manrope, sans-serif"
    fontSize: "text-base → md:text-lg (16 → 18px)"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14 → 15px"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow-plain:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14 → 16px (text-sm → md:text-base)"
    fontWeight: 400
    color: "{colors.zinc-500}"
    note: "Home sections use a plain, sentence-case lead label (e.g. '¿Por qué existimos?'), NOT the uppercase wide-tracked eyebrow."
  eyebrow-tracked:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.2em"
    textTransform: uppercase
    note: "The uppercase 0.2em-tracked eyebrow survives on the FAQ section ('Preguntas frecuentes', emerald-700) and interior routes."
  inline-accent:
    fontFamily: "Manrope, sans-serif (inherits heading)"
    color: "{colors.accent-emerald} (text-emerald-700)"
    note: "Inline emphasis = color only. A single word inside a heading turns emerald; weight/size inherit. No serif, no italic, no swatch."
  prose-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    lineHeight: 1.8
  ascii-wave:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.4em"
    note: "Decorative animated character field — not reading type."

rounded:
  none: 0px
  sm: 6px
  lg: 12px
  "2xl": 16px
  "3xl": 24px
  full: 9999px

spacing:
  panel-h: "100dvh (hero/about/offerings panels)"
  section-y: "py-16 md:py-24 (64 → 96px) — featured"
  section-y-lg: "py-24 md:py-32 (96 → 128px) — services, faq"
  section-y-xl: "py-28 md:py-40 (112 → 160px) — about"
  card-pad: "p-8 md:p-10 (32 → 40px) — service cards"
  card-pad-sm: "p-6 md:p-7 (24 → 28px) — faq items"
  container-x-mobile: "1.25rem (20px), 1.5rem (24px) at sm"
  grid-gap: "gap-5 md:gap-6 (services), gap-6 md:gap-8 (featured)"

motion:
  duration-fast: 150ms
  duration-normal: 300ms
  duration-slow: 600ms
  ease-out-soft: "cubic-bezier(0.22, 1, 0.36, 1)"
  hero-actions-in: "0.76s ease-out-soft, 0.35s delay, translateY(24px) → 0 (CSS keyframe)"
  wave-frame-step: "hero 0.005 / offerings 0.004 per rAF"
  about-fill: "GSAP ScrollTrigger scrub:0.5, stagger 1, start 'top 85%' end 'center center'"
  offerings-pin: "GSAP ScrollTrigger pin, pinSpacing:false, anticipatePin:1 (last panel unpinned)"
  services-reveal: "Framer Motion, 0.55s, translateY(24px), stagger 0.09s, inView amount 0.25"
  services-aura: "pointer-tracked 320px radial mask over dot field, rAF-throttled"

components:
  button-default:
    backgroundColor: "{colors.zinc-800}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    padding: "px-5 py-2.5"
    fontWeight: 600
    fontSize: "14px"
    hoverBackground: "{colors.zinc-700}"
    activeBackground: "{colors.zinc-900}"
    focusRing: "2px {colors.emerald-500} + 2px offset"
    transition: "colors 200ms ease-in-out"
  button-outline:
    backgroundColor: transparent
    textColor: currentColor
    rounded: "{rounded.full}"
    padding: "px-5 py-2.5"
    border: "1px solid currentColor / 25% opacity"
    hoverBackground: "currentColor / 10%"
  button-small:
    backgroundColor: transparent
    textColor: currentColor
    rounded: "{rounded.full}"
    padding: "px-3.5 py-1.5"
    fontSize: "12px"
    border: "1px solid currentColor / 25%"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.zinc-700}"
    rounded: "{rounded.full}"
    hoverBackground: "{colors.zinc-100}"
    hoverTransform: "scale(1.02)"
  hero:
    layout: "full-viewport (min-h-screen), no card/border, centered text"
    decoration: "{component.ascii-wave-pointer}"
    headlineAccent: "single word in {colors.emerald-700} (plain, no marker swatch)"
    entry: "CSS keyframe hero-actions-in on the button row"
  ascii-wave:
    element: "<pre> overlay, pointer-events:none, z-0"
    typography: "{typography.ascii-wave}"
    color: "{colors.wave-emerald} (hero) / {colors.wave-emerald-soft} (offerings)"
    field: "monospace char grid (cells 13px) animated as a stacked sine wave (two sines), rendered per requestAnimationFrame"
    ramp: "'  ···' (space → middot density ramp)"
    edgeMask: "linear-gradient transparent→black 3%..97%→transparent (fades left/right edges)"
    position: "hero centered-low (base rows*0.72); offerings top or bottom via data-pos"
  about:
    layout: "full-viewport centered statement, no card, no dots"
    decoration: "{component.scroll-word-fill}"
    signature: "founder credit line below the statement"
  scroll-word-fill:
    technique: "paragraph split into per-word <span>s; GSAP ScrollTrigger scrubs each word's color from {colors.fill-dim} → {colors.fill-ink} left-to-right as the section crosses the viewport"
    accentWord: "'Sync' fills to {colors.fill-accent} instead of ink"
    a11y: "sr-only full sentence + aria-hidden decorative word spans"
    reducedMotion: "words render at final ink color immediately, no GSAP load"
  offerings-panel:
    layout: "stack of full-viewport (100dvh) panels, alternating {colors.canvas} / {colors.zinc-900}"
    pinning: "{motion.offerings-pin} — each panel pins at top so the next scrolls up over it; layered reveal"
    alignment: "panels alternate left / right text alignment"
    decoration: "{component.ascii-wave} on the light panels (top/bottom edge)"
  service-card:
    sharedShape: "rounded-3xl, min-h-[22rem] md:min-h-[28rem], p-8 md:p-10, 3-col grid (md)"
    dataSource: "@features/solutions/data.ts (solutions[].themeKey)"
    hover: "-translate-y-1 (transform 300ms ease-out)"
    decoration: "{component.dot-pattern-aura}"
    themes:
      dark: "bg-zinc-900 text-zinc-100 — solution 'diagnostico'"
      mid: "bg-emerald-800 text-emerald-50 — solution 'desarrollo'"
      light: "bg-[#defbed] text-zinc-800 — solution 'educacion'"
  dot-pattern-aura:
    fill: "radial-gradient(circle, var(--dot-color) 1.2px, transparent 1.6px) / 14px 14px, positioned bottom-right"
    dotColor: "rgba(255,255,255,0.18) on dark/mid · rgba(4,120,87,0.35) on light"
    mask: "320px radial-gradient that tracks the pointer (--services-mouse-x/y), rAF-throttled; rests at a per-card default position"
  dot-pattern-dark:
    fill: "radial-gradient white dots / 14px, masked to a corner ellipse"
    use: "footer (and any static dark accent panel)"
  faq-item:
    element: "native <details>/<summary> accordion"
    surface: "{colors.canvas}, rounded-2xl, 1px {colors.zinc-200} border"
    padding: "p-6 md:p-7"
    affordance: "+ glyph in {colors.emerald-700} rotating 45° on open; border tints emerald-700/30 on hover/open"
  featured-project:
    media: "bg-emerald-50/70 frame, rounded-2xl md:rounded-3xl, object-contain image, h-72 md:h-96"
    grid: "1 → sm:2 → lg:3 cols; bento via per-item spanClass (e.g. lg:col-span-2)"
    cta: "outline Button"
  inline-accent:
    rendering: "<span class='text-emerald-700'>word</span> — color only"
    component: "shared/components/ui/highlight-badge.astro (renders the plain emerald span; name kept for back-compat)"
    scope: "site-wide — home and interior identical"
  navbar-pill:
    backgroundColor: transparent
    scrolledBackground: "rgba(255,255,255,0.7) + backdrop-blur(16px)"
    rounded: "{rounded.full}"
    position: "fixed top-1rem"
  footer:
    backgroundColor: "{colors.zinc-900}"
    textColor: "{colors.zinc-300}"
    rounded: "{rounded.2xl} md:{rounded.3xl}"
    border: "1px solid {colors.zinc-800}"
    decoration: "{component.dot-pattern-dark}"
  text-input:
    backgroundColor: "{colors.zinc-800}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.zinc-700}"
    focus: "2px {colors.emerald-500} ring + border"
    note: "Contact form lives on the /contacto route, not the home page."
  prose-block:
    bodyColor: "#3f3f46"
    bodySize: "18px"
    bodyLineHeight: 1.8
    h2Color: "{colors.brand-ink}"
    blockquoteBorder: "4px solid {colors.emerald-500}"
    linkColor: "{colors.brand-900}"
    imageRadius: "{rounded.xl}"
---

## Overview

Sync Estudio is a Spanish-language software / AI build studio site. The visual system is **paper-white editorial with a single deep emerald brand voltage** (`{colors.brand-700}` — #1c5534, the Tailwind `sync` alias). High-contrast **zinc-900 dark surfaces** (`{colors.zinc-900}` — #18181b) carry accent panels, the dark service card, and the footer — the page reads as alternating light → dark editorial bands, never a single flat canvas.

The home page (`src/pages/index.astro`) is composed of six feature sections in order: **Hero → About → Offerings → Services → Featured → Faq**. Several of these are **full-viewport (`100dvh`) scroll-coupled sections** rather than stacked cards — the page is read as much by scrolling *through* states as by scrolling *past* blocks. This is the defining structural shift of the current design.

Type runs **Manrope** for everything — a single typeface, no serif anywhere. Inline emphasis is a **plain emerald color accent**: one word inside a heading turns `text-emerald-700` while inheriting the heading's weight and size. There is no marker swatch, no italic, no second font. (The old IBM Plex Serif marker has been fully removed — font no longer loaded, no Tailwind family.) `shared/components/ui/highlight-badge.astro` now renders this plain emerald span; home and interior routes are identical.

The shape language is **soft and consistent**: cards/panels are `{rounded.3xl}` (24px) at desktop dropping to `{rounded.2xl}` (16px) at mobile; every interactive button is fully pill-shaped (`{rounded.full}`); form inputs sit at `{rounded.lg}`. No hard corners.

**The decorative signature is now threefold, all motion-led:**

1. **Animated ASCII wave** (`{component.ascii-wave}`) — a `<pre>` overlay filled with a monospace character grid that renders a stacked two-sine wave per animation frame. Carried by the hero (emerald `{colors.wave-emerald}`, low-centered) and the offerings panels (fainter `{colors.wave-emerald-soft}`, edge-aligned). `pointer-events:none`, edge-masked left/right.
2. **Scroll word-fill** (`{component.scroll-word-fill}`) — the About statement is split per word and each word's color is scrubbed from dim (`{colors.fill-dim}`) to ink (`{colors.fill-ink}`) by GSAP ScrollTrigger as the reader scrolls; the word "Sync" fills to emerald (`{colors.fill-accent}`).
3. **Pin-stacked panels** (`{component.offerings-panel}`) — the Offerings section pins each full-viewport panel at the top so the next slides up over it (GSAP `pin`, `pinSpacing:false`).

The earlier **pointer-tracked emerald dot pattern** survives, but only on the **service cards** (`{component.dot-pattern-aura}`, pointer-tracked 320px mask per card) and the **footer** (`{component.dot-pattern-dark}`, static). The hero and about no longer use it.

**Key Characteristics:**
- **Single brand voltage:** `{colors.brand-700}` (#1c5534, Tailwind alias `sync`). Emerald-* utilities carry accents; the literal brand hex appears tokenized in prose link underlines and blockquote borders.
- **Manrope-only, site-wide.** One typeface, no serif. Inline emphasis is a plain `text-emerald-700` color accent, identical on home and interior routes.
- **Full-viewport scroll sections:** hero (white, `min-h-screen`), about (white, `100dvh`), offerings (alternating white/zinc-900 pinned panels, `100dvh` each), then standard-rhythm bands: services, featured, faq.
- **Floating pill navbar** (`{component.navbar-pill}`): fixed `top-1rem`, transparent at the top of the page, flipping to `rgba(255,255,255,0.7)` with 16px backdrop-blur once scrolled.
- **Mixed motion stack:** GSAP + ScrollTrigger for all scroll-coupled effects (about fill, offerings pin, ASCII waves run on rAF), Framer Motion for the services on-scroll card reveal, CSS keyframes for the hero button entry. All scroll/animation deferred via IntersectionObserver + dynamic import, and flattened by the global `prefers-reduced-motion` override (0.01ms).
- **Three service-card themes** (`dark`, `mid`, `light`) keyed off `solutions[].themeKey` in `@features/solutions/data.ts` — the home grid renders the canonical three solutions (diagnostico → dark, desarrollo → mid, educacion → light).
- **Spanish copy, voice "del lado nuestro"** — quiet, accountable, anti-flash. No exclamations, no neon accents, no sales badges.
- **Container model:** a single global `.container` (`width: 95%`, `max-width: 1800px`; mobile padding 20–24px) defined in `global.css`. Sections use `container mx-auto` and then cap their own inner content with `max-w-*` (e.g. `max-w-5xl` hero, `max-w-4xl` about, `max-w-3xl` offerings/services intro, `max-w-7xl` faq).

## Colors

### Brand
- **Brand 700** (`{colors.brand-700}` — #1c5534): The signature emerald, `--color-brand-700` and the Tailwind `sync` alias. Most accent moments use the `emerald-*` scale; the literal hex appears tokenized in prose.
- **Brand 900** (`{colors.brand-900}` — #064e3b): Deep variant — prose link text.
- **Brand Ink** (`{colors.brand-ink}` — #022c22): Near-black emerald — case-study prose headings.

### Emerald Scale (accent & decoration)
- **Emerald 50 / 50-soft** (`{colors.emerald-50}` — #ecfdf5): Featured-project media frame (`bg-emerald-50/70`); light-on-dark text.
- **Emerald 200** (`{colors.emerald-200}` — #a7f3d0): Soft borders/dots on emerald surfaces (e.g. workflow phase-number rings).
- **Emerald 300** (`{colors.emerald-300}` — #6ee7b7): Eyebrow / label text on dark and mid service cards.
- **Emerald 500** (`{colors.emerald-500}` — #10b981): The focus-ring color on every interactive element; prose blockquote border + link underline tint.
- **Emerald 700** (`{colors.emerald-700}` — #047857): The home-page accent-word color (hero "futuro", services "entregamos", featured "destacados"); the FAQ eyebrow; the dot/wave hex base (rgba 4,120,87,X).
- **Emerald 800** (`{colors.emerald-800}` — #065f46): The `mid` service-card background — the strongest emerald surface.
- **Emerald Soft Card** (`{colors.emerald-soft-card}` — #defbed): The `light` service-card background — the only off-scale emerald.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): Default floor. Hero, about, light offerings panels, services/featured/faq sections.
- **Zinc 900** (`{colors.zinc-900}` — #18181b): Dark counter-surface. Dark offerings panel, `dark` service card, footer. Never pure black.
- **Zinc 100** (`{colors.zinc-100}` — #f4f4f5): Ghost-button hover.

### Text
- **Ink / Zinc 800** (#27272a–#18181b): Default headline/body on light surfaces; the About fill target (`{colors.fill-ink}`).
- **Zinc 600** (`{colors.zinc-600}` — #52525b): Supporting body copy.
- **Zinc 500** (`{colors.zinc-500}` — #71717a): Home section lead labels (plain, sentence-case), hero subtitle, muted copy.
- **Zinc 300** (`{colors.zinc-300}` — #d4d4d8): Body on dark surfaces (footer); also the About word-fill *start* color (`{colors.fill-dim}`).

### Decorative
- **Wave Emerald** (`{colors.wave-emerald}` — rgba(4,120,87,0.45)): The hero ASCII wave color.
- **Wave Emerald Soft** (`{colors.wave-emerald-soft}` — rgba(4,120,87,0.28)): The offerings ASCII wave — quieter so it reads as texture.
- **Dot Emerald** (`{colors.dot-emerald}` — rgba(4,120,87,0.35)): Dot fill on the light service card.
- **Dot On Dark** (`{colors.dot-on-dark}` — rgba(255,255,255,0.18)): Dot fill on dark/mid service cards and footer.
- **Fill Dim / Ink / Accent** (#d4d4d8 / #27272a / #047857): The three states of the About scroll word-fill.
- **Inline Accent** (`text-emerald-700` — #047857): The single inline emphasis treatment — a word turns emerald inside an otherwise ink heading. No swatch, no serif.

### Semantic
- No dedicated error / warning / success palette. Forms (interior routes) rely on emerald-500 focus rings and browser-default validation.

## Typography

### Font Families
- **Manrope** (`fontFamily.manrope`): Everything UI/body/display across the whole site. Loaded from Google Fonts at weights 400/500/600/700.
- **No second font.** Manrope is the only family. The previous IBM Plex Serif has been removed from the Google Fonts request and the Tailwind config — there is no serif token to reach for.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.hero-h1}` | 36 → 72px (`text-4xl … lg:text-7xl`) | 700 | Hero h1 ("Construimos el futuro de tu operación.") |
| `{typography.panel-h2}` | 36 → 72px | 600 | Offerings panel titles ("Software a medida", "Agentes de IA", "MVP") |
| `{typography.section-h2}` | 24 → 48px | 600–700 | Services / Featured / Faq section headings |
| `{typography.about-statement}` | 24 → 36px | 400 | The About scroll-fill statement |
| `{typography.card-h3}` | 20 → 24px | 600 | Service-card + featured-project titles |
| `{typography.body-lg}` | 18 → 20px | 400 | Offerings panel body, services card intro |
| `{typography.body-md}` | 16 → 18px | 400 | Hero subtitle, faq answers, supporting copy |
| `{typography.eyebrow-plain}` | 14 → 16px | 400 | Home section lead labels — sentence-case, zinc-500 ("¿Por qué existimos?", "¿Qué podemos construir?") |
| `{typography.eyebrow-tracked}` | 12px | 600 | The FAQ eyebrow ("Preguntas frecuentes", emerald-700) + interior routes — uppercase, 0.2em |
| `{typography.prose-body}` | 18px / lh 1.8 | 400 | Case-study prose (`.case-study-prose`) |
| `{typography.inline-accent}` | inherits | inherits | One word in `text-emerald-700` inside a heading — color only |
| `{typography.ascii-wave}` | 13px mono / 0.4em | 700 | Decorative wave character field (not reading type) |

### Principles
- **Manrope-bold display, no serif anywhere.** Headlines are plain `font-bold tracking-tight` Manrope with a single emerald accent word (`text-emerald-700`). No marker, no italic, no second font.
- **Home leads are sentence-case, not uppercase eyebrows.** The current home sections introduce themselves with a quiet zinc-500 question label (`text-sm md:text-base`). The wide-tracked uppercase eyebrow now appears only on the FAQ section and interior routes.
- **Fluid display via Tailwind responsive steps + `text-balance`**, not raw `clamp()` — headlines step `text-4xl → sm → md → lg:text-7xl` and balance their line breaks.
- **Display weight is 600–700** with `tracking-tight`. Body and labels run at normal tracking.

### Note on Font Substitutes
If Manrope is unavailable, **Inter** transfers most cleanly (matching x-height and stroke modulation). There is no second font to substitute.

## Layout

### Spacing System
- **Base unit:** 4px (Tailwind default).
- **Full-viewport sections:** hero (`min-h-screen`), about (`min-h-[100dvh]`), each offerings panel (`h-[100dvh]`).
- **Standard band rhythm:** featured `py-16 md:py-24` (64 → 96px); services + faq `py-24 md:py-32` (96 → 128px); about's inner padding runs the tallest at `py-28 md:py-40`.
- **Card padding:** service cards `p-8 md:p-10` (32 → 40px); faq items `p-6 md:p-7` (24 → 28px); featured-project media frame `p-4 md:p-6`.
- **Gaps:** services grid `gap-5 md:gap-6`; featured grid `gap-6 md:gap-8`; faq list `gap-3`.

### Grid & Container
- **Global container:** `.container` (in `global.css`) = `width: 95%`, `max-width: 1800px`, centered via `mx-auto`. Mobile (`< 768px`) switches to `width:auto` + `padding-inline: 1.25rem` (1.5rem at sm). This replaces the older "no global max-width" model.
- **Per-section inner caps:** hero `max-w-5xl`, about `max-w-4xl`, offerings/services intro `max-w-3xl`, faq `max-w-7xl`.
- **Services grid:** 1-col mobile → **3-col** at `md` (one card per theme).
- **Featured grid:** 1 → `sm:2` → `lg:3` cols, with bento spans (`lg:col-span-2`) per project.
- **Offerings:** a single column of pinned full-viewport panels; text alternates left / right alignment per panel.

### Whitespace Philosophy
The full-viewport sections trade dense layout for **one idea per screen** — the hero, the about statement, and each offerings panel each own an entire viewport. The animated wave / scroll-fill decoration absorbs the visual "noise" of the otherwise empty space, keeping the large fields from feeling sterile.

## Elevation

The system stays nearly flat.

- **Flat:** Hero, about, offerings panels, services cards, featured, faq, footer. Depth comes from surface-color contrast, the 1px hairline border (`{colors.zinc-200}` light / `{colors.zinc-800}` dark) and the wave/dot decoration — not from shadow.
- **Subtle button shadow:** hero CTAs carry `shadow-sm`; the navbar CTA floats `shadow-sm → shadow-md` on hover.
- **Mobile menu sheet:** soft `0 12px 32px rgba(0,0,0,0.08)` drop shadow.
- **Case-study image shadow:** `0 10px 30px -15px rgba(0,0,0,0.1)` inside `.case-study-prose`.

No progressive multi-tier elevation system.

## Components

### Buttons (`src/shared/components/ui/button.astro`)

A single Astro component, prop `variant?: "default" | "outline" | "ghost" | "small"` plus a `style` passthrough for extra classes and `link` / `blank` for anchor rendering. All pill-shaped, all share the `emerald-500` focus-ring contract.

- **`default`** — Zinc-800 fill, white text, `font-semibold`. The primary CTA ("Solicitar diagnóstico"). Hover zinc-700, active zinc-900.
- **`outline`** — Transparent fill, `currentColor` text, 25%-opacity `currentColor` border. The chameleon variant — adapts to any surface.
- **`small`** — Outline at 12px / `px-3.5 py-1.5`. Dense nav surfaces.
- **`ghost`** — Transparent, gray-700 text, hover paints gray-100 + 1.02× scale. Lightest CTA.

(Note: the primary variant is named `default`, not `primary`.)

### Hero (`hero.astro`)

- **Full-viewport, card-less.** `min-h-screen`, centered column, `max-w-5xl` inner. No border, no dot pattern.
- **`{component.ascii-wave}`** — A `<pre data-hero-wave>` overlay. JS sizes a monospace grid (13px cells) to the card and, per `requestAnimationFrame` (`frame += 0.005`), renders a stacked **two-sine wave** (`ampA·sin(u·freqA + t) + ampB·sin(u·freqB − t·0.7)`) using a `"  ···"` density ramp. Color `{colors.wave-emerald}`, low-centered (`base = rows·0.72`), `pointer-events:none`, left/right edge-masked. Reduced-motion renders one static frame.
- **Accent word** — single word in `text-emerald-700` (e.g. "futuro"). No serif, no swatch.
- **Entry** — the button row animates in via CSS keyframe `hero-actions-in` (0.76s ease-out-soft, 0.35s delay, translateY 24px → 0); flattened by reduced-motion.

### About (`about.astro`)

- **Full-viewport centered statement** (`min-h-[100dvh]`), `max-w-4xl`, no card, no dots.
- **`{component.scroll-word-fill}`** — JS splits the statement into per-word `<span>`s (color inlined to `{colors.fill-dim}`), then GSAP ScrollTrigger scrubs each word to `{colors.fill-ink}` left-to-right (`start: top 85%`, `end: center center`, `scrub: 0.5`, `stagger: 1`) — the copy "comes into focus" as it passes the viewport. The word **"Sync"** fills to `{colors.fill-accent}` (emerald-700) instead of ink.
- **Accessibility:** a `sr-only` copy carries the full sentence; the decorative word spans are `aria-hidden`. Reduced-motion renders words at final ink immediately and skips the GSAP load. The GSAP/ScrollTrigger bundle is dynamically imported only when the section nears the viewport (IntersectionObserver, 300px margin).
- Closes with a founder credit line (zinc-500, name in zinc-700).

### Offerings (`offerings.astro`)

- A stack of **full-viewport (`100dvh`) panels** rendered from a typed `Step[]`, alternating `bg-white` / `bg-zinc-900` surfaces with alternating left/right text alignment (`ml-auto text-right` on the middle dark panel).
- **`{component.offerings-panel}` pinning** — GSAP ScrollTrigger pins each panel at `top top` with `pinSpacing:false` and `anticipatePin:1`, so the next panel scrolls up and covers the pinned one (a layered, stacking reveal). The **last panel is left unpinned** so it scrolls out cleanly into Services. Reduced-motion skips pinning entirely — panels just stack and scroll.
- The light panels carry the **`{component.ascii-wave}`** at the panel's top or bottom edge (`data-pos`), in the fainter `{colors.wave-emerald-soft}` and a gentler amplitude (`frame += 0.004`).
- The final panel carries the primary CTA.

### Services (`services.astro`)

- A `md:grid-cols-3` grid of cards, **data-driven from `@features/solutions/data.ts`** — each solution's `themeKey` selects one of three skins:
  - **`dark`** — `bg-zinc-900 text-zinc-100` (solution `diagnostico`).
  - **`mid`** — `bg-emerald-800 text-emerald-50` (solution `desarrollo`) — strongest emerald surface.
  - **`light`** — `bg-[#defbed] text-zinc-800` (solution `educacion`) — softest.
- All share `rounded-3xl`, `min-h-[22rem] md:min-h-[28rem]`, `p-8 md:p-10`, and a `hover:-translate-y-1` lift.
- **`{component.dot-pattern-aura}`** — each card has a radial dot field (14px, bottom-right) revealed through a **320px radial mask that tracks the pointer** (`--services-mouse-x/y`, rAF-throttled, resting at a per-card default position from `auraPositions`). Dot color is white-18% on dark/mid, emerald-35% on light.
- **Card reveal:** Framer Motion `inView` (amount 0.25), opacity + translateY(24px), 0.55s, 0.09s stagger. Heading/sub/cta fade in via the same `inView` helper.

### Featured (`featured.astro` + `featured-project.astro`)

- Section heading ("Casos de estudio **destacados**", emerald accent word) over a `1 → sm:2 → lg:3` grid; the lead project spans `lg:col-span-2` (bento).
- **`featured-project`** — an `bg-emerald-50/70` media frame (`rounded-2xl md:rounded-3xl`, `object-contain`, `h-72 md:h-96`) above a title/description block and an optional outline `Button`. No hover-transform on the card itself.

### Faq (`faq.astro` + `faq-item.astro`)

- Emits **FAQPage JSON-LD** (`<script type="application/ld+json">`) built from the `faqs` array.
- Uppercase emerald-700 eyebrow ("Preguntas frecuentes") + heading, then a column of accordion items, closing with a "¿Tu duda no está aquí?" outline-CTA row over a `border-t border-zinc-200`.
- **`faq-item`** — a native `<details>/<summary>` accordion. White card, `rounded-2xl`, 1px zinc-200 border; the `+` glyph (emerald-700) rotates 45° on open and the border tints `emerald-700/30` on hover/open. The default `::-webkit-details-marker` is hidden.

### Navbar (`shared/components/layout/navbar.astro`)

- **`navbar-pill`** — fixed `top-1rem` floating pill. Transparent at the top of the page; once scrolled, `rgba(255,255,255,0.7)` + `backdrop-filter: blur(16px)` + 1px white/40 border, shrinking horizontally. 300ms transition. Houses a zinc-800 CTA and (at `< md`) a hamburger that drops a white `rounded-2xl` sheet.

### Footer (`shared/components/layout/footer.astro`)

- **`footer`** — zinc-900 surface, zinc-300 text, `rounded-2xl md:rounded-3xl`, 1px zinc-800 border. Carries the static **`{component.dot-pattern-dark}`** (white dots, corner-masked). Social links are `w-9 h-9` pill buttons (`border-white/15 bg-white/5`).

### Interior routes (not on home)

- **Solutions** (`pages/soluciones/[slug].astro`, data in `@features/solutions/data.ts`), **Contact** (`@features/contact` — the zinc-900 form card + `text-input`), and **Workflow** (`workflow.astro`) all run on the same Manrope + emerald-accent system as the home page. Inline emphasis is `text-emerald-700` (via `highlight-badge.astro`); phase-number badges are plain Manrope semibold emerald, not serif.

### Prose Block (`.case-study-prose`, in `global.css`)

Long-form editorial styling for case-study pages — unchanged: body `#3f3f46` 18px/1.8, headings `{colors.brand-ink}` weight 700, blockquote 4px `{colors.emerald-500}` border, links `{colors.brand-900}` with emerald underline, images `rounded-xl` + soft shadow, zebra-striped tables collapsing to horizontal scroll on mobile.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Container `padding-inline: 1.25rem`, `width:auto`. Hero h1 at `text-4xl`. Offerings panels stay full-viewport, text centered. Services 1-col. Featured 1-col. Faq full-width. |
| Small | 640–767px | Container padding 1.5rem. Hero `text-5xl`. Featured → 2-col. |
| Medium | 768–1023px | Container flips to `95% / max-1800px`. Hero `text-6xl`. Services → 3-col. Offerings text alignment (left/right) takes effect. |
| Large | ≥ 1024px | Hero `text-7xl`. Featured → 3-col with bento spans. Full pin/scroll-fill behavior. |
| XL | ≥ 1280px | Inner widths bounded by per-section `max-w-*`; container caps at 1800px. |

### Touch Targets
- Buttons `px-5 py-2.5` (~44px) — at WCAG AA. Small variant `px-3.5 py-1.5` (~28px) — nav-only, below AA.
- Faq `<summary>` rows are full-width tappable.

### Collapsing Strategy
- Navbar links collapse into the hamburger sheet at `< md`.
- Services grid 3-col → 1-col below `md`.
- Featured 3 → 2 → 1 col.
- **Reduced motion disables the scroll machinery, not just transitions:** offerings pinning is skipped (panels stack normally) and the about word-fill renders at final color with no GSAP — the page degrades to a plain stacked document.

## Do's and Don'ts

**Do:**
- Use the `<Button>` component for every CTA — its four variants cover all surfaces. The primary is `variant="default"`.
- Make inline emphasis a plain `text-emerald-700` color accent on a single word — identical on home and interior. Use `highlight-badge.astro` if you want a named component.
- Use the ASCII wave sparingly: at most one per page, behind the hero. Never stack it on mid-page cards or content blocks.
- Apply wave / dot decoration as a `pointer-events-none` overlay layer, never on the surface itself.
- Gate every scroll/animation behind IntersectionObserver + dynamic import (as hero/about/offerings/services do) so GSAP/Framer stay out of the initial load.
- Honor `prefers-reduced-motion`: scroll-coupled effects must have a static fallback (the about/offerings scripts already early-return), and the global media query flattens transitions to 0.01ms.

**Don't:**
- Don't reintroduce a second font or a marker swatch — emphasis is color only (`text-emerald-700`), one word at a time.
- Don't abuse the ASCII wave — one per page behind the hero, never on every section.
- Don't add hard corners (`rounded-none`) on UI — every element is rounded (`2xl/3xl` panels, `full` buttons, `lg` inputs).
- Don't add tinted shadows on light surfaces; contrast + hairline + decoration carry the depth.
- Don't use pure black (`#000`); zinc-900 / zinc-200 are the bounds.
- Don't introduce a new accent color — the brand voltage is emerald, full stop.
- Don't ship a scroll-coupled effect without a reduced-motion path — these now drive whole sections, so a missing fallback breaks the page, not just a flourish.

## Agent Prompt Guide

### Quick Color Reference
- Page canvas: `bg-white` · Dark surface: `bg-zinc-900`
- Default text: `text-zinc-800` light / `text-zinc-100` dark
- Muted text: `text-zinc-600` light / `text-zinc-300` dark
- Home lead label: `text-sm md:text-base text-zinc-500` (sentence-case, no uppercase)
- FAQ / interior eyebrow: `text-xs tracking-[0.2em] uppercase font-semibold text-emerald-700`
- Accent word (home): `text-emerald-700`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`
- Brand emerald: `#1c5534` (Tailwind alias `sync` / `text-emerald-700/800`)
- Hero wave color: `rgba(4,120,87,0.45)` · Offerings wave: `rgba(4,120,87,0.28)`
- Service dot on light: `rgba(4,120,87,0.35)` · on dark/mid: `rgba(255,255,255,0.18)`
- Inline emphasis: `text-emerald-700` on one word (color only — no swatch, no serif)

### Ready-to-Use Prompts
- **"New primary CTA"** → `<Button link="/contacto">Solicitar diagnóstico</Button>` (zinc-800 pill, white text)
- **"New outline CTA on any surface"** → `<Button variant="outline" link="/...">Ver detalle</Button>` (inherits surface color)
- **"New home section lead label"** → `<span class="text-sm md:text-base text-zinc-500">¿Por qué existimos?</span>`
- **"Home headline with accent word"** → `<h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-800 text-balance">Diagnosticamos, construimos y <span class="text-emerald-700">entregamos</span>.</h2>`
- **"New service-style card (light theme)"** → `<article class="relative isolate overflow-hidden rounded-3xl bg-[#defbed] text-zinc-800 p-8 md:p-10 min-h-[22rem] md:min-h-[28rem]">…</article>`
- **"New faq item"** → wrap content in `<FaqItem question="…">…</FaqItem>` (`shared/components/ui/faq-item.astro`)
- **"New dark accent panel with static dots"** → `<div class="relative overflow-hidden rounded-3xl bg-zinc-900 p-8 md:p-10"><div class="absolute inset-0 pointer-events-none" style="background-image:radial-gradient(circle,rgba(255,255,255,0.18) 1.2px,transparent 1.6px);background-size:14px 14px;mask-image:radial-gradient(ellipse at bottom right,black,transparent 70%)"></div>…</div>`
- **"Inline emphasis word"** → `<span class="text-emerald-700">verdad</span>` (or `<HighlightBadge>verdad</HighlightBadge>`) — color accent only, inherits heading weight.

## Known Gaps

- **Form error / validation states** are unstyled (contact form is on the interior `/contacto` route; relies on browser-default validation).
- **Loading / skeleton states** are undefined.
- **No site-wide light/dark toggle** — dark surfaces are used compositionally (offerings, dark service card, footer); the page is single-mode.
- **Small-button focus target** (~28px) drops below WCAG AA — nav-only.
- **Disabled button styling** is implicit (browser opacity) — no explicit token.
- **Scroll-coupled effects depend on JS** (GSAP). Reduced-motion and IntersectionObserver fallbacks exist, but with JS disabled the offerings panels simply stack and the about copy renders dim-but-readable (sr-only sentence still present).
- **The ASCII wave and pointer-aura are pointer/JS-driven per surface** — there is no shared controller; each section initializes its own. Applying either to a new surface means porting its script.
