export interface Advantage {
    icon: string;
    title: string;
    description: string;
    stats: string;
}

export const AdvantagesData: Advantage[] = [
    {
        icon: "CheckCircle",
        title: "Metodología Práctica",
        description: "Proyectos reales desde el primer día. Construye un portafolio impresionante mientras aprendes.",
        stats: "95% de proyectos prácticos"
    },
    {
        icon: "TrendingUp",
        title: "Tecnologías Actuales",
        description: "Curriculum actualizado constantemente con las últimas tendencias y herramientas de la industria.",
        stats: "Actualizado cada 3 meses"
    },
    {
        icon: "Briefcase",
        title: "Apoyo Profesional",
        description: "Servicio de orientación laboral, preparación para entrevistas y conexiones con empresas.",
        stats: "85% consigue empleo en 6 meses"
    },
    {
        icon: "Globe",
        title: "Comunidad Global",
        description: "Únete a una red de más de 50,000 desarrolladores en todo el mundo y colabora en proyectos internacionales.",
        stats: "50,000+ estudiantes activos"
    }
];