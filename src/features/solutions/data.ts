import type { Lang } from "@i18n/ui";

export type SolutionTheme = "dark" | "mid" | "light";

export type SolutionLink = {
    href: string;
    label: string;
};

export type SolutionSection = {
    title: string;
    body?: string;
    items?: string[];
    link?: SolutionLink;
};

export type SolutionFaq = {
    q: string;
    a: string;
    link?: SolutionLink;
};

export type SolutionCta = {
    label: string;
    href: string;
};

/** All locale-specific copy for one solution. */
export type SolutionCopy = {
    title: string;
    highlight: string;
    intro: string;
    lead: string;
    bulletsLabel: string;
    bullets: string[];
    deliverable: string;
    timing: string;
    sections: SolutionSection[];
    outcomes: string[];
    faqs: SolutionFaq[];
    cta: SolutionCta | null;
};

/** A solution entry: locale-neutral keys + per-locale slug and copy. */
export type SolutionEntry = {
    /** Stable, locale-neutral identifier (used for slug pairing). */
    key: string;
    number: string;
    themeKey: SolutionTheme;
    relatedCaseStudies: string[];
    slug: Record<Lang, string>;
    copy: Record<Lang, SolutionCopy>;
};

/** Flattened, single-locale view used by templates and nav. */
export type Solution = SolutionCopy & {
    key: string;
    number: string;
    themeKey: SolutionTheme;
    relatedCaseStudies: string[];
    slug: string;
};

