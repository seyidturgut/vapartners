"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, User, Mail, Phone, MessageSquare, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    company?: string;
}

const subjects = [
    "Vergi ve Finansal Yönetim",
    "Devlet Destekleri & Teşvikler",
    "Kurumsal Danışmanlık",
    "Denetim ve Risk Yönetimi",
    "Diğer"
];

export const SmartContactForm = () => {
    const [step, setStep] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, trigger, watch, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
        defaultValues: {
            subject: subjects[0]
        }
    });

    const nextStep = async () => {
        const fields = step === 1 ? ["name", "email", "phone"] : ["subject", "message"];
        const isValid = await trigger(fields as any);
        if (isValid) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const onSubmit = async (data: ContactFormData) => {
        // Mock submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Form Data:", data);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-gold/20 rounded-[2.5rem] p-12 text-center shadow-2xl"
            >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-8">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Mesajınız Alındı!</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Bize ulaştığınız için teşekkür ederiz. Uzman ekibimiz talebinizi inceleyerek en kısa sürede size geri dönüş yapacaktır.
                </p>
                <button
                    onClick={() => { setIsSuccess(false); setStep(1); }}
                    className="text-gold font-bold uppercase tracking-widest text-xs hover:underline"
                >
                    Yeni Mesaj Gönder
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted">
                <motion.div
                    className="h-full bg-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 2) * 100}%` }}
                />
            </div>

            <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Bize Yazın</h3>
                        <p className="text-sm text-muted-foreground">Formu doldurarak projeniz hakkında detaylı bilgi verebilirsiniz.</p>
                    </div>
                    <div className="text-right hidden sm:block">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                            Adım {step} / 2
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">Ad Soyad</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-gold transition-colors" size={18} />
                                            <input
                                                {...register("name", { required: "Bu alan zorunludur" })}
                                                placeholder="Örn: Ahmet Yılmaz"
                                                className="w-full bg-background border border-border rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-gold/50 transition-all shadow-sm"
                                            />
                                        </div>
                                        {errors.name && <span className="text-[10px] text-red-500 font-bold ml-1 uppercase">{errors.name.message}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">E-Posta</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <input
                                                {...register("email", {
                                                    required: "Bu alan zorunludur",
                                                    pattern: { value: /^\S+@\S+$/i, message: "Geçersiz e-posta" }
                                                })}
                                                placeholder="info@sirket.com"
                                                className="w-full bg-background border border-border rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-gold/50 transition-all shadow-sm"
                                            />
                                        </div>
                                        {errors.email && <span className="text-[10px] text-red-500 font-bold ml-1 uppercase">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">Telefon</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <input
                                                {...register("phone", { required: "Bu alan zorunludur" })}
                                                placeholder="+90 5xx xxx xx xx"
                                                className="w-full bg-background border border-border rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-gold/50 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">Şirket (Opsiyonel)</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <input
                                                {...register("company")}
                                                placeholder="Şirket Adı"
                                                className="w-full bg-background border border-border rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-gold/50 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="w-full bg-foreground text-background font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-gold hover:text-black transition-all group"
                                >
                                    Sonraki Adım <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">İlgi Alanı</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {subjects.map(s => (
                                            <label key={s} className="relative group cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value={s}
                                                    {...register("subject")}
                                                    className="peer sr-only"
                                                />
                                                <div className="p-3 text-center rounded-xl bg-background border border-border text-[11px] font-bold peer-checked:bg-gold/10 peer-checked:border-gold peer-checked:text-gold transition-all">
                                                    {s}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">Mesajınız</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-muted-foreground" size={18} />
                                        <textarea
                                            {...register("message", { required: "Bu alan zorunludur" })}
                                            placeholder="İhtiyaçlarınızdan kısaca bahsedin..."
                                            rows={5}
                                            className="w-full bg-background border border-border rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-gold/50 transition-all shadow-sm resize-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="w-1/3 bg-background border border-border text-foreground font-bold py-5 rounded-2xl hover:bg-muted transition-all"
                                    >
                                        Geri
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-2/3 bg-gold text-black font-black uppercase tracking-widest text-xs py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] shadow-xl shadow-gold/20 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Gönderiliyor..." : (
                                            <>
                                                Talebi Gönder <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>

                <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] text-muted-foreground text-center sm:text-left">
                        Formu göndererek <a href="#" className="underline hover:text-gold">KVKK Aydınlatma Metni</a>'ni kabul etmiş olursunuz.
                    </p>
                    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {/* Placeholder for security badges or small brand icons */}
                        <div className="w-12 h-6 bg-muted rounded"></div>
                        <div className="w-12 h-6 bg-muted rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
