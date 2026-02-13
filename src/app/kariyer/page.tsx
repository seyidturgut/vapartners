"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, Upload, FileText, Send } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const steps = [
    {
        id: "name",
        question: "Merhaba, öncelikle isminizi öğrenebilir miyiz?",
        placeholder: "Adınız ve Soyadınız",
        type: "text",
    },
    {
        id: "email",
        question: "Size hangi e-posta adresinden ulaşabiliriz?",
        placeholder: "eposta@ornek.com",
        type: "email",
    },
    {
        id: "phone",
        question: "Telefon numaranız nedir?",
        placeholder: "05xx xxx xx xx",
        type: "tel",
    },
    {
        id: "department",
        question: "Hangi departmanla ilgileniyorsunuz?",
        type: "select",
        options: [
            "Vergi ve Finansal Yönetim",
            "Denetim ve Risk Yönetimi",
            "Yatırım ve Finans Kaynakları",
            "Teknoloji ve İnovasyon",
            "İhracat ve Uluslararası Büyüme",
            "Staj Programları"
        ],
    },
    {
        id: "cv",
        question: "Son olarak, güncel özgeçmişinizi paylaşır mısınız?",
        type: "file",
        placeholder: "Dosya seçin veya buraya sürükleyin",
    },
];

export default function CareerPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, string | File | null>>({
        name: "",
        email: "",
        phone: "",
        department: "",
        cv: null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [steps[currentStep].id]: e.target.value });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && formData[steps[currentStep].id]) {
            handleNext();
        }
    };

    const handleOptionSelect = (option: string) => {
        setFormData({ ...formData, [steps[currentStep].id]: option });
        setTimeout(() => handleNext(), 400);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, cv: e.target.files[0] });
            setTimeout(() => handleNext(), 600);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md"
                >
                    <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8">
                        <Check size={40} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Başvurunuz Alındı!</h1>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Değerli başvurunuz için teşekkür ederiz. İnsan kaynakları ekibimiz en kısa sürede sizinle iletişime geçecektir.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                    >
                        Anasayfaya Dön
                    </Link>
                </motion.div>
            </main>
        );
    }

    const currentStepData = steps[currentStep];

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col pt-32">
            <div className="container-custom max-w-4xl flex-1 flex flex-col">
                <Breadcrumbs className="mb-12" />

                {/* Progress Bar */}
                <div className="w-full h-1 bg-border rounded-full overflow-hidden mb-20">
                    <motion.div
                        className="h-full bg-gold"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="mb-12 flex items-center gap-4">
                        {currentStep > 0 && (
                            <button
                                onClick={handleBack}
                                className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}
                        <span className="text-sm font-bold tracking-widest uppercase text-gold">
                            Adım {currentStep + 1} / {steps.length}
                        </span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex-1"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-tight">
                                {currentStepData.question}
                            </h2>

                            {currentStepData.type === "select" ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {currentStepData.options?.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`p-6 text-left rounded-xl border transition-all duration-300 ${formData.department === option
                                                ? "border-gold bg-gold/5 text-gold shadow-lg"
                                                : "border-border hover:border-gold/50 bg-card"
                                                }`}
                                        >
                                            <span className="text-lg font-medium">{option}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : currentStepData.type === "file" ? (
                                <div className="max-w-xl">
                                    <label className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-gold/50 hover:bg-muted/30 transition-all overflow-hidden">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                                                {formData.cv ? <FileText size={32} /> : <Upload size={32} />}
                                            </div>
                                            <p className="text-lg font-medium mb-2">
                                                {formData.cv ? (formData.cv as File).name : currentStepData.placeholder}
                                            </p>
                                            <p className="text-sm text-muted-foreground uppercase tracking-widest">PDF, DOCX (Maks. 5MB)</p>
                                        </div>
                                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                                    </label>
                                    <button
                                        onClick={handleNext}
                                        disabled={!formData.cv}
                                        className="mt-12 w-full py-5 bg-foreground text-background font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Başvuruyu Tamamla <Send size={20} />
                                    </button>
                                </div>
                            ) : (
                                <div className="max-w-2xl group">
                                    <input
                                        ref={inputRef}
                                        type={currentStepData.type}
                                        placeholder={currentStepData.placeholder}
                                        value={formData[currentStepData.id] as string}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyDown}
                                        className="w-full bg-transparent border-b-2 border-border py-6 text-2xl md:text-3xl font-medium focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/30"
                                    />
                                    <div className="mt-12 flex items-center justify-between">
                                        <p className="text-sm text-muted-foreground uppercase tracking-widest animate-pulse">
                                            Devam etmek için Enter'a basın
                                        </p>
                                        <button
                                            onClick={handleNext}
                                            disabled={!formData[currentStepData.id]}
                                            className="w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed group-hover:scale-110 active:scale-95 transition-transform"
                                        >
                                            <ArrowRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Decorative Background Element */}
            <div className="fixed top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-64 h-64 bg-navy/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        </main>
    );
}
