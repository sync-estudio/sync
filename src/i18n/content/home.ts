import type { Lang } from "@i18n/ui";

type Faq = { q: string; a: string; link: { href: string; label: string } };
type Phase = {
    number: string;
    title: string;
    body: string;
    note?: string;
    deliverables: string[];
};
type Project = {
    id: string;
    title: string;
    description: string;
    imageAlt: string;
};

type HomeCopy = {
    hero: {
        titleLead: string;
        titleHighlight: string;
        titleTail: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
        locationTag: string;
    };
    about: {
        eyebrow: string;
        body: string;
        role: string;
    };
    offerings: {
        eyebrow: string;
        subtitle: string;
        platformsTitle: string;
        platformsDesc: string;
        aiTitle: string;
        aiDesc: string;
        mvpTitle: string;
        mvpDesc: string;
        cta: string;
    };
    services: {
        eyebrow: string;
        headingLead: string;
        headingHighlight: string;
        headingTail: string;
        subtitle: string;
        detail: string;
        footnote: string;
    };
    featured: {
        titleLead: string;
        titleHighlight: string;
        subtitle: string;
        viewCaseLabel: string;
        projects: Project[];
    };
    faq: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: Faq[];
        footerQuestion: string;
        footerCta: string;
    };
    workflow: {
        briefEyebrow: string;
        briefHeadingLead: string;
        briefHeadingHighlight: string;
        briefSubtitle: string;
        briefCta: string;
        detailedEyebrow: string;
        detailedHeadingLead: string;
        detailedHeadingHighlight: string;
        detailedSubtitle: string;
        detailedCta: string;
        deliverablesLabel: string;
        phases: Phase[];
    };
};

