import { defaultLang, ui, type Lang, type UiKey } from "./ui";

export { defaultLang, languages, type Lang, type UiKey } from "./ui";
export {
    routes,
    segments,
    localizedPath,
    homeHash,
    solutionPath,
    caseStudyPath,
    type RouteKey,
} from "./routes";

/** Normalize Astro.currentLocale (string | undefined) to a known Lang. */
export const getLang = (locale: string | undefined): Lang =>
    locale === "en" ? "en" : defaultLang;

/** The opposite locale — used by the language switcher and hreflang. */
export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");

/** Returns a `t(key)` reader for the locale, falling back to the default. */
export function useTranslations(lang: Lang) {
    return function t(key: UiKey): string {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}
