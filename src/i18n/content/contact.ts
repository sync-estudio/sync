import type { Lang } from "@i18n/ui";

type ContactCopy = {
    headingLead: string;
    headingHighlight: string;
    subtitle: string;
    pricingPrompt: string;
    pricingLinkLabel: string;
    methodologyLabel: string;
    pillars: { number: string; title: string; body: string }[];
    formTitle: string;
    formSubtitle: string;
    labels: {
        email: string;
        firstName: string;
        lastName: string;
        companyName: string;
        jobTitle: string;
        companySize: string;
        phone: string;
        message: string;
    };
    placeholders: {
        email: string;
        firstName: string;
        lastName: string;
        companyName: string;
        jobTitle: string;
        phone: string;
        message: string;
    };
    sizePlaceholder: string;
    sizeOptions: { value: string; label: string }[];
    charCounterSuffix: string;
    termsLead: string;
    termsLink1: string;
    termsMid: string;
    termsLink2: string;
    termsTail: string;
    submitLabel: string;
    alreadySentLabel: string;
    sendingLabel: string;
    bookingLabel: string;
    whatsappLabel: string;
    whatsappMessage: string;
    /** Strings consumed by the client-side validation/submit script. */
    validations: Record<string, Record<string, string>>;
    alerts: {
        success: string;
        rateLimit: string;
        error: string;
        connection: string;
    };
};

