"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "E se meu bebê for recém-nascido (ou já for maior)? O método funciona?",
    a: "Sim. O método é construído sobre o desenvolvimento neurobiológico de cada fase. Para recém-nascidos, aplicamos os protocolos base para evitar vícios de sono antes mesmo de começarem. Para bebês maiores que já despertam muito, temos estratégias de desmame noturno guiado e quebra de associações negativas.",
  },
  {
    q: "Já tentei de tudo e nada funcionou. Por que O Alvorecer do Descanso seria diferente?",
    a: "Métodos tradicionais costumam focar apenas em rotinas engessadas ou táticas cruéis como 'deixar chorar no berço'. Nós atacamos a raiz biológica: a regulação do cortisol (hormônio do estresse) e o realinhamento do ciclo circadiano. O corpo do seu bebê vai entender organicamente que é hora de descansar.",
  },
  {
    q: "Estou exausta e sem tempo. O material é muito extenso?",
    a: "Foi desenhado cirurgicamente para mães privadas de sono. O guia é ultra-direto, sem enrolação teórica inútil. Você lê os 'Protocolos de Emergência da Madrugada' hoje e já sabe exatamente o que aplicar na mesma noite.",
  },
  {
    q: "Em quantos dias eu começo a ver os resultados?",
    a: "A regulação hormonal varia em cada criança, mas a grande maioria das nossas famílias relata um alongamento drástico das janelas de sono entre o 3º e o 7º dia de aplicação consistente do método.",
  },
  {
    q: "E se eu aplicar tudo e meu bebê continuar sem dormir?",
    a: "Você está amparada pela nossa Garantia Blindada de 30 Dias. Você pode aplicar os protocolos na rotina da sua casa durante o mês inteiro. Se no final de 30 dias você não sentir a sua sanidade mental voltando e o bebê dormindo profundamente, devolvemos 100% do seu dinheiro. Sem letras miúdas.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
      className="px-6 md:px-8 lg:px-12 xl:px-20 py-24 lg:py-32 relative text-cream overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A1128 0%, #1A0D08 100%)"
      }}
    >
      {/* Brilho Dourado Forte no Topo */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          opacity: 0.4,
          background: "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0) 70%)",
        }}
      />
      
      {/* Glow Terracota profundo vindo de baixo */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          opacity: 0.4,
          background: "radial-gradient(circle at 50% 100%, rgba(194, 109, 77, 0.3) 0%, rgba(194, 109, 77, 0) 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Ainda com dúvidas?
          </h2>
          <p className="font-sans text-cream/70 text-base md:text-lg max-w-xl mx-auto">
            Nós sabemos o nível da sua exaustão e o quanto a internet está cheia de palpites rasos.
            Abaixo estão as respostas diretas que você precisa.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/[0.05] to-transparent rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#D4AF37]/[0.1] hover:border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg md:text-xl font-medium pr-4 text-cream leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: "var(--gold)" }}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-6 pt-0 font-sans text-cream/70 leading-relaxed text-[15px] md:text-base border-t border-cream/5 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
