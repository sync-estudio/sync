import type { APIRoute } from "astro";
import { getSolutions } from "@features/solutions/data";
import { getLandingPages } from "@features/landing/data";
import { getCollection } from "astro:content";
import { localizedPath, solutionPath, caseStudyPath, type Lang } from "@i18n/utils";

const SITE = "https://synce.mx";

const LOCALES: Lang[] = ["es", "en"];

type Entry = {
    loc: string;
    changefreq: "daily" | "weekly" | "monthly" | "yearly";
    priority: string;
    lastmod?: string;
};

export const GET: APIRoute = async () => {
    const buildDate = new Date().toISOString().split("T")[0];

    const staticEntries: Entry[] = LOCALES.flatMap((lang) => [
        { loc: localizedPath("home", lang), changefreq: "weekly", priority: "1.0" },
        { loc: localizedPath("howWeWork", lang), changefreq: "monthly", priority: "0.8" },
        { loc: localizedPath("pricing", lang), changefreq: "monthly", priority: "0.7" },
        { loc: localizedPath("contact", lang), changefreq: "monthly", priority: "0.7" },
    ]);

    // Keyword landing pages — high priority, they target the head terms.
    const landingEntries: Entry[] = LOCALES.flatMap((lang) =>
        getLandingPages(lang).map((p) => ({
            loc: lang === "es" ? `/${p.slug}` : `/en/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.9",
        })),
    );

    const solutionEntries: Entry[] = LOCALES.flatMap((lang) =>
        getSolutions(lang).map((s) => ({
            loc: solutionPath(s.slug, lang),
            changefreq: "monthly" as const,
            priority: "0.8",
        })),
    );

    let caseStudyEntries: Entry[] = [];
    try {
        const studies = await getCollection("blog");
        caseStudyEntries = studies.flatMap((entry) => {
            const lang: Lang = entry.data.lang === "en" ? "en" : "es";
            const slug = entry.data.urlSlug ?? entry.id;
            return [
                {
                    loc: caseStudyPath(slug, lang),
                    changefreq: "monthly" as const,
                    priority: "0.7",
                    // Per-content lastmod from the publish date, not the build date.
                    lastmod: entry.data.pubDate.toISOString().split("T")[0],
                },
            ];
        });
    } catch {
        caseStudyEntries = [];
    }

    const entries = [
        ...staticEntries,
        ...landingEntries,
        ...solutionEntries,
        ...caseStudyEntries,
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map(
        (e) =>
            `  <url>\n    <loc>${SITE}${e.loc}</loc>\n    <lastmod>${e.lastmod ?? buildDate}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join("\n")}
</urlset>`;

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
