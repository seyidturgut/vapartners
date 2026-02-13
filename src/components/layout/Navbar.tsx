"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MegaMenu } from "./MegaMenu";
import { getAllServices } from "@/lib/services";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileView, setMobileView] = useState<'main' | 'categories' | 'services'>('main');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const services = getAllServices();

    const CATEGORIES = [
        { id: 'vergi', name: 'Vergi & Denetim' },
        { id: 'destek', name: 'Devlet Destekleri' },
        { id: 'finans', name: 'Finansal Yönetim' },
        { id: 'kurumsal', name: 'Kurumsal Danışmanlık' },
        { id: 'ik', name: 'İnsan Kaynakları' },
    ];

    const getServiceCategoryId = (service: any) => {
        const title = service.title.toLowerCase();
        if (title.includes('vergi') || title.includes('denetim') || title.includes('kdv') || title.includes('tasdik')) return 'vergi';
        if (title.includes('destek') || title.includes('teşvik') || title.includes('hamle') || title.includes('kosgeb') || title.includes('ipard') || title.includes('kalkinma') || title.includes('ar-ge') || title.includes('tasarim') || title.includes('tekmer')) return 'destek';
        if (title.includes('finans') || title.includes('cfo') || title.includes('bütçe') || title.includes('nakit') || title.includes('borç') || title.includes('risk') || title.includes('fiyatlandirma')) return 'finans';
        if (title.includes('şirket') || title.includes('değerleme') || title.includes('birleşme') || title.includes('kuruluş') || title.includes('tasfiye') || title.includes('pazara giriş') || title.includes('serbest bölge')) return 'kurumsal';
        if (title.includes('sgk') || title.includes('bordro')) return 'ik';
        return 'kurumsal';
    };

    const getServicesByCategory = (catId: string) => {
        return services.filter(s => getServiceCategoryId(s) === catId);
    };

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setIsMegaMenuOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 100);
    };

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    if (!isMounted) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-4",
                isScrolled ? "bg-background/90 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_2px_40px_rgba(0,0,0,0.1)]" : "bg-transparent py-6",
                isMobileMenuOpen && "bg-[#0A0A0B] py-3"
            )}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <div className="relative h-14 w-auto overflow-hidden">
                        <img
                            src="/logo-white.webp"
                            alt="VA Partners"
                            className="h-full w-auto object-contain transition-all duration-500 hidden dark:block group-hover:scale-105"
                        />
                        <img
                            src="/va-partners-logo-color.png"
                            alt="VA Partners"
                            className="h-full w-auto object-contain transition-all duration-500 block dark:hidden group-hover:scale-105"
                        />
                    </div>
                </Link>

                {/* Desktop Links Container - Using relative to center MegaMenu against it */}
                <div className="hidden lg:flex items-center grow justify-center gap-10">
                    <Link
                        href="/"
                        className={cn(
                            "text-[11px] font-black tracking-[0.25em] uppercase transition-all hover:text-gold relative group",
                            isScrolled ? "text-foreground/80" : "text-foreground"
                        )}
                    >
                        Anasayfa
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <Link
                        href="/hakkimizda"
                        className={cn(
                            "text-[11px] font-black tracking-[0.25em] uppercase transition-all hover:text-gold relative group",
                            isScrolled ? "text-foreground/80" : "text-foreground"
                        )}
                    >
                        Hakkımızda
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Hizmetler Hover Trigger */}
                    <div
                        className="flex items-center"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="/hizmetlerimiz"
                            className={cn(
                                "text-[11px] font-black tracking-[0.25em] uppercase transition-all hover:text-gold flex items-center gap-2 py-4 relative group",
                                isScrolled ? "text-foreground/80" : "text-foreground",
                                isMegaMenuOpen && "text-gold"
                            )}
                        >
                            Hizmetler
                            <motion.span
                                animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                                className="mt-0.5"
                            >
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>

                    <Link
                        href="/blog"
                        className={cn(
                            "text-[11px] font-black tracking-[0.25em] uppercase transition-all hover:text-gold relative group",
                            isScrolled ? "text-foreground/80" : "text-foreground"
                        )}
                    >
                        Blog
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6 shrink-0">
                    <Link href="/iletisim" className={cn(
                        "px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all border",
                        isScrolled
                            ? "border-gold text-gold hover:bg-gold hover:text-black shadow-lg shadow-gold/10"
                            : "border-gold/30 text-foreground hover:bg-gold hover:text-black hover:border-gold"
                    )}>
                        İletişim
                    </Link>
                    <ThemeToggle />
                </div>

                {/* MegaMenu - Positioned absolute relative to the max-w-[1400px] container */}
                <MegaMenu
                    isOpen={isMegaMenuOpen}
                    onClose={() => setIsMegaMenuOpen(false)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />

                {/* Mobile Toggler */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-3 bg-white/5 border border-white/10 rounded-2xl text-foreground hover:text-gold transition-colors z-[110]"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-0 z-[105] bg-[#0A0A0B] flex flex-col pt-24"
                        >
                            <div className="flex-grow overflow-hidden relative">
                                <AnimatePresence initial={false} mode="wait">
                                    {mobileView === 'main' && (
                                        <motion.div
                                            key="main"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="p-8 flex flex-col gap-6"
                                        >
                                            <Link
                                                href="/"
                                                className="text-4xl font-serif font-bold text-white hover:text-gold transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Anasayfa
                                            </Link>
                                            <button
                                                onClick={() => setMobileView('categories')}
                                                className="text-4xl font-serif font-bold text-white hover:text-gold transition-colors flex items-center justify-between group"
                                            >
                                                Hizmetler <ArrowRight className="text-gold group-hover:translate-x-2 transition-transform" />
                                            </button>
                                            <Link
                                                href="/hakkimizda"
                                                className="text-4xl font-serif font-bold text-white hover:text-gold transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Hakkımızda
                                            </Link>
                                            <Link
                                                href="/blog"
                                                className="text-4xl font-serif font-bold text-white hover:text-gold transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Blog
                                            </Link>
                                            <Link
                                                href="/iletisim"
                                                className="mt-8 py-5 bg-gold text-black font-black tracking-[0.2em] uppercase text-xs rounded-2xl text-center shadow-2xl shadow-gold/20"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                İletişim
                                            </Link>

                                            <div className="mt-4 pt-8 border-t border-white/5 flex items-center justify-between">
                                                <span className="text-xs font-black uppercase tracking-widest text-white/40">Görünüm</span>
                                                <ThemeToggle />
                                            </div>
                                        </motion.div>
                                    )}

                                    {mobileView === 'categories' && (
                                        <motion.div
                                            key="categories"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="p-8 flex flex-col gap-4 h-full"
                                        >
                                            <button
                                                onClick={() => setMobileView('main')}
                                                className="flex items-center gap-2 text-gold font-black uppercase tracking-widest text-[10px] mb-8"
                                            >
                                                <ArrowRight size={14} className="rotate-180" /> Geri Dön
                                            </button>
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4 border-b border-white/5 pb-4">Hizmet Kategorileri</h3>
                                            <div className="flex flex-col gap-6 overflow-y-auto max-h-[60vh] scrollbar-hide py-4">
                                                {CATEGORIES.map((cat) => (
                                                    <button
                                                        key={cat.id}
                                                        onClick={() => {
                                                            setSelectedCategory(cat.id);
                                                            setMobileView('services');
                                                        }}
                                                        className="text-2xl font-serif font-bold text-white hover:text-gold transition-colors flex items-center justify-between group"
                                                    >
                                                        {cat.name} <ArrowRight size={20} className="text-gold/50 group-hover:text-gold group-hover:translate-x-2 transition-all" />
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {mobileView === 'services' && selectedCategory && (
                                        <motion.div
                                            key="services"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="p-8 flex flex-col gap-4 h-full"
                                        >
                                            <button
                                                onClick={() => setMobileView('categories')}
                                                className="flex items-center gap-2 text-gold font-black uppercase tracking-widest text-[10px] mb-8"
                                            >
                                                <ArrowRight size={14} className="rotate-180" /> Kategorilere Dön
                                            </button>
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4 border-b border-white/5 pb-4">
                                                {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                                            </h3>
                                            <div className="flex flex-col gap-5 overflow-y-auto max-h-[60vh] scrollbar-hide py-4">
                                                {getServicesByCategory(selectedCategory).map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        href={`/hizmetlerimiz/${service.slug}`}
                                                        className="text-lg font-medium text-white/80 hover:text-gold transition-colors block border-l-2 border-white/5 pl-4 hover:border-gold"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setMobileView('main');
                                                        }}
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-auto p-10 border-t border-white/5 bg-white/[0.02]">
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className="size-10 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                                            <Phone size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Telefon</span>
                                            <a href="tel:+902123456789" className="text-sm font-bold text-white">+90 (212) 345 67 89</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="size-10 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                                            <Mail size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">E-Posta</span>
                                            <a href="mailto:info@vapartners.com.tr" className="text-sm font-bold text-white">info@vapartners.com.tr</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
