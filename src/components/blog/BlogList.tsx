"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/lib/news';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

interface BlogListProps {
    initialNews: NewsItem[];
}

const CATEGORIES = [
    { id: 'all', name: 'Tümü' },
    { id: 'haber', name: 'Haber', internal: 'duyurular' },
    { id: 'egitim', name: 'Eğitim', internal: 'egitim-ve-etkinlikler' },
    { id: 'etkinlik', name: 'Etkinlik', internal: 'egitim-ve-etkinlikler' },
];

export function BlogList({ initialNews }: BlogListProps) {
    const searchParams = useSearchParams();
    const filterParam = searchParams.get('filter');

    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (filterParam) {
            setActiveCategory(filterParam);
        }
    }, [filterParam]);

    const filteredNews = initialNews.filter((item) => {
        const matchesCategory = activeCategory === 'all' ||
            (activeCategory === 'haber' && item.category === 'duyurular') ||
            (activeCategory === 'egitim' && item.category === 'egitim-ve-etkinlikler' && (item.title.toLowerCase().includes('eğitim') || item.title.toLowerCase().includes('egitim'))) ||
            (activeCategory === 'etkinlik' && item.category === 'egitim-ve-etkinlikler' && !item.title.toLowerCase().includes('eğitim') && !item.title.toLowerCase().includes('egitim'));

        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.content.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const getDisplayName = (category: string, title: string) => {
        if (category === 'duyurular') return 'Haber';
        if (title.toLowerCase().includes('eğitim') || title.toLowerCase().includes('egitim')) return 'Eğitim';
        return 'Etkinlik';
    };

    return (
        <div className="space-y-12">
            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-card p-6 rounded-[2rem] border border-border shadow-sm">
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat.id
                                    ? 'bg-gold text-black'
                                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Bloglarda ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-6 py-3 bg-muted/50 rounded-full text-sm border-none focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                </div>
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                <AnimatePresence mode="popLayout">
                    {filteredNews.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Link
                                href={`/blog/${item.slug}`}
                                className="group block bg-card rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border h-full flex flex-col"
                            >
                                {item.image ? (
                                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-6 left-6 z-10">
                                            <div className="bg-background/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold text-foreground uppercase tracking-[0.2em] border border-white/10 shadow-xl">
                                                {getDisplayName(item.category, item.title)}
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ) : (
                                    <div className="relative aspect-[16/10] w-full bg-muted flex items-center justify-center">
                                        <span className="text-muted-foreground font-serif italic text-lg opacity-20">VA Partners</span>
                                        <div className="absolute top-6 left-6 z-10">
                                            <div className="bg-background/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold text-foreground uppercase tracking-[0.2em] border border-white/10 shadow-xl">
                                                {getDisplayName(item.category, item.title)}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gold mb-6">
                                        <span className="flex items-center gap-1.5"><Calendar size={12} /> 2024</span>
                                        <span className="w-1 h-1 bg-gold rounded-full" />
                                        <span className="flex items-center gap-1.5"><Tag size={12} /> {getDisplayName(item.category, item.title)}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <div className="text-muted-foreground/80 text-sm line-clamp-3 mb-8 flex-grow leading-relaxed">
                                        {item.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                                    </div>
                                    <div className="flex items-center gap-2 text-gold font-bold text-sm">
                                        Devamını Oku <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredNews.length === 0 && (
                <div className="py-24 text-center">
                    <h3 className="text-2xl font-serif text-muted-foreground italic">Aradığınız kriterlere uygun yazı bulunamadı.</h3>
                </div>
            )}
        </div>
    );
}
