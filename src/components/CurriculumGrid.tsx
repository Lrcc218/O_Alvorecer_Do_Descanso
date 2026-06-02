"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { trackNavClick } from "@/services/api";

const REVEAL_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface ModuleData {
  number: string;
  title: string;
  desc: string;
  details: string[];
}

const MODULES: ModuleData[] = [
  {
    number: "01",
    title: "MÓDULO 1: A Biologia do Descanso",
    desc: "Por que o sono é um desafio biológico?",
    details: [
      "Mapeamento neurobiológico entre Cortisol e Melatonina — o duelo hormonal que governa o sono",
      "A influência prática de sinalizadores ambientais (\"Zeitgebers\") no relógio circadiano",
      "Diretrizes para exposição solar natural e higiene visual (filtro de luz azul)",
      "Intervenção técnica para a temida \"Hora da Bruxa\"",
    ],
  },
  {
    number: "02",
    title: "MÓDULO 2: O Guia do Tempo e do Ritmo",
    desc: "Dominando as Janelas de Sono",
    details: [
      "A matemática das sonecas e a regulação socioemocional da criança",
      "Lógica das janelas biológicas de sono — funcionando como autonomia de bateria",
      "O conceito central: \"Sono gera Sono\"",
      "Identificação precisa da \"Zona Verde\" (sinais precoces) e \"Zona Vermelha\" (sinais tardios)",
    ],
  },
  {
    number: "03",
    title: "MÓDULO 3: O Método na Prática",
    desc: "Do Caos à Calmaria",
    details: [
      "\"O Protocolo do Banho à Cama\" — banho morno, massagem tática, ambiente sensorial reduzido",
      "O Ritual das 3 Noites — ciência da antecipação e desenvolvimento do \"Cérebro Esponja\"",
      "A técnica de transição gradual de autonomia \"Drowsy but Awake\" (sonolento, mas acordado)",
    ],
  },
  {
    number: "04",
    title: "MÓDULO 4: Estratégias de Sobrevivência e Apoio",
    desc: "Manejo do esgotamento materno",
    details: [
      "Validação do Burnout materno e reconquista da energia emocional",
      "Uso estratégico do \"Response Shaping\" para moldagem de respostas",
      "\"Pausa Estratégica\" — a ciência por trás de pausar antes de reagir",
      "Divisão de turnos noturnos táticos entre cuidadores",
    ],
  },
];

interface AccordionData {
  number: string;
  title: string;
  desc: string;
  details: string[];
  accentColor: string;
}

const EXTRA_MODULES: AccordionData[] = [
  {
    number: "05",
    title: "PARTE 5: Resolução de Problemas",
    desc: "FAQ: Guia de Resolução Estratégica",
    details: [
      "\"Soneca de Resgate\" — protocolo emergencial para recuperação",
      "\"Bedtime Antecipado\" — ajuste fino do horário de deitar",
      "\"Ponte de Calmaria\" — técnica de transição emocional",
      "\"Regra dos 80/20\" — priorização inteligente do que realmente importa",
    ],
    accentColor: "var(--terracotta)",
  },
  {
    number: "✦",
    title: "MÓDULO BÔNUS: Protocolo Sono & Alívio",
    desc: "O Guia de Cólicas para Bebês de 0 a 4 meses",
    details: [
      "O Eixo Intestino-Cérebro e o impacto direto no sono do recém-nascido",
      "Imaturidade gastrointestinal — o que realmente causa o desconforto",
      "Kangaroo Care — técnica de contato pele a pele para estabilização",
      "Massagens específicas para cólicas e alívio imediato",
    ],
    accentColor: "var(--gold)",
  },
];

export function CurriculumGrid() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (number: string) => {
    setOpenAccordion(openAccordion === number ? null : number);
    trackNavClick(`accordion_modulo_${number}`);
  };

  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 relative bg-gradient-to-b from-[#FCEFD2] via-[#FAF5E6] to-[#F7F3E9] overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans"
            style={{ color: "var(--terracotta)" }}
          >
            Currículo Científico
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-[#262626] font-light">
            O Alvorecer do Descanso
            <br />
            <span
              className="italic font-normal"
              style={{ color: "var(--terracotta)" }}
            >
              — conteúdo completo.
            </span>
          </h2>
        </div>

        {/* Main Modules */}
        <div className="space-y-20 sm:space-y-28 mb-28">
          {MODULES.map((mod) => (
            <motion.div
              key={mod.number}
              variants={REVEAL_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start   [backface-visibility:hidden]"
            >
              {/* Giant Number */}
              <div className="lg:col-span-3 flex items-start">
                <span
                  className="font-serif text-8xl sm:text-9xl lg:text-[10rem] font-light leading-none tracking-tighter"
                  style={{ color: "var(--gold)", opacity: 0.18 }}
                >
                  {mod.number}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                <h3 className="font-serif text-xl sm:text-2xl text-[#262626] font-semibold mb-2 leading-snug">
                  {mod.title}
                </h3>
                <p
                  className="font-serif text-lg italic mb-6 font-light"
                  style={{ color: "var(--terracotta)" }}
                >
                  {mod.desc}
                </p>
                <ul className="space-y-3">
                  {mod.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#262626]/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: "var(--gold)" }}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-[15px] leading-relaxed font-sans font-light">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-28">
          <div className="h-px flex-1 bg-[#D4AF37]/20" />
          <p
            className="text-[10px] font-bold uppercase tracking-[0.3em] font-sans whitespace-nowrap"
            style={{ color: "var(--gold)" }}
          >
            Módulos Estratégicos
          </p>
          <div className="h-px flex-1 bg-[#D4AF37]/20" />
        </div>

        {/* Extra Modules — Interactive Accordions */}
        <div className="space-y-6">
          {EXTRA_MODULES.map((mod) => {
            const isOpen = openAccordion === mod.number;

            return (
              <motion.div
                key={mod.number}
                variants={REVEAL_VARIANTS}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "some" }}
                className="rounded-2xl border border-[#262626]/5 bg-white/35 backdrop-blur-sm overflow-hidden   [backface-visibility:hidden]"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(mod.number)}
                  className="w-full flex items-center gap-5 sm:gap-8 p-6 sm:p-8 text-left hover:bg-white/50 transition-colors"
                >
                  <span
                    className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-none tracking-tighter shrink-0"
                    style={{ color: mod.accentColor, opacity: 0.25 }}
                  >
                    {mod.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl text-[#262626] font-semibold mb-1 leading-snug">
                      {mod.title}
                    </h3>
                    <p
                      className="font-serif text-base italic font-light"
                      style={{ color: mod.accentColor }}
                    >
                      {mod.desc}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-5 h-5 shrink-0 text-[#262626]/30 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Accordion Body */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <ul className="space-y-3 border-t border-[#262626]/5 pt-6">
                      {mod.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#262626]/75">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 shrink-0 mt-0.5"
                            style={{ color: "var(--gold)" }}
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="text-[15px] leading-relaxed font-sans font-light">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
