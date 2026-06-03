"use client";

import { motion, Variants } from "framer-motion";

const REVEAL_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TOOLS = [
  { tag: "Template", title: "Diário do Despertar", sub: "Registro de 7 Dias" },
  { tag: "Ferramenta 1", title: 'Checklist "Ambiente de Cura"', sub: "" },
  { tag: "Ferramenta 2", title: "Guia de Exposição à Luz", sub: "Sinalizadores de Tempo" },
  { tag: "Ferramenta 3", title: "A Tabela Mestra de Janelas de Sono", sub: "0 a 36 meses" },
  { tag: "Ferramenta 4", title: "Log de Sonecas Diário", sub: "Identificando o Padrão Único" },
  { tag: "Ferramenta 5", title: "Checklist do Ritual Noturno", sub: "" },
  { tag: "Ferramenta 6", title: "Protocolo de Emergência da Madrugada", sub: "" },
  { tag: "Ferramenta 7", title: "Diário da Mãe Leve", sub: "Autorreflexão" },
  { tag: "Ferramenta 8", title: "Cards de Afirmações de Calmaria", sub: "" },
  {
    tag: "Bônus Geladeira",
    title: "O Protocolo de 3 Passos para o Alívio da Crise de Cólica",
    sub: "",
  },
];

export function DeliverablesSheet() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 relative bg-[#F7F3E9] overflow-hidden">
      <div className="relative mx-auto max-w-3xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-[85rem] px-6 sm:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans"
            style={{ color: "var(--gold)" }}
          >
            Anexos das Ferramentas para Impressão
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl 2xl:text-6xl tracking-tight leading-tight text-[#262626] font-light">
            Seu kit técnico
            <br />
            <span className="italic font-normal" style={{ color: "var(--terracotta)" }}>
              pronto para imprimir.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[#262626]/60 font-sans font-light">
            8 ferramentas em alta resolução (2K), prontas para uso imediato. Cole na geladeira,
            deixe na cabeceira, entregue ao seu parceiro(a).
          </p>
        </div>

        {/* Tool List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 2xl:gap-x-24 gap-y-0">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={i}
              variants={REVEAL_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
              className="group flex items-center gap-5 sm:gap-6 lg:gap-8 py-6 sm:py-8 2xl:py-6 border-b border-[#262626]/15 md:[&:nth-last-child(-n+2)]:border-b-0 [backface-visibility:hidden]"
            >
              {/* Tag / Number */}
              <div className="shrink-0 w-28 sm:w-36">
                <p
                  className="text-xs sm:text-[15px] font-bold uppercase tracking-widest font-sans"
                  style={{
                    color: tool.tag.startsWith("Bônus") ? "var(--gold)" : "var(--terracotta)",
                  }}
                >
                  {tool.tag}
                </p>
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <p className="font-serif text-lg sm:text-xl text-[#262626] font-medium leading-snug group-hover:text-[#262626] transition-colors">
                  {tool.title}
                </p>
                {tool.sub && (
                  <p className="text-[13px] text-[#262626]/45 font-sans mt-1 font-light tracking-wide">
                    {tool.sub}
                  </p>
                )}
              </div>

              {/* Icon */}
              <div className="shrink-0 mt-1 opacity-30 group-hover:opacity-60 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#262626]/30"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
