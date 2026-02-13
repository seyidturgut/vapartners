import servicesData from '@/data/services.json';

export interface Service {
    id: string;
    slug: string;
    title: string;
    image: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
}

export function getAllServices(): Service[] {
    return servicesData as Service[];
}

export function getServiceBySlug(slug: string): Service | undefined {
    return (servicesData as Service[]).find((service) => service.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit: number = 3): Service[] {
    const allServices = getAllServices();
    const filtered = allServices.filter(s => s.slug !== currentSlug);
    // Shuffle and pick
    return filtered.sort(() => 0.5 - Math.random()).slice(0, limit);
}
