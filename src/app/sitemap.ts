import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { getAllServices } from '@/lib/services';
import { getAllNews } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vapartners.com.tr';

    // Static routes
    const routes = [
        '',
        '/hizmetlerimiz',
        '/hakkimizda',
        '/blog',
        '/iletisim',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic services
    const services = getAllServices().map((service) => ({
        url: `${baseUrl}/hizmetlerimiz/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic blog posts
    const blogPosts = getAllNews().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...services, ...blogPosts];
}
