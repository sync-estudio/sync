---
version: alpha
name: Sync-Estudio-design-analysis
description: A calm, editorial maintenance-studio site anchored on a paper-white canvas with deep emerald accents (`{colors.brand-700}` — #1c5534) and a single high-contrast zinc-900 dark surface used for services, contact form, and footer. Type pairs Manrope (UI/body/display) with IBM Plex Serif italic used exclusively as inline highlight spans on signature words ("IA", brand emphasis) — wrapped in a hand-skewed (-1°) emerald-200/60 marker swatch. Geometry stays soft: cards and panels are `rounded-2xl md:rounded-3xl`, every button is `rounded-full`. The decorative signature is a pointer-aware emerald dot pattern — radial dots at 18px spacing whose visibility is unmasked by a 260px radial gradient that follows the cursor, used on hero/about/services/contact/footer with per-surface dot colors. Motion is restrained and stagger-led (Framer Motion, 0.55–0.76s ease-out-soft, prefers-reduced-motion respected). Spanish-language site; voice is "mantenimiento del lado nuestro" — quiet, hand-crafted, anti-SaaS-flash.

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
  dot-emerald: "rgba(4, 120, 87, 0.7)"
  dot-on-dark: "rgba(255, 255, 255, 0.18)"
  dot-on-dark-soft: "rgba(255, 255, 255, 0.08)"
  marker-highlight: "rgba(167, 243, 208, 0.6)"
  scrim-card: "rgba(0, 0, 0, 0.08)"

typography:
  display-xl:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(30px, 6vw, 60px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(24px, 5vw, 48px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  display-highlight:
    fontFamily: "'IBM Plex Serif', serif"
    fontStyle: italic
    fontWeight: 500
    lineHeight: 1.05
  section-h2:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(24px, 4.5vw, 48px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  phase-h3:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px → 20px"
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  body-md:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px → 18px"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.2em"
    textTransform: uppercase
  button-md:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
  button-sm:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
  prose-h2:
    fontFamily: "Manrope, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  prose-h3:
    fontFamily: "Manrope, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.3
  prose-quote:
    fontFamily: "Manrope, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  "2xl": 16px
  "3xl": 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  "2xl": 40px
  "3xl": 48px
  section-y: "64px → 96px"
  section-y-lg: "80px → 128px"
  card-pad: "32px → 40px"
  card-pad-lg: "px 24–80px / py 80–112px"
  container-x: "20px → 96px"

motion:
  duration-fast: 150ms
  duration-normal: 300ms
  duration-slow: 600ms
  ease-out-soft: "cubic-bezier(0.22, 1, 0.36, 1)"
  hero-stagger: 0.08s
  hero-duration: 0.76s
  hero-translate-x: 44px
  card-reveal-duration: 0.55s
  card-reveal-stagger: 0.09s
  card-reveal-translate-y: 24px
  navbar-collapse: 280ms

components:
  button-primary:
    backgroundColor: "{colors.zinc-800}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    border: "1px solid transparent"
    hoverBackground: "{colors.zinc-700}"
    focusRing: "2px {colors.emerald-500} + 2px {colors.canvas} offset"
    transition: "colors 200ms ease-in-out"
  button-outline:
    backgroundColor: transparent
    textColor: currentColor
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    border: "1px solid currentColor / 25% opacity"
    hoverBackground: "currentColor / 10% opacity"
  button-small:
    backgroundColor: transparent
    textColor: currentColor
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    border: "1px solid currentColor / 25% opacity"
    gap: 6px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.zinc-700}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 12px"
    border: "1px solid currentColor / 25% opacity"
    hoverBackground: "{colors.zinc-100}"
    hoverTransform: "scale(1.02)"
  navbar-pill:
    backgroundColor: transparent
    scrolledBackground: "rgba(255,255,255,0.7)"
    scrolledBorder: "1px solid rgba(255,255,255,0.4)"
    backdropFilter: "blur(16px)"
    rounded: "{rounded.full}"
    padding: "8px"
    position: "fixed top: 1rem"
    zIndex: 50
    transition: "all 300ms"
  navbar-cta:
    backgroundColor: "{colors.zinc-800}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    shadow: "shadow-sm"
    hoverShadow: "shadow-md"
  mobile-menu-sheet:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.2xl}"
    shadow: "0 12px 32px rgba(0,0,0,0.08)"
    openDuration: "280ms ease-out-soft"
    closeDuration: "220ms ease-out-soft"
  hero-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.3xl}"
    border: "1px solid {colors.zinc-200}"
    minHeight: "80vh"
    padding: "{spacing.card-pad-lg}"
    maxInnerWidth: "max-w-8xl"
    decoration: "{component.dot-pattern-pointer}"
  dot-pattern-pointer:
    baseLayer: "radial-gradient(circle, {colors.dot-emerald} 1.2px, transparent 1.6px) 18px 18px"
    baseOpacity: 0.4
    activeLayer: "same dots at full opacity, masked by radial-gradient(circle 260px at var(--hero-mouse-x) var(--hero-mouse-y), black, transparent)"
    pointerEvents: none
  dot-pattern-static:
    fill: "radial-gradient(circle, {colors.dot-emerald} 1.2px, transparent 1.6px) 18px 18px"
    opacity: 0.4
  dot-pattern-dark:
    fill: "radial-gradient(circle, {colors.dot-on-dark} 1.2px, transparent 1.6px) 14px 14px"
    mask: "radial-gradient(ellipse at bottom right, black, transparent 70%)"
  highlight-marker:
    fontFamily: "'IBM Plex Serif', serif"
    fontStyle: italic
    backgroundColor: "{colors.marker-highlight}"
    transform: "rotate(-1deg)"
    padding: "0 6px"
    inlineDisplay: "inline-block"
  about-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.3xl}"
    border: "1px solid {colors.zinc-200}"
    padding: "px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28"
    maxInnerWidth: "max-w-4xl"
    decoration: "{component.dot-pattern-static}"
  service-card-light:
    backgroundColor: "{colors.emerald-soft-card}"
    textColor: "{colors.emerald-950}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card-pad}"
    minHeight: "22rem → 28rem"
    dotColor: "rgba(4, 120, 87, 0.55)"
  service-card-mid:
    backgroundColor: "{colors.emerald-800}"
    textColor: "{colors.emerald-50}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card-pad}"
    minHeight: "22rem → 28rem"
    dotColor: "rgba(255,255,255,0.18)"
  service-card-dark:
    backgroundColor: "{colors.zinc-900}"
    textColor: "{colors.zinc-100}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card-pad}"
    minHeight: "22rem → 28rem"
    dotColor: "rgba(255,255,255,0.12)"
  project-card:
    backgroundColor: "{colors.emerald-50}"
    rounded: "{rounded.2xl}"
    height: "16rem → 22.5rem"
    hoverTransform: "scale(1.03) translateY(-0.5rem)"
    transition: "transform 220ms ease-out-soft"
  contact-form-card:
    backgroundColor: "{colors.zinc-900}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.3xl}"
    border: "1px solid {colors.zinc-800}"
    padding: "24px → 28px"
    decoration: "{component.dot-pattern-dark}"
  text-input:
    backgroundColor: "{colors.zinc-800}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "12px 14px"
    border: "1px solid {colors.zinc-700}"
    focusRing: "2px {colors.emerald-500}"
    focusBorder: "{colors.emerald-500}"
  eyebrow-label:
    typography: "{typography.eyebrow}"
    textColor: "{colors.zinc-500} or {colors.emerald-300} on dark"
  footer:
    backgroundColor: "{colors.zinc-900}"
    textColor: "{colors.zinc-300}"
    rounded: "{rounded.3xl}"
    border: "1px solid {colors.zinc-800}"
    decoration: "{component.dot-pattern-dark}"
  prose-block:
    bodyColor: "#3f3f46"
    bodySize: "18px"
    bodyLineHeight: 1.8
    h2Color: "{colors.brand-ink}"
    blockquoteBorder: "4px solid {colors.emerald-500}"
    blockquoteSize: "20px"
    linkColor: "{colors.brand-900}"
    linkUnderline: "rgba(16,185,129,0.45) underline at 4px offset"
    imageRadius: "{rounded.xl}"
    imageShadow: "0 10px 30px -15px rgba(0,0,0,0.1)"
