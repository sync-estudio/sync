export interface Keypoint {
    title: string;
    description: string;
}

export interface Project {
    name: string;
    year: string;
    development: boolean;
    thumbnail: string;
    images: string[];
    description: string;
    keypoints?: Keypoint[];
    url?: string;
}

const projects = [
    {
        name: "Hauzzo",
        year: "2024",
        development: false,
        thumbnail: "/hauzzo_project.webp",
        images: ["/hauzzo_project.webp"],
        description: "Hauzzo es una inmobiliaria, que busca expandirse a nivel nacional, utilizando la tecnologia para mejorar la experiencia de sus clientes y asesores.",
        keypoints: [
            {
                "title": "Gestión de Inventario Premium",
                "description": "Sube y actualiza propiedades en tiempo real. Soporte para galerías HD y fichas técnicas detalladas para enamorar al cliente."
              },
              {
                "title": "CRM de Alta Conversión",
                "description": "Centraliza la captación de leads, y simplifica la gestion de clientes."
              },
              {
                "title": "Motor de Búsqueda Inteligente",
                "description": "Filtros avanzados por ubicación, precio y amenidades que permiten a los usuarios encontrar su inmueble ideal en segundos."
              },
              {
                "title": "Dashboard de Rendimiento",
                "description": "Analítica para asesores, monitorea el alcanze e impacto de cada propiedad."
              }
        ],
        url: "https://hauzzo.com"
    },
    {
        name: "The Royal Barber",
        year: "2024",
        development: false,
        thumbnail: "/the_royal_project.webp",
        images: ["/the_royal_project.webp"],
        description: "Ayudamos a The Royal Barber a centralizar su negocio en su propia plataforma, la cual permite a sus clientes agendar citas y realizar sus pagos online.",
        keypoints: [
            {
                title: "Sistema de gestión de clientes y reservas",
                description: "Plataforma completa para gestionar clientes y sus reservas de citas."
            },
            {
                title: "Sistema de gestión de pagos y facturación",
                description: "Integración de pagos online y sistema de facturación automatizado."
            },
            {
                title: "Sistema de gestión de empleados y turnos",
                description: "Control de horarios y asignación de turnos para el equipo de trabajo."
            },
        ],
        url: "https://theroyalbarber.com"
    },
    {
        name: "Sky HR",
        year: "2025",
        development: true,
        thumbnail: "/sky_hr_project.webp",
        images: ["/sky_hr_project.webp"],
        description: "Sky HR es una empresa de consultoría en marketing digital y desarrollo web. Nos especializamos en crear experiencias únicas que conectan marcas con su audiencia.",
        keypoints: [
            {
                title: "Control de Asistencia Inteligente",
                description: "Registro de entrada y salida geolocalizado desde el dispositivo móvil. Elimina el fraude de horarios y simplifica el cálculo de nómina."
            },
            {
                title: "Comunicación Interna",
                description: "Tablón de avisos digital para mantener a todo el equipo alineado. Notificaciones push con noticias."
            },
            {
                title: "Gestión de Solicitudes",
                description: "Permite al equipo solicitar vacaciones, justificar faltas o gestionar permisos directamente desde la app."
            },
            {
                title: "Gestion de visitas",
                description: "Gestión de visitas a la empresa. Validacion, registro de entrada y salida de visitantes."
            }
        ]
    },
    {
        name: "GZG Seguros",
        year: "2025",
        development: false,
        thumbnail: "/gzg_project.webp",
        images: ["/gzg_project.webp"],
        description: "GZG Seguros es una empresa de seguros con mas de 57 años de experiencia en el mercado.",
        keypoints: [
            {
                title: "Landing Page",
                description: "Diseño y desarrollo de la landing page de GZG Seguros."
            }
        ],
        url: "https://gzg.com.mx"
    }
]

export default projects;