export const solutionEntries: SolutionEntry[] = [
    {
        key: "diagnostico",
        number: "01",
        themeKey: "dark",
        relatedCaseStudies: ["ima-cloud"],
        slug: { es: "diagnostico", en: "assessment" },
        copy: {
            es: {
                title: "Diagnóstico",
                highlight: "verdad",
                intro: "Entendemos tu operación antes de proponer una solución.",
                lead: "Antes de proponer software, mapeamos cómo se mueve el trabajo hoy. No para venderte un PowerPoint con buzzwords, sino para saber qué resolver primero y qué dejar tranquilo.",
                bulletsLabel: "En esta fase:",
                bullets: [
                    "Mapeo de procesos actuales con tu equipo",
                    "Identificación de cuellos de botella reales",
                    "Mapa de oportunidades priorizado por impacto",
                ],
                deliverable: "Un roadmap operativo, no un presupuesto especulativo.",
                timing: "2-3 semanas · Precio fijo",
                sections: [
                    {
                        title: "¿Cómo lo hacemos?",
                        body: "Dos a tres semanas dentro de tu operación. Entrevistas con operadores, supervisores y dirección. Observación de los flujos reales, no de los manuales. Auditoría de las herramientas y los datos que ya existen.",
                        items: [
                            "Entrevistas por rol, no encuestas masivas",
                            "Observación en sitio o en sesiones de trabajo grabadas",
                            "Auditoría de stack, accesos y deuda técnica",
                            "Revisión de métricas existentes (o ausencia de ellas)",
                        ],
                    },
                    {
                        title: "¿Qué entregamos al cierre?",
                        items: [
                            "Mapa de procesos con puntos de fricción marcados",
                            "Pain points priorizados por impacto y esfuerzo",
                            "Roadmap por fases con dependencias y orden recomendado",
                            "Métricas base para medir el antes y el después",
                            "Recomendaciones claras sobre construir vs comprar",
                        ],
                    },
                    {
                        title: "Lo que no hacemos",
                        items: [
                            "Propuestas genéricas reescritas con el nombre de tu empresa",
                            "Recomendaciones sin datos detrás",
                            "Diagnósticos que ignoran lo que tu equipo ya sabe",
                        ],
                    },
                ],
                outcomes: [
                    "Decidir con datos qué resolver primero",
                    "Caso de negocio y roadmap técnico en el mismo documento",
                    "Métricas base para evaluar mejoras",
                    "Claridad sobre qué vale construir y qué no",
                ],
                faqs: [
                    {
                        q: "¿Cuánto dura el diagnóstico?",
                        a: "Entre 2 y 3 semanas, dependiendo del tamaño de la operación. Precio fijo desde el primer día.",
                    },
                    {
                        q: "¿Tenemos que darles acceso a todo?",
                        a: "Acceso de lectura es suficiente. Si hay restricciones por compliance o seguridad, adaptamos el alcance sin romper tus políticas.",
                    },
                    {
                        q: "¿Qué pasa si decidimos no seguir con ustedes?",
                        a: "El roadmap es tuyo. Puedes ejecutarlo internamente o con otro proveedor, sin candados.",
                    },
                    {
                        q: "¿Necesitamos un equipo técnico para el diagnóstico?",
                        a: "No. Trabajamos con quien opere el día a día. La parte técnica la cubrimos nosotros.",
                    },
                ],
                cta: { label: "Solicitar diagnóstico", href: "/contacto" },
            },
            en: {
                title: "Assessment",
                highlight: "truth",
                intro: "We understand your operation before proposing a solution.",
                lead: "Before proposing software, we map how the work moves today. Not to sell you a PowerPoint full of buzzwords, but to know what to solve first and what to leave alone.",
                bulletsLabel: "In this phase:",
                bullets: [
                    "Mapping current processes with your team",
                    "Identifying the real bottlenecks",
                    "An opportunity map prioritized by impact",
                ],
                deliverable: "An operational roadmap, not a speculative quote.",
                timing: "2-3 weeks · Fixed price",
                sections: [
                    {
                        title: "How do we do it?",
                        body: "Two to three weeks inside your operation. Interviews with operators, supervisors and leadership. Watching the real workflows, not the manuals. An audit of the tools and data that already exist.",
                        items: [
                            "Interviews by role, not mass surveys",
                            "On-site observation or recorded working sessions",
                            "Audit of stack, access and technical debt",
                            "Review of existing metrics (or their absence)",
                        ],
                    },
                    {
                        title: "What do we hand over at the end?",
                        items: [
                            "A process map with friction points flagged",
                            "Pain points prioritized by impact and effort",
                            "A phased roadmap with dependencies and a recommended order",
                            "Baseline metrics to measure before and after",
                            "Clear build-vs-buy recommendations",
                        ],
                    },
                    {
                        title: "What we don't do",
                        items: [
                            "Generic proposals rewritten with your company's name",
                            "Recommendations with no data behind them",
                            "Assessments that ignore what your team already knows",
                        ],
                    },
                ],
                outcomes: [
                    "Decide with data what to solve first",
                    "Business case and technical roadmap in the same document",
                    "Baseline metrics to evaluate improvements",
                    "Clarity on what's worth building and what isn't",
                ],
                faqs: [
                    {
                        q: "How long does the assessment take?",
                        a: "Between 2 and 3 weeks, depending on the size of the operation. Fixed price from day one.",
                    },
                    {
                        q: "Do we have to give you access to everything?",
                        a: "Read access is enough. If there are compliance or security restrictions, we adapt the scope without breaking your policies.",
                    },
                    {
                        q: "What if we decide not to continue with you?",
                        a: "The roadmap is yours. You can execute it in-house or with another provider — no lock-in.",
                    },
                    {
                        q: "Do we need a technical team for the assessment?",
                        a: "No. We work with whoever runs the day-to-day. We cover the technical side.",
                    },
                ],
                cta: { label: "Request an assessment", href: "/en/contact" },
            },
        },
    },
    {
        key: "desarrollo",
        number: "02",
        themeKey: "mid",
        relatedCaseStudies: ["ima-cloud"],
        slug: { es: "desarrollo", en: "development" },
        copy: {
            es: {
                title: "Desarrollo",
                highlight: "operación",
                intro: "Software a medida para los problemas operativos que el producto empaquetado no resuelve.",
                lead: "Construimos las soluciones que tu operación necesita: portales, automatizaciones, integraciones y copilotos de IA pensados alrededor de cómo trabaja tu equipo, no al revés. Iteramos sobre el roadmap acordado en diagnóstico, con tu equipo aprobando cada entrega antes de que toque producción.",
                bulletsLabel: "Soluciones que entregamos:",
                bullets: [
                    "Software operativo a medida — portales internos, dashboards, herramientas de campo",
                    "Automatización de procesos — workflows, reporting, sincronización entre sistemas",
                    "IA aplicada a la operación — agentes, copilotos y LLMs integrados donde suman",
                ],
                deliverable:
                    "Soluciones operativas que resuelven problemas concretos, no plataformas genéricas adaptadas a la fuerza.",
                timing: "Sprints de 1-2 semanas · Precio fijo cerrado en Diagnóstico",
                sections: [
                    {
                        title: "¿Qué resolvemos?",
                        items: [
                            "Procesos manuales que consumen horas y generan errores",
                            "Sistemas que no se hablan y obligan a exportar Excel entre áreas",
                            "Reportes que se arman a mano cada semana o cada mes",
                            "Decisiones operativas tomadas sin datos en tiempo real",
                            "Tareas repetitivas que un copiloto o agente puede absorber",
                        ],
                    },
                    {
                        title: "¿Cómo trabajamos?",
                        body: "Sprints de 1 a 2 semanas con demo en vivo. Cada release pasa por tu equipo antes de cambiar el día a día. El código vive en tu repositorio, no en el nuestro.",
                        items: [
                            "Demos cada sprint con feedback en la sala",
                            "Aprobación de tu equipo antes de cada release",
                            "Repositorio y documentación entregables desde el día uno",
                        ],
                    },
                    {
                        title: "Stack que usamos",
                        body: "Adaptamos el stack a lo que tu equipo pueda mantener, no al revés. Trabajamos principalmente con TypeScript, Next.js, Go, Python, Postgres y MongoDB. Si ya tienes preferencias técnicas o restricciones, las respetamos.",
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
                outcomes: [
                    "Herramientas en producción que resuelven el problema real",
                    "Documentación versionada con el código, no PDFs muertos",
                    "Integraciones reales, no exportes de Excel manuales",
                ],
                faqs: [
                    {
                        q: "¿Cuánto tarda construir?",
                        a: "Depende del alcance acordado en diagnóstico. Damos rangos por fase, no un número inflado al inicio.",
                        link: { href: "/como-cobramos", label: "Cómo estructuramos los precios" },
                    },
                    {
                        q: "¿Pueden integrarse con nuestros sistemas actuales?",
                        a: "Sí. La mayoría de proyectos incluyen integraciones con ERPs, CRMs, herramientas de campo o sistemas legacy.",
                    },
                    {
                        q: "¿Quién mantiene el sistema después del lanzamiento?",
                        a: "Nosotros. El Plan de Acompañamiento mensual va incluido en la fase de Educación, no como add-on.",
                    },
                    {
                        q: "¿Trabajan con nuestros proveedores actuales?",
                        a: "Sí, si las responsabilidades quedan claras desde el inicio. No competimos, completamos.",
                    },
                ],
                cta: null,
            },
            en: {
                title: "Development",
                highlight: "operation",
                intro: "Custom software for the operational problems that off-the-shelf products don't solve.",
                lead: "We build the solutions your operation needs: portals, automations, integrations and AI copilots designed around how your team works, not the other way around. We iterate on the roadmap agreed in the assessment, with your team approving every delivery before it touches production.",
                bulletsLabel: "Solutions we deliver:",
                bullets: [
                    "Custom operational software — internal portals, dashboards, field tools",
                    "Process automation — workflows, reporting, syncing between systems",
                    "AI applied to the operation — agents, copilots and LLMs integrated where they add value",
                ],
                deliverable:
                    "Operational solutions that solve concrete problems, not generic platforms forced to fit.",
                timing: "1-2 week sprints · Fixed price set in the Assessment",
                sections: [
                    {
                        title: "What do we solve?",
                        items: [
                            "Manual processes that eat hours and generate errors",
                            "Systems that don't talk and force exporting Excel between teams",
                            "Reports assembled by hand every week or every month",
                            "Operational decisions made without real-time data",
                            "Repetitive tasks a copilot or agent can absorb",
                        ],
                    },
                    {
                        title: "How do we work?",
                        body: "1 to 2 week sprints with a live demo. Every release goes through your team before it changes the day-to-day. The code lives in your repository, not ours.",
                        items: [
                            "Demos every sprint with feedback in the room",
                            "Your team's approval before each release",
                            "Repository and documentation delivered from day one",
                        ],
                    },
                    {
                        title: "The stack we use",
                        body: "We adapt the stack to what your team can maintain, not the other way around. We work mainly with TypeScript, Next.js, Go, Python, Postgres and MongoDB. If you already have technical preferences or constraints, we respect them.",
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
                outcomes: [
                    "Tools in production that solve the real problem",
                    "Documentation versioned with the code, not dead PDFs",
                    "Real integrations, not manual Excel exports",
                ],
                faqs: [
                    {
                        q: "How long does it take to build?",
                        a: "It depends on the scope agreed in the assessment. We give ranges per phase, not an inflated number up front.",
                        link: { href: "/en/pricing", label: "How we structure pricing" },
                    },
                    {
                        q: "Can you integrate with our current systems?",
                        a: "Yes. Most projects include integrations with ERPs, CRMs, field tools or legacy systems.",
                    },
                    {
                        q: "Who maintains the system after launch?",
                        a: "We do. The monthly Support Plan is included in the Enablement phase, not as an add-on.",
                    },
                    {
                        q: "Do you work with our current vendors?",
                        a: "Yes, as long as responsibilities are clear from the start. We don't compete, we complete.",
                    },
                ],
                cta: null,
            },
        },
    },
    {
        key: "educacion",
        number: "03",
        themeKey: "light",
        relatedCaseStudies: ["ima-cloud"],
        slug: { es: "educacion", en: "enablement" },
        copy: {
            es: {
                title: "Educación",
                highlight: "autonomía",
                intro: "Tu equipo aprende a usar software construido alrededor de su operación.",
                lead: "Educación no es enseñar el software. Es asegurar que tu equipo opere el sistema con confianza en el día a día, mientras nosotros lo mantenemos y evolucionamos detrás.",
                bulletsLabel: "Lo que entregamos:",
                bullets: [
                    "Talleres prácticos por rol (operador, supervisor, dirección)",
                    "Documentación operativa y playbooks de uso",
                    "Programas de adopción de IA donde aplique",
                    "Plan de Acompañamiento mensual incluido",
                ],
                deliverable:
                    "Capacidad operativa real — no archivos PDF que nadie lee.",
                timing: "Programa por roles · Plan de Acompañamiento mensual incluido",
                sections: [
                    {
                        title: "¿Cómo entrenamos?",
                        body: "Talleres prácticos con datos reales del sistema, no demos genéricas. Sesiones por rol para no saturar a quien no necesita ese nivel de detalle. Sesiones grabadas para nuevos miembros que se incorporen después.",
                        items: [
                            "Talleres por rol: operador, supervisor, dirección",
                            "Ejercicios sobre flujos reales, no en sandbox",
                            "Sesiones grabadas y editadas para onboarding futuro",
                            "Resolución de dudas en vivo, no por ticket",
                        ],
                    },
                    {
                        title: "¿Qué entregamos?",
                        items: [
                            "Playbooks por rol con escenarios típicos del día a día",
                            "Documentación viva, versionada junto al código",
                            "Guías de troubleshooting para los errores más probables",
                            "Programas de adopción de IA donde sume valor",
                        ],
                    },
                    {
                        title: "Plan de Acompañamiento",
                        body: "Nos quedamos como soporte y mantenimiento del sistema después del cierre. Office hours mensuales, canal directo asíncrono y revisiones trimestrales para ajustar lo que no rinde. Incluido por defecto, no es un add-on.",
                        link: { href: "/como-cobramos", label: "Cómo se estructura" },
                    },
                    {
                        title: "Lo que no hacemos",
                        items: [
                            "Manuales PDF que nadie va a leer",
                            "Charlas genéricas sin conexión a la operación real",
                            "Capacitación de un solo shot sin acompañamiento posterior",
                        ],
                    },
                ],
                outcomes: [
                    "Equipo que opera el sistema con confianza en el día a día",
                    "Documentación que sí se mantiene actualizada",
                    "Menos tickets por dudas básicas",
                    "Adopción real, no fricción contra el software",
                ],
                faqs: [
                    {
                        q: "¿Qué roles cubren?",
                        a: "Por defecto: operador, supervisor y dirección. Adaptamos a la estructura real de tu equipo si es distinta.",
                    },
                    {
                        q: "¿Cuántas sesiones son?",
                        a: "Depende del alcance del sistema y los roles. Cerramos número exacto en la propuesta.",
                    },
                    {
                        q: "¿Es presencial o remoto?",
                        a: "Ambos modelos disponibles. Operadores suelen preferir presencial; dirección suele optar por remoto.",
                    },
                    {
                        q: "¿Qué pasa si rota gente en el equipo?",
                        a: "Las sesiones grabadas y los playbooks están pensados para onboarding futuro. Si necesitas talleres adicionales, el Plan de Acompañamiento los cubre.",
                    },
                ],
                cta: null,
            },
            en: {
                title: "Enablement",
                highlight: "autonomy",
                intro: "Your team learns to use software built around their operation.",
                lead: "Enablement isn't teaching the software. It's making sure your team operates the system with confidence day-to-day, while we maintain and evolve it behind the scenes.",
                bulletsLabel: "What we deliver:",
                bullets: [
                    "Hands-on workshops by role (operator, supervisor, leadership)",
                    "Operational documentation and usage playbooks",
                    "AI adoption programs where they apply",
                    "Monthly Support Plan included",
                ],
                deliverable:
                    "Real operational capability — not PDF files nobody reads.",
                timing: "Program by role · Monthly Support Plan included",
                sections: [
                    {
                        title: "How do we train?",
                        body: "Hands-on workshops with real system data, not generic demos. Sessions by role so we don't overload people who don't need that level of detail. Recorded sessions for new members who join later.",
                        items: [
                            "Workshops by role: operator, supervisor, leadership",
                            "Exercises on real workflows, not in a sandbox",
                            "Recorded and edited sessions for future onboarding",
                            "Live Q&A, not by ticket",
                        ],
                    },
                    {
                        title: "What do we deliver?",
                        items: [
                            "Playbooks by role with typical day-to-day scenarios",
                            "Living documentation, versioned alongside the code",
                            "Troubleshooting guides for the most likely errors",
                            "AI adoption programs where they add value",
                        ],
                    },
                    {
                        title: "Support Plan",
                        body: "We stay on for support and maintenance of the system after the close. Monthly office hours, a direct async channel and quarterly reviews to adjust what isn't performing. Included by default, not an add-on.",
                        link: { href: "/en/pricing", label: "How it's structured" },
                    },
                    {
                        title: "What we don't do",
                        items: [
                            "PDF manuals nobody is going to read",
                            "Generic talks with no connection to the real operation",
                            "One-shot training with no follow-up support",
                        ],
                    },
                ],
                outcomes: [
                    "A team that operates the system with confidence day-to-day",
                    "Documentation that actually stays up to date",
                    "Fewer tickets over basic questions",
                    "Real adoption, not friction against the software",
                ],
                faqs: [
                    {
                        q: "Which roles do you cover?",
                        a: "By default: operator, supervisor and leadership. We adapt to your team's actual structure if it differs.",
                    },
                    {
                        q: "How many sessions are there?",
                        a: "It depends on the scope of the system and the roles. We set the exact number in the proposal.",
                    },
                    {
                        q: "Is it in person or remote?",
                        a: "Both models are available. Operators tend to prefer in person; leadership tends to opt for remote.",
                    },
                    {
                        q: "What if people rotate off the team?",
                        a: "The recorded sessions and playbooks are designed for future onboarding. If you need extra workshops, the Support Plan covers them.",
                    },
                ],
                cta: null,
            },
        },
    },
];

/** Localized list of solutions for a given locale. */
export const getSolutions = (lang: Lang): Solution[] =>
    solutionEntries.map((entry) => ({
        key: entry.key,
        number: entry.number,
        themeKey: entry.themeKey,
        relatedCaseStudies: entry.relatedCaseStudies,
        slug: entry.slug[lang],
        ...entry.copy[lang],
    }));

/** Look up a solution by its locale-specific slug. */
export const getSolutionBySlug = (
    lang: Lang,
    slug: string,
): Solution | undefined => getSolutions(lang).find((s) => s.slug === slug);

/** The slug of a solution (by stable key) in the given locale. */
export const solutionSlug = (key: string, lang: Lang): string | undefined =>
    solutionEntries.find((e) => e.key === key)?.slug[lang];