---

## Overview

Sync Estudio is a Spanish-language maintenance / build studio site. The visual system is **paper-white editorial with a single deep emerald brand voltage** (`{colors.brand-700}` — #1c5534, with `{colors.brand-900}` — #064e3b as the darker variant). A high-contrast **zinc-900 dark surface** (`{colors.zinc-900}` — #18181b) carries the services, contact form, and footer — the page reads as alternating light → dark editorial bands rather than a single canvas.

Type runs **Manrope** for everything UI/body/display, paired with **IBM Plex Serif italic** used only as an inline highlight span on emphasized words (the canonical example is the word "IA" wrapped in a `{component.highlight-marker}` — italic serif, emerald-200/60 background swatch, skewed -1°, like a hand-pulled marker). There is no serif body or serif headings — the serif is a deliberate punctuation device.

The shape language is **soft and consistent**: containers / cards / panels are `{rounded.3xl}` (24px) at desktop, dropping to `{rounded.2xl}` (16px) at mobile; every interactive button is fully pill-shaped (`{rounded.full}`); form inputs sit at `{rounded.lg}` (12px). There are no hard corners.

The decorative signature is the **pointer-aware emerald dot pattern** (`{component.dot-pattern-pointer}`): a static base layer of emerald dots at 18px spacing, sitting at 40% opacity, with a second identical layer at full opacity masked by a 260px radial gradient that tracks the cursor (`--hero-mouse-x` / `--hero-mouse-y` CSS variables driven by JS). The hero, about, services, contact form, and footer each carry a version of this dot system tuned to their surface color (emerald dots on white; white dots on zinc-900).

**Key Characteristics:**
- **Single brand voltage:** `{colors.brand-700}` (#1c5534, custom Tailwind alias `sync`). Used sparingly — emerald-* utilities carry most accent moments; the literal brand hex appears only in tokenized form for prose link underlines and blockquote borders.
- **Manrope-only UI** with **IBM Plex Serif italic** as a punctuation highlight. The serif never carries a full headline — only single inline words inside a `{colors.marker-highlight}` (emerald-200/60) marker pill, skewed `-1deg`.
- **Alternating light/dark bands**: hero (white) → about (white) → services (mix of `{component.service-card-light}` + `{component.service-card-mid}` emerald-800) → workflow (light, sticky-scroll) → contact (form on zinc-900) → footer (zinc-900). The dark surfaces are mid-page, not framing — a deliberate editorial rhythm.
- **Floating pill navbar** (`{component.navbar-pill}`): fixed top-1rem, transparent at top of page, transitions to `rgba(255,255,255,0.7)` with 16px backdrop-blur and a 1px white/40 border once scrolled. Pill-shaped throughout.
- **Soft motion palette**: standard easing is `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out-soft`), duration tokens at 150/300/600ms. Framer Motion drives staggered hero entry (lines fade + 44px slide, 0.08s stagger, 0.76s total) and on-scroll card reveals (24px translateY, 0.55s, 0.09s stagger). All animation honored by a `prefers-reduced-motion` override that flattens to 0.01ms.
- **Three service-card themes** (`light`, `mid`, `dark`): same shape and padding, three swappable color skins keyed off a theme prop. Each carries its own dot color for the masked decorative layer.
- **Sticky scrollable workflow** (`workflow.astro`) with a progressive line-fill driven by scroll position — phases activate and color-transition over 400ms as the marker line crosses them. This is the project's only non-static, scroll-coupled UI element.
- **Spanish copy, voice "del lado nuestro"** — quiet, accountable, anti-flash. The design supports it: no exclamations, no neon accents, no sales-y badges. The single emphatic moment is the italic serif highlight.
- **Container model**: there is no fixed max-width container — each section sets its own (`max-w-8xl` hero, `max-w-4xl` about, `max-w-3xl` services intro). Horizontal padding is responsive (`{spacing.container-x}` — 20px mobile → 96px wide desktop) defined in the `.container` component class.

## Colors

### Brand
- **Brand 700** (`{colors.brand-700}` — #1c5534): The signature emerald, defined as both `--color-brand-700` and the Tailwind `sync` alias. The truest "brand color" of the studio, though sparingly used in literal form — most surfaces lean on Tailwind's `emerald-*` scale.
- **Brand 900** (`{colors.brand-900}` — #064e3b): The deep variant. Used on prose link text and as a darker companion to brand-700 inside long-form case-study copy.
- **Brand Ink** (`{colors.brand-ink}` — #022c22): Near-black emerald. Used on case-study prose headings (`{component.prose-block}` h2 color).

### Emerald Scale (decorative & accent)
- **Emerald 50** (`{colors.emerald-50}` — #ecfdf5): `{component.project-card}` base fill, dark-surface text color.
- **Emerald 200** (`{colors.emerald-200}` — #a7f3d0): The marker highlight swatch (at 60% opacity → `{colors.marker-highlight}`).
- **Emerald 300** (`{colors.emerald-300}` — #6ee7b7): Eyebrow text color on dark surfaces (footer, contact form labels).
- **Emerald 500** (`{colors.emerald-500}` — #10b981): The focus ring color. Every interactive element's `focus-visible:ring` resolves to emerald-500. Also the prose blockquote left border and the prose link underline tint.
- **Emerald 700** (`{colors.emerald-700}` — #047857): The dot-pattern hex (rgba 4,120,87,X). All emerald dots on light surfaces are this hue at variable opacity.
- **Emerald 800** (`{colors.emerald-800}` — #065f46): `{component.service-card-mid}` background — the strongest emerald surface in the system.
- **Emerald Soft Card** (`{colors.emerald-soft-card}` — #defbed): A custom lightened emerald, used as the `{component.service-card-light}` background. Sits one step lighter than `emerald-100` and is the only off-scale emerald in the system.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor. Hero, about, workflow, and case-study pages all sit on white.
- **Zinc 900** (`{colors.zinc-900}` — #18181b): The dark counter-surface. Services dark cards, contact form, footer. Never pure black.
- **Zinc 100** (`{colors.zinc-100}` — #f4f4f5): Ghost-button hover background.

### Text
- **Ink** (`{colors.ink}` — #18181b): Default body and headline text on light surfaces. Same hex as zinc-900 — the system treats them interchangeably.
- **Zinc 600** (`{colors.zinc-600}` — #52525b): Default subtitle / supporting-body color (hero subtitle, services body copy).
- **Zinc 500** (`{colors.zinc-500}` — #71717a): Eyebrow labels on light surfaces, footer secondary copy.
- **Zinc 400** (`{colors.zinc-400}` — #a1a1aa): Disabled / tertiary text on dark surfaces.
- **Zinc 300** (`{colors.zinc-300}` — #d4d4d8): Default body color on dark surfaces (footer paragraph copy).
- **Emerald 50** on dark: Headline color inside `{component.service-card-mid}` and `{component.service-card-dark}`.
- **Emerald 300** on dark: Eyebrow color on dark surfaces.

### Borders & Hairlines
- **Zinc 200** (`{colors.zinc-200}` — #e4e4e7): The single light-surface border tone. Hero card, about card, project cards.
- **Zinc 700/800**: Borders on dark surfaces (contact form border, footer top border).
- **Border / Currentcolor at 25% opacity**: All outline / small / ghost buttons use `border-current/25` — the border inherits the parent text color at 25% opacity, allowing the same button component to render correctly on both light and dark surfaces without theming overhead.

### Decorative
- **Dot Emerald** (`{colors.dot-emerald}` — rgba(4,120,87,0.7)): The dot-pattern fill on light surfaces. Always paired with a 40%-opacity outer layer and a pointer-tracked active layer at full opacity.
- **Dot On Dark** (`{colors.dot-on-dark}` — rgba(255,255,255,0.18)): Dot fill on zinc-900 surfaces (footer base layer).
- **Dot On Dark Soft** (`{colors.dot-on-dark-soft}` — rgba(255,255,255,0.08)): The contact form's softer dot tone.
- **Marker Highlight** (`{colors.marker-highlight}` — rgba(167,243,208,0.6)): The emerald-200 swatch behind every IBM Plex Serif italic highlight word. The single most signature visual moment in the system.

### Semantic
- No dedicated error / warning / success palette is defined. Forms rely on emerald-500 focus rings to signal interaction; validation copy uses default text colors.

## Typography

### Font Families
- **Manrope** (`fontFamily.manrope`): Used for absolutely everything except inline highlight words. Display weights 600, body 400, eyebrow 500, button 500. Hosted as a Google web font; full weight range (200–800) imported.
- **IBM Plex Serif** (`fontFamily.ibm-plex-serif`): Used only in italic, only as inline `<span>` highlights inside an `{component.highlight-marker}` wrapper. The serif never carries a full headline or paragraph — it is a single-word punctuation device. Weights imported 100–700, but only the italic-500 is used in practice.

There is no system fallback configuration beyond Tailwind defaults (`sans-serif`, `serif`).

### Hierarchy

| Token | Size | Weight | Line Height | Tracking | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | clamp(30, 6vw, 60)px | 600 | 1.05 | -0.02em | Hero h1 ("Mantenimiento … impulsado por IA") |
| `{typography.display-lg}` | clamp(24, 5vw, 48)px | 600 | 1.1 | -0.015em | About card display lines |
| `{typography.section-h2}` | clamp(24, 4.5vw, 48)px | 600 | 1.15 | -0.015em | Services intro, contact intro, workflow intro |
| `{typography.phase-h3}` | 18 → 20px | 600 | 1.3 | 0 | Workflow phase headers, service card titles |
| `{typography.body-lg}` | 18px | 400 | 1.8 | 0 | Case-study prose body (`.case-study-prose`) |
| `{typography.body-md}` | 16 → 18px | 400 | 1.55 | 0 | Hero subtitle, services body, about supporting copy |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Card meta, form helper text |
| `{typography.eyebrow}` | 12px | 500 | 1.2 | 0.2em | Section eyebrow labels — uppercase, wide-tracked ("PROYECTO", "SERVICIOS") |
| `{typography.button-md}` | 14px | 500 | 1 | 0 | Default + outline + ghost button labels |
| `{typography.button-sm}` | 12px | 500 | 1 | 0 | Small button variant (nav inline links) |
| `{typography.prose-h2}` | 30px | 700 | 1.3 | -0.01em | Case-study page h2 (`.case-study-prose h2`) |
| `{typography.prose-h3}` | 24px | 700 | 1.3 | 0 | Case-study page h3 |
| `{typography.prose-quote}` | 20px | 400 | 1.6 | 0 | Case-study blockquotes |
| `{typography.display-highlight}` | inherits parent | italic 500 | parent | 0 | IBM Plex Serif italic inside `{component.highlight-marker}` |

### Principles
- **Display sizes use `clamp()`** for fluid scaling between mobile and desktop rather than hard Tailwind breakpoints. The hero h1's `clamp(30px, 6vw, 60px)` produces a perfectly proportional headline at every viewport.
- **Display weight is 600, not 700+**. The system trusts whitespace and the dot decoration to carry visual weight rather than typographic muscle.
- **Negative letter-spacing on display only** (`-0.015em` to `-0.02em`). Body, eyebrow, button copy all run at 0 tracking — only eyebrows carry the deliberate `+0.2em` wide-tracking treatment.
- **Eyebrow is uppercase**, 12px, weight 500, 0.2em letter-spacing. The wide tracking + uppercase combination is the only "loud" typographic treatment used in normal flow.
- **Inline highlights only**: the IBM Plex Serif italic moment is reserved for one word — usually "IA" or another distinguishing noun — wrapped in `<span class="…italic bg-emerald-200/60 -rotate-1 px-1.5">`. The skew makes it read as a marker swipe rather than as italic emphasis.

### Note on Font Substitutes
If Manrope is unavailable, **Inter** transfers most cleanly (matching x-height and stroke modulation). For IBM Plex Serif, the closest open substitute is **Source Serif 4 Italic** — adjust the marker padding down by ~2px to compensate for its slightly wider italic cap.

## Layout

### Spacing System
- **Base unit:** 4px (Tailwind default).
- **Tokens in use:** `{spacing.xs}` 4 · `{spacing.sm}` 8 · `{spacing.md}` 12 · `{spacing.base}` 16 · `{spacing.lg}` 24 · `{spacing.xl}` 32 · `{spacing.2xl}` 40 · `{spacing.3xl}` 48.
- **Vertical section rhythm:** `py-16 md:py-24` (64 → 96px) is the standard band height; the longer about/contact bands use `py-20 md:py-32` (80 → 128px).
- **Card padding (standard):** `p-8 md:p-10` (32 → 40px) for service cards.
- **Card padding (editorial):** `px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28` for the about card — the asymmetric horizontal scale matches the editorial-magazine feel.
- **Form / contact card padding:** `p-6 md:p-7` (24 → 28px) — tighter than service cards because dark surfaces feel heavier.
- **Gaps:** `gap-3` (12px) between header inline buttons, `gap-5 md:gap-6` between header items, `gap-10 md:gap-16` between grid section columns, `gap-7 md:gap-8` inside list sections.

### Grid & Container
- **Container padding (responsive):** 20px (mobile) → 24px (sm) → 32px (md) → 64px (lg) → 96px (xl). Defined in `global.css` `.container` component, not via Tailwind container plugin.
- **No global max-width.** Each section caps its own inner width:
  - Hero inner: `max-w-8xl` (88rem / 1408px)
  - About inner: `max-w-4xl` (56rem / 896px)
  - Services intro / workflow intro: `max-w-3xl` (48rem / 768px)
- **Services grid:** 1-col mobile → 2-col desktop, large enough to allow each card to breathe at min-h 22→28rem.
- **Workflow:** sticky-positioned single column with a vertical phase line on the left.

### Whitespace Philosophy
The system runs generous editorial whitespace at section boundaries (64–128px vertical) but compresses within cards — service cards and form fields sit close to their content edges (32–40px). The dot-pattern decoration absorbs visual "noise" inside the otherwise large empty areas, preventing the page from feeling sterile.

## Elevation

The system runs **two shadow tiers** plus the flat baseline.

- **Flat:** Hero, about, services cards, workflow, contact, footer — every long-form surface. Depth comes from the 1px hairline border (`{colors.zinc-200}` on light, `{colors.zinc-800}` on dark) + the dot decoration, not from shadow.
- **Navbar CTA float:** `shadow-sm` resting, `shadow-md` on hover. The single button shadow in the system.
- **Mobile menu sheet:** `box-shadow: 0 12px 32px rgba(0,0,0,0.08)` — the soft-spread shadow used when the mobile hamburger sheet drops down from the pill navbar. This is the heaviest shadow defined.
- **Case-study image shadow:** `box-shadow: 0 10px 30px -15px rgba(0,0,0,0.1)` — applied to images inside `.case-study-prose`. Combined with `border-radius: 1rem` it produces a soft-floating photo look on long-form pages.

There are no progressive 6-tier elevation systems. Either flat, or one of three specific moments.

## Components

### Buttons (`/Users/yamilyscapa/code/sync/own/web/src/shared/components/ui/button.astro`)

A single Astro component switches between four variants via a prop. All are pill-shaped (`{rounded.full}`), all carry the same focus-ring contract (`emerald-500` ring + `canvas` offset).

- **`button-primary`** — Zinc-800 fill, white text, transparent border. The most common solid CTA: "Hablemos", "Ver proyectos". Hover flattens to zinc-700.
- **`button-outline`** — Transparent fill, `currentColor` text and 25%-opacity border. The chameleon variant — works on both light and dark surfaces because it inherits parent color.
- **`button-small`** — Same as outline but at 12px / px-3.5 py-1.5 / 6px gap. Used on dense nav surfaces.
- **`button-ghost`** — Transparent fill, zinc-700 text, 25%-opacity border. Hover paints zinc-100 background + 1.02x scale. The lightest-weight CTA in the system.

### Navbar (`navbar.astro`)

- **`navbar-pill`** — Fixed-position floating pill. At top-of-page: fully transparent, blends into hero. Once `scrollY > 16px`: surface flips to `rgba(255,255,255,0.7)` with `backdrop-filter: blur(16px)` and a 1px `rgba(255,255,255,0.4)` border, shrinking horizontally with `padding: 0.5rem`. The transition takes 300ms.
- **`navbar-cta`** — Zinc-800 pill CTA inside the navbar, `shadow-sm → shadow-md` on hover. The page's primary conversion target.
- **`mobile-menu-sheet`** — Drops below the navbar at < md breakpoint. White card, `{rounded.2xl}`, 12px-32px soft shadow. Open 280ms / close 220ms with `ease-out-soft`.

### Hero (`hero.astro`)

- **`hero-card`** — `min-h-[80vh]` white card, `rounded-3xl`, 1px zinc-200 border, `max-w-8xl` inner. The single largest surface on the page.
- **`dot-pattern-pointer`** — Two overlaid `background-image: radial-gradient(circle, rgba(4,120,87,0.7) 1.2px, transparent 1.6px) 18px 18px`. Base layer at 0.4 opacity; active layer at 1.0 opacity, masked by `radial-gradient(circle 260px at var(--hero-mouse-x) var(--hero-mouse-y), black, transparent)`. JS updates the two custom properties on `pointermove`, producing a soft "spotlight" that brightens the dots under the cursor. `pointer-events: none` keeps it from blocking the underlying text.
- **`highlight-marker`** — Inline span on the word "IA" (and similar emphatic words). IBM Plex Serif italic, weight 500, emerald-200/60 background, `transform: rotate(-1deg)`, `padding: 0 6px`. The text inside skews back to upright because the span is inline-block.
- **Hero entry animation** — Framer Motion: each headline line fades from opacity 0 + translateX(-44px) → opacity 1 + translateX(0), staggered 0.08s, 0.76s total per line. Action buttons follow 0.35s later with translateY(24px). All overridden flat by `prefers-reduced-motion`.

### About (`about.astro`)

- **`about-card`** — White card, `{rounded.3xl}`, 1px zinc-200 border, max-w-4xl inner. Padding scales `px-6 → px-20`, `py-20 → py-28` — the asymmetric horizontal scaling is the editorial-magazine signature.
- Carries `{component.dot-pattern-static}` at 0.4 opacity — same dots as hero but without the pointer mask.

### Services (`services.astro`)

A grid of cards sharing identical geometry but rendering one of three color themes:

- **`service-card-light`** — `#defbed` background, emerald-950 text, dot color `rgba(4,120,87,0.55)`. The "softest" card.
- **`service-card-mid`** — Emerald-800 background, emerald-50 text, white-18% dots. The "strongest" emerald surface.
- **`service-card-dark`** — Zinc-900 background, zinc-100 text, white-12% dots. The "quietest" dark card.

All share: `rounded-3xl`, `min-h-[22rem] md:min-h-[28rem]`, `p-8 md:p-10`. Each card's dot pattern is masked by a 320px radial gradient — similar to the hero but without pointer tracking.

Card reveal: `inView`-triggered Framer Motion, 0.55s duration, 0.09s stagger, translateY(24px).

### Workflow (`workflow.astro`)

- A sticky-positioned vertical timeline with a phase line on the left and content blocks on the right.
- Scroll-coupled JS calculates each phase's `progress` based on viewport intersection; the line fills downward as phases activate.
- Active phase color transitions over 400ms — color shift is the only visual confirmation of step completion.
- Phase title typography is `{typography.phase-h3}` (18 → 20px, weight 600).

### Project Cards (`projects/components/project-card.astro`)

- **`project-card`** — `bg-emerald-50` fill, `{rounded.2xl}`, height `h-64 sm:h-80 md:h-90`.
- Hover: `scale(1.03) translateY(-0.5rem)`, transition 220ms `ease-out-soft`.
- The only card in the system that uses a hover-transform (not just a color change).

### Contact (`contact/components/contact.astro`)

- **`contact-form-card`** — Zinc-900 card, `{rounded.3xl}`, 1px zinc-800 border, padding 24-28px. Carries `{component.dot-pattern-dark}` masked to bottom-right.
- **`text-input`** — Zinc-800 fill, white text, `{rounded.lg}` 12px radius, 1px zinc-700 border. On focus: 2px emerald-500 ring + emerald-500 border swap. No glow, no shadow.
- Eyebrow labels on the dark form surface render in `{colors.emerald-300}` at `{typography.eyebrow}` spec.

### Footer (`shared/components/layout/footer.astro`)

- **`footer`** — Zinc-900 surface, zinc-300 default text, `{rounded.3xl}` top corners, 1px zinc-800 border.
- Carries `{component.dot-pattern-dark}` — white dots at rgba(255,255,255,0.18) on 14px spacing, masked by a bottom-right ellipse gradient. Tighter spacing than the hero's 18px because the footer is a smaller surface and benefits from the denser texture.

### Prose Block (`.case-study-prose`, defined in `global.css`)

Long-form editorial styling for case-study pages.

- Body: `#3f3f46` (zinc-700), 18px, line-height 1.8.
- Headings: `{colors.brand-ink}` (#022c22), weight 700, `-0.01em` tracking.
- Blockquote: 4px solid `{colors.emerald-500}` left border, 20px text, zinc-800.
- Inline links: `{colors.brand-900}` text with `rgba(16,185,129,0.45)` underline at 4px offset; underline tightens to full opacity on hover (200ms transition).
- Images: `{rounded.xl}` (1rem / 16px) corners, soft `0 10px 30px -15px rgba(0,0,0,0.1)` shadow, 2.5em vertical margin.
- Tables: 1px `rgba(6,78,59,0.15)` border, brand-900 column-head text uppercase 0.05em, zebra-striped via `rgba(244,244,245,0.3)` even rows. Collapses to horizontal-scroll on mobile.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Container padding 20px. Hero h1 hits clamp floor at 30px. Service grid 1-col. Navbar collapses to logo + hamburger; mobile menu sheet drops below pill. Project cards 1-up at `h-64`. Workflow stays single-column (already is). |
| Small | 640–767px | Container padding 24px. Hero h1 fluid at ~6vw. Some cards switch to 2-col. Card project height grows to `h-80`. |
| Medium | 768–1023px | Container padding 32px. Service grid 2-col. About horizontal padding jumps to `px-14`. Hero CTA row drops translation delay tighter. |
| Large | 1024–1279px | Container padding 64px. About padding `px-20 py-28`. Project cards reach `h-90`. Workflow gets full sticky-rail behavior. |
| XL | ≥ 1280px | Container padding 96px. Hero h1 caps at 60px via clamp. Inner content widths bounded by per-section `max-w-*`. |

### Touch Targets
- Buttons: `px-5 py-2.5` (resolves to ~44px tall) — at WCAG AA threshold.
- Small button variant: `px-3.5 py-1.5` (~28px tall) — below AA; only used inline inside the navbar where density is needed.
- Form inputs: 12px-14px padding → 44px+ field height.
- Mobile menu items: stack at sheet padding ~16px row gap.

### Collapsing Strategy
- Navbar product links collapse into the hamburger sheet at `< md` (768px).
- Service grid drops from 2-col to 1-col below `md`.
- About card horizontal padding scales `px-6 → px-10 → px-14 → px-20` across 4 breakpoints — the most granular responsive treatment in the system.
- Tables inside case-study prose convert to horizontal scroll below 768px.
- All typography uses `clamp()` rather than hard breakpoints — sizes scale fluidly with viewport width.

## Do's and Don'ts

**Do:**
- Use the `<Button>` component for every CTA — its four variants cover all surfaces without theme overrides.
- Wrap emphatic single words in `<span class="font-[IBM_Plex_Serif] italic bg-emerald-200/60 inline-block -rotate-1 px-1.5">…</span>` to invoke the marker highlight. Reserve it for one or two words per page maximum.
- Apply the dot pattern via a `pointer-events-none` overlay layer — never on the surface itself, to keep text interactive.
- Pair every dark surface with a per-surface eyebrow color (`emerald-300` on zinc-900, `zinc-500` on white).
- Honor `prefers-reduced-motion`: all transforms/opacity transitions flatten to 0.01ms via the global media query in `global.css`.

**Don't:**
- Don't introduce a third typeface — the Manrope + IBM-Plex-Serif-as-highlight pairing is intentional.
- Don't use the IBM Plex Serif italic on full sentences or paragraphs — it's a single-word punctuation device.
- Don't apply hard corners (`rounded-none`) outside of utility decorations — every UI element in the system is rounded.
- Don't add a tinted shadow on light surfaces; the dot pattern + 1px hairline carry the depth.
- Don't use pure black (`#000`) for text or borders; zinc-900 / zinc-200 are the bounds.
- Don't introduce new accent colors — the brand voltage is emerald, full stop. Any new state colors should sit inside the existing zinc/emerald gradient.

## Agent Prompt Guide

### Quick Color Reference
- Page canvas: `bg-white` (`{colors.canvas}`)
- Dark canvas: `bg-zinc-900` (`{colors.zinc-900}`)
- Default text: `text-zinc-800` light / `text-zinc-100` dark
- Subtitle text: `text-zinc-600` light / `text-zinc-400` dark
- Eyebrow text: `text-zinc-500` light / `text-emerald-300` dark
- Border: `border-zinc-200` light / `border-zinc-800` dark
- Focus ring: `focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`
- Brand emerald: `#1c5534` (Tailwind alias `sync` or use `text-emerald-700/800/900`)
- Highlight marker bg: `bg-emerald-200/60`
- Dot fill on light: `radial-gradient(circle, rgba(4,120,87,0.7) 1.2px, transparent 1.6px) / 18px 18px`
- Dot fill on dark: `radial-gradient(circle, rgba(255,255,255,0.18) 1.2px, transparent 1.6px) / 14px 14px`

### Ready-to-Use Prompts
- **"Add a new section card matching the about style"** → `<section class="rounded-2xl md:rounded-3xl border border-zinc-200 bg-white px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28 max-w-4xl mx-auto">`
- **"Add an emphatic word inline"** → `<span class="font-[IBM_Plex_Serif] italic bg-emerald-200/60 inline-block -rotate-1 px-1.5">IA</span>`
- **"New primary CTA"** → `<Button variant="default" href="/contacto">Hablemos</Button>` (resolves to zinc-800 pill with white text)
- **"New ghost link inside the navbar"** → `<Button variant="small">Trabajos</Button>`
- **"New dark surface with dot decoration"** → `<div class="relative rounded-3xl bg-zinc-900 p-8 md:p-10 overflow-hidden"><div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.2px, transparent 1.6px); background-size: 14px 14px; mask-image: radial-gradient(ellipse at bottom right, black, transparent 70%);"></div>…</div>`
- **"New service card (light theme)"** → `<article class="rounded-3xl bg-[#defbed] text-emerald-950 p-8 md:p-10 min-h-[22rem] md:min-h-[28rem]">`
- **"New eyebrow label"** → `<p class="text-xs tracking-[0.2em] uppercase font-medium text-zinc-500">Servicios</p>`

## Known Gaps

- **Error / validation states for forms** are not styled — the contact form relies on browser-default validation. No dedicated error color or helper-text component exists.
- **Loading / skeleton states** are not defined anywhere in the source.
- **Dark-mode toggle:** the system uses dark surfaces strategically (services, contact, footer) but has no system-wide light/dark mode toggle. The page is single-mode.
- **Focus ring on the small button variant** is documented but its 28px height drops below WCAG AA minimum — not yet addressed in code.
- **Disabled button styling** is implicit (default browser opacity reduction) — no explicit disabled token exists in the button component.
- **Toast / notification surfaces** are not defined; the only feedback surface is the contact form's submit state.
- **The `--hero-mouse-x` / `--hero-mouse-y` pointer system** is hero-scoped; about/services/contact/footer use static (non-pointer-tracked) dot variants. If applied site-wide it would need a shared JS controller.
