import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";
import { HomeReferences } from "@/components/sections/HomeReferences";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-background">
      <Hero />
      {/* The Expertise component itself would need to be modified to adjust its internal grid columns.
          If you intended to wrap Expertise in a grid, please specify where this div should be placed.
          For now, Expertise is rendered as is. */}
      <Expertise />
      <Process />
      <Team />
      <Stats />
      <HomeReferences />
      <CTA />
      <Footer />
    </main>
  );
}
