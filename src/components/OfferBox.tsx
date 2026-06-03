"use client";

import { Sparkles } from "lucide-react";
import { CHECKOUT_URL, trackPurchaseClick } from "@/services/api";

export function OfferBox() {
  const handleCTAClick = () => {
    trackPurchaseClick(67.9);
  };

  return (
    <section
      id="oferta"
      className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 relative bg-[#F7F3E9] overflow-hidden contain-paint w-full"
    >
      <div className="relative mx-auto w-full max-w-4xl lg:max-w-none 2xl:max-w-screen-2xl z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] font-sans text-[#D4AF37]">
            Acesso Especial Sem Riscos
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-tight text-[#262626] font-light">
            Inicie a Restauração
            <br />
            <span className="italic font-normal text-[#D4AF37]">do Seu Sono Hoje.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#262626]/70 font-sans font-light">
            Tenha acesso permanente à metodologia clínica. Sem pagamentos recorrentes. Sem
            pegadinhas.
          </p>
        </div>

        {/* High Conversion Bento Offer Card on desktop */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-[#262626]/10 bg-white/35 p-8 sm:p-14 shadow-[0_30px_70px_rgba(10,17,40,0.06)] relative overflow-hidden   ">
          <div
            className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
            {/* Offer Pricing copy Panel (Col-span-7) */}
            <div className="md:col-span-7 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] font-sans mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                Desconto Inaugural Ativado
              </span>

              <h3 className="font-serif text-3xl text-[#262626] font-semibold mb-3 leading-snug">
                Plano de Acesso Vitalício
              </h3>
              <p className="text-[14px] leading-relaxed text-[#262626]/70 font-sans font-light mb-6">
                Inclui o curso base do Alvorecer do Descanso, cronogramas de transição biológica,
                guias anticólicas adicionais e todas as atualizações futuras sem custo.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3.5 text-xs text-[#262626]/80 font-sans font-medium">
                <span className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17l-5-5" />
                  </svg>
                  Nenhum custo oculto
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17l-5-5" />
                  </svg>
                  Garantia de 30 dias
                </span>
              </div>
            </div>

            {/* Price tag & CTA Panel (Col-span-5) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white/50 border border-[#262626]/15 w-full">
              <span className="text-xs uppercase tracking-[0.2em] text-[#262626]/70 font-bold mb-1.5">
                Valor Total de Adesão
              </span>
              <p className="text-xs text-[#262626]/70 line-through mb-1 font-sans">
                De R$ 197,00 por
              </p>
              <p className="font-serif text-4xl sm:text-5xl font-bold leading-none mb-3 text-[#D4AF37]">
                R$ 67,90
              </p>
              <p className="text-[13px] leading-relaxed text-[#262626]/80 text-center font-sans mb-6">
                em até <strong className="font-semibold">6x de R$ 11,31</strong> ou Pix
              </p>

              <a
                href={CHECKOUT_URL}
                onClick={handleCTAClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 2xl:py-3 2xl:px-10 text-sm font-bold text-white transition-all    animate-pulse-cta touch-manipulation"
                style={{
                  background: "var(--gradient-terracotta)",
                  boxShadow: "var(--shadow-terracotta)",
                }}
              >
                <Sparkles className="h-4.5 w-4.5 shrink-0" />
                <span className="tracking-wide">MATRICULAR AGORA</span>
              </a>
              <span className="text-[10px] text-[#262626]/50 font-semibold uppercase tracking-wider mt-3">
                Ambiente 100% Criptografado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
