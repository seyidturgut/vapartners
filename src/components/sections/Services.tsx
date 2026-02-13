"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe2, ShieldCheck, Wallet2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Financial Engineering",
        description: "Complex capital structuring and derivative strategies designed for risk optimization and long-term liquidity management.",
        icon: BarChart3,
    },
    {
        title: "Strategic Advisory",
        description: "Holistic market entry and operational efficiency consultancies tailored for high-growth corporate entities.",
        icon: Globe2,
    },
    {
        title: "Wealth Preservation",
        description: "Sophisticated asset protection and multi-generational wealth management frameworks for high-net-worth individuals.",
        icon: ShieldCheck,
    },
    {
        title: "M&A Integration",
        description: "Seamless merger and acquisition lifecycle management, from due diligence to post-deal operational synergy.",
        icon: Wallet2,
    },
];

export const Services = () => {
    return (
        <section id="services" className="section-padding bg-muted/30">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gold mb-4">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                            Integrated solutions <br /> for complex challenges.
                        </h3>
                    </div>
                    <p className="text-muted-foreground/80 max-w-sm mb-2">
                        Providing tailored consultancy services that bridge the gap between financial ambition and operational reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 bg-card border border-border hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Radial Highlight */}
                            <div className="radial-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-foreground">
                                <service.icon size={120} />
                            </div>

                            <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-sm mb-6 group-hover:bg-gold transition-colors duration-500 relative z-10">
                                <service.icon className="text-foreground group-hover:text-background transition-colors duration-500" size={24} />
                            </div>

                            <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-gold transition-colors relative z-10">{service.title}</h4>
                            <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                                {service.description}
                            </p>

                            <div className="mt-8 pt-8 border-t border-border relative z-10">
                                <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all text-foreground">
                                    Explore Service
                                    <span className="w-8 h-px bg-gold" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
