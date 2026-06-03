import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { SalesLetter } from "@/components/SalesLetter";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Star } from "lucide-react";
import { WatercolorBackground } from "@/components/WatercolorBackground";
import { LuxuryDivider } from "@/components/LuxuryDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#262626] relative isolate">
      <StickyMobileCTA />

      <div className="relative w-full overflow-hidden bg-[#0A1128]">
        <WatercolorBackground />
        <div className="relative z-10 w-full">
          <Hero />

          {/* ===== PROVA SOCIAL QUANTITATIVA ===== */}
          <section className="relative px-6 py-20 text-cream sm:px-8 sm:py-28 text-center bg-transparent   [backface-visibility:hidden]">
            {/* ── AQUARELA FINE ART: Terracotta bloom ── */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 75% 40%, rgba(245, 158, 11, 0.45) 0%, transparent 70%)",
                maskImage: "linear-gradient(to bottom, transparent, black 15%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%)",
              }}
            />
            {/* ── AQUARELA FINE ART: Gold haze ── */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 20% 65%, rgba(251, 191, 36, 0.4) 0%, transparent 60%)",
                maskImage: "linear-gradient(to bottom, transparent, black 15%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%)",
              }}
            />

            <div className="relative mx-auto max-w-3xl z-10 [contain:layout]">
              <div className="mb-4 inline-flex items-center gap-1.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 shrink-0 fill-current"
                    style={{ color: "var(--gold)" }}
                  />
                ))}
              </div>
              <p
                className="font-serif text-6xl leading-none sm:text-8xl font-bold tracking-tight subpixel-antialiased [text-rendering:optimizeLegibility]"
                style={{ color: "var(--gold)" }}
              >
                +300
              </p>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-cream font-medium tracking-wide">
                vidas transformadas e noites restauradas
              </p>
              <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-base text-cream/70 font-light leading-relaxed font-sans">
                Famílias inteiras que voltaram a dormir — e a viver — com leveza.
              </p>
            </div>
          </section>
        </div>
      </div>

      <LuxuryDivider color="var(--gold)" className="-mt-px z-20" />

      <Pillars />

      <LuxuryDivider color="var(--terracotta)" className="z-20" opacity={0.3} />

      {/* SalesLetter contains Sections 1-7 inline:
          1. Hero Manifesto (copy only — video is in Hero.tsx above)
          2. Asymmetric Grid (Sales Copy + Sticky Sidebar)
          3. Sleep Phases Visualizer
          4. Circadian Blueprint Calculator
          5. Curriculum Grid
          6. Deliverables Sheet
          7. Conversion Stack
      */}
      <SalesLetter />

      <LuxuryDivider color="var(--terracotta)" className="z-20" opacity={0.3} />

      <Testimonials />

      <div className="w-full py-8" style={{ backgroundColor: "#0A1128" }}>
        <LuxuryDivider color="var(--gold)" className="z-20" opacity={0.35} />
      </div>

      <FAQ />

      <Footer />
    </main>
  );
}
