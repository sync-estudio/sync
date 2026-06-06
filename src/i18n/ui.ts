export const languages = {
    es: "Español",
    en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

/**
 * Flat dictionary for UI chrome: nav, footer, page-level labels, breadcrumbs,
 * site-meta defaults. Page prose lives in `src/i18n/content/*` instead.
 */
export const ui = {
    es: {
        // Site meta defaults (Layout)
        "meta.title": "Desarrollo de software, apps e IA en México | SYNC Estudio",
        "meta.description":
            "Desarrollo de software, aplicaciones e inteligencia artificial a medida para empresas en México. Rediseñamos flujos, formamos a tu equipo y mantenemos las herramientas del lado nuestro.",
        "meta.ogTitle":
            "Desarrollo de software, apps e IA a medida en México | SYNC Estudio",
        "meta.ogDescription":
            "Software, aplicaciones e IA a medida para empresas en operación en México. Construimos las herramientas, rediseñamos los flujos y formamos a tu equipo — con mantenimiento continuo de nuestro lado.",
        "meta.ogImageAlt":
            "SYNC Estudio — Software e IA a medida para empresas en operación",

        // Navbar
        "nav.home": "Inicio",
        "nav.about": "Nosotros",
        "nav.solutions": "Soluciones",
        "nav.projects": "Proyectos",
        "nav.methodology": "Metodología",
        "nav.cta": "Trabajemos juntos",
        "nav.allSolutions": "Ver todas las soluciones",
        "nav.mainNav": "Navegación principal",
        "nav.mobileNav": "Navegación móvil",
        "nav.openMenu": "Abrir menú",
        "nav.closeMenu": "Cerrar menú",
        "nav.homeAria": "Inicio",

        // Language switcher
        "lang.switch": "Cambiar idioma",

        // Page meta (how-we-work, contact)
        "page.howWeWork.title": "Cómo trabajamos | Sync Estudio",
        "page.howWeWork.description":
            "Conoce las tres fases de nuestra metodología: diagnóstico, desarrollo y educación. Entregables claros, aprobación de tu equipo y mantenimiento continuo del lado nuestro.",
        "page.contact.title": "Contacto | Sync Estudio",
        "page.contact.description":
            "Solicita un diagnóstico estratégico. Construimos software e IA a medida, rediseñamos flujos y formamos a tu equipo — con mantenimiento continuo de nuestro lado.",
        "page.notFound.title": "Página no encontrada | Sync Estudio",
        "page.notFound.description":
            "La ruta que buscas no existe o fue movida. Vuelve al inicio o escríbenos.",
        "notfound.eyebrow": "Error 404",
        "notfound.titleLead": "Esta ruta no ",
        "notfound.titleHighlight": "existe",
        "notfound.titleTail": ".",
        "notfound.body":
            "La página que buscas fue movida, renombrada o nunca existió. Vuelve al inicio o cuéntanos qué necesitabas encontrar.",
        "notfound.ctaPrimary": "Volver al inicio",
        "notfound.ctaSecondary": "Escríbenos",

        // Footer
        "footer.tagline":
            "Construimos sistemas que sirven a tu operación. No operaciones que sirven al software.",
        "footer.services": "Servicios",
        "footer.navigation": "Navegación",
        "footer.servicesAria": "Servicios",
        "footer.linksAria": "Enlaces del sitio",
        "footer.softwareDev": "Desarrollo de software",
        "footer.appDev": "Desarrollo de apps",
        "footer.ai": "Inteligencia artificial",
        "footer.solutions": "Soluciones",
        "footer.projects": "Proyectos",
        "footer.methodology": "Metodología",
        "footer.pricing": "Cómo cobramos",
        "footer.contact": "Contacto",
        "footer.location": "Puebla, México",
        "footer.rights": "© 2026 SYNC Estudio.",
        "footer.instagramAria": "Instagram de SYNC Estudio",
        "footer.linkedinAria": "LinkedIn de SYNC Estudio",

        // Breadcrumbs
        "breadcrumb.home": "Inicio",
        "breadcrumb.solutions": "Soluciones",
        "breadcrumb.caseStudies": "Casos de estudio",

        // Landing (keyword) pages
        "landing.back": "Volver al inicio",
        "landing.outcomesTitle": "Qué te llevas",
        "landing.relatedLabel": "Sigue explorando",
        "landing.relatedTitle": "Cómo encaja en lo que hacemos",
        "landing.viewMore": "Ver más",

        // Solution detail page
        "sol.back": "Volver a soluciones",
        "sol.label": "Solución",
        "sol.resultsLabel": "Resultados",
        "sol.outcomes": "¿Qué te llevas al cierre?",
        "sol.faqLabel": "Preguntas frecuentes",
        "sol.faqTitle": "Lo que suelen preguntarnos",
        "sol.relatedLabel": "Casos de estudio relacionados",
        "sol.relatedTitle": "Cómo se ve en operación real",
        "sol.caseLabel": "Caso de estudio",
        "sol.viewCase": "Ver caso",
        "sol.ctaPrimary": "Agendemos un diagnóstico",
        "sol.ctaSecondary": "Ver otras soluciones",
        "sol.titleSuffix":
            "Software, apps e IA a medida en México | Sync Estudio",

        // Case study detail page
        "case.label": "Caso de estudio",
        "case.back": "Volver a proyectos",
        "case.ctaPrimary": "Agendemos un diagnóstico",
        "case.ctaSecondary": "Volver al inicio",
        "case.titleSuffix": "Caso de estudio en México | Sync Estudio",
        "case.fallbackDescription":
            "Caso de estudio Sync Estudio — software e IA a medida para empresas en operación en México.",
    },
    en: {
        // Site meta defaults (Layout)
        "meta.title": "Custom software, apps & AI in Mexico | SYNC Estudio",
        "meta.description":
            "Custom software, applications and artificial intelligence for companies in Mexico. We redesign workflows, train your team, and keep the tools running on our side.",
        "meta.ogTitle": "Custom software, apps & AI in Mexico | SYNC Estudio",
        "meta.ogDescription":
            "Custom software, applications and AI for working companies in Mexico. We build the tools, redesign the workflows, and train your team — with ongoing maintenance on our side.",
        "meta.ogImageAlt":
            "SYNC Estudio — Custom software & AI for companies in operation",

        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.solutions": "Solutions",
        "nav.projects": "Projects",
        "nav.methodology": "Methodology",
        "nav.cta": "Let's work together",
        "nav.allSolutions": "See all solutions",
        "nav.mainNav": "Main navigation",
        "nav.mobileNav": "Mobile navigation",
        "nav.openMenu": "Open menu",
        "nav.closeMenu": "Close menu",
        "nav.homeAria": "Home",

        // Language switcher
        "lang.switch": "Change language",

        // Page meta (how-we-work, contact)
        "page.howWeWork.title": "How we work | Sync Estudio",
        "page.howWeWork.description":
            "Learn the three phases of our methodology: assessment, development and enablement. Clear deliverables, your team's approval, and ongoing maintenance on our side.",
        "page.contact.title": "Contact | Sync Estudio",
        "page.contact.description":
            "Request a strategic assessment. We build custom software and AI, redesign workflows, and train your team — with ongoing maintenance on our side.",
        "page.notFound.title": "Page not found | Sync Estudio",
        "page.notFound.description":
            "The page you're looking for doesn't exist or was moved. Go back home or write to us.",
        "notfound.eyebrow": "Error 404",
        "notfound.titleLead": "This route doesn't ",
        "notfound.titleHighlight": "exist",
        "notfound.titleTail": ".",
        "notfound.body":
            "The page you're looking for was moved, renamed, or never existed. Go back home or tell us what you were trying to find.",
        "notfound.ctaPrimary": "Back to home",
        "notfound.ctaSecondary": "Write to us",

        // Footer
        "footer.tagline":
            "We build systems that serve your operation. Not operations that serve the software.",
        "footer.services": "Services",
        "footer.navigation": "Navigation",
        "footer.servicesAria": "Services",
        "footer.linksAria": "Site links",
        "footer.softwareDev": "Software development",
        "footer.appDev": "App development",
        "footer.ai": "Artificial intelligence",
        "footer.solutions": "Solutions",
        "footer.projects": "Projects",
        "footer.methodology": "Methodology",
        "footer.pricing": "How we charge",
        "footer.contact": "Contact",
        "footer.location": "Puebla, Mexico",
        "footer.rights": "© 2026 SYNC Estudio.",
        "footer.instagramAria": "SYNC Estudio on Instagram",
        "footer.linkedinAria": "SYNC Estudio on LinkedIn",

        // Breadcrumbs
        "breadcrumb.home": "Home",
        "breadcrumb.solutions": "Solutions",
        "breadcrumb.caseStudies": "Case studies",

        // Landing (keyword) pages
        "landing.back": "Back to home",
        "landing.outcomesTitle": "What you walk away with",
        "landing.relatedLabel": "Keep exploring",
        "landing.relatedTitle": "How it fits what we do",
        "landing.viewMore": "Learn more",

        // Solution detail page
        "sol.back": "Back to solutions",
        "sol.label": "Solution",
        "sol.resultsLabel": "Results",
        "sol.outcomes": "What you walk away with",
        "sol.faqLabel": "FAQ",
        "sol.faqTitle": "What clients usually ask",
        "sol.relatedLabel": "Related case studies",
        "sol.relatedTitle": "What it looks like in real operations",
        "sol.caseLabel": "Case study",
        "sol.viewCase": "View case",
        "sol.ctaPrimary": "Let's schedule an assessment",
        "sol.ctaSecondary": "See other solutions",
        "sol.titleSuffix": "Custom software, apps & AI in Mexico | Sync Estudio",

        // Case study detail page
        "case.label": "Case study",
        "case.back": "Back to projects",
        "case.ctaPrimary": "Let's schedule an assessment",
        "case.ctaSecondary": "Back to home",
        "case.titleSuffix": "Case study in Mexico | Sync Estudio",
        "case.fallbackDescription":
            "Sync Estudio case study — custom software and AI for working companies in Mexico.",
    },
} as const;

export type UiKey = keyof (typeof ui)["es"];
