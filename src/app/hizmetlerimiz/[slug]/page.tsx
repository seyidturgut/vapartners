
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllServices, getServiceBySlug, getRelatedServices } from '@/lib/services';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { StickyContactForm } from '@/components/ui/StickyContactForm';
import * as motion from "framer-motion/client";
import { ArrowRight } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Hizmet Bulunamadı',
        };
    }

    return {
        title: service.metaTitle || `${service.title} | VA Partners`,
        description: service.metaDescription,
    };
}

export async function generateStaticParams() {
    const services = getAllServices();
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const relatedServices = getRelatedServices(slug, 3);

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Breadcrumbs className="mb-6" />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 max-w-5xl leading-tight">
                        {service.title}
                    </h1>
                    <div className="h-1 w-24 bg-gold rounded-full" />
                </motion.div>
            </div>

            {/* Content Section */}
            <section className="container mx-auto px-6 mb-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content (Left on Desktop) */}
                    <motion.div
                        className="w-full lg:w-2/3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {service.image && (
                            <div className="mb-12 relative w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 group">
                                <Image
                                    src={service.image}
                                    alt={service.title}
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
                            dangerouslySetInnerHTML={{ __html: service.content }}
                        />
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

            {/* Related Services Section */}
            <section className="border-t border-border bg-muted/30 pt-24 pb-24 dark:bg-zinc-950/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Diğer Hizmetlerimiz</h2>
                            <p className="text-muted-foreground max-w-xl">
                                İşletmenizin büyümesine katkı sağlayacak diğer uzmanlık alanlarımızı keşfedin.
                            </p>
                        </div>
                        <Link
                            href="/hizmetlerimiz"
                            className="flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all"
                        >
                            Tümünü Gör <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedServices.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/hizmetlerimiz/${item.slug}`}
                                    className="group block bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-serif font-bold text-foreground mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-gold transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gold font-bold text-sm">
                                            İncele <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
