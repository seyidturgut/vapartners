"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const ShinyButton = React.memo(({ children, className, ...props }: ShinyButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative inline-flex items-center justify-center overflow-hidden rounded-md bg-foreground px-8 py-3 font-bold text-background transition-all hover:scale-[1.02] active:scale-[0.98] tracking-widest uppercase text-sm",
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 rounded-md"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(224, 197, 26, 0.4), transparent 40%)`,
                    opacity: opacity,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
});

export default ShinyButton;
