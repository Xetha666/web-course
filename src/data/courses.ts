export interface Course {
    id: number;
    slug: string;
    titulo: string;
    descripcion: string;
    instructor: string;
    nivel: string;
    imagenUrl: string;
    calificacion: number;
    review: number;
    duracionHoras: number;
    estudiantes: number;
}

export const CoursesData: Course[] = [
    {
        id: 1,
        slug : "programador-web-full-stack",
        titulo: "Programador Web Full Stack",
        descripcion: "Aprende a desarrollar aplicaciones web completas con React, Node.js y bases de datos",
        instructor: "Carlos Mendez",
        nivel: "Intermedio",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/web-development-course-inZfD0fFxlajvxidSsQ9P7X5m0c3wu.jpg",
        calificacion: 4.8,
        review: 245,
        duracionHoras: 120,
        estudiantes: 1250
    },
    {
        id: 2,
        slug : "react-avanzado",
        titulo: "React Avanzado",
        descripcion: "Domina React con hooks, context API, y patrones avanzados de desarrollo",
        instructor: "María García",
        nivel: "Avanzado",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/react-advanced-course-Wf6GdTraooksGfSe1xf8V4M7G7Vf21.jpg",
        calificacion: 4.9,
        review: 189,
        duracionHoras: 80,
        estudiantes: 890
    },
    {
        id: 3,
        slug : "nodejs-masterclass",
        titulo: "Node.js Masterclass",
        descripcion: "Crea servidores escalables y APIs REST con Node.js y Express",
        instructor: "Juan Rodríguez",
        nivel: "Intermedio",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nodejs-backend-course-HHcHHgWHcBOIYJ8lmuyNakI1CfuCx2.jpg",
        calificacion: 4.7,
        review: 156,
        duracionHoras: 100,
        estudiantes: 756
    },
    {
        id: 4,
        slug : "typescript-completo",
        titulo: "TypeScript Completo",
        descripcion: "Aprende TypeScript desde cero y mejora la calidad de tu código JavaScript",
        instructor: "Ana López",
        nivel: "Principiante",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/typescript-course-BrCYPx230tKtHSIwGev2MNB5PbQwN5.jpg",
        calificacion: 4.6,
        review: 134,
        duracionHoras: 60,
        estudiantes: 1050
    },
    {
        id: 5,
        slug : "bases-de-datos-sql",
        titulo: "Bases de Datos SQL",
        descripcion: "Domina SQL, diseño de bases de datos y optimización de consultas",
        instructor: "Pedro Sánchez",
        nivel: "Intermedio",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sql-database-course-rvjtJt8QY5Mlz4xIvRQQnvWVFFwgBP.jpg",
        calificacion: 4.8,
        review: 201,
        duracionHoras: 90,
        estudiantes: 923
    },
    {
        id: 6,
        slug: "devops-y-docker",
        titulo: "DevOps y Docker",
        descripcion: "Aprende a containerizar aplicaciones y desplegar en la nube con Docker y Kubernetes",
        instructor: "Luis Martínez",
        nivel: "Avanzado",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/devops-docker-course-HdZiMeH1PJ0r6tbd3xs8uyED3Ok9ut.jpg",
        calificacion: 4.7,
        review: 98,
        duracionHoras: 110,
        estudiantes: 567
    },
    {
        id: 7,
        slug : "python-para-data-science",
        titulo: "Python para Data Science",
        descripcion: "Análisis de datos, machine learning y visualización con Python",
        instructor: "Sofia Ruiz",
        nivel: "Avanzado",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/python-data-science-course-6UuqpCPO3DhjJTfnLW9xms7Lbp9FmK.jpg",
        calificacion: 4.9,
        review: 267,
        duracionHoras: 130,
        estudiantes: 1420
    },
    {
        id: 8,
        slug : "nextjs-15-moderno",
        titulo: "Next.js 15 Moderno",
        descripcion: "Crea aplicaciones web modernas con Next.js 15, App Router y Server Components",
        instructor: "Miguel Torres",
        nivel: "Intermedio",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nextjs-course-Hapferezdxa3xoM5a4E3LR2yiQzpbe.jpg",
        calificacion: 4.8,
        review: 178,
        duracionHoras: 95,
        estudiantes: 834
    }
];