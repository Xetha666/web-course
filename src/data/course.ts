// Interfaces
export interface Modulo {
    numero: number;
    titulo: string;
    duracion: string;
    temas: string[];
}

export interface QueAprenderas {
    icono: string;
    titulo: string;
    descripcion: string;
}

export interface Tecnologia {
    nombre: string;
    icono: string;
}

export interface CourseDetail {
    id: number;
    slug: string;
    titulo: string;
    descripcionLarga: string;
    imagenUrl: string;
    duracionMeses: number;
    modalidad: string;
    certificado: boolean;
    queAprenderas: QueAprenderas[];
    modulos: Modulo[];
    tecnologias: Tecnologia[];
    requisitos: string[];
}

export const CourseDetailData: CourseDetail[] = [
    {
        id: 1,
        slug: "programador-web-full-stack",
        titulo: "Programador Web Full Stack",
        descripcionLarga: "Domina el desarrollo web moderno desde cero. Aprende HTML, CSS, JavaScript, React, Node.js y construye aplicaciones web profesionales.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/web-development-course-inZfD0fFxlajvxidSsQ9P7X5m0c3wu.jpg",
        duracionMeses: 6,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "html5",
                titulo: "Frontend Development",
                descripcion: "HTML5, CSS3, JavaScript ES6+, React, Tailwind CSS y diseño responsive"
            },
            {
                icono: "node",
                titulo: "Backend Development",
                descripcion: "Node.js, Express, APIs RESTful, autenticación y seguridad"
            },
            {
                icono: "mongodb",
                titulo: "Bases de Datos",
                descripcion: "SQL, PostgreSQL, MongoDB y gestión de datos"
            },
            {
                icono: "git",
                titulo: "Deployment",
                descripcion: "Git, GitHub, Vercel, y despliegue de aplicaciones en producción"
            },
            {
                icono: "react",
                titulo: "Trabajo en Equipo",
                descripcion: "Metodologías ágiles, Scrum y colaboración en proyectos reales"
            },
            {
                icono: "javascript",
                titulo: "Portfolio Profesional",
                descripcion: "Construye 5+ proyectos reales para tu portafolio"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fundamentos de la Web",
                duracion: "4 semanas",
                temas: [
                    "HTML5 semántico",
                    "CSS3 y Flexbox/Grid",
                    "JavaScript básico",
                    "Git y GitHub"
                ]
            },
            {
                numero: 2,
                titulo: "JavaScript Avanzado",
                duracion: "4 semanas",
                temas: [
                    "ES6+ features",
                    "DOM manipulation",
                    "Async/Await y Promises",
                    "APIs y Fetch"
                ]
            },
            {
                numero: 3,
                titulo: "React y Frontend Moderno",
                duracion: "6 semanas",
                temas: [
                    "React fundamentals",
                    "Hooks y State Management",
                    "React Router",
                    "Tailwind CSS"
                ]
            },
            {
                numero: 4,
                titulo: "Backend con Node.js",
                duracion: "5 semanas",
                temas: [
                    "Node.js y Express",
                    "RESTful APIs",
                    "Autenticación JWT",
                    "Bases de datos SQL/NoSQL"
                ]
            },
            {
                numero: 5,
                titulo: "Full Stack y Deployment",
                duracion: "5 semanas",
                temas: [
                    "Integración Frontend/Backend",
                    "Testing",
                    "CI/CD",
                    "Deployment en Vercel/Railway"
                ]
            }
        ],
        tecnologias: [
            { nombre: "HTML5", icono: "html5" },
            { nombre: "CSS3", icono: "css3" },
            { nombre: "JavaScript", icono: "javascript" },
            { nombre: "React", icono: "react" },
            { nombre: "Node.js", icono: "node" },
            { nombre: "Express", icono: "express" },
            { nombre: "PostgreSQL", icono: "postgresql" },
            { nombre: "MongoDB", icono: "mongodb" },
            { nombre: "Git", icono: "git" },
            { nombre: "Tailwind CSS", icono: "tailwind" },
            { nombre: "Next.js", icono: "nextjs" },
            { nombre: "TypeScript", icono: "typescript" }
        ],
        requisitos: [
            "Conocimientos básicos de computación",
            "Computadora con al menos 8GB de RAM",
            "Conexión a internet estable",
            "Ganas de aprender y dedicación"
        ]
    },

    {
        id: 2,
        slug: "react-avanzado",
        titulo: "React Avanzado",
        descripcionLarga: "Lleva tus habilidades de React al siguiente nivel. Aprende patrones avanzados, optimización de rendimiento, y arquitecturas escalables.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/react-advanced-course-Wf6GdTraooksGfSe1xf8V4M7G7Vf21.jpg",
        duracionMeses: 4,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "react",
                titulo: "Hooks Avanzados",
                descripcion: "useReducer, useContext, useMemo, useCallback y custom hooks"
            },
            {
                icono: "react",
                titulo: "Patrones de Diseño",
                descripcion: "Compound Components, Render Props, HOC y Component Composition"
            },
            {
                icono: "react",
                titulo: "State Management",
                descripcion: "Context API, Redux Toolkit, Zustand y gestión de estado global"
            },
            {
                icono: "react",
                titulo: "Performance",
                descripcion: "Optimización, Code Splitting, Lazy Loading y React.memo"
            },
            {
                icono: "typescript",
                titulo: "TypeScript con React",
                descripcion: "Tipado estático, interfaces, generics y type safety"
            },
            {
                icono: "react",
                titulo: "Testing",
                descripcion: "Jest, React Testing Library y testing de componentes"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Hooks Avanzados",
                duracion: "3 semanas",
                temas: [
                    "useReducer para estado complejo",
                    "useContext y Context API",
                    "useMemo y useCallback",
                    "Custom Hooks avanzados"
                ]
            },
            {
                numero: 2,
                titulo: "Patrones y Arquitectura",
                duracion: "3 semanas",
                temas: [
                    "Compound Components",
                    "Render Props Pattern",
                    "Higher Order Components",
                    "Composition vs Inheritance"
                ]
            },
            {
                numero: 3,
                titulo: "State Management",
                duracion: "4 semanas",
                temas: [
                    "Context API avanzado",
                    "Redux Toolkit",
                    "Zustand",
                    "React Query"
                ]
            },
            {
                numero: 4,
                titulo: "Optimización y Performance",
                duracion: "3 semanas",
                temas: [
                    "React.memo y useMemo",
                    "Code Splitting",
                    "Lazy Loading",
                    "Profiling y debugging"
                ]
            },
            {
                numero: 5,
                titulo: "TypeScript y Testing",
                duracion: "3 semanas",
                temas: [
                    "TypeScript con React",
                    "Jest y Testing Library",
                    "Unit y Integration Testing",
                    "E2E con Playwright"
                ]
            }
        ],
        tecnologias: [
            { nombre: "React", icono: "react" },
            { nombre: "TypeScript", icono: "typescript" },
            { nombre: "Next.js", icono: "nextjs" },
            { nombre: "Tailwind CSS", icono: "tailwind" },
            { nombre: "Git", icono: "git" }
        ],
        requisitos: [
            "Conocimientos sólidos de JavaScript ES6+",
            "Experiencia previa con React (Hooks básicos)",
            "Familiaridad con npm/yarn",
            "Conocimientos básicos de TypeScript (deseable)"
        ]
    },

    {
        id: 3,
        slug: "nodejs-masterclass",
        titulo: "Node.js Masterclass",
        descripcionLarga: "Conviértete en un experto en desarrollo backend con Node.js. Aprende a crear APIs robustas, seguras y escalables.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nodejs-backend-course-HHcHHgWHcBOIYJ8lmuyNakI1CfuCx2.jpg",
        duracionMeses: 5,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "node",
                titulo: "Node.js Core",
                descripcion: "Event Loop, Streams, Buffer, File System y módulos nativos"
            },
            {
                icono: "express",
                titulo: "APIs RESTful",
                descripcion: "Express, middleware, routing, validación y manejo de errores"
            },
            {
                icono: "postgresql",
                titulo: "Bases de Datos",
                descripcion: "PostgreSQL, MongoDB, ORMs y diseño de esquemas"
            },
            {
                icono: "node",
                titulo: "Autenticación",
                descripcion: "JWT, OAuth, bcrypt, sessiones y seguridad"
            },
            {
                icono: "node",
                titulo: "WebSockets",
                descripcion: "Socket.io, real-time communication y eventos"
            },
            {
                icono: "docker",
                titulo: "Deployment",
                descripcion: "Docker, PM2, CI/CD y deployment en producción"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fundamentos de Node.js",
                duracion: "3 semanas",
                temas: [
                    "Event Loop y asincronía",
                    "Módulos y NPM",
                    "File System y Streams",
                    "Debugging y error handling"
                ]
            },
            {
                numero: 2,
                titulo: "Express y REST APIs",
                duracion: "4 semanas",
                temas: [
                    "Express fundamentals",
                    "Routing y middleware",
                    "Validación con Joi",
                    "REST API best practices"
                ]
            },
            {
                numero: 3,
                titulo: "Bases de Datos",
                duracion: "4 semanas",
                temas: [
                    "PostgreSQL con Prisma",
                    "MongoDB con Mongoose",
                    "Query optimization",
                    "Migraciones y seeders"
                ]
            },
            {
                numero: 4,
                titulo: "Autenticación y Seguridad",
                duracion: "3 semanas",
                temas: [
                    "JWT y refresh tokens",
                    "OAuth 2.0",
                    "Rate limiting",
                    "CORS y helmet"
                ]
            },
            {
                numero: 5,
                titulo: "Real-time y Deployment",
                duracion: "3 semanas",
                temas: [
                    "WebSockets con Socket.io",
                    "Docker containerization",
                    "CI/CD con GitHub Actions",
                    "Deployment en Railway/Render"
                ]
            }
        ],
        tecnologias: [
            { nombre: "Node.js", icono: "node" },
            { nombre: "Express", icono: "express" },
            { nombre: "PostgreSQL", icono: "postgresql" },
            { nombre: "MongoDB", icono: "mongodb" },
            { nombre: "Docker", icono: "docker" },
            { nombre: "Git", icono: "git" },
            { nombre: "TypeScript", icono: "typescript" }
        ],
        requisitos: [
            "JavaScript ES6+ sólido",
            "Conocimientos básicos de HTTP",
            "Familiaridad con línea de comandos",
            "Conceptos básicos de bases de datos"
        ]
    },

    {
        id: 4,
        slug: "typescript-completo",
        titulo: "TypeScript Completo",
        descripcionLarga: "Domina TypeScript y lleva tu desarrollo JavaScript al siguiente nivel con tipado estático, interfaces, generics y más.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/typescript-course-BrCYPx230tKtHSIwGev2MNB5PbQwN5.jpg",
        duracionMeses: 3,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "typescript",
                titulo: "Fundamentos de TypeScript",
                descripcion: "Types, interfaces, type inference y anotaciones de tipo"
            },
            {
                icono: "typescript",
                titulo: "Types Avanzados",
                descripcion: "Union types, intersection, literal types y type guards"
            },
            {
                icono: "typescript",
                titulo: "Generics",
                descripcion: "Generic functions, classes, interfaces y constraints"
            },
            {
                icono: "typescript",
                titulo: "Decorators",
                descripcion: "Class decorators, method decorators y property decorators"
            },
            {
                icono: "typescript",
                titulo: "TypeScript con React",
                descripcion: "Props typing, hooks con TypeScript y component patterns"
            },
            {
                icono: "typescript",
                titulo: "TypeScript con Node.js",
                descripcion: "APIs tipadas, Express con TypeScript y best practices"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Introducción a TypeScript",
                duracion: "2 semanas",
                temas: [
                    "¿Por qué TypeScript?",
                    "Configuración y compilación",
                    "Tipos básicos",
                    "Type inference"
                ]
            },
            {
                numero: 2,
                titulo: "Interfaces y Types",
                duracion: "2 semanas",
                temas: [
                    "Interfaces vs Types",
                    "Optional properties",
                    "Readonly properties",
                    "Index signatures"
                ]
            },
            {
                numero: 3,
                titulo: "Tipos Avanzados",
                duracion: "3 semanas",
                temas: [
                    "Union y Intersection types",
                    "Type guards",
                    "Literal types",
                    "Mapped types"
                ]
            },
            {
                numero: 4,
                titulo: "Generics y Utility Types",
                duracion: "2 semanas",
                temas: [
                    "Generic functions",
                    "Generic classes",
                    "Constraints",
                    "Utility types (Partial, Pick, Omit)"
                ]
            },
            {
                numero: 5,
                titulo: "TypeScript en la Práctica",
                duracion: "3 semanas",
                temas: [
                    "TypeScript con React",
                    "TypeScript con Node.js",
                    "Decorators",
                    "Proyecto final"
                ]
            }
        ],
        tecnologias: [
            { nombre: "TypeScript", icono: "typescript" },
            { nombre: "JavaScript", icono: "javascript" },
            { nombre: "React", icono: "react" },
            { nombre: "Node.js", icono: "node" },
            { nombre: "Git", icono: "git" }
        ],
        requisitos: [
            "JavaScript ES6+ intermedio",
            "Conocimientos de programación orientada a objetos",
            "Familiaridad con Node.js (deseable)",
            "Editor de código (VS Code recomendado)"
        ]
    },

    {
        id: 4,
        slug: "typescript-completo",
        titulo: "TypeScript Completo",
        descripcionLarga: "Domina TypeScript y lleva tu desarrollo JavaScript al siguiente nivel con tipado estático, interfaces, generics y más.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/typescript-course-BrCYPx230tKtHSIwGev2MNB5PbQwN5.jpg",
        duracionMeses: 3,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "typescript",
                titulo: "Fundamentos de TypeScript",
                descripcion: "Types, interfaces, type inference y anotaciones de tipo"
            },
            {
                icono: "typescript",
                titulo: "Types Avanzados",
                descripcion: "Union types, intersection, literal types y type guards"
            },
            {
                icono: "typescript",
                titulo: "Generics",
                descripcion: "Generic functions, classes, interfaces y constraints"
            },
            {
                icono: "typescript",
                titulo: "Decorators",
                descripcion: "Class decorators, method decorators y property decorators"
            },
            {
                icono: "typescript",
                titulo: "TypeScript con React",
                descripcion: "Props typing, hooks con TypeScript y component patterns"
            },
            {
                icono: "typescript",
                titulo: "TypeScript con Node.js",
                descripcion: "APIs tipadas, Express con TypeScript y best practices"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Introducción a TypeScript",
                duracion: "2 semanas",
                temas: [
                    "¿Por qué TypeScript?",
                    "Configuración y compilación",
                    "Tipos básicos",
                    "Type inference"
                ]
            },
            {
                numero: 2,
                titulo: "Interfaces y Types",
                duracion: "2 semanas",
                temas: [
                    "Interfaces vs Types",
                    "Optional properties",
                    "Readonly properties",
                    "Index signatures"
                ]
            },
            {
                numero: 3,
                titulo: "Tipos Avanzados",
                duracion: "3 semanas",
                temas: [
                    "Union y Intersection types",
                    "Type guards",
                    "Literal types",
                    "Mapped types"
                ]
            },
            {
                numero: 4,
                titulo: "Generics y Utility Types",
                duracion: "2 semanas",
                temas: [
                    "Generic functions",
                    "Generic classes",
                    "Constraints",
                    "Utility types (Partial, Pick, Omit)"
                ]
            },
            {
                numero: 5,
                titulo: "TypeScript en la Práctica",
                duracion: "3 semanas",
                temas: [
                    "TypeScript con React",
                    "TypeScript con Node.js",
                    "Decorators",
                    "Proyecto final"
                ]
            }
        ],
        tecnologias: [
            { nombre: "TypeScript", icono: "typescript" },
            { nombre: "JavaScript", icono: "javascript" },
            { nombre: "React", icono: "react" },
            { nombre: "Node.js", icono: "node" },
            { nombre: "Git", icono: "git" }
        ],
        requisitos: [
            "JavaScript ES6+ intermedio",
            "Conocimientos de programación orientada a objetos",
            "Familiaridad con Node.js (deseable)",
            "Editor de código (VS Code recomendado)"
        ]
    },

    {
        id: 5,
        slug: "bases-de-datos-sql",
        titulo: "Bases de Datos SQL",
        descripcionLarga: "Domina SQL, diseño de bases de datos relacionales y optimización de consultas. Aprende PostgreSQL, MySQL y best practices de modelado de datos.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sql-database-course-rvjtJt8QY5Mlz4xIvRQQnvWVFFwgBP.jpg",
        duracionMeses: 4,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "postgresql",
                titulo: "SQL Fundamentals",
                descripcion: "SELECT, INSERT, UPDATE, DELETE, JOIN y consultas complejas"
            },
            {
                icono: "postgresql",
                titulo: "Diseño de Bases de Datos",
                descripcion: "Normalización, relaciones, claves primarias y foráneas"
            },
            {
                icono: "postgresql",
                titulo: "Optimización",
                descripcion: "Índices, query optimization, EXPLAIN y performance tuning"
            },
            {
                icono: "postgresql",
                titulo: "Transacciones",
                descripcion: "ACID, transacciones, locks y concurrencia"
            },
            {
                icono: "postgresql",
                titulo: "PostgreSQL Avanzado",
                descripcion: "Stored procedures, triggers, views y funciones"
            },
            {
                icono: "node",
                titulo: "SQL con Node.js",
                descripcion: "Prisma ORM, raw queries y migraciones"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fundamentos de SQL",
                duracion: "3 semanas",
                temas: [
                    "Introducción a bases de datos",
                    "SELECT y filtrado de datos",
                    "Ordenamiento y agregación",
                    "Funciones básicas"
                ]
            },
            {
                numero: 2,
                titulo: "Relaciones y JOINs",
                duracion: "3 semanas",
                temas: [
                    "INNER JOIN",
                    "LEFT, RIGHT, FULL JOIN",
                    "Subconsultas",
                    "UNION y INTERSECT"
                ]
            },
            {
                numero: 3,
                titulo: "Diseño y Normalización",
                duracion: "4 semanas",
                temas: [
                    "Modelado de datos",
                    "Formas normales (1NF, 2NF, 3NF)",
                    "Claves primarias y foráneas",
                    "Diagrama ER"
                ]
            },
            {
                numero: 4,
                titulo: "Optimización y Performance",
                duracion: "3 semanas",
                temas: [
                    "Índices y su uso",
                    "EXPLAIN ANALYZE",
                    "Query optimization",
                    "Particionamiento"
                ]
            },
            {
                numero: 5,
                titulo: "Características Avanzadas",
                duracion: "3 semanas",
                temas: [
                    "Stored procedures",
                    "Triggers",
                    "Views y Materialized Views",
                    "Transacciones y ACID"
                ]
            }
        ],
        tecnologias: [
            { nombre: "PostgreSQL", icono: "postgresql" },
            { nombre: "Node.js", icono: "node" },
            { nombre: "TypeScript", icono: "typescript" },
            { nombre: "Git", icono: "git" }
        ],
        requisitos: [
            "Conocimientos básicos de programación",
            "Lógica y pensamiento analítico",
            "Familiaridad con línea de comandos (deseable)",
            "No se requiere experiencia previa en bases de datos"
        ]
    },

    {
        id: 6,
        slug: "devops-y-docker",
        titulo: "DevOps y Docker",
        descripcionLarga: "Aprende a containerizar aplicaciones y desplegar en la nube con Docker, Kubernetes y herramientas de CI/CD modernas.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/devops-docker-course-HdZiMeH1PJ0r6tbd3xs8uyED3Ok9ut.jpg",
        duracionMeses: 5,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "docker",
                titulo: "Docker Fundamentals",
                descripcion: "Containers, images, Dockerfile, volumes y networking"
            },
            {
                icono: "docker",
                titulo: "Docker Compose",
                descripcion: "Multi-container apps, orchestration y configuración"
            },
            {
                icono: "kubernetes",
                titulo: "Kubernetes",
                descripcion: "Pods, services, deployments, ingress y scaling"
            },
            {
                icono: "git",
                titulo: "CI/CD",
                descripcion: "GitHub Actions, GitLab CI y pipelines automatizados"
            },
            {
                icono: "node",
                titulo: "Cloud Deployment",
                descripcion: "AWS, Google Cloud, Digital Ocean y monitoreo"
            },
            {
                icono: "docker",
                titulo: "Best Practices",
                descripcion: "Security, optimization, logging y troubleshooting"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Introducción a DevOps",
                duracion: "2 semanas",
                temas: [
                    "¿Qué es DevOps?",
                    "Cultura DevOps",
                    "Herramientas del ecosistema",
                    "Linux fundamentals"
                ]
            },
            {
                numero: 2,
                titulo: "Docker Básico",
                duracion: "4 semanas",
                temas: [
                    "Containers vs VMs",
                    "Docker CLI",
                    "Dockerfile y builds",
                    "Volumes y networking"
                ]
            },
            {
                numero: 3,
                titulo: "Docker Avanzado",
                duracion: "3 semanas",
                temas: [
                    "Docker Compose",
                    "Multi-stage builds",
                    "Registry y distribución",
                    "Optimización de imágenes"
                ]
            },
            {
                numero: 4,
                titulo: "Kubernetes",
                duracion: "5 semanas",
                temas: [
                    "Arquitectura de K8s",
                    "Pods y Deployments",
                    "Services y Ingress",
                    "ConfigMaps y Secrets"
                ]
            },
            {
                numero: 5,
                titulo: "CI/CD y Cloud",
                duracion: "4 semanas",
                temas: [
                    "GitHub Actions",
                    "Pipelines automatizados",
                    "Deployment en AWS/GCP",
                    "Monitoreo y logs"
                ]
            }
        ],
        tecnologias: [
            { nombre: "Docker", icono: "docker" },
            { nombre: "Kubernetes", icono: "kubernetes" },
            { nombre: "Git", icono: "git" },
            { nombre: "Node.js", icono: "node" },
            { nombre: "MongoDB", icono: "mongodb" }
        ],
        requisitos: [
            "Conocimientos de desarrollo web (frontend o backend)",
            "Familiaridad con línea de comandos",
            "Git básico",
            "Experiencia con Node.js o similar (deseable)"
        ]
    },

    {
        id: 7,
        slug: "python-para-data-science",
        titulo: "Python para Data Science",
        descripcionLarga: "Análisis de datos, machine learning y visualización con Python. Aprende pandas, numpy, scikit-learn y construye modelos predictivos.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/python-data-science-course-6UuqpCPO3DhjJTfnLW9xms7Lbp9FmK.jpg",
        duracionMeses: 6,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "python",
                titulo: "Python Fundamentals",
                descripcion: "Sintaxis, estructuras de datos, funciones y POO"
            },
            {
                icono: "python",
                titulo: "Análisis de Datos",
                descripcion: "Pandas, NumPy, limpieza y transformación de datos"
            },
            {
                icono: "python",
                titulo: "Visualización",
                descripcion: "Matplotlib, Seaborn, Plotly y dashboards interactivos"
            },
            {
                icono: "python",
                titulo: "Machine Learning",
                descripcion: "Scikit-learn, regresión, clasificación y clustering"
            },
            {
                icono: "python",
                titulo: "Deep Learning",
                descripcion: "TensorFlow, Keras, redes neuronales y CNN"
            },
            {
                icono: "python",
                titulo: "Proyectos Reales",
                descripcion: "Análisis exploratorio, predicción y modelos en producción"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Python Básico",
                duracion: "3 semanas",
                temas: [
                    "Sintaxis y tipos de datos",
                    "Control de flujo",
                    "Funciones y módulos",
                    "POO básica"
                ]
            },
            {
                numero: 2,
                titulo: "NumPy y Pandas",
                duracion: "4 semanas",
                temas: [
                    "Arrays con NumPy",
                    "DataFrames con Pandas",
                    "Limpieza de datos",
                    "Transformación y agregación"
                ]
            },
            {
                numero: 3,
                titulo: "Visualización de Datos",
                duracion: "3 semanas",
                temas: [
                    "Matplotlib básico",
                    "Seaborn para gráficos estadísticos",
                    "Plotly interactivo",
                    "Dashboard con Streamlit"
                ]
            },
            {
                numero: 4,
                titulo: "Machine Learning",
                duracion: "6 semanas",
                temas: [
                    "Scikit-learn fundamentals",
                    "Regresión lineal y logística",
                    "Decision Trees y Random Forest",
                    "Clustering y PCA"
                ]
            },
            {
                numero: 5,
                titulo: "Deep Learning",
                duracion: "5 semanas",
                temas: [
                    "Introducción a redes neuronales",
                    "TensorFlow y Keras",
                    "CNN para imágenes",
                    "Proyecto final"
                ]
            }
        ],
        tecnologias: [
            { nombre: "Python", icono: "python" },
            { nombre: "Git", icono: "git" }
        ],
        requisitos: [
            "Conocimientos básicos de programación (deseable)",
            "Matemáticas de secundaria",
            "Estadística básica (deseable)",
            "Computadora con al menos 8GB de RAM"
        ]
    },
    
    {
        id: 8,
        slug: "nextjs-15-moderno",
        titulo: "Next.js 15 Moderno",
        descripcionLarga: "Crea aplicaciones web modernas con Next.js 15, App Router, Server Components y las últimas características del framework.",
        imagenUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nextjs-course-Hapferezdxa3xoM5a4E3LR2yiQzpbe.jpg",
        duracionMeses: 4,
        modalidad: "Clases en vivo",
        certificado: true,
        queAprenderas: [
            {
                icono: "nextjs",
                titulo: "Next.js 15 Fundamentals",
                descripcion: "App Router, routing, layouts y navigation"
            },
            {
                icono: "react",
                titulo: "Server Components",
                descripcion: "RSC, streaming, suspense y data fetching"
            },
            {
                icono: "nextjs",
                titulo: "Server Actions",
                descripcion: "Mutations, revalidation y progressive enhancement"
            },
            {
                icono: "typescript",
                titulo: "TypeScript Avanzado",
                descripcion: "Type-safe routing, API routes y validación"
            },
            {
                icono: "nextjs",
                titulo: "Optimización",
                descripcion: "Image optimization, caching, ISR y static export"
            },
            {
                icono: "nextjs",
                titulo: "Deployment",
                descripcion: "Vercel, configuración, analytics y monitoreo"
            }
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Introducción a Next.js 15",
                duracion: "2 semanas",
                temas: [
                    "App Router vs Pages Router",
                    "File-based routing",
                    "Layouts y templates",
                    "Metadata API"
                ]
            },
            {
                numero: 2,
                titulo: "Server Components",
                duracion: "4 semanas",
                temas: [
                    "RSC architecture",
                    "Data fetching patterns",
                    "Streaming y Suspense",
                    "Error handling"
                ]
            },
            {
                numero: 3,
                titulo: "Server Actions y Forms",
                duracion: "3 semanas",
                temas: [
                    "Server Actions",
                    "useFormState y useFormStatus",
                    "Revalidation",
                    "Optimistic updates"
                ]
            },
            {
                numero: 4,
                titulo: "Autenticación y Base de Datos",
                duracion: "4 semanas",
                temas: [
                    "NextAuth.js v5",
                    "Middleware",
                    "Prisma con PostgreSQL",
                    "API Routes"
                ]
            },
            {
                numero: 5,
                titulo: "Optimización y Deployment",
                duracion: "3 semanas",
                temas: [
                    "Image y Font optimization",
                    "Caching strategies",
                    "Deployment en Vercel",
                    "Proyecto final"
                ]
            }
        ],
        tecnologias: [
            { nombre: "Next.js", icono: "nextjs" },
            { nombre: "React", icono: "react" },
            { nombre: "TypeScript", icono: "typescript" },
            { nombre: "Tailwind CSS", icono: "tailwind" },
            { nombre: "PostgreSQL", icono: "postgresql" },
            { nombre: "Git", icono: "git" }
        ],
        requisitos: [
            "React sólido (Hooks, Context)",
            "JavaScript ES6+ avanzado",
            "TypeScript básico",
            "Familiaridad con APIs REST"
        ]
    }
];