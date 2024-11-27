export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const servicesData: Service[] = [
    {
        id: 1,
        name: 'Seo',
        description: 'Programació d’una web responsive completa',
        price: 300
    },
    {
        id: 2,
        name: 'Ads',
        description: 'Programació d’una web responsive completa',
        price: 400
    },
    {
        id: 3,
        name: 'Web',
        description: 'Programació d’una web responsive completa',
        price: 500
    },
]