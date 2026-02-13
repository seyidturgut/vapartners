"use client";

import TrueFocus from "@/components/ui/TrueFocus";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { Magnetic } from "@/components/ui/Magnetic";

export const CTA = () => {
    return (
        <section className="bg-muted/50 py-40 text-center text-foreground relative overflow-hidden dark:bg-zinc-950">

            <div className="container-custom relative z-10 max-w-7xl mx-auto flex flex-col items-center">
                <TrueFocus
                    sentence="Büyüme tesadüf değildir. Mühendisliktir."
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#e0c51a"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />

                <div className="flex flex-col sm:flex-row gap-8 mt-12">
                    <Magnetic strength={0.2}>
                        <ShinyButton className="px-12 py-7 text-lg">
                            Diyaloğu Başlat
                        </ShinyButton>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
};
