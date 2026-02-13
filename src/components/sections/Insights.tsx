"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
    {
        category: "Market Outlook",
        title: "The Resilience of Liquidity in Volatile Capital Markets",
        date: "Feb 12, 2026",
    },
    {
        category: "Financial Strategy",
        title: "Re-evaluating Portfolio Hedging for the Next Decade",
        date: "Feb 08, 2026",
    },
    {
        category: "M&A Trends",
        title: "Cross-border Synergy: Challenges in Emerging Territories",
        date: "Jan 29, 2026",
    },
];

export const Insights = () => {
    return (
        <section id="insights" className="section-padding bg-background text-foreground">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">Knowledge Center</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Latest Insights.</h2>
                    </div>
                    <button className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors group">
                        View All Reports
                        <span className="w-12 h-px bg-foreground/20 group-hover:bg-gold group-hover:w-16 transition-all" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col group cursor-pointer relative overflow-hidden p-6 hover:bg-muted/5 transition-colors duration-500 rounded-xl"
                        >
                            {/* Radial Highlight */}
                            <div className="radial-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="aspect-[16/10] bg-muted mb-8 overflow-hidden relative border border-border z-10 rounded-lg">
                                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center italic text-muted-foreground/20 font-serif text-3xl">
                                    VA Analysis
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-foreground bg-background px-3 py-1 bg-opacity-90 rounded">Read Analysis</span>
                                    <div className="w-10 h-10 bg-gold text-white flex items-center justify-center rounded">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-gold">{article.category}</span>
                                <span className="w-1 h-1 rounded-full bg-border" />
                                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{article.date}</span>
                            </div>

                            <h4 className="text-xl font-bold leading-snug text-foreground group-hover:text-gold transition-colors relative z-10">
                                {article.title}
                            </h4>

                            <div className="mt-6 pt-6 border-t border-border translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    Deep dive into the structural shifts affecting global asset allocation in the current fiscal environment.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
