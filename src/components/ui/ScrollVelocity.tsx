"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
    MotionValue
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "./ScrollVelocity.css";

interface VelocityScrollProps {
    texts: string[];
    velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrap(-20, -45, x) based on the number of steps you have
     * and the length of the text.
     */
    const x = useTransform(baseX, (v: number) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll based on
         * scroll speed.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be enough to fill the screen.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

export const ScrollVelocity = ({ texts, velocity = 5, className }: VelocityScrollProps) => {
    return (
        <section className={className}>
            {texts.map((text, index) => (
                <ParallaxText key={index} baseVelocity={index % 2 === 0 ? velocity : -velocity}>
                    {text}
                </ParallaxText>
            ))}
        </section>
    );
};

export default ScrollVelocity;
