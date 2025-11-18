export interface Achievement {
    valor: number;
    sufijo: string;
    etiqueta: string;
}

export const AchievementData: Achievement[] = [
    { valor: 50, sufijo: 'K+', etiqueta: 'Estudiantes' },
    { valor: 25, sufijo: '+', etiqueta: 'Instructores' },
    { valor: 30, sufijo: '+', etiqueta: 'Cursos' },
    { valor: 95, sufijo: '%', etiqueta: 'Satisfacción' },
];