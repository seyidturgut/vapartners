import { getAllNews } from '@/lib/news';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import * as motion from "framer-motion/client";
import { BlogList } from '@/components/blog/BlogList';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Blog | VA Partners',
    description: 'VA Partners duyuruları, eğitimler ve sektörel blog yazıları.',
};

export default function BlogIndexPage() {
    const news = getAllNews();

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
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 max-w-5xl leading-tight">
                        Blog
                    </h1>
                    <div className="h-1 w-24 bg-gold rounded-full" />
                </motion.div>
            </div>

            {/* Hero Quote */}
            <section className="container mx-auto px-6 mb-24">
                <motion.p
                    className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl leading-relaxed italic"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Sektörel gelişmelerden haberdar olun, <span className="text-foreground border-b-2 border-gold/30">eğitim ve etkinliklerimizle</span> vizyonunuzu genişletin.
                </motion.p>
            </section>

            {/* News Grid */}
            <section className="container mx-auto px-6 py-12">
                <Suspense fallback={<div className="text-center py-20">Yükleniyor...</div>}>
                    <BlogList initialNews={news} />
                </Suspense>
            </section>
        </main>
    );
}
