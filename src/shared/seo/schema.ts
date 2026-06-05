// Centralized JSON-LD builders. Every page injects the default graph
// (Organization + WebSite + LocalBusiness) plus any page-specific nodes
// (Service, FAQPage, BreadcrumbList, Article) via Layout's `schema` prop.
//
// Geo strategy: anchored as a LocalBusiness in Puebla, areaServed = México
// nationally — so the site reads as a Mexican software/IA/app-development
// studio for both local-pack and national queries.

export const SITE_URL = "https://synce.mx";
export const SITE_NAME = "SYNC Estudio";

const u = (path: string): string => new URL(path, SITE_URL).href;

// JSON-LD nodes are loosely typed by nature (open vocabulary), so model
// them as a record of unknown rather than reaching for `any`.
export type JsonLd = Record<string, unknown>;

export const organizationSchema = (): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: u("/sync_logo.svg"),
    image: u("/share_image.webp"),
    description:
        "Estudio de desarrollo de software, aplicaciones e inteligencia artificial a medida para empresas en operación en México.",
    sameAs: [
        "https://www.instagram.com/sync.estudio/",
        "https://www.linkedin.com/company/syncestudio/",
    ],
});

export const websiteSchema = (): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-MX",
    publisher: { "@id": `${SITE_URL}/#organization` },
});

// ProfessionalService is a LocalBusiness subtype — gives us the local
// signal (address, geo, areaServed) without claiming a storefront.
export const localBusinessSchema = (): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: u("/share_image.webp"),
    logo: u("/sync_logo.svg"),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    description:
        "Desarrollo de software a medida, aplicaciones web y móviles, e inteligencia artificial aplicada para empresas en México.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Puebla",
        addressRegion: "Puebla",
        addressCountry: "MX",
    },
    areaServed: {
        "@type": "Country",
        name: "México",
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
    areaServed: { "@type": "Country", name: "México" },
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
    datePublished?: string;
    image?: string;
};

export const articleSchema = (input: ArticleInput): JsonLd => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: u(input.url),
    inLanguage: "es-MX",
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.image ? { image: u(input.image) } : {}),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
});
