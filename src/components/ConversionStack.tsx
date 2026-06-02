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

interface CardData {
  number: string;
  tag: string;
  title: string;
  italicTitle?: string;
  text: string;
  list: string[];
}

const CARDS: CardData[] = [
  {
    number: "01",
    tag: "A Experiência Completa",
    title: "O Alvorecer do Descanso —",
    italicTitle: "Método Principal",
    text: "O treinamento definitivo em vídeo e texto para restaurar as janelas circidianas e acalmar as sinapses de forma integral. Acesso perpétuo para consultar sempre que houver saltos de crescimento.",
    list: [
      "2-3 Horas de Conteúdo em Vídeo Objetivo",
      "Manual Compacto Completo (Acesso Móvel)",
      "Anexos das Ferramentas para Impressão",
      "Garantia Incondicional de 7 Dias",
    ],
  },
  {
    number: "02",
    tag: "Bônus Exclusivo Inaugural",
    title: "Protocolo Sono & Alívio —",
    italicTitle: "O Guia Anticólicas",
    text: "Uma imersão técnica sobre o Eixo Intestino-Cérebro. Acabe com o maior pesadelo das mães com técnicas físicas de Kangaroo Care que neutralizam as crises em minutos.",
    list: [
      "Explicação Científica Sem Jargões",
      "Passo a Passo Fisioterapêutico Ilustrado",
      "Exemplos Reais Gravados",
      "Perfeito para os primeiros 4 meses de vida",
    ],
  },
];

export function ConversionStack() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 relative bg-[#F7F3E9] overflow-hidden contain-paint w-full">
      <div className="relative mx-auto w-full max-w-4xl lg:max-w-none 2xl:max-w-screen-2xl z-10">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans text-[#D4AF37]"
          >
            A Entrega Completa
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-tight text-[#262626] font-light">
            Tudo o que você vai receber
            <br />
            <span className="italic font-normal text-[#D4AF37]">
              ao se juntar a nós hoje.
            </span>
          </h2>
        </div>

        {/* Column Stack with premium responsive grids up to 2xl */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-6xl lg:max-w-none mx-auto">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={REVEAL_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/35 backdrop-blur-md border border-[#262626]/10 p-8 sm:p-12 shadow-[0_20px_50px_rgba(10,17,40,0.08)] group transition-all duration-300 hover:-translate-y-1   "
            >
              {/* Card top details */}
              <div>
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#262626]/10">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] font-sans text-[#D4AF37]"
                  >
                    {card.tag}
                  </p>
                  <span
                    className="font-serif text-3xl font-light text-[#D4AF37]/50"
                  >
                    {card.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#262626] font-semibold mb-4 leading-snug">
                  {card.title}{" "}
                  {card.italicTitle && (
                    <span
                      className="italic font-normal text-[#D4AF37]"
                    >
                      {card.italicTitle}
                    </span>
                  )}
                </h3>

                <p className="text-[15px] sm:text-base leading-relaxed text-[#262626]/70 font-sans font-light mb-8">
                  {card.text}
                </p>
              </div>

              {/* Card Checklist */}
              <ul className="space-y-3.5 mt-4">
                {card.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-[#262626]/80">
                    <div
                      className="mt-1 flex h-4 w-4 items-center justify-center rounded-full shrink-0"
                      style={{
                        background:
                          card.number === "02" ? "linear-gradient(135deg, #D4AF37, #B8972D)" : "linear-gradient(135deg, #C26D4D, #A6573B)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F5F5F7"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[14px] leading-relaxed font-sans font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
