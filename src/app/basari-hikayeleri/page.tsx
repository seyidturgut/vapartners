import React from 'react';
import { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Başarı Hikayeleri | VA Partners',
    description: 'Müşterilerimizle birlikte imza attığımız stratejik dönüşüm ve büyüme yolculukları.',
};

export default function SuccessStoriesPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-48 pb-24 bg-zinc-950">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                            Başarı <span className="text-gold italic">Hikayeleri</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            Somut sonuçlar, gerçek dönüşümler. Danışmanlık verdiğimiz kurumların küresel pazarlardaki büyüme serüvenleri.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-900">
                <div className="container-custom">
                    <div className="space-y-16">
                        {[
                            {
                                client: 'Global Teknoloji A.Ş.',
                                result: '%150 İhracat Artışı',
                                description: 'E-Turquality ve küresel pazar stratejileri ile markanın 12 yeni ülkeye açılma süreci.'
                            },
                            {
                                client: 'FMCG Lideri',
                                result: '%30 Operasyonel Verimlilik',
                                description: 'Risk yönetimi ve iç kontrol sistemlerinin yeniden yapılandırılması ile sağlanan maliyet tasarrufu.'
                            },
                            {
                                client: 'Enerji Grubu',
                                result: '50M$ Yatırım Kaynağı',
                                description: 'Şirket değerleme ve M&A danışmanlığı ile başarılı geçen yabancı ortaklık süreci.'
                            }
                        ].map((story, i) => (
                            <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-zinc-100 dark:border-zinc-800 pb-16">
                                <div className="md:col-span-8">
                                    <h3 className="text-[12px] font-black uppercase tracking-widest text-gold mb-4">{story.client}</h3>
                                    <h4 className="text-3xl md:text-4xl font-serif font-bold mb-6 group-hover:text-gold transition-colors">
                                        {story.description}
                                    </h4>
                                </div>
                                <div className="md:col-span-4 bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-3xl border border-gold/10">
                                    <div className="flex items-center gap-3 text-gold mb-2">
                                        <CheckCircle2 size={20} />
                                        <span className="text-sm font-bold uppercase tracking-tighter">Elde Edilen Sonuç</span>
                                    </div>
                                    <div className="text-4xl font-bold text-zinc-900 dark:text-white">{story.result}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
