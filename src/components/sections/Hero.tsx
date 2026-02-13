"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { Magnetic } from "@/components/ui/Magnetic";

const Beams = dynamic(() => import("@/components/ui/Beams"), { ssr: false });

export const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Avoid hydration mismatch on initial render

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background dark:bg-black pt-20">
            {/* Fullscreen Animated Beams Background - Dark Mode Only */}
            {resolvedTheme === 'dark' ? (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Beams
                        beamWidth={3}
                        beamHeight={30}
                        beamNumber={20}
                        lightColor="#e0c51a"
                        speed={2}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={30}
                    />
                    {/* Subtle dark overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                </div>
            ) : null}

            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-8 leading-[0.95]">
                        Finansal Mimari.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground/80 to-muted-foreground/40">
                            Stratejik Güç.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                        VA Partners, vergi planlaması, devlet destekleri ve finansal yönetimle işletmenizin potansiyelini küresel güce dönüştürür.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Magnetic strength={0.2}>
                            <ShinyButton className="px-10 py-5 text-base min-w-[260px] shadow-[0_15px_40px_rgba(198,167,94,0.2)]">
                                Hizmetlerimizi Keşfedin
                            </ShinyButton>
                        </Magnetic>
                        <Magnetic strength={0.1}>
                            <button className="px-10 py-5 text-foreground/80 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl font-bold text-base tracking-widest uppercase hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-[260px] shadow-xl">
                                İletişime Geçin
                            </button>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - Back to center */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Keşfet</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent"></div>
            </motion.div>
        </section>
    );
};
