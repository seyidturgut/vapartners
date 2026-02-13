"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/lib/services';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

interface ServiceListProps {
    initialServices: Service[];
}

const CATEGORIES = [
    { id: 'all', name: 'Tümü' },
    { id: 'vergi', name: 'Vergi & Denetim' },
    { id: 'destek', name: 'Devlet Destekleri' },
    { id: 'finans', name: 'Finansal Yönetim' },
    { id: 'kurumsal', name: 'Kurumsal Danışmanlık' },
    { id: 'ik', name: 'İnsan Kaynakları' },
];

export function ServiceList({ initialServices }: ServiceListProps) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const getServiceCategory = (service: Service) => {
        const title = service.title.toLowerCase();
        if (title.includes('vergi') || title.includes('denetim') || title.includes('kdv') || title.includes('tasdik')) return 'vergi';
        if (title.includes('destek') || title.includes('teşvik') || title.includes('hamle') || title.includes('kosgeb') || title.includes('ipard') || title.includes('kalkinma') || title.includes('ar-ge') || title.includes('tasarim') || title.includes('tekmer')) return 'destek';
        if (title.includes('finans') || title.includes('cfo') || title.includes('bütçe') || title.includes('nakit') || title.includes('borç') || title.includes('risk') || title.includes('fiyatlandirma')) return 'finans';
        if (title.includes('şirket') || title.includes('değerleme') || title.includes('birleşme') || title.includes('kuruluş') || title.includes('tasfiye') || title.includes('pazara giriş') || title.includes('serbest bölge')) return 'kurumsal';
        if (title.includes('sgk') || title.includes('bordro')) return 'ik';
        return 'kurumsal'; // Default
    };

    const filteredServices = initialServices.filter((service) => {
        const matchesCategory = activeCategory === 'all' || getServiceCategory(service) === activeCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-12">
            {/* Filter & Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center bg-card p-6 rounded-[2rem] border border-border shadow-sm">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat.id
                                    ? 'bg-gold text-black shadow-lg shadow-gold/20'
                                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="relative w-full lg:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Hizmetlerimizde ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-6 py-3 bg-muted/50 rounded-full text-sm border-none focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                </div>
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Link
                                href={`/hizmetlerimiz/${service.slug}`}
                                className="group relative block h-full bg-card backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-gold/10 transition-all duration-500 border border-border flex flex-col transform hover:-translate-y-2"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
                                    {service.image ? (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-muted flex items-center justify-center">
                                            <span className="text-muted-foreground font-serif italic text-lg">VA Partners</span>
                                        </div>
                                    )}
                                    {/* Category Tag */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="bg-background/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold text-foreground uppercase tracking-[0.2em] border border-white/10 shadow-xl">
                                            {CATEGORIES.find(c => c.id === getServiceCategory(service))?.name}
                                        </div>
                                    </div>
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-end p-8">
                                        <span className="text-white font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest text-black">
                                            İncele <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow bg-card/50 backdrop-blur-md z-30">
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-2 min-h-[3.5rem] leading-tight">
                                        {service.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gold/30 group-hover:bg-gold transition-all duration-500 rounded-full mb-6"></div>

                                    <div className="text-muted-foreground leading-relaxed line-clamp-3 mb-8 flex-grow text-sm group-hover:text-foreground/90 transition-colors">
                                        {service.content ? service.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." : ""}
                                    </div>

                                    <div className="flex items-center text-gold font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300">
                                        Daha Fazla Bilgi <ArrowRight size={12} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredServices.length === 0 && (
                <div className="py-24 text-center">
                    <h3 className="text-2xl font-serif text-muted-foreground italic">Aradığınız kriterlere uygun hizmet bulunamadı.</h3>
                </div>
            )}
        </div>
    );
}
