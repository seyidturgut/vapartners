import React from 'react';
import { Metadata } from 'next';
import { Target, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Metodolojimiz | VA Partners',
    description: 'Bilimsel yaklaşımlar ve mühendislik vizyonuyla harmanlanmış stratejik danışmanlık metodolojimiz.',
};

export default function MethodologyPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-48 pb-24 bg-zinc-950">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                            Mühendislik <span className="text-gold italic">Vizyonu</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            Sadece analiz etmiyoruz; finansal ve stratejik süreçleri en baştan kurguluyor ve uyguluyoruz. İşte VA Partners'ın fark yaratan 4 aşamalı metodolojisi.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-900">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            {
                                step: '01',
                                title: 'Derinlemesine Teşhis',
                                description: 'İşletmenizin finansal röntgenini çekiyor, görünmeyen riskleri ve potansiyel büyüme alanlarını tespit ediyoruz.',
                                icon: <Target className="text-gold" />
                            },
                            {
                                step: '02',
                                title: 'Stratejik Mimari',
                                description: 'Veriye dayalı, uygulanabilir ve sürdürülebilir bir büyüme haritası tasarlıyoruz.',
                                icon: <Zap className="text-gold" />
                            },
                            {
                                step: '03',
                                title: 'Uygulama ve Denetim',
                                description: 'Tasarladığımız sistemleri bizzat sahada uyguluyor, her adımın doğruluğunu denetliyoruz.',
                                icon: <ShieldCheck className="text-gold" />
                            },
                            {
                                step: '04',
                                title: 'Optimizasyon',
                                description: 'Sürekli izleme ile sonuçları analiz ediyor, değişen pazar koşullarına göre stratejiyi güncelliyoruz.',
                                icon: <TrendingUp className="text-gold" />
                            }
                        ].map((m, i) => (
                            <div key={i} className="relative p-12 bg-zinc-50 dark:bg-zinc-800/30 rounded-[3rem] border border-zinc-100 dark:border-white/5 overflow-hidden group">
                                <div className="absolute -top-10 -right-10 text-[180px] font-black text-black/5 dark:text-white/5 group-hover:text-gold/10 transition-colors">
                                    {m.step}
                                </div>
                                <div className="size-16 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl flex items-center justify-center mb-8 relative z-10">
                                    {m.icon}
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">{m.title}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed relative z-10">
                                    {m.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
