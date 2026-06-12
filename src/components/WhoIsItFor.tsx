"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhoIsItFor() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 relative bg-gradient-to-b from-[#FAF5E6] to-[#FDFBF7] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans"
            style={{ color: "var(--terracotta)" }}
          >
            Alinhamento de Perfil
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#262626] font-light">
            Para quem é o{" "}
            <span className="italic font-normal" style={{ color: "var(--gold)" }}>
              Alvorecer do Descanso?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* É para você */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 border border-[#D4AF37]/40 rounded-3xl p-8 lg:p-12 shadow-xl backdrop-blur-sm h-full"
          >
            <h3 className="font-serif text-2xl lg:text-3xl mb-8 text-[#262626] flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />É para você se...
            </h3>
            <ul className="space-y-6">
              {[
                "Seu bebê tem de 0 a 36 meses de idade.",
                "O bebê acorda 3 ou mais vezes durante a noite querendo conforto, leite ou apenas sem conseguir voltar a dormir.",
                "Você quer um método gentil e respaldado pela ciência, sem ter que deixar o bebê chorando até vomitar.",
                "Você está exausta e precisa de um passo a passo direto ao ponto, sem teorias intermináveis.",
                "Você quer entender como o ambiente afeta a neurobiologia do bebê para acabar com as sonecas de 20 minutos.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[#262626]/80 font-sans text-base lg:text-lg font-light leading-relaxed"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Não é para você */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/40 border border-red-900/10 rounded-3xl p-8 lg:p-12 shadow-sm backdrop-blur-sm h-full"
          >
            <h3 className="font-serif text-2xl lg:text-3xl mb-8 text-[#262626]/70 flex items-center gap-4">
              <XCircle className="w-8 h-8 text-red-500/70 shrink-0" />
              NÃO é para você se...
            </h3>
            <ul className="space-y-6">
              {[
                "Você acredita que o certo é deixar o bebê chorando sozinho no berço até ele 'aprender' a dormir na marra (método Cry It Out).",
                "Você busca uma 'pílula mágica' e não tem disposição para aplicar um passo a passo estruturado por alguns dias.",
                "Seu bebê já dorme bem a noite toda de forma independente e já tem sonecas perfeitamente regulares.",
                "Você prefere buscar dicas soltas na internet e arriscar métodos sem comprovação que não respeitam as fases emocionais da criança.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[#262626]/60 font-sans text-base lg:text-lg font-light leading-relaxed"
                >
                  <div className="w-2 h-2 rounded-full bg-red-400/50 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
