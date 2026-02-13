"use client";

import { motion } from "framer-motion";

interface AnimatedWaveProps {
    className?: string;
    color?: string;
    flip?: boolean;
}

export const AnimatedWave = ({ className, color = "fill-zinc-50", flip = false }: AnimatedWaveProps) => {
    return (
        <div className={`relative w-full overflow-hidden leading-[0] ${className} ${flip ? "rotate-180" : ""}`}>
            <svg
                className={`relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] ${color}`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <motion.path
                    initial={{ d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" }}
                    animate={{
                        d: [
                            "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                            "M321.39,40.44c58,10.79,114.16,10.13,172,21.86,82.39,16.72,168.19,27.73,250.45,10.39C823.78,51,906.67,32,985.66,12.83c70.05-18.48,146.53-16.09,214.34,7V0H0V17.35A600.21,600.21,0,0,0,321.39,40.44Z",
                            "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        ]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </svg>
        </div>
    );
};
