import React from 'react';
import { Metadata } from 'next';
import { TrendingUp, Globe, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pazar İçgörüleri | VA Partners',
    description: 'Küresel ve yerel pazarlardaki son trendler, sektörel analizler ve gelecek öngörüleri.',
};

export default function MarketInsightsPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-48 pb-24 bg-zinc-950">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                            Pazar <span className="text-gold italic">İçgörüleri</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            Veriye dayalı analizlerle pazarın ritmini tutun. Küresel trendleri yerel fırsatlara dönüştüren stratejik bakış açısı.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Globe className="text-gold" size={32} />,
                                title: 'Küresel Makro Trendler',
                                content: 'Uluslararası ticaretin yeni kuralları ve tedarik zincirindeki yapısal değişimler.'
                            },
                            {
                                icon: <TrendingUp className="text-gold" size={32} />,
                                title: 'Finansal Teknoloji Analizi',
                                content: 'Geleneksel bankacılıktan dijital varlık yönetimine geçişte Türkiye pazarının konumu.'
                            },
                            {
                                icon: <BarChart3 className="text-gold" size={32} />,
                                title: 'Tüketici Davranış Analizi',
                                content: 'Yeni nesil tüketicilerin beklentileri ve marka sadakati oluşturma stratejileri.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-[2rem] shadow-sm border border-zinc-100 dark:border-zinc-800">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
