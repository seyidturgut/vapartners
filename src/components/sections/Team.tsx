"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Volkan Akyüz",
        role: "Founder",
        image: "/team/va-volkan.webp",
        linkedin: "https://www.linkedin.com/in/volkan-aky%C3%BCz-14091849/",
    },
    {
        name: "Zehra Akyüz",
        role: "Partner - SMMM",
        image: "/team/va-zehra.webp",
        linkedin: "https://www.linkedin.com/in/zehra-aky%C3%BCz-48b28120b/",
    },
    {
        name: "Sema Yıldız Yoldaş",
        role: "Partner",
        image: "/team/va-sema.webp",
        linkedin: "https://www.linkedin.com/in/sema-yildiz-yoldas",
    },
];

export const Team = () => {
    return (
        <section id="team" className="section-padding bg-muted/30">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">YÖNETİM KURULUMUZ</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">Eşsiz Uzmanlık.</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative mb-8 mx-auto w-48 h-48 md:w-56 md:h-56">
                                <div className="absolute inset-0 rounded-full border border-gold/20 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-2 rounded-full overflow-hidden bg-muted flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 border border-border mt-0 ml-0 mr-0 mb-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors" />
                                </div>

                                {/* Social Floating Buttons */}
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity delay-100 hover:text-gold cursor-pointer border border-border"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold mb-1 text-foreground">{member.name}</h4>
                            <p className="text-xs font-bold tracking-widest uppercase text-gold">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
