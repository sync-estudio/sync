// Keyword-targeted landing pages for the head terms we want to rank for in
// México: software development, app development, and applied AI. Each record
// drives one prerendered page per locale via the shared landing template, and
// feeds a Service + FAQPage + BreadcrumbList schema. Copy stays in the quiet
// "del lado nuestro" voice — keywords are woven, not stuffed.

import type { Lang } from "@i18n/ui";

export type LandingSection = {
    title: string;
    body?: string;
    items?: string[];
};

export type LandingFaq = {
    q: string;
    a: string;
};

export type LandingRelated = {
    href: string;
    label: string;
    description: string;
};

/** Per-locale copy for one landing page. */
export type LandingCopy = {
    /** <title> — leads with the head term + geo. */
    metaTitle: string;
    metaDescription: string;
    /** Eyebrow label above the H1. */
    label: string;
    /** H1 — must contain `highlight` as a substring. */
    title: string;
    highlight: string;
    subtitle: string;
    timing?: string;
    /** Service schema fields. */
    serviceName: string;
    serviceType: string;
    sections: LandingSection[];
    outcomesLabel: string;
    outcomes: string[];
    faqs: LandingFaq[];
    /** Internal links to the canonical solution/contact pages. */
    related: LandingRelated[];
};

/** A landing entry: stable key + per-locale slug and copy. */
export type LandingEntry = {
    key: string;
    slug: Record<Lang, string>;
    copy: Record<Lang, LandingCopy>;
};

/** Flattened, single-locale view used by the template. */
export type LandingPage = LandingCopy & {
    key: string;
    slug: string;
};