export const contact: Record<Lang, ContactCopy> = {
    es: {
        headingLead: "Empieza por el ",
        headingHighlight: "diagnóstico",
        subtitle:
            "No vendemos software que tu equipo no pueda operar. Cuéntanos sobre tu operación y trazamos el camino.",
        pricingPrompt: "¿Quieres entender cómo cobramos antes de escribir?",
        pricingLinkLabel: "Cómo cobramos",
        methodologyLabel: "Metodología",
        pillars: [
            {
                number: "01",
                title: "Diagnóstico",
                body: "Mapeamos tu operación real y priorizamos por impacto.",
            },
            {
                number: "02",
                title: "Desarrollo",
                body: "Construimos las soluciones que tu operación necesita, con tu equipo aprobando cada entrega.",
            },
            {
                number: "03",
                title: "Acompañamiento",
                body: "Tu equipo opera el sistema con confianza y nosotros seguimos a su lado. Plan de Acompañamiento del lado nuestro.",
            },
        ],
        formTitle: "Solicita tu diagnóstico",
        formSubtitle: "Respondemos en menos de 24h hábiles.",
        labels: {
            email: "Email*",
            firstName: "Nombre*",
            lastName: "Apellido*",
            companyName: "Nombre de la empresa*",
            jobTitle: "Cargo*",
            companySize: "Tamaño*",
            phone: "Teléfono",
            message: "Cuéntanos sobre tu operación",
        },
        placeholders: {
            email: "tu@email.com",
            firstName: "Tu nombre",
            lastName: "Tu apellido",
            companyName: "Sync Estudio Inc.",
            jobTitle: "Director de Producto",
            phone: "+52 ...",
            message: "¿Qué proceso te está costando más de lo que debería?",
        },
        sizePlaceholder: "Selecciona una opción",
        sizeOptions: [
            { value: "1-10", label: "1-10 empleados" },
            { value: "11-50", label: "11-50 empleados" },
            { value: "51-200", label: "51-200 empleados" },
            { value: "201-1000", label: "201-1000 empleados" },
            { value: "1000+", label: "1000+ empleados" },
        ],
        charCounterSuffix: "caracteres",
        termsLead: "Al enviar aceptas nuestros ",
        termsLink1: "Términos",
        termsMid: " y ",
        termsLink2: "Política de Privacidad",
        termsTail: ".",
        submitLabel: "Solicitar diagnóstico estratégico",
        alreadySentLabel: "Ya enviaste tu mensaje",
        sendingLabel: "Enviando...",
        bookingLabel: "Agenda tu diagnóstico gratuito",
        whatsappLabel: "O envíanos un WhatsApp",
        whatsappMessage:
            "Hola, me gustaría saber más sobre sus servicios.",
        validations: {
            email: {
                required: "El email es requerido",
                pattern: "Por favor ingresa un email válido",
            },
            firstName: {
                required: "El nombre es requerido",
                minlength: "El nombre debe tener al menos 2 caracteres",
            },
            lastName: {
                required: "El apellido es requerido",
                minlength: "El apellido debe tener al menos 2 caracteres",
            },
            companyName: {
                required: "El nombre de la empresa es requerido",
            },
            jobTitle: {
                required: "El cargo es requerido",
            },
            companySize: {
                required: "El tamaño de la empresa es requerido",
            },
        },
        alerts: {
            success: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
            rateLimit: "Ya recibimos tu mensaje. Te contactaremos pronto.",
            error: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
            connection: "Error de conexión. Por favor, intenta de nuevo.",
        },
    },
    en: {
        headingLead: "Start with the ",
        headingHighlight: "assessment",
        subtitle:
            "We don't sell software your team can't operate. Tell us about your operation and we'll map the path.",
        pricingPrompt: "Want to understand how we charge before writing?",
        pricingLinkLabel: "How we charge",
        methodologyLabel: "Methodology",
        pillars: [
            {
                number: "01",
                title: "Assessment",
                body: "We map your real operation and prioritize by impact.",
            },
            {
                number: "02",
                title: "Development",
                body: "We build the solutions your operation needs, with your team approving every delivery.",
            },
            {
                number: "03",
                title: "Partnership",
                body: "Your team operates the system with confidence and we stay by their side. Support Plan on our side.",
            },
        ],
        formTitle: "Request your assessment",
        formSubtitle: "We respond within 24 business hours.",
        labels: {
            email: "Email*",
            firstName: "First name*",
            lastName: "Last name*",
            companyName: "Company name*",
            jobTitle: "Job title*",
            companySize: "Size*",
            phone: "Phone",
            message: "Tell us about your operation",
        },
        placeholders: {
            email: "you@email.com",
            firstName: "Your first name",
            lastName: "Your last name",
            companyName: "Sync Estudio Inc.",
            jobTitle: "Head of Product",
            phone: "+52 ...",
            message: "Which process is costing you more than it should?",
        },
        sizePlaceholder: "Select an option",
        sizeOptions: [
            { value: "1-10", label: "1-10 employees" },
            { value: "11-50", label: "11-50 employees" },
            { value: "51-200", label: "51-200 employees" },
            { value: "201-1000", label: "201-1000 employees" },
            { value: "1000+", label: "1000+ employees" },
        ],
        charCounterSuffix: "characters",
        termsLead: "By submitting you accept our ",
        termsLink1: "Terms",
        termsMid: " and ",
        termsLink2: "Privacy Policy",
        termsTail: ".",
        submitLabel: "Request strategic assessment",
        alreadySentLabel: "You already sent your message",
        sendingLabel: "Sending...",
        bookingLabel: "Book your free assessment",
        whatsappLabel: "Or send us a WhatsApp",
        whatsappMessage: "Hi, I'd like to know more about your services.",
        validations: {
            email: {
                required: "Email is required",
                pattern: "Please enter a valid email",
            },
            firstName: {
                required: "First name is required",
                minlength: "First name must be at least 2 characters",
            },
            lastName: {
                required: "Last name is required",
                minlength: "Last name must be at least 2 characters",
            },
            companyName: {
                required: "Company name is required",
            },
            jobTitle: {
                required: "Job title is required",
            },
            companySize: {
                required: "Company size is required",
            },
        },
        alerts: {
            success: "Message sent successfully! We'll be in touch soon.",
            rateLimit: "We already received your message. We'll be in touch soon.",
            error: "Error sending the message. Please try again.",
            connection: "Connection error. Please try again.",
        },
    },
};
