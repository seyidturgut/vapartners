"use client";

import Link from "next/link";
import { Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-muted dark:bg-zinc-950 text-foreground pt-24 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-sm text-white font-bold text-xl">
                                VA
                            </div>
                            <span className="text-xl font-bold tracking-tighter">PARTNERS</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
                            Yeni nesil global işletmeler için stratejik danışmanlık.
                            2011'den beri sürdürülebilir finansal büyüme mühendisliği.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/va-partners-tr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all cursor-pointer"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/vapartnerstr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all cursor-pointer"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-gold">Hizmetler</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {[
                                { name: "Vergi ve Finansal Yönetim", href: "/hizmetlerimiz?cat=vergi" },
                                { name: "Denetim ve Risk Yönetimi", href: "/hizmetlerimiz?cat=denetim" },
                                { name: "Yatırım ve Finans Kaynakları", href: "/hizmetlerimiz?cat=yatirim" },
                                { name: "Teknoloji ve İnovasyon", href: "/hizmetlerimiz?cat=teknoloji" },
                                { name: "İhracat ve Uluslararası Büyüme", href: "/hizmetlerimiz?cat=ihracat" }
                            ].map((item) => (
                                <li key={item.name} className="hover:text-foreground transition-colors">
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-gold">Kaynaklar</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {[
                                { name: "Kaynaklar", href: "/kaynaklar" },
                                { name: "Pazar İçgörüleri", href: "/pazar-icgoruleri" },
                                { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
                                { name: "Metodolojimiz", href: "/metodolojimiz" },
                                { name: "Global Varlığımız", href: "/global-varligimiz" },
                                { name: "Kariyer", href: "/kariyer" }
                            ].map((item) => (
                                <li key={item.name} className="hover:text-foreground transition-colors">
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-gold">İletişim</h4>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <p>Kazım Dirik Mahallesi,<br />372/18 Sokak No.4<br />Bornova / İzmir</p>
                            <p>info@vapartners.com.tr</p>
                            <p>+90 232 504 48 82</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60">
                        © 2026 VA PARTNERS. TÜM HAKLARI SAKLIDIR.
                    </p>

                    <div className="flex gap-8 text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60">
                        <Link href="/gizlilik-politikasi" className="hover:text-gold cursor-pointer transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kullanim-kosullari" className="hover:text-gold cursor-pointer transition-colors">Kullanım Şartları</Link>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-gold"
                    >
                        Yukarı Çık
                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};
