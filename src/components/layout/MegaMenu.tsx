"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator, ShieldCheck, TrendingUp, Cpu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
    {
        title: "Vergi ve Finansal Yönetim",
        icon: <Calculator className="w-4 h-4" />,
        items: [
            { name: "Mali Müşavirlik", href: "/hizmetlerimiz/mali-musavirlik-ve-defter-tutma" },
            { name: "Vergi Planlaması", href: "/hizmetlerimiz/kurumlar-ve-gelir-vergisi-denetim-ve-tasdik-hizmetleri" },
            { name: "KDV İade", href: "/hizmetlerimiz/kdv-iade" },
            { name: "Dolaylı Vergi Hizmetleri", href: "/hizmetlerimiz/dolayli-vergi-hizmetleri" },
        ]
    },
    {
        title: "Denetim ve Risk Yönetimi",
        icon: <ShieldCheck className="w-4 h-4" />,
        items: [
            { name: "Bağımsız Denetim (KGK)", href: "/hizmetlerimiz/bagimsiz-denetim-kgk" },
            { name: "Hukuki ve Mali Risk", href: "/hizmetlerimiz/hukuki-ve-mali-risk-denetimi" },
            { name: "SGK Denetimine Hazırlık", href: "/hizmetlerimiz/sgk-denetimine-hazirlik-danismanligi" },
            { name: "Risk Yönetimi ve İç Denetim", href: "/hizmetlerimiz/risk-yonetimi-ve-ic-denetim" },
        ]
    },
    {
        title: "Yatırım ve Finans Kaynakları Yönetimi",
        icon: <TrendingUp className="w-4 h-4" />,
        items: [
            { name: "Fon Kurulum Süreçleri", href: "/hizmetlerimiz/girisim-sermayesi-yatirim-fonu-kurulum-surec-danismanligi" },
            { name: "Borç Yapılandırma", href: "/hizmetlerimiz/borc-yapilandirma-ve-risk-konsolidasyonu-danismanligi" },
            { name: "Şirket Değerleme", href: "/hizmetlerimiz/sirket-degerleme" },
            { name: "M&A Danışmanlığı", href: "/hizmetlerimiz/birlesme-ve-satin-alma" },
        ]
    },
    {
        title: "Teknoloji ve İnovasyon Yönetimi",
        icon: <Cpu className="w-4 h-4" />,
        items: [
            { name: "Ar-Ge Merkezi Danışmanlığı", href: "/hizmetlerimiz/ar-ge-merkezi-mali-danismanligi" },
            { name: "TEKMER Danışmanlığı", href: "/hizmetlerimiz/tekmer-danismanligi" },
            { name: "Tasarım Merkezi", href: "/hizmetlerimiz/tasarim-merkezi-mali-danismanligi" },
            { name: "Hamle Programı", href: "/hizmetlerimiz/teknoloji-odakli-sanayi-hamlesi" },
        ]
    },
    {
        title: "İhracat ve Uluslararası Büyüme",
        icon: <Globe className="w-4 h-4" />,
        items: [
            { name: "E-Turquality Programı", href: "/hizmetlerimiz/e-turquality-programi" },
            { name: "Pazara Giriş Destekleri", href: "/hizmetlerimiz/pazara-giris-projeleri-destegi" },
            { name: "Küresel Büyüme", href: "/hizmetlerimiz/kuresel-is-gelistirme-ve-strateji" },
            { name: "Yurtdışı Teşvikler", href: "/hizmetlerimiz/yurtdisi-pazar-destekleri" },
        ]
    }
];

export const MegaMenu = ({
    isOpen,
    onClose,
    onMouseEnter,
    onMouseLeave
}: {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-screen max-w-[1240px] z-50 pointer-events-none px-6"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.99 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="pointer-events-auto relative overflow-hidden bg-zinc-900/95 dark:bg-black/90 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 via-transparent to-white/5 pointer-events-none" />

                        <div className="relative p-8 px-10">
                            <div className="grid grid-cols-5 gap-8">
                                {categories.map((category, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.04 + 0.1 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3 group/title cursor-default">
                                            <div className="size-7 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center text-gold group-hover/title:bg-gold group-hover/title:text-black transition-all duration-300">
                                                <div className="size-3.5 flex items-center justify-center">
                                                    {category.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-[12px] font-bold tracking-[0.1em] uppercase text-white group-hover/title:text-gold transition-colors leading-tight">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <ul className="space-y-4">
                                            {category.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>
                                                    <Link
                                                        href={item.href}
                                                        className="group flex items-center gap-3 text-[14px] font-semibold text-white/80 hover:text-gold transition-all"
                                                        onClick={onClose}
                                                    >
                                                        <div className="size-1.5 rounded-full bg-gold/50 group-hover:bg-gold group-hover:scale-125 transition-all duration-300" />
                                                        <span className="relative">
                                                            {item.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Minimal Bottom Bar */}
                            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-8 text-[12px] text-white/50 font-medium tracking-wide">
                                    <span className="flex items-center gap-2">
                                        <div className="size-1 bg-gold/50 rounded-full" />
                                        Stratejik Danışmanlık
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <div className="size-1 bg-gold/50 rounded-full" />
                                        Finansal Mühendislik
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <div className="size-1 bg-gold/50 rounded-full" />
                                        Küresel Büyüme
                                    </span>
                                </div>
                                <Link
                                    href="/hizmetlerimiz"
                                    className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-gold hover:text-white transition-all shadow-sm"
                                    onClick={onClose}
                                >
                                    Tüm Hizmetler <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
