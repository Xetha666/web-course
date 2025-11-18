export interface ContactInfo {
    id: string;
    icon: string;
    title: string;
    details: string[];
}

export const ContactInfoData: ContactInfo[] = [
    {
        id: "email",
        icon: "Email",
        title: "Email",
        details: [
            "info@itacademy.com",
            "soporte@itacademy.com"
        ]
    },
    {
        id: "phone",
        icon: "Phone",
        title: "Teléfono",
        details: [
            "+34 912 345 678",
            "+34 912 345 679"
        ]
    },
    {
        id: "location",
        icon: "Location",
        title: "Ubicación",
        details: [
            "Calle Principal 123",
            "Madrid, España 28001"
        ]
    },
    {
        id: "schedule",
        icon: "Clock",
        title: "Horarios",
        details: [
            "Lunes - Viernes: 9:00 - 18:00",
            "Sábado: 10:00 - 14:00"
        ]
    }
];