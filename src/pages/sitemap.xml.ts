import type { APIRoute } from "astro";
import { solutions } from "@features/solutions/data";
import { getCollection } from "astro:content";

const SITE = "https://syncestudio.com";

type Entry = {
    loc: string;
    changefreq: "daily" | "weekly" | "monthly" | "yearly";
    priority: string;
};

export const GET: APIRoute = async () => {
    const staticEntries: Entry[] = [
        { loc: "/", changefreq: "weekly", priority: "1.0" },
        { loc: "/como-trabajamos", changefreq: "monthly", priority: "0.8" },
        { loc: "/contacto", changefreq: "monthly", priority: "0.7" },
    ];

    const solutionEntries: Entry[] = solutions.map((s) => ({
        loc: `/soluciones/${s.id}`,
        changefreq: "monthly",
        priority: "0.8",
    }));

    let caseStudyEntries: Entry[] = [];
    try {
        const studies = await getCollection("blog");
        caseStudyEntries = studies.map((entry) => ({
            loc: `/casos-de-estudio/${entry.id}`,
            changefreq: "monthly",
            priority: "0.7",
        }));
    } catch {
        caseStudyEntries = [];
    }

    const entries = [...staticEntries, ...solutionEntries, ...caseStudyEntries];
    const lastmod = new Date().toISOString().split("T")[0];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map(
        (e) =>
            `  <url>\n    <loc>${SITE}${e.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
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
