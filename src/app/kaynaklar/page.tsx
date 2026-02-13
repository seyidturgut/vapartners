import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kaynaklar | VA Partners',
    description: 'Stratejik büyüme ve finansal yönetim için güncel kaynaklar ve dökümanlar.',
};

export default function ResourcesPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-48 pb-24 bg-zinc-950">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                            Bilgi <span className="text-gold italic">Kaynaklarımız</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            İşletmenizin geleceğini şekillendirecek stratejik dokümanlar, rehberler ve teknik yayınlar.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Stratejik Planlama Rehberi 2026',
                                category: 'Rehber',
                                description: 'Yeni nesil finansal yönetim ve büyüme stratejileri üzerine kapsamlı el rehberi.'
                            },
                            {
                                title: 'Vergi Mevzuatı Güncellemeleri',
                                category: 'Teknik Yayın',
                                description: '2026 yılı güncel vergi düzenlemeleri ve işletmeler üzerindeki etkileri.'
                            },
                            {
                                title: 'Yatırımcı Sunumu Teknikleri',
                                category: 'Eğitim',
                                description: 'Yatırım alma sürecinde dikkat edilmesi gereken kritik başarı faktörleri.'
                            }
                        ].map((resource, i) => (
                            <div key={i} className="group p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-gold transition-all duration-500">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gold mb-4 block">
                                    {resource.category}
                                </span>
                                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-8 font-light leading-relaxed">
                                    {resource.description}
                                </p>
                                <button className="text-sm font-bold uppercase tracking-widest border-b border-gold/50 pb-1 hover:border-gold transition-all text-gold">
                                    Dosyayı İndir
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
