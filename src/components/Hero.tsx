"use client";

import { Moon, Play, Sparkles } from "lucide-react";
import { CHECKOUT_URL, trackPurchaseClick, trackNavClick } from "@/services/api";
import { VimeoPlayer } from "./VimeoPlayer";

const METRICS = [
  { value: "98.4%", label: "Sincronia Neurológica" },
  { value: "4.8 Horas", label: "Ganho de Sono Profundo Estabilizado" },
  { value: "Revisado por Pares", label: "Metodologia Base" },
  { value: "0+ Meses", label: "Adaptabilidade Circadiana" },
];

export function Hero() {
  const handleCTAClick = () => {
    trackPurchaseClick(67.9);
  };

  return (
    <section className="relative isolate overflow-hidden text-[#F5F5F7] min-h-[100dvh] flex flex-col justify-between bg-transparent z-10 w-full">
      {/* ── BACKGROUND DECORATIVE ELEMENTS: Deep Navy and Gold/Terracotta glows ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" style={{ backgroundColor: "rgba(212, 175, 55, 0.05)" }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" style={{ backgroundColor: "rgba(194, 109, 77, 0.05)" }}></div>

      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(10, 17, 40, 0.9) 0%, transparent 60%), radial-gradient(circle at 80% 100%, rgba(194, 109, 77, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── AQUARELA FINE ART: Gold Warm Haze ── */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none mix-blend-screen opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 65%)",
        }}
      />

      {/* ── NAVBAR ── */}
      <nav className="relative w-full max-w-7xl lg:max-w-none 2xl:max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-8 z-10">
        <div className="flex items-center space-x-3.5 text-[#F5F5F7]">
          <div className="w-8 h-8 rounded-full blur-[1px] shadow-[0_0_15px_rgba(212,175,55,0.5)]" style={{ background: "var(--gradient-gold)" }}></div>
          <span className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase font-sans">
            Alvorecer <span className="font-serif italic tracking-tight lowercase font-semibold" style={{ color: "var(--gold)" }}>do descanso</span>
          </span>
        </div>
        
        <div className="hidden lg:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 items-center">
          <a href="#architecture" onClick={() => trackNavClick("neuroarquitetura")} className="hover:text-white transition-colors">Neuroarquitetura</a>
          <a href="#assessment" onClick={() => trackNavClick("diagnostico")} className="hover:text-white transition-colors">Diagnóstico</a>
          <a href="#curriculum" onClick={() => trackNavClick("o_programa")} className="hover:text-white transition-colors">O Programa</a>
          <a href="#testimonials" onClick={() => trackNavClick("depoimentos")} className="hover:text-white transition-colors">Depoimentos</a>
          <a href="#oferta" onClick={() => trackNavClick("area_do_aluno")} className="px-6 py-2 rounded-full border transition-all" style={{ backgroundColor: "rgba(212,175,55,0.1)", color: "var(--gold)", borderColor: "rgba(212,175,55,0.2)" }}>Área do Aluno</a>
        </div>

        <a
          href="#oferta"
          onClick={() => trackNavClick("mobile_quero_comecar")}
          className="lg:hidden rounded-full border border-white/25 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 sm:text-sm"
        >
          Quero começar
        </a>
      </nav>

      {/* ── HERO BODY ── */}
      <div className="relative w-full max-w-5xl lg:max-w-none 2xl:max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 pb-32 pt-12 lg:pb-36 lg:pt-16 xl:pb-44 xl:pt-24 2xl:pb-52 2xl:pt-28 flex-1 flex flex-col justify-center items-center z-10">
        {/* On desktop (1024px+), split into a luxurious double columns grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* LEFT COLUMN: Main copy */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <span className="mb-6 inline-block px-3 py-1 border text-[10px] uppercase tracking-[0.2em] rounded-sm font-semibold font-sans" style={{ borderColor: "rgba(194,109,77,0.3)", color: "var(--terracotta)", backgroundColor: "rgba(194,109,77,0.05)" }}>
              A Arte do Descanso Profundo
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[4.2rem] xl:text-[5.2rem] 2xl:text-[5.8rem] tracking-tight leading-[1.1] text-white subpixel-antialiased [text-rendering:optimizeLegibility]">
              São três da manhã…
              <br />
              <span className="italic font-light" style={{ color: "var(--gold)" }}>você não está errada</span>
              <br />e a culpa não é sua.
            </h1>

            <p className="mt-8 text-lg sm:text-xl font-light font-sans text-white/70 leading-relaxed max-w-xl lg:max-w-none">
              O sono do seu bebê é uma arquitetura biológica delicada — e ela pode ser guiada com ciência, paciência e empatia. Sem choros prolongados. Sem culpa. Só descanso de verdade.
            </p>

            {/* CTA block - inline under the left copy on desktop */}
            <div className="mt-10 sm:mt-12 flex flex-col items-center lg:items-start gap-4 w-full">
              <a
                href={CHECKOUT_URL}
                onClick={handleCTAClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full sm:w-auto min-w-[280px] items-center justify-center gap-3 rounded-full px-10 py-5 2xl:py-4 2xl:px-16 text-sm uppercase tracking-widest font-bold text-white transition-all transform-gpu will-change-transform [backface-visibility:hidden] animate-pulse-cta hover:scale-[1.02]"
                style={{ background: "var(--gradient-terracotta)", boxShadow: "var(--shadow-terracotta)" }}
              >
                <Sparkles className="h-5 w-5 shrink-0 text-white" />
                <span className="leading-tight font-sans tracking-widest">Começar Jornada</span>
              </a>
              <p className="text-xs text-white/50 tracking-widest uppercase font-semibold font-sans mt-2">
                Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Video player & Metrics Grid */}
          <div className="lg:col-span-6 w-full flex flex-col items-center">
            {/* Vimeo video player framed premiumly */}
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transform-gpu will-change-transform [backface-visibility:hidden] shadow-[0_30px_60px_-20px_rgba(10,17,40,0.8)] relative p-1">
              <VimeoPlayer />
            </div>

            {/* Metrics grid under video */}
            <div className="w-full mt-10 lg:mt-12">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 font-sans">
                {METRICS.map((metric, i) => (
                  <div
                    key={i}
                    className="text-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 sm:p-5"
                  >
                    <p
                      className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight leading-none mb-1.5"
                      style={{ color: "var(--gold)" }}
                    >
                      {metric.value}
                    </p>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/50 font-bold leading-snug">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Star Particles */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: i % 3 === 0 ? "3px" : "1.5px",
              height: i % 3 === 0 ? "3px" : "1.5px",
              top: `${(i * 7) % 95}%`,
              left: `${(i * 13) % 95}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* ── WAVE DIVIDER (PROCEDURAL SVG) ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[30px] md:h-[60px] lg:h-[120px]"
          preserveAspectRatio="none"
        >
          {/* Fundo escuro para cobrir e mascarar os gradientes do Hero */}
          <path
            fill="#0A1128"
            d="M0,120 L1440,120 L1440,0 C1200,0 960,120 720,60 C480,0 240,120 0,120 Z"
          />
          {/* A linha ondulada fina (a 'única onda') */}
          <path
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
            d="M1440,0 C1200,0 960,120 720,60 C480,0 240,120 0,120"
          />
        </svg>
      </div>
    </section>
  );
}
