
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Service } from '@/lib/services'; // Adjust import path as needed

interface ServicesGridProps {
    services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="h-full"
                >
                    <Link
                        href={`/hizmetlerimiz/${service.slug}`}
                        className="group relative block h-full bg-card backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-gold/10 transition-all duration-500 border border-border flex flex-col transform hover:-translate-y-1"
                    >
                        <div className="relative h-64 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-navy/20 dark:bg-navy/50 z-10 group-hover:bg-navy/0 transition-colors duration-500"></div>
                            {service.image ? (
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <div className="w-full h-full bg-muted flex items-center justify-center">
                                    <span className="text-muted-foreground font-serif italic text-lg">Görsel Yok</span>
                                </div>
                            )}
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-end p-6">
                                <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-gold hover:border-gold hover:text-navy transition-colors">
                                    İncele <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow relative bg-card/50 backdrop-blur-md z-30 border-t border-border">
                            <div className="mb-4">
                                <h3 className="text-2xl font-serif font-bold text-card-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2 min-h-[4rem]">
                                    {service.title}
                                </h3>
                                <div className="w-12 h-1 bg-border group-hover:bg-gold transition-all duration-500 rounded-full"></div>
                            </div>

                            <div className="text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow text-sm group-hover:text-foreground transition-colors">
                                {service.content ? service.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." : ""}
                            </div>

                            <div className="flex items-center text-gold font-semibold text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                Daha Fazla Bilgi
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
