"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const StickyContactForm = ({ className }: { className?: string }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        // Mock submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(data);
        alert("Mesajınız başarıyla iletildi.");
    };

    return (
        <div className={cn(
            "bg-[#0A0A0B] border border-white/10 rounded-3xl p-8 sticky top-28 shadow-2xl",
            className
        )}>
            <div className="space-y-2 mb-8">
                <h3 className="text-xl font-bold text-white tracking-tight">Hızlı Bilgi Alın</h3>
                <p className="text-sm text-muted-foreground">Uzmanlarımız en kısa sürede size dönüş yapacaktır.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Adınız Soyadınız"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                </div>
                <div>
                    <input
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="E-posta Adresiniz"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                </div>
                <div>
                    <input
                        {...register("phone", { required: true })}
                        placeholder="Telefon Numaranız"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                </div>
                <div>
                    <textarea
                        {...register("message", { required: true })}
                        placeholder="Mesajınız"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    {isSubmitting ? "Gönderiliyor..." : (
                        <>
                            Gönder
                            <Send className="size-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-[10px] text-white/30 leading-relaxed">
                    Gönder butonuna basarak Kişisel Verilerin Korunması Kanunu kapsamındaki
                    aydınlatma metnini okuduğunuzu ve kabul ettiğinizi onaylamış olursunuz.
                </p>
            </div>
        </div>
    );
};