export const landingEntries: LandingEntry[] = [
    {
        key: "softwareDev",
        slug: { es: "desarrollo-de-software", en: "software-development" },
        copy: {
            es: {
                metaTitle: "Desarrollo de software a medida | SYNC Estudio",
                metaDescription:
                    "Desarrollo de software a medida para empresas en operación. Portales internos, tableros, automatizaciones e integraciones que tu equipo sí opera — con mantenimiento del lado nuestro. Desde México, disponibles en todo el mundo.",
                label: "Desarrollo de software",
                title: "Desarrollo de software a medida",
                highlight: "medida",
                subtitle:
                    "Construimos el software que tu operación necesita y que el producto empaquetado no resuelve: pensado alrededor de cómo trabaja tu equipo, no al revés.",
                timing: "Ciclos de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
                serviceName: "Desarrollo de software a medida",
                serviceType: "Desarrollo de software",
                sections: [
                    {
                        title: "Qué construimos",
                        items: [
                            "Software operativo a medida: portales internos, tableros y herramientas de campo",
                            "Automatización de procesos: flujos de trabajo, reportes y sincronización entre sistemas",
                            "Integraciones reales con tus ERPs, CRMs y sistemas heredados",
                            "Copilotos e IA aplicada donde de verdad suman a la operación",
                        ],
                    },
                    {
                        title: "Cómo trabajamos",
                        body: "Ciclos de 1 a 2 semanas con demo en vivo. Cada entrega pasa por tu equipo antes de cambiar el día a día, y el código vive en tu repositorio desde el primer día.",
                        items: [
                            "Demos cada ciclo con retroalimentación en la sala",
                            "Aprobación de tu equipo antes de cada entrega",
                            "Repositorio y documentación entregables desde el día uno",
                        ],
                    },
                    {
                        title: "Tecnologías que usamos",
                        body: "Adaptamos las tecnologías a lo que tu equipo pueda mantener: TypeScript, Next.js, Go, Python, Postgres y MongoDB. Si ya tienes preferencias o restricciones técnicas, las respetamos.",
                    },
                    {
                        title: "Lo que no hacemos",
                        items: [
                            "Productos genéricos rebautizados con tu logo",
                            "Plataformas que tu equipo no podría mantener si nos vamos",
                            "Software desconectado de los sistemas que ya usas",
                        ],
                    },
                ],
                outcomesLabel: "Resultados",
                outcomes: [
                    "Herramientas en producción que resuelven el problema real",
                    "Documentación versionada junto al código, no PDFs muertos",
                    "Integraciones reales, sin exportar Excel entre áreas",
                ],
                faqs: [
                    {
                        q: "¿Cuánto cuesta desarrollar software a medida?",
                        a: "Cerramos un precio fijo al terminar el Diagnóstico, con el alcance acordado — no estimaciones por hora con tope abierto. Damos rangos por fase desde el inicio.",
                    },
                    {
                        q: "¿Trabajan con empresas fuera de Puebla?",
                        a: "Sí. Operamos desde Puebla y trabajamos con empresas en México y el extranjero, presencial o remoto según la fase.",
                    },
                    {
                        q: "¿Quién mantiene el software después del lanzamiento?",
                        a: "Nosotros. El Plan de Acompañamiento mensual va incluido, no es un complemento.",
                    },
                ],
                related: [
                    {
                        href: "/soluciones/desarrollo",
                        label: "Solución: Desarrollo",
                        description:
                            "Cómo construimos software a medida sobre la hoja de ruta del Diagnóstico.",
                    },
                    {
                        href: "/soluciones/diagnostico",
                        label: "Solución: Diagnóstico",
                        description:
                            "Mapeamos tu operación antes de escribir una línea de código.",
                    },
                ],
            },
            en: {
                metaTitle: "Custom software development | SYNC Estudio",
                metaDescription:
                    "Custom software development for working companies. Internal portals, dashboards, automations and integrations your team actually operates — with maintenance on our side. Based in Mexico, available worldwide.",
                label: "Software development",
                title: "Custom software development",
                highlight: "Custom",
                subtitle:
                    "We build the software your operation needs and that off-the-shelf products don't solve: designed around how your team works, not the other way around.",
                timing: "1-2 week sprints · Fixed price set in the Assessment",
                serviceName: "Custom software development",
                serviceType: "Software development",
                sections: [
                    {
                        title: "What we build",
                        items: [
                            "Custom operational software: internal portals, dashboards and field tools",
                            "Process automation: workflows, reporting and syncing between systems",
                            "Real integrations with your ERPs, CRMs and legacy systems",
                            "Copilots and applied AI where they genuinely add to the operation",
                        ],
                    },
                    {
                        title: "How we work",
                        body: "1 to 2 week sprints with a live demo. Every release goes through your team before it changes the day-to-day, and the code lives in your repository from day one.",
                        items: [
                            "Demos every sprint with feedback in the room",
                            "Your team's approval before each release",
                            "Repository and documentation delivered from day one",
                        ],
                    },
                    {
                        title: "The stack we use",
                        body: "We adapt the stack to what your team can maintain: TypeScript, Next.js, Go, Python, Postgres and MongoDB. If you already have technical preferences or constraints, we respect them.",
                    },
                    {
                        title: "What we don't do",
                        items: [
                            "Generic products rebranded with your logo",
                            "Platforms your team couldn't maintain if we left",
                            "Software disconnected from the systems you already use",
                        ],
                    },
                ],
                outcomesLabel: "Results",
                outcomes: [
                    "Tools in production that solve the real problem",
                    "Documentation versioned with the code, not dead PDFs",
                    "Real integrations, no exporting Excel between teams",
                ],
                faqs: [
                    {
                        q: "How much does custom software development cost?",
                        a: "We set a fixed price at the end of the Assessment, with the agreed scope — not open-ended hourly estimates. We give ranges per phase from the start.",
                    },
                    {
                        q: "Do you work with companies outside Puebla?",
                        a: "Yes. We operate from Puebla and work with companies in Mexico and abroad, in person or remote depending on the phase.",
                    },
                    {
                        q: "Who maintains the software after launch?",
                        a: "We do. The monthly Support Plan is included, not an add-on.",
                    },
                ],
                related: [
                    {
                        href: "/en/solutions/development",
                        label: "Solution: Development",
                        description:
                            "How we build custom software on the roadmap from the Assessment.",
                    },
                    {
                        href: "/en/solutions/assessment",
                        label: "Solution: Assessment",
                        description:
                            "We map your operation before writing a line of code.",
                    },
                ],
            },
        },
    },
    {
        key: "appDev",
        slug: { es: "desarrollo-de-apps", en: "app-development" },
        copy: {
            es: {
                metaTitle:
                    "Desarrollo de aplicaciones web y móviles | SYNC Estudio",
                metaDescription:
                    "Desarrollo de aplicaciones web y móviles a medida para empresas en operación. Apps operativas conectadas a tus sistemas, que tu equipo opera con autonomía y nosotros mantenemos. Desde México, disponibles en todo el mundo.",
                label: "Desarrollo de aplicaciones",
                title: "Desarrollo de aplicaciones a medida",
                highlight: "aplicaciones",
                subtitle:
                    "Aplicaciones web y móviles construidas alrededor de tu operación: herramientas de campo, portales y apps internas que tu equipo usa todos los días.",
                timing: "Ciclos de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
                serviceName: "Desarrollo de aplicaciones web y móviles",
                serviceType: "Desarrollo de aplicaciones",
                sections: [
                    {
                        title: "Qué tipo de apps construimos",
                        items: [
                            "Aplicaciones web internas: portales, tableros y herramientas administrativas a medida",
                            "Apps móviles para equipos de campo y operación en sitio",
                            "Herramientas conectadas a tus sistemas, sin exportar Excel entre áreas",
                            "Flujos con IA integrada donde reducen trabajo manual",
                        ],
                    },
                    {
                        title: "Cómo trabajamos",
                        body: "Iteramos en ciclos cortos con demo en vivo. La app se conecta a los sistemas que ya usas y tu equipo la aprueba antes de que toque producción.",
                        items: [
                            "Diseño alrededor del flujo real, no de una plantilla genérica",
                            "Integración con ERPs, CRMs y sistemas heredados",
                            "Código y documentación en tu repositorio desde el día uno",
                        ],
                    },
                    {
                        title: "Lo que no hacemos",
                        items: [
                            "Apps genéricas que no hablan con tus sistemas",
                            "Plataformas que tu equipo no podría mantener si nos vamos",
                            "Entregar una app sin entrenar a quien la opera",
                        ],
                    },
                ],
                outcomesLabel: "Resultados",
                outcomes: [
                    "Una app en producción que tu equipo opera con confianza",
                    "Datos sincronizados entre sistemas, sin captura doble",
                    "Mantenimiento continuo del lado nuestro",
                ],
                faqs: [
                    {
                        q: "¿Desarrollan apps web, móviles o ambas?",
                        a: "Ambas. Elegimos web, móvil o las dos según cómo trabaja tu equipo y dónde está la operación, no por moda.",
                    },
                    {
                        q: "¿Pueden integrar la app con nuestros sistemas actuales?",
                        a: "Sí. La mayoría de proyectos incluyen integraciones con ERPs, CRMs, herramientas de campo o sistemas heredados.",
                    },
                    {
                        q: "¿Trabajan con empresas fuera de México?",
                        a: "Sí. Estamos en Puebla y trabajamos con empresas en México y el extranjero, presencial o remoto según la fase.",
                    },
                ],
                related: [
                    {
                        href: "/soluciones/desarrollo",
                        label: "Solución: Desarrollo",
                        description:
                            "El proceso completo para llevar una app a producción.",
                    },
                    {
                        href: "/soluciones/acompanamiento",
                        label: "Solución: Acompañamiento",
                        description:
                            "Nos quedamos a tu lado: tu equipo opera la app y nosotros la mantenemos viva.",
                    },
                ],
            },
            en: {
                metaTitle:
                    "Web and mobile app development | SYNC Estudio",
                metaDescription:
                    "Custom web and mobile app development for working companies. Operational apps connected to your systems, operated by your team with autonomy and maintained by us. Based in Mexico, available worldwide.",
                label: "App development",
                title: "Custom app development",
                highlight: "app",
                subtitle:
                    "Web and mobile applications built around your operation: field tools, portals and internal apps your team uses every day.",
                timing: "1-2 week sprints · Fixed price set in the Assessment",
                serviceName: "Web and mobile app development",
                serviceType: "App development",
                sections: [
                    {
                        title: "What kind of apps we build",
                        items: [
                            "Internal web applications: custom portals, dashboards and back-office",
                            "Mobile apps for field teams and on-site operations",
                            "Tools connected to your systems, no exporting Excel between teams",
                            "Flows with integrated AI where they cut manual work",
                        ],
                    },
                    {
                        title: "How we work",
                        body: "We iterate in short sprints with a live demo. The app connects to the systems you already use and your team approves it before it touches production.",
                        items: [
                            "Designed around the real workflow, not a generic template",
                            "Integration with ERPs, CRMs and legacy systems",
                            "Code and documentation in your repository from day one",
                        ],
                    },
                    {
                        title: "What we don't do",
                        items: [
                            "Generic apps that don't talk to your systems",
                            "Platforms your team couldn't maintain if we left",
                            "Handing over an app without training whoever operates it",
                        ],
                    },
                ],
                outcomesLabel: "Results",
                outcomes: [
                    "An app in production that your team operates with confidence",
                    "Data synced between systems, no double entry",
                    "Ongoing maintenance on our side",
                ],
                faqs: [
                    {
                        q: "Do you build web apps, mobile apps, or both?",
                        a: "Both. We choose web, mobile or both based on how your team works and where the operation is, not on trends.",
                    },
                    {
                        q: "Can you integrate the app with our current systems?",
                        a: "Yes. Most projects include integrations with ERPs, CRMs, field tools or legacy systems.",
                    },
                    {
                        q: "Do you work with companies outside Mexico?",
                        a: "Yes. We're in Puebla and work with companies in Mexico and abroad, in person or remote depending on the phase.",
                    },
                ],
                related: [
                    {
                        href: "/en/solutions/development",
                        label: "Solution: Development",
                        description:
                            "The full process to take an app to production.",
                    },
                    {
                        href: "/en/solutions/partnership",
                        label: "Solution: Partnership",
                        description:
                            "We stay by your side: your team operates the app and we keep it alive.",
                    },
                ],
            },
        },
    },
    {
        key: "ai",
        slug: { es: "inteligencia-artificial", en: "artificial-intelligence" },
        copy: {
            es: {
                metaTitle:
                    "Inteligencia artificial aplicada para empresas | SYNC Estudio",
                metaDescription:
                    "Inteligencia artificial aplicada a la operación: agentes, copilotos y LLMs integrados donde suman. Sin humo, con mantenimiento del lado nuestro. Desde México, disponibles en todo el mundo.",
                label: "Inteligencia artificial",
                title: "Inteligencia artificial aplicada para empresas",
                highlight: "aplicada",
                subtitle:
                    "IA puesta a trabajar dentro de tu operación: agentes, copilotos y modelos integrados donde reducen trabajo manual de verdad — no un chatbot por tener uno.",
                timing: "Ciclos de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
                serviceName: "Inteligencia artificial aplicada a la operación",
                serviceType: "Inteligencia artificial para empresas",
                sections: [
                    {
                        title: "Dónde aplica la IA",
                        items: [
                            "Copilotos que absorben tareas repetitivas dentro de tus herramientas",
                            "Agentes que orquestan procesos entre sistemas",
                            "LLMs integrados para búsqueda, redacción y soporte interno",
                            "Automatización de reportes y clasificación de datos",
                        ],
                    },
                    {
                        title: "Cómo decidimos dónde usarla",
                        body: "Partimos del Diagnóstico: medimos dónde la IA reduce trabajo real antes de construir. Si una automatización simple resuelve el problema, no metemos un modelo de más.",
                        items: [
                            "Casos de uso priorizados por impacto, no por moda",
                            "Métricas base para medir el antes y el después",
                            "Integración con los sistemas y datos que ya tienes",
                        ],
                    },
                    {
                        title: "Lo que no hacemos",
                        items: [
                            "Chatbots de adorno sin conexión a la operación",
                            "Modelos que tu equipo no entiende ni puede controlar",
                            "Promesas de IA sin datos detrás",
                        ],
                    },
                ],
                outcomesLabel: "Resultados",
                outcomes: [
                    "Menos trabajo manual en los procesos que más lo consumen",
                    "IA integrada donde suma, mantenida del lado nuestro",
                    "Tu equipo entiende qué hace el sistema y por qué",
                ],
                faqs: [
                    {
                        q: "¿La IA reemplaza a nuestro equipo?",
                        a: "No. La usamos para quitar el trabajo repetitivo y dejar a tu equipo en las decisiones. El objetivo es autonomía, no dependencia.",
                    },
                    {
                        q: "¿Necesitamos muchos datos para empezar?",
                        a: "No siempre. En el Diagnóstico evaluamos qué datos existen y dónde la IA aporta hoy, sin esperar a un repositorio de datos perfecto.",
                    },
                    {
                        q: "¿Trabajan con empresas fuera de México?",
                        a: "Sí. Operamos desde Puebla y trabajamos con empresas en México y el extranjero.",
                    },
                ],
                related: [
                    {
                        href: "/soluciones/desarrollo",
                        label: "Solución: Desarrollo",
                        description: "Cómo integramos IA dentro del software a medida.",
                    },
                    {
                        href: "/soluciones/diagnostico",
                        label: "Solución: Diagnóstico",
                        description:
                            "Decidimos con datos dónde la IA vale la pena y dónde no.",
                    },
                ],
            },
            en: {
                metaTitle:
                    "Applied artificial intelligence for companies | SYNC Estudio",
                metaDescription:
                    "Applied artificial intelligence for working companies: agents, copilots and LLMs integrated where they add value. No hype, with maintenance on our side. Based in Mexico, available worldwide.",
                label: "Artificial intelligence",
                title: "Applied artificial intelligence for companies",
                highlight: "Applied",
                subtitle:
                    "AI put to work inside your operation: agents, copilots and models integrated where they genuinely cut manual work — not a chatbot for the sake of it.",
                timing: "1-2 week sprints · Fixed price set in the Assessment",
                serviceName: "Artificial intelligence applied to the operation",
                serviceType: "Artificial intelligence for companies",
                sections: [
                    {
                        title: "Where AI applies",
                        items: [
                            "Copilots that absorb repetitive tasks inside your tools",
                            "Agents that orchestrate processes across systems",
                            "Integrated LLMs for search, drafting and internal support",
                            "Automated reporting and data classification",
                        ],
                    },
                    {
                        title: "How we decide where to use it",
                        body: "We start from the Assessment: we measure where AI cuts real work before building. If a simple automation solves the problem, we don't add a model on top.",
                        items: [
                            "Use cases prioritized by impact, not by hype",
                            "Baseline metrics to measure before and after",
                            "Integration with the systems and data you already have",
                        ],
                    },
                    {
                        title: "What we don't do",
                        items: [
                            "Decorative chatbots with no connection to the operation",
                            "Models your team doesn't understand or can't control",
                            "AI promises with no data behind them",
                        ],
                    },
                ],
                outcomesLabel: "Results",
                outcomes: [
                    "Less manual work in the processes that consume it most",
                    "AI integrated where it adds value, maintained on our side",
                    "Your team understands what the system does and why",
                ],
                faqs: [
                    {
                        q: "Will AI replace our team?",
                        a: "No. We use it to remove repetitive work and leave your team on the decisions. The goal is autonomy, not dependence.",
                    },
                    {
                        q: "Do we need a lot of data to start?",
                        a: "Not always. In the Assessment we evaluate what data exists and where AI adds value today, without waiting for a perfect data lake.",
                    },
                    {
                        q: "Do you work with companies outside Mexico?",
                        a: "Yes. We operate from Puebla and work with companies in Mexico and abroad.",
                    },
                ],
                related: [
                    {
                        href: "/en/solutions/development",
                        label: "Solution: Development",
                        description: "How we integrate AI inside custom software.",
                    },
                    {
                        href: "/en/solutions/assessment",
                        label: "Solution: Assessment",
                        description:
                            "We decide with data where AI is worth it and where it isn't.",
                    },
                ],
            },
        },
    },
];

/** Localized list of landing pages. */
export const getLandingPages = (lang: Lang): LandingPage[] =>
    landingEntries.map((entry) => ({
        key: entry.key,
        slug: entry.slug[lang],
        ...entry.copy[lang],
    }));

/** Look up a landing page by its stable key. */
export const getLandingPage = (
    lang: Lang,
    key: string,
): LandingPage | undefined =>
    getLandingPages(lang).find((p) => p.key === key);
