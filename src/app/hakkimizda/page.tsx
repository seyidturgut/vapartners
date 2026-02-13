import Image from 'next/image';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { StickyContactForm } from '@/components/ui/StickyContactForm';
import * as motion from "framer-motion/client";
import { Shield, Target, Zap, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hakkımızda | VA Partners',
    description: 'VA Partners, mali müşavirlik, vergi planlaması, devlet destekleri ve finans danışmanlığıyla işletmelere uçtan uca hizmet sunar.',
};

const values = [
    {
        icon: <Shield className="w-8 h-8 text-gold" />,
        title: "Güven ve Şeffaflık",
        description: "Tüm süreçlerimizde dürüstlük ve açıklık ilkesini benimsiyoruz."
    },
    {
        icon: <Target className="w-8 h-8 text-gold" />,
        title: "Stratejik Yaklaşım",
        description: "İşletmenizin geleceğini veriye dayalı stratejilerle şekillendiriyoruz."
    },
    {
        icon: <Zap className="w-8 h-8 text-gold" />,
        title: "Hız ve Verimlilik",
        description: "Karmaşık süreçleri en hızlı ve verimli şekilde sonuçlandırıyoruz."
    },
    {
        icon: <Users className="w-8 h-8 text-gold" />,
        title: "Müşteri Odaklılık",
        description: "Firmanızın bir parçası gibi çalışarak ortak hedeflere koşuyoruz."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Breadcrumbs className="mb-6" />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 max-w-5xl leading-tight">
                        Biz Kimiz?
                    </h1>
                    <div className="h-1 w-24 bg-gold rounded-full" />
                </motion.div>
            </div>

            {/* Main Content Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left side content */}
                    <motion.div
                        className="w-full lg:w-2/3 space-y-12"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
                            <Image
                                src="/upload/2/dscf5289.webp"
                                alt="Biz Kimiz"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        <div className="space-y-8 text-lg font-medium leading-relaxed text-muted-foreground">
                            <h2 className="text-4xl font-serif font-bold text-foreground tracking-tight italic">Geleceği Birlikte İnşa Ediyoruz</h2>
                            <p className="text-justify first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                                VA Partners, mali müşavirlik, devlet destekleri, finans, hukuk ve uluslararası danışmanlık alanlarında uzmanlaşmış, işletmelere uçtan uca hizmet sunar. Vergi planlaması, muhasebe yönetimi, finansal raporlama, yeminli mali müşavirlik, şirket değerleme ve kredi yapılandırma gibi kritik alanlarda şirketlerin sürdürülebilir büyüme hedeflerine ulaşmasına destek oluyoruz.
                            </p>
                            <p className="text-justify">
                                Devlet destekleri ve teşvikleri konusunda geniş kapsamlı danışmanlık sunuyoruz. Ar-Ge ve inovasyon yatırımları, yatırım teşvikleri, Ticaret Bakanlığı ihracat destekleri, kalkınma ajansları, KOSGEB ve TÜBİTAK teşvikleri alanlarında firmalara rehberlik ediyoruz. Firmanızın kendi ekibi gibi çalışarak, süreçlerin hızlı ve etkin şekilde tamamlanmasını sağlıyoruz.
                            </p>
                            <p className="text-justify italic border-l-4 border-gold pl-6 py-2 bg-gold/5 rounded-r-xl">
                                "VA Partners, şeffaflık, güvenilirlik ve sürdürülebilir büyüme ilkeleriyle hareket eden, iş dünyasının her aşamasında yanında olan bir iş ortağıdır."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Sidebar */}
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

            {/* Values Section */}
            <section className="bg-muted/30 py-32 dark:bg-zinc-950/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Değerlerimiz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            İşimize olan tutkumuzu ve müşterilerimize verdiğimiz sözü temsil eden temel değerlerimiz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed italic">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Ekibimiz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Alanında uzman danışmanlarımızla yanınızdayız.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] w-full mb-8 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-border">
                                <Image src="/team/va-hak_0001_volkan.webp" alt="Volkan Akyüz" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-gold transition-colors">VOLKAN AKYÜZ</h3>
                            <p className="text-sm font-bold tracking-widest uppercase text-gold">VA PARTNERS ŞİRKETLER GRUBU FOUNDER</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] w-full mb-8 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-border">
                                <Image src="/team/va-hak_0000_zehra.webp" alt="Zehra Akyüz" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-gold transition-colors">ZEHRA AKYÜZ</h3>
                            <p className="text-sm font-bold tracking-widest uppercase text-gold">VERGİ VE FİNANSAL YÖNETİM PARTNER-SMMM</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] w-full mb-8 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-border">
                                <Image src="/team/va-hak_0002_sema.webp" alt="Sema Yıldız Yoldaş" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-gold transition-colors">SEMA YILDIZ YOLDAŞ</h3>
                            <p className="text-sm font-bold tracking-widest uppercase text-gold">TEKNOLOJİ VE İNOVASYON YÖNETİMİ PARTNER</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
