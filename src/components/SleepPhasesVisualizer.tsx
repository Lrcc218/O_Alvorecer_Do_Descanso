"use client";

import { useState } from "react";

type PhaseKey = "rem" | "light" | "deep";

interface PhaseData {
  title: string;
  label: string;
  tabLabel: string;
  desc: string;
  strategy: string;
  frequency: string;
  wavePath: string;
  color: string;
}

const phaseData: Record<PhaseKey, PhaseData> = {
  rem: {
    title: "Sinaptogênese Ativa",
    label: "Detalhe da Fase REM",
    tabLabel: "REM Ativo",
    desc: "Durante o REM Ativo, os sistemas sensorial-motores do bebê são estimulados, fortalecendo caminhos sinápticos críticos para o domínio cognitivo. Interrupções artificiais impactam a neuroadaptabilidade.",
    strategy: "Reforço do isolamento sensorial sem despertar comportamental.",
    frequency: "FREQUÊNCIA EEG: ALTA/VARIÁVEL",
    wavePath:
      "M0,50 C20,10 40,90 60,30 C80,70 100,15 120,60 C140,95 160,20 180,55 C200,85 220,25 240,65 C260,10 280,80 300,40 C320,70 340,15 360,55 C380,90 400,30 420,65 C440,10 460,85 480,45 C500,75 520,20 540,60 C560,90 580,35 600,50",
    color: "var(--terracotta)",
  },
  light: {
    title: "Portal de Transição Hormonal",
    label: "Detalhe NREM Leve",
    tabLabel: "NREM Leve",
    desc: "No NREM Leve, o tronco cerebral coordena transições fisiológicas, estabilizando os batimentos cardíacos e equilibrando a temperatura corporal. É o limiar frágil onde a resposta dos pais é vital.",
    strategy: "Estabelecer ciclos de escuridão ambiental com reduções de 400 lux.",
    frequency: "FREQUÊNCIA EEG: THETA & FUSOS DO SONO",
    wavePath:
      "M0,50 C30,35 60,65 90,40 C120,55 150,30 180,50 C210,65 240,35 270,55 C300,40 330,60 360,45 C390,55 420,35 450,50 C480,60 510,40 540,55 C570,45 585,45 600,50",
    color: "var(--gold)",
  },
  deep: {
    title: "Crescimento e Equilíbrio Parassimpático",
    label: "Detalhe NREM Profundo",
    tabLabel: "NREM Profundo",
    desc: "Esta é a fase mais crítica da recuperação celular. O NREM Profundo ativa a liberação do hormônio do crescimento e limpa os resíduos metabólicos, reduzindo o cortisol para proteger a memória.",
    strategy: "Evitar choques de luz repentinos ou intrusões sensoriais.",
    frequency: "FREQUÊNCIA EEG: ONDAS DELTA LENTAS (1.5Hz)",
    wavePath:
      "M0,50 C50,30 100,70 150,35 C200,60 250,40 300,55 C350,45 400,60 450,40 C500,55 550,45 600,50",
    color: "#F5E6C4",
  },
};

