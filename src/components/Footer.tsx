"use client";

import { ShieldCheck, Check, MessageCircle } from "lucide-react";
import { CHECKOUT_URL, trackPurchaseClick, trackNavClick } from "@/services/api";
import { LuxuryDivider } from "@/components/LuxuryDivider";

export function Footer() {
  const handleCTAClick = () => {
    trackPurchaseClick(67.9);
  };

  return (
    <footer className="relative bg-[#F7F3E9] ">
      {/* Linha inserida exatamente ACIMA do card final (Garantia) */}
      <LuxuryDivider color="var(--gold)" opacity={0.5} className="absolute top-0 w-full" />

      {/* ===== GARANTIA COMPLETA ===== */}
      <section
        id="garantia"
        className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-14 border border-white/60 bg-white/30 backdrop-blur-lg shadow-[0_12px_40px_0_rgba(10,17,40,0.04)]   [backface-visibility:hidden]">
          <div
            className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          >
            <ShieldCheck className="h-7 w-7 text-gold-foreground" />
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4.5xl font-semibold tracking-tight text-[#262626]">
            Garantia de 30 noites tranquilas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#262626]/80">
            Você experimenta o método por 30 dias. Se sentir que não é para você — por qualquer
            motivo —, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo
            nosso. aqui é continuar mais uma noite sem dormir.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3.5 text-xs sm:text-sm text-[#262626]/80 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4.5 w-4.5 text-terracotta" /> Compra 100% segura
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4.5 w-4.5 text-terracotta" /> Acesso imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4.5 w-4.5 text-terracotta" /> Suporte humano
            </span>
          </div>
        </div>

        {/* ===== REFORÇO DE OFERTA + CTA ===== */}
        <div className="mx-auto mt-12 max-w-md rounded-2xl border bg-white/30 backdrop-blur-lg p-8 text-center shadow-[0_12px_40px_0_rgba(10,17,40,0.04)] border-white/60   [backface-visibility:hidden]">
          <p className="text-xs uppercase tracking-[0.25em] text-[#262626]/70 font-bold">
            Oferta de hoje
          </p>
          <p className="mt-3.5 text-sm text-[#262626]/80">
            De <span className="line-through opacity-70">R$ 197,00</span> por apenas
          </p>
          <p
            className="mt-1 font-serif text-5.5xl sm:text-6.5xl font-bold leading-none"
            style={{ color: "var(--terracotta)" }}
          >
            R$ 67,90
          </p>
          <p className="mt-3.5 text-sm leading-relaxed text-[#262626]">
            no <strong className="font-semibold">Pix/Cartão</strong> ou{" "}
            <strong className="font-semibold">6x de R$ 11,31</strong>
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={CHECKOUT_URL}
              onClick={handleCTAClick}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center rounded-full px-7 py-4 2xl:py-3 2xl:px-12 text-base font-bold text-white transition-all   [backface-visibility:hidden] scale-[1.03] animate-pulse-cta touch-manipulation"
              style={{
                background: "var(--gradient-terracotta)",
                boxShadow: "var(--shadow-terracotta)",
              }}
            >
              Quero Começar Agora Sem Risco
            </a>
            <p className="text-xs text-[#262626]/70">Acesso imediato após o pagamento</p>
          </div>
        </div>
      </section>

      {/* ── WAVE DIVIDER (PROCEDURAL SVG) ── */}
      <div className="w-full overflow-hidden leading-[0] translate-y-[1px] -mb-1">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A1128"
            d="M0,120 L1440,120 L1440,0 C1200,0 960,120 720,60 C480,0 240,120 0,120 Z"
          />
        </svg>
      </div>

      {/* ===== SUPORTE INSTAGRAM & DIREITOS ===== */}
      <div
        className="px-6 pt-16 text-cream sm:px-8 sm:pt-24 pb-[calc(max(4rem,env(safe-area-inset-bottom)+2rem))]"
        style={{ background: "#0A1128" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          >
            <MessageCircle className="h-5 w-5 text-gold-foreground" />
          </div>
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-cream/85">
            Ainda tem dúvidas se o método serve para a idade do seu bebê? Fale diretamente comigo.{" "}
            <a
              href="https://instagram.com/SeuPerfil"
              onClick={() => trackNavClick("suporte_instagram")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
              style={{ color: "var(--gold)" }}
            >
              Clique aqui
            </a>{" "}
            para mandar uma mensagem no Direct do MessageCircle{" "}
            <span className="font-semibold" style={{ color: "var(--gold)" }}>
              @SeuPerfil
            </span>
            .
          </p>

          <div className="mt-16 border-t border-cream/10 pt-8 text-center text-xs text-cream/40 tracking-wider">
            <p className="font-serif text-lg text-cream mb-2 font-medium">
              A Arquitetura do Descanso
            </p>
            <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
