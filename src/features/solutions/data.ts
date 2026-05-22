export type SolutionTheme = "dark" | "mid" | "light";

export type SolutionSection = {
    title: string;
    body?: string;
    items?: string[];
};

export type SolutionFaq = {
    q: string;
    a: string;
};

export type SolutionCta = {
    label: string;
    href: string;
};

export type Solution = {
    id: string;
    number: string;
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
    relatedCaseStudies: string[];
    cta: SolutionCta | null;
    themeKey: SolutionTheme;
};

export const solutions: Solution[] = [
    {
        id: "diagnostico",
        number: "01",
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
        relatedCaseStudies: ["ima-cloud"],
        cta: { label: "Solicitar diagnóstico", href: "/contacto" },
        themeKey: "dark",
    },
    {
        id: "desarrollo",
        number: "02",
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
                a: "Depende del alcance acordado en diagnóstico. Damos rangos por fase, no un número inflado al inicio. Cómo estructuramos los precios en /como-cobramos.",
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
        relatedCaseStudies: ["ima-cloud"],
        cta: null,
        themeKey: "mid",
    },
    {
        id: "educacion",
        number: "03",
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
                body: "Nos quedamos como soporte y mantenimiento del sistema después del cierre. Office hours mensuales, canal directo asíncrono y revisiones trimestrales para ajustar lo que no rinde. Incluido por defecto, no es un add-on. Cómo se estructura en /como-cobramos.",
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
        relatedCaseStudies: ["ima-cloud"],
        cta: null,
        themeKey: "light",
    },
];

export const getSolution = (id: string): Solution | undefined =>
    solutions.find((s) => s.id === id);
