// Importa las imágenes locales de la carpeta assets
import carlosImg from '@/assets/images/team-member-1.webp';
import mariaImg from '@/assets/images/team-member-2.webp';
import juanImg from '@/assets/images/team-member-3.webp';
import anaImg from '@/assets/images/team-member-4.webp';

export interface TeamMember {
    nombre: string;
    titulo: string;
    especialidad: string;
    imagenUrl: string;
    alt: string;
}

export const TeamData: TeamMember[] = [
    {
        nombre: "Carlos Mendez",
        titulo: "Fundador & CEO",
        especialidad: "Full Stack",
        imagenUrl: carlosImg.src, 
        alt: "Carlos Mendez"
    },
    {
        nombre: "María García",
        titulo: "Directora de Cursos",
        especialidad: "Frontend",
        imagenUrl: mariaImg.src,
        alt: "María García"
    },
    {
        nombre: "Juan López",
        titulo: "Instructor Senior",
        especialidad: "Backend",
        imagenUrl: juanImg.src,
        alt: "Juan López"
    },
    {
        nombre: "Ana Rodríguez",
        titulo: "Instructora",
        especialidad: "DevOps",
        imagenUrl: anaImg.src,
        alt: "Ana Rodríguez"
    }
];