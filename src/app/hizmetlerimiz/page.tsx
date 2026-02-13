import { getAllServices } from '@/lib/services';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceList } from '@/components/features/ServiceList';
import { Suspense } from 'react';
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | VA Partners - Stratejik Danışmanlık',
    description: 'İşletmenizin büyümesi için mali müşavirlik, vergi, teşvik ve kurumsal yönetim danışmanlığı alanlarında sunduğumuz kapsamlı hizmetler.',
};

export default function ServicesIndexPage() {
    const services = getAllServices();

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background relative selection:bg-gold selection:text-white">
            <div className="container mx-auto px-6 mb-12">
                <Breadcrumbs className="mb-8" />
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 lg:py-20">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary blur-3xl mix-blend-multiply filter animate-blob"></div>
                    <div className="absolute top-0 -left-4 w-72 h-72 rounded-full bg-indigo-300 blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-pink-300 blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-4 rounded-full bg-gold/5 text-gold text-xs font-black mb-6 tracking-[0.3em] uppercase border border-gold/10"
                        >
                            Uzmanlık Alanlarımız
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-[1.1]"
                        >
                            İşletmeniz İçin <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-gold">
                                Stratejik Çözümler
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Mali müşavirlik, finansal yönetim, devlet destekleri ve daha fazlası.
                            Sürdürülebilir büyüme yolculuğunuzda size rehberlik ediyoruz.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-6 py-12 relative z-10">
                <Suspense fallback={<div className="text-center py-24">Yükleniyor...</div>}>
                    <ServiceList initialServices={services} />
                </Suspense>
            </section>
        </main>
    );
}