export const home: Record<Lang, HomeCopy> = {
    es: {
        hero: {
            titleLead: "Construimos el ",
            titleHighlight: "futuro",
            titleTail: " de tu operación.",
            subtitle:
                "Desarrollo de software, aplicaciones e inteligencia artificial a medida para empresas en operación. Quitamos el trabajo manual, desatascamos la operación y dejamos a tu equipo dueño del sistema.",
            ctaPrimary: "Solicitar diagnóstico",
            ctaSecondary: "Ver cómo trabajamos",
            locationTag: "Desde México · Disponibles en todo el mundo",
        },
        about: {
            eyebrow: "¿Por qué existimos?",
            body: "La mayoría de las agencias vende software que los equipos nunca llegan a operar. Eso no resuelve problemas, los disfraza. Sync existe para hacer lo opuesto: entendemos la operación real, educamos al equipo sobre sus cuellos de botella, y entregamos soluciones hechas para que tu equipo las opere — con mantenimiento continuo de nuestro lado.",
            role: "Co-fundador de Sync",
        },
        offerings: {
            eyebrow: "¿Qué podemos construir?",
            subtitle:
                "El software es el medio, no el fin. Construimos la herramienta que tu operación necesita — y nos quedamos para que siga sirviendo mientras creces.",
            platformsTitle: "Software a medida",
            platformsDesc:
                "Sistemas internos que se ajustan a cómo ya trabajas, no al revés. Tu equipo los opera; el mantenimiento queda de nuestro lado.",
            aiTitle: "Agentes de IA",
            aiDesc: "Le quitamos a tu equipo el trabajo repetitivo. Hacen la tarea, te avisan cuando algo necesita tu decisión, y siempre ves qué están haciendo y por qué.",
            mvpTitle: "MVP",
            mvpDesc: "Construimos lo justo para salir al mundo y aprender de gente real. Sin gastar de más: validamos rápido y, desde ahí, crecemos contigo.",
            cta: "Solicitar diagnóstico",
        },
        services: {
            eyebrow: "Cómo trabajamos contigo",
            headingLead: "Diagnosticamos, construimos y",
            headingHighlight: "entregamos",
            headingTail: ".",
            subtitle:
                "Tres fases para entender tu operación, construir la herramienta y dejar a tu equipo al mando. No entregamos y desaparecemos: desde aquí arranca la relación.",
            detail: "Ver detalle",
            footnote:
                "Las tres juntas. Entregar solo el software es desplazar el problema, no resolverlo.",
        },
        featured: {
            titleLead: "Casos de estudio ",
            titleHighlight: "destacados",
            subtitle:
                "Proyectos reales, hoy en producción. Los acompañamos del diagnóstico hasta el producto final.",
            viewCaseLabel: "Ver caso de estudio",
            projects: [
                {
                    id: "ima-cloud",
                    title: "IMA Cloud",
                    description:
                        "Plataforma interna a medida que centraliza reportes, documentación e inventario para una empresa de electrificación ferroviaria — del diagnóstico al producto en operación.",
                    imageAlt: "IMA Cloud",
                },
                {
                    id: "butaqueando",
                    title: "Butaqueando",
                    description:
                        "App para descubrir, seguir y no perderse las obras teatrales en cartelera.",
                    imageAlt:
                        "Butaqueando — mockup de la plataforma para descubrir obras teatrales",
                },
            ],
        },
        faq: {
            eyebrow: "Preguntas frecuentes",
            title: "Lo que casi siempre preguntan",
            subtitle:
                "Respuestas breves a las dudas más recurrentes. Cada una enlaza a la página con el detalle completo.",
            items: [
                {
                    q: "¿Cómo trabajan en cada proyecto?",
                    a: "Tres fases con aprobación de tu equipo entre cada una: Diagnóstico para entender la operación y trazar el roadmap, Desarrollo en sprints de 1-2 semanas con demos en vivo, y Educación para que tu equipo opere el sistema con confianza. Cada fase cierra con una decisión: aprueba el siguiente paso o paramos a corregir.",
                    link: { href: "/como-trabajamos", label: "Ver metodología completa" },
                },
                {
                    q: "¿Cuánto cuesta un proyecto?",
                    a: "El monto exacto se cierra al final del Diagnóstico, con alcance acordado y precio fijo. No estimamos por hora con tope abierto. El Desarrollo se cobra en esquema 40/30/30 y el Plan de Acompañamiento mensual va incluido en la fase de Educación.",
                    link: { href: "/como-cobramos", label: "Ver cómo cobramos" },
                },
                {
                    q: "¿Qué tipo de soluciones construyen?",
                    a: "Software operativo a medida: portales internos, dashboards, herramientas de campo, automatización de procesos, integraciones entre sistemas, y agentes/copilotos de IA aplicados a la operación. No vendemos productos genéricos rebautizados con tu logo.",
                    link: { href: "/soluciones/desarrollo", label: "Ver Desarrollo" },
                },
                {
                    q: "¿Quién mantiene el sistema después del lanzamiento?",
                    a: "Nosotros. El Plan de Acompañamiento mensual va incluido en la fase de Educación, no como add-on. Cubre mantenimiento del sistema en producción, soporte para tu equipo, ajustes operativos y revisiones trimestrales para priorizar lo que no rinde.",
                    link: { href: "/soluciones/educacion", label: "Ver Educación" },
                },
                {
                    q: "¿Tenemos que empezar por el Diagnóstico?",
                    a: "Sí. Es el único punto de entrada. Sin entender la operación primero, cualquier propuesta es especulativa. Si decides no seguir con nosotros después del Diagnóstico, el roadmap se queda contigo: puedes ejecutarlo internamente o con otro proveedor.",
                    link: { href: "/soluciones/diagnostico", label: "Ver Diagnóstico" },
                },
                {
                    q: "¿Cómo empezamos?",
                    a: "Escríbenos contándonos sobre tu operación: qué proceso está costando más de lo que debería, qué intentaste antes y qué resultado esperas. Respondemos en menos de 24h hábiles para agendar la conversación inicial.",
                    link: { href: "/contacto", label: "Ir a contacto" },
                },
            ],
            footerQuestion: "¿Tu duda no está aquí?",
            footerCta: "Escríbenos",
        },
        workflow: {
            briefEyebrow: "Metodología",
            briefHeadingLead: "Cómo trabajamos ",
            briefHeadingHighlight: "contigo",
            briefSubtitle:
                "3 fases, cada una con entregables claros y aprobación de tu equipo antes de avanzar.",
            briefCta: "Ver la metodología completa",
            detailedEyebrow: "Proceso",
            detailedHeadingLead: "Diagnóstico, desarrollo y ",
            detailedHeadingHighlight: "educación",
            detailedSubtitle:
                "Cada fase cierra con una decisión de tu equipo: aprueba el siguiente paso o paramos a corregir. Nada avanza por inercia, nada se factura sin que sirva.",
            detailedCta: "Hablemos",
            deliverablesLabel: "Entregables",
            phases: [
                {
                    number: "01",
                    title: "Diagnóstico",
                    body: "Dos semanas dentro de tu operación: dónde se atasca el trabajo, qué datos viven en archivos sueltos y qué procesos siguen vivos por costumbre. Salimos con un plan, no con una propuesta comercial.",
                    deliverables: [
                        "Mapa de procesos y stack actual",
                        "Pain points priorizados por impacto y esfuerzo",
                        "Roadmap con fases y dependencias claras",
                        "Métricas base para medir el antes y el después",
                    ],
                },
                {
                    number: "02",
                    title: "Desarrollo",
                    body: "Construimos las soluciones que tu operación necesita iterando sobre el roadmap acordado. Cada release pasa por tu equipo antes de tocar su día a día, y se queda en producción sólo si resuelve el problema real.",
                    deliverables: [
                        "Sprints de 1 a 2 semanas con demo en vivo",
                        "Integraciones funcionando en producción, no en slides",
                        "Repositorio y documentación técnica entregables",
                        "Aprobación de tu equipo antes de cada release",
                    ],
                },
                {
                    number: "03",
                    title: "Educación",
                    body: "Tu equipo aprende a operar el sistema con confianza en el día a día, mientras nosotros lo mantenemos y evolucionamos detrás. Plan de Acompañamiento mensual incluido por defecto.",
                    note: "Plan de Acompañamiento incluido.",
                    deliverables: [
                        "Talleres prácticos por rol, no charlas genéricas",
                        "Playbooks y documentación viva, versionada con el código",
                        "Mantenimiento del sistema en producción del lado nuestro",
                        "Iteraciones mensuales priorizadas por impacto",
                    ],
                },
            ],
        },
    },
    en: {
        hero: {
            titleLead: "We build the ",
            titleHighlight: "future",
            titleTail: " of your operation.",
            subtitle:
                "Custom software, applications and artificial intelligence for working companies. We remove manual work, unblock the operation, and leave your team owning the system.",
            ctaPrimary: "Request an assessment",
            ctaSecondary: "See how we work",
            locationTag: "Based in Mexico · Available worldwide",
        },
        about: {
            eyebrow: "Why do we exist?",
            body: "Most agencies sell software that teams never actually operate. That doesn't solve problems, it disguises them. Sync exists to do the opposite: we understand the real operation, educate the team about its bottlenecks, and deliver solutions built for your team to operate — with ongoing maintenance on our side.",
            role: "Co-founder of Sync",
        },
        offerings: {
            eyebrow: "What can we build?",
            subtitle:
                "Software is the means, not the end. We build the tool your operation needs — and we stay so it keeps serving as you grow.",
            platformsTitle: "Custom software",
            platformsDesc:
                "Internal systems that fit how you already work, not the other way around. Your team operates them; maintenance stays on our side.",
            aiTitle: "AI agents",
            aiDesc: "We take repetitive work off your team. They do the task, flag you when something needs your decision, and you always see what they're doing and why.",
            mvpTitle: "MVP",
            mvpDesc: "We build just enough to ship to the world and learn from real people. Without overspending: we validate fast and grow with you from there.",
            cta: "Request an assessment",
        },
        services: {
            eyebrow: "How we work with you",
            headingLead: "We assess, we build, and we",
            headingHighlight: "deliver",
            headingTail: ".",
            subtitle:
                "Three phases to understand your operation, build the tool, and leave your team in charge. We don't deliver and disappear: this is where the relationship starts.",
            detail: "View detail",
            footnote:
                "All three together. Delivering only the software moves the problem, it doesn't solve it.",
        },
        featured: {
            titleLead: "Featured ",
            titleHighlight: "case studies",
            subtitle:
                "Real projects, in production today. We accompany them from the assessment to the final product.",
            viewCaseLabel: "View case study",
            projects: [
                {
                    id: "ima-cloud",
                    title: "IMA Cloud",
                    description:
                        "A custom internal platform that centralizes reports, documentation and inventory for a railway electrification company — from assessment to a product in operation.",
                    imageAlt: "IMA Cloud",
                },
                {
                    id: "butaqueando",
                    title: "Butaqueando",
                    description:
                        "An app to discover, follow and never miss the theater plays currently showing.",
                    imageAlt:
                        "Butaqueando — mockup of the platform for discovering theater plays",
                },
            ],
        },
        faq: {
            eyebrow: "FAQ",
            title: "What people almost always ask",
            subtitle:
                "Short answers to the most recurring questions. Each one links to the page with the full detail.",
            items: [
                {
                    q: "How do you work on each project?",
                    a: "Three phases with your team's approval between each one: Assessment to understand the operation and draw the roadmap, Development in 1-2 week sprints with live demos, and Enablement so your team operates the system with confidence. Each phase closes with a decision: approve the next step or stop to correct.",
                    link: { href: "/en/how-we-work", label: "See the full methodology" },
                },
                {
                    q: "How much does a project cost?",
                    a: "The exact amount is set at the end of the Assessment, with agreed scope and a fixed price. We don't estimate by the hour with an open cap. Development is billed on a 40/30/30 schedule and the monthly Support Plan is included in the Enablement phase.",
                    link: { href: "/en/pricing", label: "See how we charge" },
                },
                {
                    q: "What kind of solutions do you build?",
                    a: "Custom operational software: internal portals, dashboards, field tools, process automation, integrations between systems, and AI agents/copilots applied to the operation. We don't sell generic products rebranded with your logo.",
                    link: { href: "/en/solutions/development", label: "See Development" },
                },
                {
                    q: "Who maintains the system after launch?",
                    a: "We do. The monthly Support Plan is included in the Enablement phase, not as an add-on. It covers maintenance of the system in production, support for your team, operational adjustments and quarterly reviews to prioritize what isn't performing.",
                    link: { href: "/en/solutions/enablement", label: "See Enablement" },
                },
                {
                    q: "Do we have to start with the Assessment?",
                    a: "Yes. It's the only entry point. Without understanding the operation first, any proposal is speculative. If you decide not to continue with us after the Assessment, the roadmap stays with you: you can execute it in-house or with another provider.",
                    link: { href: "/en/solutions/assessment", label: "See Assessment" },
                },
                {
                    q: "How do we start?",
                    a: "Write to us telling us about your operation: which process is costing more than it should, what you tried before, and what result you expect. We respond within 24 business hours to schedule the first conversation.",
                    link: { href: "/en/contact", label: "Go to contact" },
                },
            ],
            footerQuestion: "Your question isn't here?",
            footerCta: "Write to us",
        },
        workflow: {
            briefEyebrow: "Methodology",
            briefHeadingLead: "How we work ",
            briefHeadingHighlight: "with you",
            briefSubtitle:
                "3 phases, each with clear deliverables and your team's approval before moving on.",
            briefCta: "See the full methodology",
            detailedEyebrow: "Process",
            detailedHeadingLead: "Assessment, development and ",
            detailedHeadingHighlight: "enablement",
            detailedSubtitle:
                "Each phase closes with a decision from your team: approve the next step or stop to correct. Nothing moves by inertia, nothing is billed unless it's useful.",
            detailedCta: "Let's talk",
            deliverablesLabel: "Deliverables",
            phases: [
                {
                    number: "01",
                    title: "Assessment",
                    body: "Two weeks inside your operation: where the work gets stuck, which data lives in loose files, and which processes are still alive out of habit. We come out with a plan, not a sales proposal.",
                    deliverables: [
                        "Map of current processes and stack",
                        "Pain points prioritized by impact and effort",
                        "Roadmap with clear phases and dependencies",
                        "Baseline metrics to measure before and after",
                    ],
                },
                {
                    number: "02",
                    title: "Development",
                    body: "We build the solutions your operation needs, iterating on the agreed roadmap. Every release goes through your team before it touches their day-to-day, and it stays in production only if it solves the real problem.",
                    deliverables: [
                        "1 to 2 week sprints with a live demo",
                        "Integrations working in production, not in slides",
                        "Repository and technical documentation delivered",
                        "Your team's approval before each release",
                    ],
                },
                {
                    number: "03",
                    title: "Enablement",
                    body: "Your team learns to operate the system with confidence day-to-day, while we maintain and evolve it behind the scenes. Monthly Support Plan included by default.",
                    note: "Support Plan included.",
                    deliverables: [
                        "Hands-on workshops by role, not generic talks",
                        "Playbooks and living docs, versioned with the code",
                        "Maintenance of the system in production on our side",
                        "Monthly iterations prioritized by impact",
                    ],
                },
            ],
        },
    },
};
