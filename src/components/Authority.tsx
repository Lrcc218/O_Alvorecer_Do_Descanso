"use client";

import { motion } from "framer-motion";

export function Authority() {
  return (
    <section id="authority" className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 relative bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-5/12 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20"
        >
          <div className="absolute inset-0 bg-[#0A1128]/10 mix-blend-multiply z-10 pointer-events-none" />
          <img 
            src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1470&auto=format&fit=crop" 
            alt="Mãe segurando o bebê com leveza" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col items-start"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans" style={{ color: "var(--terracotta)" }}>
            A História Por Trás do Método
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#262626] font-light mb-8">
            Eu também achava que a <span className="italic" style={{ color: "var(--terracotta)" }}>culpa era minha.</span>
          </h2>
          
          <div className="space-y-5 font-sans text-[17px] text-[#262626]/75 leading-relaxed font-light">
            <p>
              Olá, eu sou a mente por trás do <strong className="font-medium text-[#262626]">Alvorecer do Descanso</strong>. Quando as noites caóticas começaram, eu fui consumida por uma neblina de exaustão. 
            </p>
            <p>
              A criança acordava cinco vezes na madrugada. Balançava, cantava, esgotava todas as tentativas... e nada funcionava. O choro cortava o coração, e a privação de sono destruía a minha saúde mental. Ouvir das pessoas que <em className="italic">"é normal, aguente firme"</em> só me deixava mais frustrada.
            </p>
            <p>
              Mas eu sabia que viver em modo de sobrevivência não era normal. Comecei a estudar a fundo artigos científicos sobre neurobiologia infantil, ritmos circadianos e o desenvolvimento do sistema nervoso do bebê. 
            </p>
            <p>
              Quando apliquei esse conhecimento — ajustando pequenos detalhes na neuroarquitetura do ambiente e sincronizando as janelas de sono —, as madrugadas caóticas desapareceram. <strong className="font-medium text-[#262626]">O sono finalmente estabilizou a noite toda. E a paz voltou para casa.</strong>
            </p>
            <p>
              Criei este guia porque nenhuma mãe deveria sentir a dor do esgotamento profundo. O descanso não é um luxo, é o pilar da sua sanidade e do bem-estar de toda a sua família.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
