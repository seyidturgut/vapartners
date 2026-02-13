"use client";

import { useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { value: 500, suffix: "M+", label: "Yönetilen Fon Hacmi (TL)" },
    { value: 15, suffix: "+", label: "Teknopark & Ar-Ge Merkezi" },
    { value: 120, suffix: "+", label: "Kurumsal Müşteri" },
    { value: 10, suffix: "+", label: "Global Partner" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 15 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString("tr-TR");
            }
        });
    }, [springValue]);

    return (
        <span className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground">
            <span ref={ref}>0</span>{suffix}
        </span>
    );
};

export const Stats = () => {
    return (
        <section className="bg-background py-40 text-foreground border-t border-border">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 text-center md:text-left">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
