export interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
}

export const PlansData: Plan[] = [
    {
        name: "Básico",
        price: "$99",
        period: "/mes",
        description: "Perfecto para principiantes que quieren empezar en IT",
        features: [
            "Acceso a 5 cursos básicos",
            "Certificados de finalización",
            "Soporte por email",
            "Acceso por 6 meses",
            "Comunidad de estudiantes"
        ],
        popular: false
    },
    {
        name: "Profesional",
        price: "$199",
        period: "/mes",
        description: "Ideal para desarrolladores que buscan especializarse",
        features: [
            "Acceso a todos los cursos",
            "Certificados profesionales",
            "Soporte prioritario 24/7",
            "Acceso de por vida",
            "Mentorías 1 a 1",
            "Proyectos prácticos",
            "Bolsa de trabajo exclusiva"
        ],
        popular: true
    },
    {
        name: "Empresarial",
        price: "$499",
        period: "/mes",
        description: "Solución completa para equipos y empresas",
        features: [
            "Todo lo del plan Profesional",
            "Cursos personalizados",
            "Dashboard de progreso",
            "Múltiples usuarios (hasta 10)",
            "Reportes detallados",
            "Integración con LMS",
            "Consultor dedicado"
        ],
        popular: false
    }
];