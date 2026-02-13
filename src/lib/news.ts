import newsData from '@/data/news.json';

export interface NewsItem {
    id: string;
    slug: string;
    title: string;
    image: string;
    content: string;
    category: string;
    metaTitle: string;
    metaDescription: string;
}

export function getAllNews(): NewsItem[] {
    return newsData as NewsItem[];
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
    return (newsData as NewsItem[]).find((item) => item.slug === slug);
}
