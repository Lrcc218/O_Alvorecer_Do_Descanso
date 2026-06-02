"use client";

import { Moon, Clock, Droplet } from "lucide-react";

export function Pillars() {
  const pillarsList = [
    {
      icon: Moon,
      title: "O Método das 3 Noites",
      text: "Um percurso curto, claro e acolhedor que transforma a rotina noturna em um ritual de calma — para o bebê e para você.",
    },
    {
      icon: Clock,
      title: "A Ciência das Janelas de Sono",
      text: "Aprenda a ler os sinais sutis do corpo do seu bebê e descubra o momento perfeito em que o sono chega sem resistência.",
    },
    {
      icon: Droplet,
      title: "O Protocolo do Banho à Cama",
      text: "Uma sequência sensorial que prepara corpo e mente para o descanso — transformando o final do dia em paz garantida.",
    },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 bg-[#F7F3E9] lazy-section">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: "var(--terracotta)" }}
          >
            O Método
          </p>
          <h2 className="font-serif text-3.5xl sm:text-5xl tracking-tight leading-tight text-[#262626]">
            Um caminho gentil,
            <br />
            <span className="italic font-normal" style={{ color: "var(--terracotta)" }}>
              desenhado com ciência.
            </span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-lg text-[#262626]/80 leading-relaxed">
            Três pilares que conduzem o sono do seu filho com naturalidade e respeito ao tempo dele.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillarsList.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-lg border border-white/60 shadow-[0_12px_40px_0_rgba(10,17,40,0.04)] p-8 transition-all duration-350 hover:-translate-y-1   [backface-visibility:hidden]"
            >
              <div
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "var(--gradient-gold)" }}
              >
                <p.icon className="h-5 w-5 text-gold-foreground" />
              </div>
              <h3 className="font-serif text-2xl text-[#262626] mb-3 font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#262626]/80">{p.text}</p>
              <div
                className="absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-350 group-hover:opacity-100"
                style={{ background: "var(--gradient-gold)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
