import React from 'react';
import { Metadata } from 'next';
import { Globe2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Global Varlığımız | VA Partners',
    description: 'Türkiye merkezli, dünya odaklı. Küresel çözüm ortaklarımız ve genişleyen uluslararası ağımız.',
};

export default function GlobalPresencePage() {
    return (
        <main className="min-h-screen">
            <section className="pt-48 pb-24 bg-zinc-950 relative overflow-hidden">
                {/* Background Map Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Globe2 size={800} className="absolute -right-20 -bottom-20 text-gold" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                            Sınır Tanımayan <span className="text-gold italic">Çözümler</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            Türkiye'den dünyaya uzanan bir vizyonla, işletmenizi küresel pazarlarda yerel bir oyuncu gibi konumlandırıyoruz. Güçlü uluslararası ağımızla yanınızdayız.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { city: 'İzmir', country: 'Türkiye', type: 'Merkez Ofis' },
                            { city: 'İstanbul', country: 'Türkiye', type: 'Temsilcilik' },
                            { city: 'Londra', country: 'Bileşik Krallık', type: 'Çözüm Ortağı' },
                            { city: 'Dubai', country: 'BAE', type: 'Çözüm Ortağı' },
                            { city: 'Berlin', country: 'Almanya', type: 'Stratejik Ağ' },
                            { city: 'Bakü', country: 'Azerbaycan', type: 'Temsilcilik' },
                            { city: 'New York', country: 'ABD', type: 'Stratejik Ağ' },
                            { city: 'Singapur', country: 'Singapur', type: 'Stratejik Ağ' }
                        ].map((loc, i) => (
                            <div key={i} className="group p-8 border border-zinc-100 dark:border-zinc-800 rounded-3xl hover:bg-gold/5 transition-all duration-500">
                                <div className="flex items-center gap-2 text-gold mb-4 uppercase text-[10px] font-black tracking-widest">
                                    <MapPin size={12} />
                                    {loc.type}
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-2 group-hover:text-gold transition-colors">{loc.city}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 font-medium">{loc.country}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
