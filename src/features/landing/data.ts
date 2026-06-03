// Keyword-targeted landing pages for the head terms we want to rank for in
// México: software development, app development, and applied AI. Each record
// drives one prerendered page via the shared landing template, and feeds a
// Service + FAQPage + BreadcrumbList schema. Copy stays in the quiet "del lado
// nuestro" voice — keywords are woven, not stuffed.

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

export type LandingPage = {
    slug: string;
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

export const landingPages: LandingPage[] = [
    {
        slug: "desarrollo-de-software",
        metaTitle: "Desarrollo de software a medida en México | SYNC Estudio",
        metaDescription:
            "Desarrollo de software a medida para empresas en operación en México. Portales internos, dashboards, automatizaciones e integraciones que tu equipo sí opera — con mantenimiento del lado nuestro.",
        label: "Desarrollo de software",
        title: "Desarrollo de software a medida en México",
        highlight: "medida",
        subtitle:
            "Construimos el software que tu operación necesita y que el producto empaquetado no resuelve: pensado alrededor de cómo trabaja tu equipo, no al revés.",
        timing: "Sprints de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
        serviceName: "Desarrollo de software a medida",
        serviceType: "Desarrollo de software",
        sections: [
            {
                title: "Qué construimos",
                items: [
                    "Software operativo a medida: portales internos, dashboards y herramientas de campo",
                    "Automatización de procesos: workflows, reporting y sincronización entre sistemas",
                    "Integraciones reales con tus ERPs, CRMs y sistemas legacy",
                    "Copilotos e IA aplicada donde de verdad suman a la operación",
                ],
            },
            {
                title: "Cómo trabajamos",
                body: "Sprints de 1 a 2 semanas con demo en vivo. Cada release pasa por tu equipo antes de cambiar el día a día, y el código vive en tu repositorio desde el primer día.",
                items: [
                    "Demos cada sprint con feedback en la sala",
                    "Aprobación de tu equipo antes de cada release",
                    "Repositorio y documentación entregables desde el día uno",
                ],
            },
            {
                title: "Stack que usamos",
                body: "Adaptamos el stack a lo que tu equipo pueda mantener: TypeScript, Next.js, Go, Python, Postgres y MongoDB. Si ya tienes preferencias o restricciones técnicas, las respetamos.",
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
                a: "Sí. Operamos desde Puebla y trabajamos con empresas en todo México, presencial o remoto según la fase.",
            },
            {
                q: "¿Quién mantiene el software después del lanzamiento?",
                a: "Nosotros. El Plan de Acompañamiento mensual va incluido, no es un add-on.",
            },
        ],
        related: [
            {
                href: "/soluciones/desarrollo",
                label: "Solución: Desarrollo",
                description:
                    "Cómo construimos software a medida sobre el roadmap del Diagnóstico.",
            },
            {
                href: "/soluciones/diagnostico",
                label: "Solución: Diagnóstico",
                description:
                    "Mapeamos tu operación antes de escribir una línea de código.",
            },
        ],
    },
    {
        slug: "desarrollo-de-apps",
        metaTitle:
            "Desarrollo de aplicaciones web y móviles en México | SYNC Estudio",
        metaDescription:
            "Desarrollo de aplicaciones web y móviles a medida para empresas en México. Apps operativas conectadas a tus sistemas, que tu equipo opera con autonomía y nosotros mantenemos.",
        label: "Desarrollo de aplicaciones",
        title: "Desarrollo de aplicaciones a medida en México",
        highlight: "aplicaciones",
        subtitle:
            "Aplicaciones web y móviles construidas alrededor de tu operación: herramientas de campo, portales y apps internas que tu equipo usa todos los días.",
        timing: "Sprints de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
        serviceName: "Desarrollo de aplicaciones web y móviles",
        serviceType: "Desarrollo de aplicaciones",
        sections: [
            {
                title: "Qué tipo de apps construimos",
                items: [
                    "Aplicaciones web internas: portales, dashboards y back-office a medida",
                    "Apps móviles para equipos de campo y operación en sitio",
                    "Herramientas conectadas a tus sistemas, sin exportar Excel entre áreas",
                    "Flujos con IA integrada donde reducen trabajo manual",
                ],
            },
            {
                title: "Cómo trabajamos",
                body: "Iteramos en sprints cortos con demo en vivo. La app se conecta a los sistemas que ya usas y tu equipo la aprueba antes de que toque producción.",
                items: [
                    "Diseño alrededor del flujo real, no de un template genérico",
                    "Integración con ERPs, CRMs y sistemas legacy",
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
                a: "Sí. La mayoría de proyectos incluyen integraciones con ERPs, CRMs, herramientas de campo o sistemas legacy.",
            },
            {
                q: "¿Atienden empresas en todo México?",
                a: "Sí. Estamos en Puebla y trabajamos con empresas en todo el país, presencial o remoto según la fase.",
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
                href: "/soluciones/educacion",
                label: "Solución: Educación",
                description:
                    "Formamos a tu equipo para que opere la app con autonomía.",
            },
        ],
    },
    {
        slug: "inteligencia-artificial",
        metaTitle:
            "Inteligencia artificial para empresas en México | SYNC Estudio",
        metaDescription:
            "Inteligencia artificial aplicada a la operación para empresas en México: agentes, copilotos y LLMs integrados donde suman. Sin humo, con mantenimiento del lado nuestro.",
        label: "Inteligencia artificial",
        title: "Inteligencia artificial aplicada para empresas en México",
        highlight: "aplicada",
        subtitle:
            "IA puesta a trabajar dentro de tu operación: agentes, copilotos y modelos integrados donde reducen trabajo manual de verdad — no un chatbot por tener uno.",
        timing: "Sprints de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
        serviceName: "Inteligencia artificial aplicada a la operación",
        serviceType: "Inteligencia artificial para empresas",
        sections: [
            {
                title: "Dónde aplica la IA",
                items: [
                    "Copilotos que absorben tareas repetitivas dentro de tus herramientas",
                    "Agentes que orquestan procesos entre sistemas",
                    "LLMs integrados para búsqueda, redacción y soporte interno",
                    "Automatización de reporting y clasificación de datos",
                ],
            },
            {
                title: "Cómo decidimos dónde usarla",
                body: "Partimos del Diagnóstico: medimos dónde la IA reduce trabajo real antes de construir. Si una automatización simple resuelve el problema, no metemos un modelo de más.",
                items: [
                    "Casos de uso priorizados por impacto, no por hype",
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
                a: "No siempre. En el Diagnóstico evaluamos qué datos existen y dónde la IA aporta hoy, sin esperar a un data lake perfecto.",
            },
            {
                q: "¿Atienden empresas en todo México?",
                a: "Sí. Operamos desde Puebla y trabajamos con empresas en todo el país.",
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
];

export const getLandingPage = (slug: string): LandingPage | undefined =>
    landingPages.find((p) => p.slug === slug);
