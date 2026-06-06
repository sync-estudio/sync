import { defaultLang, languages, type Lang } from "./ui";

/** Cookie that stores the visitor's explicit language choice (set by the switcher). */
export const LANG_COOKIE = "pref-lang";

const isLang = (value: string): value is Lang => value in languages;

/** Narrow an arbitrary cookie/string value to a known Lang, or null. */
export const toLang = (value: string | undefined): Lang | null =>
    value && isLang(value) ? value : null;

/**
 * Parse an `Accept-Language` header into the visitor's preferred supported
 * locale. Returns the highest-q language whose base tag we support, or the
 * default when nothing matches (or the header is absent — e.g. most bots).
 */
export const preferredLang = (header: string | null): Lang => {
    if (!header) return defaultLang;

    const ranked = header
        .split(",")
        .map((part) => {
            const [tag, ...params] = part.trim().split(";");
            const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
            const quality = q ? Number.parseFloat(q.slice(2)) : 1;
            const base = tag.toLowerCase().split("-")[0];
            return { base, quality: Number.isNaN(quality) ? 0 : quality };
        })
        .filter((entry) => isLang(entry.base))
        .sort((a, b) => b.quality - a.quality);

    const top = ranked[0]?.base;
    return top && isLang(top) ? top : defaultLang;
};
