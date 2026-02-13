import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getNewsBySlug, getAllNews } from '@/lib/news';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { StickyContactForm } from '@/components/ui/StickyContactForm';
import * as motion from "framer-motion/client";
import { Calendar, Tag, Share2 } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const item = getNewsBySlug(slug);

    if (!item) {
        return {
            title: 'Blog Yazısı Bulunamadı',
        };
    }

    return {
        title: `${item.title} | VA Partners`,
        description: item.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
    };
}

export async function generateStaticParams() {
    const news = getAllNews();
    return news.map((item) => ({
        slug: item.slug,
    }));
}

const getDisplayName = (category: string, title: string) => {
    if (category === 'duyurular') return 'Haber';
    if (title.toLowerCase().includes('eğitim') || title.toLowerCase().includes('egitim')) return 'Eğitim';
    return 'Etkinlik';
};

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const item = getNewsBySlug(slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Breadcrumbs className="mb-6" />
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gold mb-8">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> 2024</span>
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        <span className="flex items-center gap-1.5"><Tag size={12} /> {getDisplayName(item.category, item.title)}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 max-w-5xl leading-tight">
                        {item.title}
                    </h1>
                    <div className="h-1 w-24 bg-gold rounded-full" />
                </motion.div>
            </div>

            {/* Content Section */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content (Left on Desktop) */}
                    <motion.div
                        className="w-full lg:w-2/3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {item.image && (
                            <div className="mb-12 relative w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        )}

                        <div
                            className="prose prose-lg max-w-none dark:prose-invert 
                            prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                            prose-p:text-muted-foreground/80 prose-p:leading-relaxed prose-p:text-justify
                            prose-strong:text-foreground prose-strong:font-bold
                            prose-li:text-muted-foreground/80
                            prose-img:rounded-[2rem] prose-img:shadow-xl
                            [&>p:first-of-type]:first-letter:text-5xl [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:text-gold [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:float-left"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />

                        {/* Share Section */}
                        <div className="mt-20 pt-10 border-t border-border flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Paylaş:</span>
                                <div className="flex gap-2">
                                    {[1, 2, 3].map((i) => (
                                        <button key={i} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-all">
                                            <Share2 size={16} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Sidebar (Sticky Form) */}
                    <motion.aside
                        className="w-full lg:w-1/3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <StickyContactForm />
                    </motion.aside>
                </div>
            </section>
        </main>
    );
}
