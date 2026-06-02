"use client";

import { useState, useMemo } from "react";

type AwakeningOption = "1-2" | "3-4" | "5-6" | "7+";

interface FeedbackResult {
  score: number;
  status: string;
  recommendation: string;
  statusColor: string;
}

const AWAKENING_OPTIONS: { key: AwakeningOption; label: string }[] = [
  { key: "1-2", label: "1-2 vezes" },
  { key: "3-4", label: "3-4 vezes" },
  { key: "5-6", label: "5-6 vezes" },
  { key: "7+", label: "7+ vezes" },
];

function computeScore(ageMonths: number, awakenings: AwakeningOption): FeedbackResult {
  // Base score from age normalization (younger babies naturally wake more)
  let ageNorm = 0;
  if (ageMonths <= 3) ageNorm = 40;
  else if (ageMonths <= 6) ageNorm = 55;
  else if (ageMonths <= 12) ageNorm = 70;
  else if (ageMonths <= 18) ageNorm = 80;
  else if (ageMonths <= 24) ageNorm = 88;
  else ageNorm = 94;

  // Awakening penalty
  const awakeningPenalty: Record<AwakeningOption, number> = {
    "1-2": 0,
    "3-4": 15,
    "5-6": 30,
    "7+": 48,
  };

  const raw = ageNorm - awakeningPenalty[awakenings];
  const score = Math.max(0, Math.min(100, raw));

  if (score >= 85) {
    return {
      score,
      status: "Excelente Alinhamento Circadiano",
      recommendation:
        "Seu filho exibe uma sincronia excepcional de fases. Continue mantendo a exposição à luz solar nos intervalos padrão da manhã.",
      statusColor: "var(--gold)",
    };
  } else if (score >= 70) {
    return {
      score,
      status: "Deriva Leve do Ritmo",
      recommendation:
        "Mínimo dessincronismo detectado. Para auxiliar a ativação da melatonina natural, antecipe o bloqueio de luzes artificiais em exatamente 15 minutos.",
      statusColor: "#e6c875",
    };
  } else if (score >= 50) {
    return {
      score,
      status: "Atraso Circadiano Moderado",
      recommendation:
        "As janelas de sono estão fora da fase de secreção de melatonina. Ajuste as sonecas da tarde para proteger as reservas de cortisol.",
      statusColor: "var(--terracotta)",
    };
  } else {
    return {
      score,
      status: "Fragmentação Aguda da Fase",
      recommendation:
        "Os ciclos ultradianos profundos estão desalinhados com o equilíbrio térmico. Transicione imediatamente para o protocolo de estabilização autônoma principal.",
      statusColor: "#c26d4d",
    };
  }
}

export function CircadianBlueprintTool() {
  const [ageMonths, setAgeMonths] = useState(6);
  const [awakenings, setAwakenings] = useState<AwakeningOption>("3-4");

  const result = useMemo(() => computeScore(ageMonths, awakenings), [ageMonths, awakenings]);

  return (
    <section
      id="assessment"
      className="relative px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 bg-[#020617] overflow-hidden [contain:layout_paint] w-full"
    >
      <div className="relative mx-auto w-full max-w-7xl lg:max-w-none 2xl:max-w-screen-2xl z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans text-amber-500"
          >
            Diagnóstico Circadiano
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-tight text-white font-light">
            Índice de Blueprint
            <br />
            <span className="italic font-normal text-amber-500">
              Circadiano.
            </span>
          </h2>
        </div>

        {/* Dashboard Grid split elegant 12 columns responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start mx-auto max-w-5xl lg:max-w-none">
          {/* LEFT PANEL — Clinical Parameters description (Col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-100 font-light leading-snug mb-4">
                Avalie a Curva Circadiana{" "}
                <em className="italic text-amber-500">
                  do Seu Filho
                </em>
              </h3>
              <p className="text-[15px] sm:text-base leading-relaxed text-slate-400 font-sans font-light">
                Calcule o alinhamento entre os ciclos ultradianos do bebê e a janela ideal de secreção hormonal baseada na idade biológica.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 font-sans mb-1">
                  Parâmetro Clínico
                </p>
                <p className="font-serif text-lg text-slate-200 font-medium mb-1">Sincronia Hormonal</p>
                <p className="text-[13px] text-slate-400 font-sans font-light">
                  Relação melatonina-cortisol ajustada por faixa etária
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 font-sans mb-1">
                  Parâmetro Clínico
                </p>
                <p className="font-serif text-lg text-slate-200 font-medium mb-1">Espaçamento Ultradiano</p>
                <p className="text-[13px] text-slate-400 font-sans font-light">
                  Intervalo entre ciclos NREM profundos durante a noite
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — Interactive Dashboard console (Col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/40 border border-slate-800/85 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_50px_rgba(2,6,23,0.7)] transform-gpu will-change-transform [backface-visibility:hidden]">
            {/* Age Slider */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 font-sans">
                  Idade Biológica
                </p>
                <p className="font-serif text-2xl font-medium text-amber-500">
                  {ageMonths} <span className="text-base font-light text-slate-400">meses</span>
                </p>
              </div>
              <input
                type="range"
                min={1}
                max={36}
                value={ageMonths}
                onChange={(e) => setAgeMonths(Number(e.target.value))}
                className="circadian-slider w-full"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-slate-500 font-sans font-semibold">1 mês</span>
                <span className="text-[10px] text-slate-500 font-sans font-semibold">36 meses</span>
              </div>
            </div>

            {/* Awakenings Grid */}
            <div className="mb-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 font-sans mb-4">
                Despertares Noturnos Frágeis Média
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {AWAKENING_OPTIONS.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    data-selected={awakenings === opt.key ? "true" : "false"}
                    className="awakening-pill rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-300 font-sans hover:border-slate-700 transform-gpu will-change-transform [backface-visibility:hidden]"
                    onClick={() => setAwakenings(opt.key)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Output Display Board */}
            <div className="rounded-xl bg-slate-950/80 border border-amber-500/10 p-6">
              <div className="flex items-baseline justify-between mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 font-sans">
                  Sleep Alignment Score
                </p>
                <p
                  className="font-serif text-4xl sm:text-5xl font-bold tracking-tight"
                  style={{ color: result.statusColor }}
                >
                  {result.score}
                  <span className="text-lg font-light text-slate-500">/100</span>
                </p>
              </div>

              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-6">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${result.score}%`,
                    background: `linear-gradient(90deg, #c26d4d, ${result.statusColor})`,
                  }}
                />
              </div>

              <p
                className="font-serif text-lg font-semibold mb-2"
                style={{ color: result.statusColor }}
              >
                {result.status}
              </p>
              <p className="text-[14px] leading-relaxed text-slate-400 font-sans font-light">
                {result.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