export function SleepPhasesVisualizer() {
  const [activePhase, setActivePhase] = useState<PhaseKey>("rem");
  const current = phaseData[activePhase];
  const phaseKeys = Object.keys(phaseData) as PhaseKey[];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % phaseKeys.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + phaseKeys.length) % phaseKeys.length;
    }
    if (newIndex !== index) {
      setActivePhase(phaseKeys[newIndex]);
      document.getElementById(`tab-${phaseKeys[newIndex]}`)?.focus();
    }
  };

  return (
    <section
      id="architecture"
      className="relative px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 bg-[#020617] overflow-hidden [contain:layout_paint] w-full"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(194, 109, 77, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl lg:max-w-none 2xl:max-w-screen-2xl z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans"
            style={{ color: "var(--gold)" }}
          >
            Neuroarquitetura do Sono
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-tight text-[#F5F5F7] font-light">
            Micro<span className="font-sans">-</span>Fases Ultradianas
            <br />
            <span className="italic font-normal" style={{ color: "var(--gold)" }}>
              em tempo real.
            </span>
          </h2>
        </div>

        {/* Tab Pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          role="tablist"
          aria-label="Fases do Sono"
        >
          {phaseKeys.map((key, index) => (
            <button
              key={key}
              id={`tab-${key}`}
              role="tab"
              aria-selected={activePhase === key}
              aria-controls={`panel-${key}`}
              tabIndex={activePhase === key ? 0 : -1}
              type="button"
              data-active={activePhase === key ? "true" : "false"}
              className="phase-tab px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider font-sans border border-[#F5F5F7]/15 text-[#F5F5F7]/70 hover:text-[#F5F5F7] hover:border-[#F5F5F7]/30 transform-gpu will-change-transform [backface-visibility:hidden]"
              onClick={() => setActivePhase(key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {phaseData[key].tabLabel}
            </button>
          ))}
        </div>

        {/* Waveform + Detail Card and Dashboard panel grid */}
        <div
          id={`panel-${activePhase}`}
          role="tabpanel"
          aria-labelledby={`tab-${activePhase}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start mx-auto max-w-5xl lg:max-w-none"
        >
          {/* LEFT: SVG Waveform Panel (Col-span-6) */}
          <div className="lg:col-span-6 relative rounded-2xl border border-[#F5F5F7]/10 bg-[#F5F5F7]/[0.03] backdrop-blur-sm p-6 sm:p-8 overflow-hidden transform-gpu will-change-transform [backface-visibility:hidden] h-full flex flex-col justify-between">
            <div className="mb-8">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans mb-2"
                style={{ color: current.color }}
              >
                {current.frequency}
              </p>
              <p className="font-serif text-xl sm:text-2xl text-[#F5F5F7] font-light italic">
                {current.title}
              </p>
            </div>

            {/* Simulated Medical Clinical Grid Overlay */}
            <div className="w-full aspect-[3/1] relative rounded-lg border border-[#F5F5F7]/5 bg-black/10 overflow-hidden py-4 px-2">
              {/* Thin coordinate legend markers */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-[#F5F5F7]/30">
                Amplitude (μV)
              </div>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-[#F5F5F7]/30">
                Time (s)
              </div>

              <svg
                id="eeg-wave"
                viewBox="0 0 600 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Visual coordinate lines */}
                {[0, 25, 50, 75, 100].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="600"
                    y2={y}
                    stroke="#F5F5F7"
                    strokeOpacity="0.05"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Procedural wave path */}
                <path
                  d={current.wavePath}
                  fill="none"
                  stroke={current.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="eeg-wave-path"
                  style={{
                    filter: `drop-shadow(0 0 8px ${
                      current.color === "var(--terracotta)"
                        ? "rgba(194,109,77,0.4)"
                        : current.color === "var(--gold)"
                          ? "rgba(212,175,55,0.4)"
                          : "rgba(245,230,196,0.3)"
                    })`,
                  }}
                />
              </svg>
            </div>

            {/* Label bar */}
            <div className="mt-8 pt-4 border-t border-[#F5F5F7]/5 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#F5F5F7]/30 font-sans font-bold">
                Nidra Scientific Laboratory AG
              </p>
              <div className="flex gap-1.5">
                {(Object.keys(phaseData) as PhaseKey[]).map((key) => (
                  <div
                    key={key}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background:
                        activePhase === key ? phaseData[key].color : "rgba(245,245,247,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Explanation Card (Col-span-6) */}
          <div className="lg:col-span-6 rounded-2xl border border-[#F5F5F7]/10 bg-[#F5F5F7]/[0.03] backdrop-blur-sm p-6 sm:p-8 transform-gpu will-change-transform [backface-visibility:hidden] h-full flex flex-col justify-between">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans mb-3"
                style={{ color: current.color }}
              >
                {current.label}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F5F7] font-light mb-6 leading-snug">
                {current.title}
              </h3>

              <p className="text-[15px] sm:text-base leading-relaxed text-[#F5F5F7]/80 font-sans font-light mb-8">
                {current.desc}
              </p>
            </div>

            <div className="w-full">
              <div className="rounded-xl bg-[#F5F5F7]/[0.04] border border-[#F5F5F7]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F5F5F7]/40 font-sans mb-2">
                  Estratégia Clínica Nidra
                </p>
                <p className="text-[15px] leading-relaxed text-[#F5F5F7]/70 font-sans font-light italic">
                  {current.strategy}
                </p>
              </div>

              {/* Parallax mini wave graphic decoration */}
              <div className="mt-8 flex items-center gap-4">
                <svg viewBox="0 0 80 20" className="w-20 h-5 opacity-30" preserveAspectRatio="none">
                  <path
                    d="M0,10 C10,2 20,18 30,10 C40,2 50,18 60,10 C70,2 80,18 80,10"
                    fill="none"
                    stroke={current.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F5F5F7]/25 font-sans font-bold">
                  Ciclo Ultradiano Ativo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
