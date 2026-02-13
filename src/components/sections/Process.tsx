"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "Analiz",
        description: "Mevcut mali yapı, varlıklar ve risklerin derinlemesine incelenmesi.",
    },
    {
        title: "Kurgu",
        description: "Vergi verimliliği ve varlık koruması için yasal ve finansal çerçevenin tasarlanması.",
    },
    {
        title: "Uygulama",
        description: "Sermaye stratejilerinin ve teşvik başvurularının hassas zamanlamayla hayata geçirilmesi.",
    },
    {
        title: "Sürdürülebilirlik",
        description: "Düzenleyici değişikliklere uyum sağlayan ve büyümeyi koruyan yönetişim protokolleri.",
    },
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-40 bg-muted/30 dark:bg-zinc-950 text-foreground relative overflow-hidden">
            <div className="container-custom">
                <div className="mb-32">
                    <span className="text-muted-foreground text-xs font-bold tracking-[0.3em] uppercase block mb-6">
                        Metodolojimiz
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                        Mühendislik Hassasiyeti.
                    </h2>
                </div>

                <div className="flex flex-col gap-32 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border group-hover:bg-gold/50 transition-colors duration-500" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="flex gap-12 group relative items-center"
                        >
                            <div className="relative z-10 shrink-0">
                                <div className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center group-hover:border-foreground transition-colors duration-500 relative">
                                    <div className="w-2 h-2 bg-muted-foreground rounded-full group-hover:bg-foreground transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="max-w-2xl pt-2 relative z-20">
                                <h3 className="text-3xl md:text-4xl font-light mb-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500 cursor-default">
                                    {step.title}
                                </h3>
                                <p className="text-xl text-muted-foreground/80 leading-relaxed font-light group-hover:text-muted-foreground transition-colors duration-500">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image Reveal on Hover (Large Screens) */}
                            <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-96 h-64 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0 pointer-events-none shadow-2xl skew-y-3 group-hover:skew-y-0 grayscale group-hover:grayscale-0 border border-border">
                                <div className="absolute inset-0 bg-background w-full h-full">
                                    <img
                                        src={`/upload/2/${idx === 0 ? 'business-people-discussing-charts-graphs-table-meeting-1-400x213.jpg' :
                                            idx === 1 ? 'person-using-financial-calculator-planning-their-savings-investments-1-400x213.jpg' :
                                                idx === 2 ? 'woman-working-with-finance-diagrams-table-laptop-papers-1-400x213.jpg' :
                                                    'entrepreneurs-signing-new-partnership-contract-their-firms-1-400x213.jpg'}`}
                                        alt=""
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 origin-center scale-110 group-hover:scale-100 transform"
                                    />
                                    <div className="absolute inset-0 bg-navy/20 dark:bg-navy/40 mix-blend-multiply"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
