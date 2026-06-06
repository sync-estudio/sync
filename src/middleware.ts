import { defineMiddleware } from "astro:middleware";

import { routes } from "@i18n/routes";
import { LANG_COOKIE, preferredLang, toLang } from "@i18n/detect";

/**
 * Preference-based locale routing.
 *
 * Only the bare home paths (`/` and `/en`) are eligible for a redirect, so a
 * visitor landing on a shared deep link is never yanked across locales. An
 * explicit choice — the `pref-lang` cookie written by the language switcher —
 * is authoritative in both directions and persists forever. With no stored
 * choice we only nudge ES-root visitors to English when their browser clearly
 * prefers it; we never auto-redirect `/en → /`, which keeps direct EN links and
 * search-engine crawlers (no `Accept-Language`) on the page they requested.
 *
 * Astro middleware runs only for SSR routes at request time, which is why the
 * two home pages drop `prerender`. Prerendered routes still invoke this at build
 * time, but their pathnames never match the home paths below, so they fall
 * through untouched.
 */
export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;

    const onEsHome = pathname === routes.home.es;
    const onEnHome =
        pathname === routes.home.en || pathname === `${routes.home.en}/`;
    if (!onEsHome && !onEnHome) return next();

    const choice = toLang(context.cookies.get(LANG_COOKIE)?.value);

    if (choice) {
        if (onEsHome && choice === "en") return context.redirect(routes.home.en, 302);
        if (onEnHome && choice === "es") return context.redirect(routes.home.es, 302);
        return next();
    }

    if (onEsHome) {
        const detected = preferredLang(
            context.request.headers.get("accept-language"),
        );
        if (detected === "en") return context.redirect(routes.home.en, 302);
    }

    return next();
});
