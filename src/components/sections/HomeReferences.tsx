"use client";

import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import referencesData from "@/data/references.json";

export const HomeReferences = () => {
    // Collect all titles and join them to create strings for the marquee
    const titles = referencesData.map((ref: { title: string }) => ref.title);

    // Create two rows with different directions or overlapping content
    const row1 = titles.slice(0, Math.ceil(titles.length / 2)).join(" • ");
    const row2 = titles.slice(Math.ceil(titles.length / 2)).join(" • ");

    return (
        <section className="py-24 bg-background overflow-hidden border-t border-border/50">
            <div className="container-custom mb-12">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 block">Referanslarımız</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Birlikte Büyüyoruz.</h2>
            </div>

            <div className="mt-12">
                <ScrollVelocity
                    texts={[row1, row2]}
                    velocity={5}
                />
            </div>
        </section>
    );
};
