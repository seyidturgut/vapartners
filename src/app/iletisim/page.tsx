import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import * as motion from "framer-motion/client";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';
import { SmartContactForm } from '@/components/features/SmartContactForm';

export const metadata: Metadata = {
    title: 'İletişim | VA Partners',
    description: 'Bizimle iletişime geçin. Adres, telefon ve e-posta bilgilerimiz.',
};

export default function ContactPage() {
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
                        İletişim
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
                    Sorularınız ve iş birliği talepleriniz için <span className="text-foreground border-b-2 border-gold/30">size en yakın noktadayız.</span> Uzman ekibimizle iletişime geçmekten çekinmeyin.
                </motion.p>
            </section>

            {/* Contact Form Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="max-w-4xl mx-auto">
                    <SmartContactForm />
                </div>
            </section>

            {/* Contact Info & Map */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-card p-10 rounded-[2.5rem] border border-border hover:shadow-2xl transition-all group h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-4 font-serif">Merkez Ofis</h3>
                            <p className="text-muted-foreground leading-relaxed italic">
                                Kazım Dirik Mahallesi<br />
                                372/18 Sokak No.4<br />
                                Bornova / İzmir<br />
                                <span className="text-xs font-bold text-gold uppercase tracking-[0.2em] mt-2 block">Forum Bornova Avm Karşısı</span>
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-card p-10 rounded-[2.5rem] border border-border hover:shadow-2xl transition-all group h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-4 font-serif">Telefon</h3>
                            <a href="tel:+902325044882" className="text-2xl font-bold text-foreground hover:text-gold transition-colors block mb-2">
                                +90 232 504 48 82
                            </a>
                            <p className="text-sm text-muted-foreground italic">Hafta içi: 09:00 - 18:00</p>
                        </motion.div>

                        <motion.div
                            className="bg-card p-10 rounded-[2.5rem] border border-border hover:shadow-2xl transition-all group h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-4 font-serif">E-Posta</h3>
                            <a href="mailto:info@vapartners.com.tr" className="text-lg font-bold text-foreground hover:text-gold transition-colors block break-all">
                                info@vapartners.com.tr
                            </a>
                        </motion.div>

                        <motion.div
                            className="bg-card p-10 rounded-[2.5rem] border border-border hover:shadow-2xl transition-all group h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-4 font-serif">Çalışma Saatleri</h3>
                            <p className="text-muted-foreground leading-relaxed italic">
                                Pazartesi - Cuma<br />
                                09:00 - 18:00<br />
                                <span className="text-xs font-bold text-gold uppercase tracking-[0.2em] mt-2 block">Cumartesi - Pazar Kapalı</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Map */}
                    <motion.div
                        className="bg-muted rounded-[3rem] overflow-hidden min-h-[500px] border border-border shadow-2xl relative group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.639345266874!2d27.22467831519634!3d38.44986497964299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96316279313cd%3A0x7d28657678526569!2sKaz%C4%B1m%20Dirik%2C%20372%2F18.%20Sk.%20No%3A4%2C%2035100%20Bornova%2Fi%CC%87zmir!5e0!3m2!1sen!2str!4v1676646738245!5m2!1sen!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '500px' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        ></iframe>
                    </motion.div>
                </div>

                {/* Social Media Links */}
                <motion.div
                    className="mt-24 pt-12 border-t border-border flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-8 text-center">Sosyal Medyada VA Partners</h3>
                    <div className="flex gap-6">
                        <a
                            href="https://www.linkedin.com/company/va-partners-tr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold hover:shadow-xl transition-all duration-500 group"
                        >
                            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="https://www.instagram.com/vapartnerstr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold hover:shadow-xl transition-all duration-500 group"
                        >
                            <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
