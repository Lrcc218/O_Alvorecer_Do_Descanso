"use client";

import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { WatercolorBackground } from "@/components/WatercolorBackground";

export function Testimonials() {
  const testimonialsList = [
    {
      name: "Camila R.",
      time: "06:42",
      hue: 15,
      msg: "Acabei de acordar… ele dormiu a noite TODA. Estou chorando de alegria. Obrigada, obrigada, obrigada.",
    },
    {
      name: "Beatriz M.",
      time: "23:18",
      hue: 320,
      msg: "Na terceira noite ele pegou no sono sozinho. Sem colo, sem choro. Eu nem acreditei.",
    },
    {
      name: "Luana S.",
      time: "07:05",
      hue: 200,
      msg: "Tomei café com calma hoje. Pode parecer pouco, mas faz meses que isso não acontecia. 🤍",
    },
    {
      name: "Renata D.",
      time: "22:47",
      hue: 60,
      msg: "Meu marido me olhou e disse: 'voltamos a ser nós'. Eu não tenho palavras.",
    },
    {
      name: "Júlia P.",
      time: "06:15",
      hue: 280,
      msg: "Pensei que era impossível. Hoje durmo 8h seguidas e meu bebê acorda sorrindo.",
    },
    {
      name: "Fernanda L.",
      time: "21:30",
      hue: 140,
      msg: "Era só uma rotina diferente. Era só alguém me explicando com carinho. Mudou tudo.",
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 2xl:py-32 relative text-cream overflow-hidden bg-[#0A1128] touch-manipulation lazy-section">
      {/* ── AQUARELA FINE ART: Terracotta bloom ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 85% 30%, rgba(194, 109, 77, 0.5) 0%, transparent 70%)",
        }}
      />
      {/* ── AQUARELA FINE ART: Gold haze ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 10% 70%, rgba(212, 175, 55, 0.4) 0%, transparent 65%)",
        }}
      />
      <WatercolorBackground />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-[85rem] z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: "var(--gold)" }}
          >
            Mães que voltaram a dormir
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl 2xl:text-6xl tracking-tight leading-tight">
            Mensagens que chegam
            <br />
            <span className="italic font-normal" style={{ color: "var(--gold)" }}>
              na madrugada seguinte.
            </span>
          </h2>
        </div>

        <div
          className="flex flex-row flex-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:overflow-visible lg:whitespace-normal gap-6 2xl:gap-10"
          ref={(el) => {
            if (el && !el.getAttribute("data-passive")) {
              el.addEventListener("touchstart", () => {}, { passive: true });
              el.addEventListener("touchmove", () => {}, { passive: true });
              el.setAttribute("data-passive", "true");
            }
          }}
        >
          {testimonialsList.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="shrink-0 w-[85vw] sm:w-[380px] max-w-[400px] lg:w-full lg:max-w-none mx-auto h-full snap-center rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 2xl:p-8 backdrop-blur flex flex-col justify-between   [backface-visibility:hidden] [perspective:1000px]"
            >
              <div>
                <div className="mb-4 flex items-center gap-3.5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-cream/10 font-serif text-sm font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.7 0.12 ${t.hue}), oklch(0.55 0.14 ${t.hue + 30}))`,
                    }}
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-cream leading-tight">{t.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-cream/50 mt-0.5">
                      enviado às {t.time}
                    </p>
                  </div>
                  <Heart className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-cream/[0.07] p-4 sm:p-5 2xl:p-6 text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-cream/90 font-light">
                  &ldquo;{t.msg}&rdquo;
                </div>
              </div>
              <div
                className="mt-4 flex justify-end gap-0.5 pointer-events-none"
                style={{ color: "var(--gold)" }}
              >
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3 w-3 shrink-0 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
