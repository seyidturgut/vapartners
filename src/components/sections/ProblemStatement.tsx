"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const problems = [
    {
        title: "Inefficient Capital Structure",
        content: "When equity and debt are misaligned, growth stalls. We re-engineer your balance sheet for maximum leverage and liquidity.",
    },
    {
        title: "Missed Incentive Leverage",
        content: "Billions in R&D and export incentives go unclaimed. We ensure you capture every available government grant and tax credit.",
    },
    {
        title: "Regulatory Exposure",
        content: "Global compliance is shifting beneath your feet. We build resilient frameworks that turn regulatory adherence into an asset.",
    },
    {
        title: "Weak Financial Reporting",
        content: "Decisions made on poor data are fatal. We implement IFRS-compliant reporting systems that provide crystal-clear visibility.",
    },
];

export const ProblemStatement = () => {
    return (
        <section className="section-padding bg-muted text-foreground relative overflow-hidden dark:bg-card">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-24">
                    <div className="max-w-xl">
                        <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block mb-6">
                            Critical Risks
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground">
                            Growth is not accidental.<br />
                            It is <span className="font-serif italic text-gold">engineered</span>.
                        </h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                        The modern enterprise faces four silent killers.
                        We identify, isolate, and neutralize them before they compromise your valuation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-16">
                    {problems.map((prob, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group p-8 hover:bg-background/50 transition-colors border-l border-border relative overflow-hidden"
                        >
                            <h3 className="text-xl font-medium mb-4 group-hover:text-gold text-foreground transition-colors">{prob.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm mb-8 group-hover:text-foreground transition-colors">
                                {prob.content}
                            </p>
                            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoveRight size={14} className="text-gold" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
