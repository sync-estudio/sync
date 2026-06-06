import type { Lang } from "@i18n/ui";

type Phase = {
    number: string;
    title: string;
    timing: string;
    body: string;
    items: string[];
};

type PricingCopy = {
    metaTitle: string;
    metaDescription: string;
    headerLabel: string;
    headerTitle: string;
    headerHighlight: string;
    headerSubtitle: string;
    headerHelper: string;
    ctaLabel: string;
    phases: Phase[];
    supportEyebrow: string;
    supportHeading: string;
    supportBody1: string;
    supportBody2: string;
    paymentLabel: string;
    paymentTitle: string;
    paymentTerms: string[];
    faqLabel: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    footerSecondary: string;
};

export const pricing: Record<Lang, PricingCopy> = {
    es: {
        metaTitle: "¿Cómo cobramos? | Sync Estudio",
        metaDescription:
            "Cómo estructuramos precios y pagos en Diagnóstico, Desarrollo y Plan de Acompañamiento mensual. Precio fijo cerrado al cierre del Diagnóstico, sin estimaciones por hora con tope abierto.",
        headerLabel: "Modelo de precios",
        headerTitle: "¿Cómo cobramos?",
        headerHighlight: "cobramos",
        headerSubtitle:
            "Esta página describe el modelo: cómo estructuramos precios y pagos en cada fase, sin números cerrados. El monto exacto se define al cierre del Diagnóstico, con alcance acordado y precio fijo, no estimaciones por hora con tope abierto.",
        headerHelper: "¿Necesitas un número? Empieza por el Diagnóstico.",
        ctaLabel: "Solicitar diagnóstico",
        phases: [
            {
                number: "01",
                title: "Diagnóstico",
                timing: "2-3 semanas · Precio fijo",
                body: "Mapeo de procesos y stack actual, pain points priorizados y roadmap por fases. Es el único punto de entrada: sin Diagnóstico no construimos.",
                items: [
                    "Precio fijo desde el primer día",
                    "Entregable: roadmap operativo y técnico",
                    "Si decides no seguir, el roadmap se queda contigo",
                ],
            },
            {
                number: "02",
                title: "Desarrollo",
                timing: "Sprints de 1-2 semanas · Precio fijo",
                body: "Precio fijo cerrado al final del Diagnóstico, no estimaciones por hora. El número se calcula sobre el alcance acordado, ponderado por complejidad técnica, urgencia, tamaño y claridad de requerimientos.",
                items: [
                    "Esquema estándar 40/30/30 (inicio, mitad, entrega)",
                    "Proyectos pequeños: 50/50",
                    "Iteraciones por sprint hasta cierre del alcance acordado",
                ],
            },
            {
                number: "03",
                title: "Plan de Acompañamiento",
                timing: "Mensual · Mínimo 12 meses",
                body: "Mantenimiento, soporte y evolución del sistema en producción. Obligatorio para todos los proyectos: sin acompañamiento, el software se vuelve deuda en 6 meses.",
                items: [
                    "Tres tiers según volumen y frecuencia de soporte",
                    "Cubre roles nuevos, ajustes operativos y mantenimiento",
                    "Revisiones trimestrales para priorizar lo que no rinde",
                ],
            },
        ],
        supportEyebrow: "Planes de Acompañamiento",
        supportHeading: "¿Qué incluye?",
        supportBody1:
            "Mantenimiento del sistema en producción, soporte para tu equipo, bolsa mensual de horas para ajustes y nuevas funcionalidades, y revisiones periódicas para priorizar lo que no rinde. El alcance exacto depende del tamaño del sistema y de la frecuencia de cambios esperada.",
        supportBody2:
            "Manejamos tres niveles: Esenciales, Crecimiento y Premium. El nivel adecuado se define al cierre del Diagnóstico, una vez que conocemos la operación.",
        paymentLabel: "Esquema de pago",
        paymentTitle: "¿Cómo se cobra?",
        paymentTerms: [
            "Diagnóstico: 100% al inicio. Precio fijo cerrado en la propuesta.",
            "Desarrollo (estándar): 40% al inicio, 30% a la mitad del alcance, 30% contra entrega.",
            "Desarrollo (proyectos pequeños): 50% al inicio, 50% contra entrega.",
            "Plan de Acompañamiento: mensual por adelantado, mínimo 12 meses.",
        ],
        faqLabel: "Preguntas frecuentes",
        faqTitle: "Lo que casi siempre preguntan",
        faqs: [
            {
                q: "¿Por qué el Plan de Acompañamiento es obligatorio?",
                a: "Software operativo sin mantenimiento se vuelve deuda en pocos meses: integraciones que se rompen, roles nuevos sin onboarding, procesos que evolucionan más rápido que la documentación. El acompañamiento mantiene el sistema vivo y útil; sin él, lo que entregamos hoy se vuelve un problema mañana.",
            },
            {
                q: "¿Por qué mínimo 12 meses?",
                a: "Los primeros meses son adopción, no estado estable. La operación cambia, salen ajustes y el equipo necesita acompañamiento real. Doce meses es el horizonte mínimo para que el sistema deje de ser proyecto y se vuelva parte de la operación.",
            },
            {
                q: "¿Cómo se calcula el precio del Desarrollo?",
                a: "Al final del Diagnóstico estimamos horas por entregable y aplicamos una tarifa con multiplicadores por complejidad técnica, urgencia, tamaño del alcance y claridad de requerimientos. El resultado es un número fijo, no una estimación por hora con tope abierto.",
            },
            {
                q: "¿Cobran en USD o MXN?",
                a: "Por defecto, MXN. Para clientes fuera de México facturamos en USD al tipo de cambio del día de la propuesta.",
            },
        ],
        footerSecondary: "Ver soluciones",
    },
    en: {
        metaTitle: "How we charge | Sync Estudio",
        metaDescription:
            "How we structure pricing and payments across Assessment, Development and the monthly Support Plan. Fixed price set at the close of the Assessment, no open-ended hourly estimates.",
        headerLabel: "Pricing model",
        headerTitle: "How we charge",
        headerHighlight: "charge",
        headerSubtitle:
            "This page describes the model: how we structure pricing and payments in each phase, without fixed numbers. The exact amount is defined at the close of the Assessment, with agreed scope and a fixed price, not open-ended hourly estimates.",
        headerHelper: "Need a number? Start with the Assessment.",
        ctaLabel: "Request an assessment",
        phases: [
            {
                number: "01",
                title: "Assessment",
                timing: "2-3 weeks · Fixed price",
                body: "Mapping of current processes and stack, prioritized pain points and a phased roadmap. It's the only entry point: without the Assessment we don't build.",
                items: [
                    "Fixed price from day one",
                    "Deliverable: operational and technical roadmap",
                    "If you decide not to continue, the roadmap stays with you",
                ],
            },
            {
                number: "02",
                title: "Development",
                timing: "1-2 week sprints · Fixed price",
                body: "Fixed price set at the end of the Assessment, not hourly estimates. The number is calculated on the agreed scope, weighted by technical complexity, urgency, size and clarity of requirements.",
                items: [
                    "Standard 40/30/30 schedule (start, midpoint, delivery)",
                    "Small projects: 50/50",
                    "Iterations per sprint until the agreed scope closes",
                ],
            },
            {
                number: "03",
                title: "Support Plan",
                timing: "Monthly · Minimum 12 months",
                body: "Maintenance, support and evolution of the system in production. Mandatory for all projects: without support, the software becomes debt in 6 months.",
                items: [
                    "Three tiers by volume and support frequency",
                    "Covers new roles, operational adjustments and maintenance",
                    "Quarterly reviews to prioritize what isn't performing",
                ],
            },
        ],
        supportEyebrow: "Support Plans",
        supportHeading: "What's included?",
        supportBody1:
            "Maintenance of the system in production, support for your team, a monthly pool of hours for adjustments and new features, and periodic reviews to prioritize what isn't performing. The exact scope depends on the size of the system and the expected frequency of changes.",
        supportBody2:
            "We run three tiers: Essentials, Growth and Premium. The right tier is defined at the close of the Assessment, once we know the operation.",
        paymentLabel: "Payment schedule",
        paymentTitle: "How is it billed?",
        paymentTerms: [
            "Assessment: 100% up front. Fixed price set in the proposal.",
            "Development (standard): 40% up front, 30% at the scope midpoint, 30% on delivery.",
            "Development (small projects): 50% up front, 50% on delivery.",
            "Support Plan: monthly in advance, minimum 12 months.",
        ],
        faqLabel: "FAQ",
        faqTitle: "What people almost always ask",
        faqs: [
            {
                q: "Why is the Support Plan mandatory?",
                a: "Operational software without maintenance becomes debt in a few months: integrations that break, new roles without onboarding, processes that evolve faster than the documentation. Support keeps the system alive and useful; without it, what we deliver today becomes a problem tomorrow.",
            },
            {
                q: "Why a minimum of 12 months?",
                a: "The first months are adoption, not steady state. The operation changes, adjustments come up, and the team needs real support. Twelve months is the minimum horizon for the system to stop being a project and become part of the operation.",
            },
            {
                q: "How is the Development price calculated?",
                a: "At the end of the Assessment we estimate hours per deliverable and apply a rate with multipliers for technical complexity, urgency, scope size and clarity of requirements. The result is a fixed number, not an open-ended hourly estimate.",
            },
            {
                q: "Do you charge in USD or MXN?",
                a: "By default, MXN. For clients outside Mexico we bill in USD at the exchange rate on the day of the proposal.",
            },
        ],
        footerSecondary: "See solutions",
    },
};
