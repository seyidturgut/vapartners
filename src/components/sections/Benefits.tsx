"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Users } from "lucide-react";

const benefits = [
    {
        title: "Unrivaled Precision",
        description: "Every strategy is backed by multi-layered data verification and rigorous stress-testing models.",
        icon: Zap,
    },
    {
        title: "Global Reach",
        description: "Deep networks across primary and emerging markets ensure localized expertise on a global scale.",
        icon: Users,
    },
    {
        title: "Awarded Excellence",
        description: "Consistently recognized as the leading boutique consultancy for sovereign and corporate clients.",
        icon: Award,
    },
    {
        title: "Fiduciary Duty",
        description: "Our interests are perfectly aligned with our clients, maintaining the highest ethical standards.",
        icon: CheckCircle2,
    },
];

export const Benefits = () => {
    return (
        <section id="about" className="section-padding bg-background overflow-hidden relative">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-6 block">Our Distinction</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.2] text-foreground">
                            The architecture of <br /> sustainable success.
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            At VA Partners, we don&apos;t just advise; we engineer the foundations of your future.
                            Our methodology is rooted in the philosophy that strategic clarity is the
                            most valuable asset in a volatile market.
                        </p>

                        <div className="space-y-8">
                            {benefits.slice(0, 2).map((benefit) => (
                                <div key={benefit.title} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-gold">
                                        <benefit.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 gap-8">
                            <div className="aspect-[4/5] bg-card relative rounded-sm overflow-hidden group border border-border">
                                <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-700" />
                                {/* Visual placeholder for professional imagery */}
                                <div className="absolute inset-0 flex items-center justify-center p-12 text-center border border-white/10 m-4">
                                    {/* Use an image if available */}
                                    {/* <img src="..." alt="" className="absolute inset-0 w-full h-full object-cover" /> */}
                                    <span className="text-muted-foreground/50 text-sm font-light tracking-widest uppercase italic">
                                        Visionary Leadership Image
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                {benefits.slice(2).map((benefit, idx) => (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="p-6 border border-border bg-card shadow-sm"
                                    >
                                        <benefit.icon size={24} className="text-gold mb-4" />
                                        <h4 className="text-sm font-bold mb-2 uppercase tracking-tight text-foreground">{benefit.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Background Accent */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};
