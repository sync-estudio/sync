// Centralized JSON-LD builders. Every page injects the default graph
// (Organization + WebSite + LocalBusiness) plus any page-specific nodes
// (Service, FAQPage, BreadcrumbList, Article) via Layout's `schema` prop.
//
// Geo strategy: anchored as a LocalBusiness in Puebla (origin signal for
// local queries), but areaServed = Worldwide — the studio is based in Mexico
// and available globally, in person or remote.

export const SITE_URL = "https://synce.mx";
export const SITE_NAME = "SYNC Estudio";

const u = (path: string): string => new URL(path, SITE_URL).href;

type Lang = "es" | "en";

const inLanguageOf = (lang: Lang): string => (lang === "en" ? "en-US" : "es-MX");

const ORG_DESCRIPTION: Record<Lang, string> = {
    es: "Estudio de desarrollo de software, aplicaciones e inteligencia artificial a medida para empresas en operación. Desde México, disponibles en todo el mundo.",
    en: "Custom software, application and artificial intelligence studio for companies that run real operations. Based in Mexico, available worldwide.",
};

const LOCAL_BUSINESS_DESCRIPTION: Record<Lang, string> = {
    es: "Desarrollo de software a medida, aplicaciones web y móviles, e inteligencia artificial aplicada para empresas en operación. Desde México, disponibles en todo el mundo.",
    en: "Custom software development, web and mobile applications, and applied artificial intelligence for companies that run real operations. Based in Mexico, available worldwide.",
};

// JSON-LD nodes are loosely typed by nature (open vocabulary), so model
// them as a record of unknown rather than reaching for `any`.
export type JsonLd = Record<string, unknown>;

export const organizationSchema = (lang: Lang = "es"): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: u("/sync_logo.svg"),
    image: u("/share_image.webp"),
    description: ORG_DESCRIPTION[lang],
    sameAs: [
        "https://www.instagram.com/sync.estudio/",
        "https://www.linkedin.com/company/syncestudio/",
    ],
});

export const websiteSchema = (lang: Lang = "es"): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: inLanguageOf(lang),
    publisher: { "@id": `${SITE_URL}/#organization` },
});

// ProfessionalService is a LocalBusiness subtype — gives us the local
// signal (address, geo, areaServed) without claiming a storefront.
export const localBusinessSchema = (lang: Lang = "es"): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: u("/share_image.webp"),
    logo: u("/sync_logo.svg"),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    description: LOCAL_BUSINESS_DESCRIPTION[lang],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Puebla",
        addressRegion: "Puebla",
        addressCountry: "MX",
    },
    areaServed: {
        "@type": "Place",
        name: "Worldwide",
    },
    knowsLanguage: ["es", "en"],
    priceRange: "$$",
});

type ServiceInput = {
    name: string;
    description: string;
    url: string;
    serviceType?: string;
};

export const serviceSchema = (input: ServiceInput): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType ?? input.name,
    description: input.description,
    url: u(input.url),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
});

export const faqPageSchema = (
    faqs: ReadonlyArray<{ q: string; a: string }>,
): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
});

export const breadcrumbSchema = (
    crumbs: ReadonlyArray<{ name: string; path: string }>,
): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: u(c.path),
    })),
});

type ArticleInput = {
    title: string;
    description: string;
    url: string;
    lang?: Lang;
    datePublished?: string;
    image?: string;
};

export const articleSchema = (input: ArticleInput): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: u(input.url),
    inLanguage: inLanguageOf(input.lang ?? "es"),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.image ? { image: u(input.image) } : {}),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
});
