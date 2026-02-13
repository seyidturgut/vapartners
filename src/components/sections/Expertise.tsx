"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, CheckCircle2, ArrowRight, BarChart3, Target, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const positions = [
    {
        title: "Vergi ve Finansal Yönetim",
        description: "Mali kaynakların etkin kullanımı ve yasal vergi yükümlülüklerinin yerine getirilmesini sağlayan stratejik planlama çözümleri.",
        image: "/upload/2/person-using-financial-calculator-planning-their-savings-investments-1-400x213.jpg",
    },
    {
        title: "Denetim ve Risk Yönetimi",
        description: "İşletme faaliyetlerinin düzenli incelenmesi ve potansiyel risklerin tespit edilerek proaktif yönetilmesini sağlayan denetim süreçleri.",
        image: "/upload/2/business-people-discussing-charts-graphs-table-meeting-1-400x213.jpg",
    },
    {
        title: "Yatırım ve Finans Kaynakları Yönetimi",
        description: "Mali kaynakların verimli bir şekilde planlanması ve kârlı yatırımlara yönlendirilmesini amaçlayan finansal mühendislik.",
        image: "/upload/2/woman-working-with-finance-diagrams-table-laptop-papers-1-400x213.jpg",
    },
    {
        title: "Teknoloji ve İnovasyon Yönetimi",
        description: "Yenilikçi fikirlerin geliştirilmesi, Ar-Ge merkezi süreçleri ve teknolojik kaynakların stratejik kullanımı.",
        image: "/upload/2/shutterstock-2479107517-400x213.jpg",
    },
    {
        title: "İhracat ve Uluslararası Büyüme",
        description: "İşletmelerin ürün ve hizmetlerini yurtdışına sunarak yeni pazarlara açılma ve küresel ölçekte büyüme stratejileri.",
        image: "/upload/2/shutterstock-2501124749-400x283-1.jpg",
    },
    {
        title: "Stratejik Büyüme Analizi",
        description: "İşletmenizin mali yapısını, teşvik uygunluğunu ve büyüme potansiyelini 1 dakikada analiz edin, size özel stratejik raporunuzu alın.",
        image: "/assessment-bg.png",
        isAssessment: true
    }
];

const ASSESSMENT_QUESTIONS = [
    {
        id: 1,
        question: "Şirketinizin mali süreçleri ne kadar dijitalleşmiş?",
        options: ["Tamamen Manuel", "Kısmen Dijital", "Büyük Oranda Dijital", "Tam Otomasyon"]
    },
    {
        id: 2,
        question: "Devlet teşviklerinden düzenli olarak yararlanıyor musunuz?",
        options: ["Hiç Yararlanmıyoruz", "Sadece KOSGEB", "Birden Fazla Teşvik", "Stratejik Faydalanma"]
    },
    {
        id: 3,
        question: "Finansal raporlarınız ne sıklıkla analiz ediliyor?",
        options: ["Yılda Bir", "Altı Ayda Bir", "Aylık", "Gerçek Zamanlı"]
    },
    {
        id: 4,
        question: "Globalleşme vizyonunuz ne aşamada?",
        options: ["Sadece Yerel", "İhracat Hazırlığı", "Kısmi Global Varlık", "Global Marka Yönetimi"]
    }
];

export const Expertise = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [isResultShow, setIsResultShow] = useState(false);

    const handleAnswer = (optionIdx: number) => {
        const newAnswers = [...answers, optionIdx];
        setAnswers(newAnswers);

        if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsResultShow(true);
        }
    };

    const resetAssessment = () => {
        setIsModalOpen(false);
        setCurrentStep(0);
        setAnswers([]);
        setIsResultShow(false);
    };

    return (
        <section className="py-24 bg-background text-foreground relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
                    >
                        Uzmanlık Alanlarımız
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        işletmenizin her aşamasında değer yaratan stratejik çözümler.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {positions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => (item as any).isAssessment && setIsModalOpen(true)}
                            className={cn(
                                "group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 shadow-xl",
                                (item as any).isAssessment ? "cursor-pointer ring-1 ring-gold/20 hover:border-gold/50" : "hover:border-gold/30"
                            )}
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-navy/20 dark:bg-navy/50 z-10 group-hover:bg-navy/0 transition-colors duration-500"></div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-20"></div>

                                {(item as any).isAssessment && (
                                    <div className="absolute top-6 left-6 z-30 bg-gold/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(198,167,94,0.4)] animate-pulse">
                                        <TrendingUp size={14} className="text-black" />
                                        <span className="text-[10px] font-black uppercase text-black tracking-[0.2em]">Analiz Başlat</span>
                                    </div>
                                )}
                            </div>

                            <div className="relative p-8 -mt-20 z-30">
                                <div className="w-12 h-1 bg-gold mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-card-foreground group-hover:text-gold transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-all duration-500 line-clamp-3">
                                    {item.description}
                                </p>
                                {(item as any).isAssessment && (
                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group/btn text-gold">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Hemen Başla</span>
                                        <div className="size-8 rounded-full bg-gold/10 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-black transition-all">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Assessment Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#0A0A0B] border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
                        >
                            <button
                                onClick={resetAssessment}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-10 md:p-16">
                                {!isResultShow ? (
                                    <div>
                                        <div className="flex items-center gap-3 text-gold mb-8">
                                            <Target size={24} />
                                            <span className="text-xs font-black uppercase tracking-[0.3em]">Adım {currentStep + 1} / {ASSESSMENT_QUESTIONS.length}</span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10 leading-tight">
                                            {ASSESSMENT_QUESTIONS[currentStep].question}
                                        </h3>

                                        <div className="grid grid-cols-1 gap-4">
                                            {ASSESSMENT_QUESTIONS[currentStep].options.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleAnswer(idx)}
                                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 font-bold group flex justify-between items-center"
                                                >
                                                    {option}
                                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            ))}
                                        </div>

                                        <div className="mt-12 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gold"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center"
                                    >
                                        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-8 shadow-[0_0_50px_rgba(224,197,26,0.2)]">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Analiziniz Hazır!</h3>
                                        <p className="text-lg text-white/60 mb-10 max-w-md mx-auto">
                                            Verdiğiniz yanıtlara göre işletmenizin dönüşüm potansiyeli <b>%85</b> seviyesinde. Detaylı yol haritanız için uzmanlarımız sizi bekliyor.
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <button
                                                onClick={resetAssessment}
                                                className="w-full py-5 bg-gold text-black font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-gold/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
                                            >
                                                <Zap size={16} /> Raporumu İndir & İletişime Geç
                                            </button>
                                            <button
                                                onClick={resetAssessment}
                                                className="w-full py-5 bg-white/5 text-white/60 font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white/10 transition-colors"
                                            >
                                                Yeniden Başla
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

