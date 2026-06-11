import type { Lang } from "./ui";

/**
 * Canonical route map — single source of truth for every static path pair.
 * Spanish lives at the root; English under /en/ with translated slugs.
 * All internal links resolve against this so a page rendered in one locale
 * never leaks links to the other.
 */
export const routes = {
    home: { es: "/", en: "/en" },
    contact: { es: "/contacto", en: "/en/contact" },
    howWeWork: { es: "/como-trabajamos", en: "/en/how-we-work" },
    pricing: { es: "/como-cobramos", en: "/en/pricing" },
    softwareDev: { es: "/desarrollo-de-software", en: "/en/software-development" },
    appDev: { es: "/desarrollo-de-apps", en: "/en/app-development" },
    ai: { es: "/inteligencia-artificial", en: "/en/artificial-intelligence" },
    privacy: { es: "/aviso-de-privacidad", en: "/en/privacy-notice" },
    dataPractices: { es: "/codigo-y-datos", en: "/en/code-and-data" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Localized path segments for the data-driven dynamic routes. */
export const segments = {
    solutions: { es: "soluciones", en: "solutions" },
    caseStudies: { es: "casos-de-estudio", en: "case-studies" },
} as const;

/** Resolve a static route key to its path in the given locale. */
export const localizedPath = (key: RouteKey, lang: Lang): string =>
    routes[key][lang];

/** Home path + hash, locale-aware (e.g. `/#proyectos` or `/en#proyectos`). */
export const homeHash = (hash: string, lang: Lang): string =>
    `${routes.home[lang]}${hash}`;

/** Solution detail path for a locale-specific slug. */
export const solutionPath = (slug: string, lang: Lang): string =>
    lang === "es"
        ? `/${segments.solutions.es}/${slug}`
        : `/en/${segments.solutions.en}/${slug}`;

/** Case-study detail path for a slug (slug shared across locales). */
export const caseStudyPath = (slug: string, lang: Lang): string =>
    lang === "es"
        ? `/${segments.caseStudies.es}/${slug}`
        : `/en/${segments.caseStudies.en}/${slug}`;
