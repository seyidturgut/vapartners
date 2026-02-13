import Image from 'next/image';
import Link from 'next/link';
import referencesData from '@/data/references.json';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
    title: 'Referanslar | VA Partners',
    description: 'Birlikte çalıştığımız kurumlar ve iş ortaklarımız.',
};

export default function ReferencesPage() {
    const references = referencesData as { id: number; title: string; image: string; }[];

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background overflow-hidden">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Breadcrumbs className="mb-6" />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 max-w-5xl leading-tight">
                        Referanslar
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
                    Güçlü iş ortaklarımızla birlikte sürdürülebilir başarı hikayeleri yazıyor,
                    <span className="text-foreground border-b-2 border-gold/30"> geleceğin lider şirketlerine</span> rehberlik ediyoruz.
                </motion.p>
            </section>

            {/* References Grid */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
                    {references.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-card p-8 rounded-[2rem] border border-border flex flex-col items-center justify-center text-center h-56 hover:shadow-2xl hover:border-gold/30 hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

                            {item.image ? (
                                <div className="relative w-full h-24 mb-6 z-10">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 transition-transform dark:invert-0 dark:brightness-100"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-24 bg-muted/30 mb-6 rounded-2xl flex items-center justify-center text-xs text-muted-foreground font-bold tracking-widest z-10 uppercase">
                                    {item.title.substring(0, 2)}
                                </div>
                            )}
                            <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 group-hover:text-gold transition-colors z-10 px-2 line-clamp-2">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA or Info */}
            <section className="container mx-auto px-6 mt-32 text-center">
                <motion.div
                    className="p-16 rounded-[3rem] bg-muted/30 border border-border dark:bg-zinc-950/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Siz de Başarı Hikayemize Katılın</h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        VA Partners olarak çözüm odaklı yaklaşımımızla işletmenizi geleceğe hazırlıyoruz.
                    </p>
                    <Link
                        href="/iletisim"
                        className="inline-flex items-center justify-center px-10 py-5 bg-gold text-white font-bold rounded-full hover:bg-gold/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gold/20"
                    >
                        Bizimle İletişime Geçin
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
