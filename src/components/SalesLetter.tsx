"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CHECKOUT_URL, trackPurchaseClick } from "@/services/api";
import { SleepPhasesVisualizer } from "@/components/SleepPhasesVisualizer";
import { CircadianBlueprintTool } from "@/components/CircadianBlueprintTool";
import { CurriculumGrid } from "@/components/CurriculumGrid";
import { DeliverablesSheet } from "@/components/DeliverablesSheet";
import { ConversionStack } from "@/components/ConversionStack";
import { LuxuryDivider } from "@/components/LuxuryDivider";

// --- TIPAGENS ESTRITAS ---

type ElementType = "p" | "div" | "blockquote";
type SpacingType = "default" | "large" | "none";

interface TextBlock {
  id: string;
  type?: ElementType;
  spacing?: SpacingType;
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// --- DICIONÁRIO IMUTÁVEL DE ESPAÇAMENTOS ---
// Tradução semântica para classes de margem com otimização de hardware
const SPACING_DICTIONARY: Record<SpacingType, string> = {
  default: "mb-32 md:mb-48", // Ritmo padrão: 3 dedos mobile, 4-5 dedos desktop
  large: "mb-44 md:mb-64",   // Isolamento monumental para impacto
  none: "mb-0",
};

// --- MOTOR DE ANIMAÇÃO (Fora do escopo para performance) ---
const REVEAL_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Callback estático para evitar recriação durante re-renders
const handleCTAClickStatic = () => {
  trackPurchaseClick(67.9);
};

// --- DADOS (Data-Driven Copy) ---

// HERO MANIFESTO BLOCKS (Section 1: emotional opening copy above the grid)
const HERO_BLOCKS: TextBlock[] = [
  {
    id: "block-1",
    type: "p",
    spacing: "default",
    content: "O silêncio da casa só é quebrado pelo som da respiração ou pelo choro do seu bebê, que parece ecoar em cada fibra do seu corpo exausto.",
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto",
  },
  {
    id: "block-2",
    type: "p",
    spacing: "default",
    content: (
      <>
        Você está sentada no escuro, sentindo um peso que não é apenas físico, mas um cansaço que dói na alma. E a maldita dúvida sussurra no seu ouvido:{" "}
        <em className="font-serif italic">&ldquo;Onde é que eu estou errando?&rdquo;</em>.
      </>
    ),
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto",
  },
  {
    id: "block-3",
    type: "p",
    spacing: "large",
    content: (
      <>
        Deixe-me te dizer uma verdade científica:{" "}
        <strong className="font-semibold block mt-6 not-italic">
          você não está errando em nada.
        </strong>
      </>
    ),
    className: "font-serif text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl italic leading-snug text-left max-w-[780px] 2xl:max-w-[1100px] mx-auto",
    style: { color: "var(--terracotta)" },
  },
];

// MAIN SALES CONTENT (Section 2: flows into asymmetric grid left column)
const SALES_CONTENT: TextBlock[] = [
  {
    id: "block-4",
    type: "p",
    spacing: "default",
    content: "O que você está vivenciando não é uma falha de instinto. É neurobiologia pura. O cérebro do seu bebê é uma arquitetura complexa que ainda está em plena construção. E o sistema nervoso dele está usando a sua exaustão para tentar encontrar o equilíbrio.",
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-5",
    type: "blockquote",
    spacing: "large",
    content: (
      <strong className="font-serif italic text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-normal leading-relaxed text-[#2C1A04] block tracking-wide">
        A ciência comprova: a falta de sono destrói a região do cérebro materno responsável pela regulação emocional.
      </strong>
    ),
    className: "bg-[#F5E6C4]/30 border-l-4 border-[#D4AF37] shadow-[0_12px_40px_rgba(212,175,55,0.06)] pt-8 pb-8 pl-8 pr-6 md:pt-10 md:pb-10 md:pl-12 md:pr-10 mx-auto max-w-[750px] 2xl:max-w-[1000px] rounded-xl text-left lg:mx-0",
  },
  {
    id: "block-6",
    type: "p",
    spacing: "default",
    content: "Sentir-se sobrecarregada, irritada ou perdida não te faz uma mãe ruim. Faz de você uma pessoa operando em modo de sobrevivência neurológica.",
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-7",
    type: "p",
    spacing: "default",
    content: "Você já percebeu que quanto mais exausta você está, mais o seu bebê briga com o sono?",
    className: "font-serif font-semibold text-left text-xl md:text-2xl lg:text-3xl 2xl:text-4xl max-w-[780px] 2xl:max-w-[1050px] mx-auto lg:mx-0",
  },
  {
    id: "block-8",
    type: "p",
    spacing: "default",
    content: "Não é coincidência. É o cortisol.",
    className: "font-sans text-left font-medium tracking-[0.25em] uppercase text-sm md:text-base mx-auto lg:mx-0",
    style: { color: "var(--terracotta)" },
  },
  {
    id: "block-9",
    type: "p",
    spacing: "default",
    content: "O bebê sente a sua agitação e o corpo dele entende que o ambiente está em perigo, disparando um estado de alerta máximo que impede o sono profundo.",
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-10",
    type: "p",
    spacing: "large",
    content: "Para salvar o sono do seu filho, você precisa, primeiro, resgatar o seu direito de respirar.",
    className: "font-serif text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl italic leading-snug text-left max-w-[780px] 2xl:max-w-[1050px] mx-auto lg:mx-0",
    style: { color: "var(--terracotta)" },
  },
  {
    id: "block-11",
    type: "p",
    spacing: "default",
    content: (
      <>
        Para resolver isso, você poderia buscar uma consultoria de sono individual ou passar por avaliações médicas de ponta, que no mercado atual não custam menos do que{" "}
        <strong className="font-semibold">R$ 400,00 a R$ 800,00</strong> por uma única hora de orientação.
      </>
    ),
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-12",
    type: "p",
    spacing: "default",
    content: "Ou você pode assumir o controle do ambiente da sua casa hoje com um mapa técnico e validado.",
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-13",
    type: "p",
    spacing: "default",
    content: (
      <>
        O guia completo <strong className="font-semibold">O Alvorecer do Descanso</strong> condensa os maiores estudos clínicos de neurociência do sono e desenvolvimento socioemocional em um passo a passo prático de aplicação imediata.
      </>
    ),
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-14",
    type: "p",
    spacing: "default",
    content: (
      <>
        Você vai receber o exato método para regular o relógio biológico do seu bebê, a{" "}
        <strong className="font-semibold">Tabela Mestra de Janelas de Sono</strong>, o{" "}
        <strong className="font-semibold">Protocolo de Emergência da Madrugada</strong> e as tabelas completas de monitoramento em qualidade máxima (2K) prontas para impressão.
      </>
    ),
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-15",
    type: "p",
    spacing: "default",
    content: (
      <>
        O acesso a esse manual definitivo de sobrevivência e restauração da sua saúde mental deveria custar, pelo menos, <span className="line-through opacity-60">R$ 197,00</span>.
      </>
    ),
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-16",
    type: "p",
    spacing: "default",
    content: "Mas eu sei o que é estar no escuro da madrugada precisando de socorro. O descanso não pode ser um artigo de luxo inacessível.",
    className: "font-sans text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide text-left max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
  {
    id: "block-17",
    type: "p",
    spacing: "large",
    content: (
      <>
        Por isso, apenas hoje, você pode garantir o guia completo e todas as ferramentas de aplicação imediata por um pagamento único de{" "}
        <strong className="font-bold">R$ 67,90</strong> ou <strong className="font-bold">6x de R$ 11,31</strong>.
      </>
    ),
    className: "font-serif text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-snug text-left font-medium max-w-[800px] 2xl:max-w-[1050px] mx-auto lg:mx-0",
    style: { color: "var(--terracotta)" },
  },
  {
    id: "block-18",
    type: "p",
    spacing: "default",
    content: "Menos do que o valor de uma pizza. Menos do que duas parcelas de R$ 35,00.",
    className: "font-serif italic text-left text-lg md:text-xl 2xl:text-2xl opacity-80 max-w-[700px] 2xl:max-w-[950px] mx-auto lg:mx-0",
  },
  {
    id: "block-19",
    type: "p",
    spacing: "none",
    content: "Um investimento irrisório para transformar as madrugadas da sua casa, regular o sistema hormonal do seu filho e devolver a você a alegria de viver.",
    className: "font-sans text-left font-medium text-lg md:text-xl 2xl:text-2xl leading-relaxed tracking-wide max-w-[750px] 2xl:max-w-[1000px] mx-auto lg:mx-0",
  },
];

// --- COMPONENTES ---

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
  spacing?: SpacingType;
}

function RevealBlock({
  children,
  className = "",
  as = "p",
  style,
  spacing = "default",
}: RevealBlockProps) {
  const Component = motion.create(as);

  return (
    <Component
      variants={REVEAL_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: "some" }}
      className={`  [backface-visibility:hidden] ${SPACING_DICTIONARY[spacing]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

export function SalesLetter() {
  const [isMounted, setIsMounted] = useState(false);

  // Hydration guard estrito para Next.js SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 min-h-screen bg-[#FAF5E6]" />;
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO MANIFESTO (Copy-only — video lives in Hero.tsx)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="sales-letter"
        className="px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 relative sm: bg-gradient-to-b from-[#FCEFD2] via-[#FAF5E6] to-[#F7F3E9] touch-manipulation lazy-section"
        ref={(el) => {
          if (el && !el.getAttribute('data-passive')) {
            el.addEventListener('touchstart', () => {}, { passive: true });
            el.addEventListener('touchmove', () => {}, { passive: true });
            el.setAttribute('data-passive', 'true');
          }
        }}
      >
        <div className="relative mx-auto w-full flex flex-col">

          {/* Hero Manifesto Copy */}
          <div className="max-w-[1000px] lg:max-w-none 2xl:max-w-[1400px] mx-auto w-full px-[clamp(1rem,4vw,1.5rem)] flex flex-col [contain:layout] mb-32 md:mb-48">
            <div className="w-full subpixel-antialiased [text-rendering:optimizeLegibility]">
              {HERO_BLOCKS.map((block) => (
                <RevealBlock
                  key={block.id}
                  as={block.type}
                  spacing={block.spacing}
                  className={block.className}
                  style={block.style}
                >
                  {block.content}
                </RevealBlock>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 2: COHESIVE 2-COLUMN DESKTOP GRID
              Left: Sales Copy Stream | Right: Sticky Support Sidebar
              ═══════════════════════════════════════════════════════════════════ */}
          <div className="max-w-[1200px] md:max-w-none 2xl:max-w-screen-2xl mx-auto w-full px-[clamp(1rem,4vw,1.5rem)] grid grid-cols-1 md:grid-cols-12 md:gap-10 lg:gap-16 2xl:gap-24">

            {/* Column Left: Sales Copy Stream (md:col-span-7) */}
            <div
              className="md:col-span-7 flex flex-col text-[#262626]"
              ref={(el) => {
                if (el && !el.getAttribute('data-passive')) {
                  el.addEventListener('touchstart', () => {}, { passive: true });
                  el.setAttribute('data-passive', 'true');
                }
              }}
            >
              {SALES_CONTENT.map((block) => (
                <RevealBlock
                  key={block.id}
                  as={block.type}
                  spacing={block.spacing}
                  className={block.className}
                  style={block.style}
                >
                  {block.content}
                </RevealBlock>
              ))}
            </div>

            {/* Column Right: Wrapper (md:col-span-5) */}
            <div className="hidden md:block md:col-span-5 w-full">
              {/* The Actual Sticky Element */}
              <div className="flex flex-col sticky top-4 2xl:top-6 z-10 w-full pb-4 h-fit [@media(max-height:720px)]:top-auto [@media(max-height:720px)]:bottom-4">
                <div className="space-y-3 2xl:space-y-5">
                {/* Clinical Quote Card */}
                <div className="bg-[#F5E6C4]/25 border border-[#D4AF37]/20 rounded-2xl p-4 lg:p-5 2xl:p-6 backdrop-blur-sm shadow-xl">
                  <p className="text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.25em] text-[#262626]/50 font-sans mb-2 2xl:mb-3">
                    Evidência Clínica
                  </p>
                  <p className="font-serif text-base lg:text-lg 2xl:text-xl italic text-[#262626]/80 leading-relaxed mb-3 2xl:mb-4">
                    &ldquo;A ciência comprova: a falta de sono destrói a região do cérebro materno responsável pela regulação emocional.&rdquo;
                  </p>
                  
                  {/* Circadian Wave Micro-graphic */}
                  <div className="w-full h-8 2xl:h-10 rounded-lg bg-white/20 border border-white/60 flex items-center justify-center overflow-hidden mb-3 2xl:mb-4">
                    <svg viewBox="0 0 200 30" className="w-full h-full opacity-50" preserveAspectRatio="none">
                      <path d="M0,15 C10,5 20,25 30,15 C40,5 50,25 60,15 C70,5 80,25 90,15 C100,5 110,25 120,15 C130,5 140,25 150,15 C160,5 170,25 180,15 C190,5 200,25 200,15" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Authority Label */}
                  <div className="border-t border-[#D4AF37]/15 pt-3 2xl:pt-4">
                    <p className="text-[9px] 2xl:text-10px uppercase tracking-[0.25em] text-[#262626]/50 font-sans font-bold">
                      Nidra Scientific Laboratory AG
                    </p>
                    <p className="text-[9px] 2xl:text-10px uppercase tracking-[0.2em] text-[#262626]/50 font-sans mt-0.5 2xl:mt-1">
                      Padrão Internacional de Evidência
                    </p>
                  </div>
                </div>

                {/* Product Summary Card */}
                <div className="bg-[#F5E6C4]/25 border border-[#D4AF37]/20 rounded-2xl p-4 lg:p-4 2xl:p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                  <div className="flex gap-4 lg:gap-4 items-center mb-3 2xl:mb-4">
                    <div className="w-[85px] lg:w-[100px] 2xl:w-[130px] shrink-0 aspect-[3/4] bg-white/30 rounded-xl flex items-center justify-center border border-white/60 shadow-sm relative overflow-hidden [backface-visibility:hidden]">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent z-10 pointer-events-none" />
                      <span className="font-serif italic text-xs lg:text-sm 2xl:text-base text-[#262626]/80 font-medium z-0 text-center px-2">Capa do Produto</span>
                    </div>
                    <ul className="flex-1 space-y-2 lg:space-y-2.5 2xl:space-y-3">
                      <li className="flex items-start gap-2 text-[#262626]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0 mt-0.5" style={{ color: "var(--terracotta)" }}><path d="M20 6 9 17l-5-5"/></svg>
                        <span className="font-sans text-[11px] lg:text-xs 2xl:text-sm leading-tight text-[#262626]/90 font-medium">O exato método para regular o relógio biológico</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#262626]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0 mt-0.5" style={{ color: "var(--terracotta)" }}><path d="M20 6 9 17l-5-5"/></svg>
                        <span className="font-sans text-[11px] lg:text-xs 2xl:text-sm leading-tight text-[#262626]/90 font-medium"><strong className="font-semibold text-black">Tabela Mestra</strong> de Janelas de Sono</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#262626]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0 mt-0.5" style={{ color: "var(--terracotta)" }}><path d="M20 6 9 17l-5-5"/></svg>
                        <span className="font-sans text-[11px] lg:text-xs 2xl:text-sm leading-tight text-[#262626]/90 font-medium"><strong className="font-semibold text-black">Protocolo de Emergência</strong> da Madrugada</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#262626]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0 mt-0.5" style={{ color: "var(--terracotta)" }}><path d="M20 6 9 17l-5-5"/></svg>
                        <span className="font-sans text-[11px] lg:text-xs 2xl:text-sm leading-tight text-[#262626]/90 font-medium">Tabelas de monitoramento prontas para impressão</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mb-3 2xl:mb-4">
                    <p className="font-sans text-xs 2xl:text-sm opacity-60 line-through mb-0.5">R$ 197,00</p>
                    <p className="font-serif text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-0.5 tracking-tight" style={{ color: "var(--terracotta)" }}>R$ 67,90</p>
                    <p className="font-sans text-xs 2xl:text-sm font-medium opacity-80">ou 6x de R$ 11,31</p>
                  </div>

                  <a
                    href={CHECKOUT_URL}
                    onClick={handleCTAClickStatic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex w-full items-center justify-center gap-2 2xl:gap-3 rounded-full px-4 lg:px-6 py-3.5 2xl:py-3 2xl:px-12 text-xs sm:text-sm lg:text-base 2xl:text-lg font-bold text-white transition-all animate-pulse-cta shadow-lg hover:shadow-xl [backface-visibility:hidden] flex-wrap sm:flex-nowrap touch-manipulation"
                    style={{ background: "var(--gradient-terracotta)" }}
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span className="uppercase tracking-wide leading-tight text-center font-sans">QUERO MEU ACESSO AGORA</span>
                  </a>
                  <p className="text-[clamp(10px,2vw,12px)] 2xl:text-sm text-[#262626]/60 tracking-wide font-medium mt-3 2xl:mt-4 text-center font-sans">
                    Compra 100% segura • Garantia de 7 dias
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Mobile-only CTA (visible on small screens where sidebar is hidden) */}
          <div className="md:hidden max-w-[750px] mx-auto w-full px-[clamp(1rem,4vw,1.5rem)] mt-20">
            <div className="text-center mb-6">
              <p className="font-sans text-sm opacity-60 line-through mb-1">R$ 197,00</p>
              <p className="font-serif text-4xl font-bold mb-1 tracking-tight" style={{ color: "var(--terracotta)" }}>R$ 67,90</p>
              <p className="font-sans text-sm font-medium opacity-80">ou 6x de R$ 11,31</p>
            </div>
            <a
              href={CHECKOUT_URL}
              onClick={handleCTAClickStatic}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-5 text-base font-bold text-white transition-all   animate-pulse-cta shadow-lg hover:shadow-xl [backface-visibility:hidden] touch-manipulation"
              style={{ background: "var(--gradient-terracotta)" }}
            >
              <Sparkles className="w-5 h-5 shrink-0" />
              <span className="uppercase tracking-wide leading-tight text-center font-sans">QUERO MEU ACESSO AGORA</span>
            </a>
            <p className="text-xs text-[#262626]/60 tracking-wide font-medium mt-4 text-center font-sans">
              Compra 100% segura • Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      <LuxuryDivider color="var(--gold)" className="z-20 -mb-px" opacity={0.4} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: SLEEP PHASES VISUALIZER
          ═══════════════════════════════════════════════════════════════════ */}
      <SleepPhasesVisualizer />

      <LuxuryDivider color="var(--gold)" className="z-20 -my-px" opacity={0.3} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: CIRCADIAN BLUEPRINT CALCULATOR
          ═══════════════════════════════════════════════════════════════════ */}
      <CircadianBlueprintTool />

      <LuxuryDivider color="var(--gold)" className="z-20 -mt-px" opacity={0.4} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: CURRICULUM GRID
          ═══════════════════════════════════════════════════════════════════ */}
      <CurriculumGrid />

      <LuxuryDivider color="var(--terracotta)" className="z-20 -my-px" opacity={0.3} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: DELIVERABLES SHEET
          ═══════════════════════════════════════════════════════════════════ */}
      <DeliverablesSheet />

      <LuxuryDivider color="var(--terracotta)" className="z-20 -my-px" opacity={0.3} />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: CONVERSION STACK
          ═══════════════════════════════════════════════════════════════════ */}
      <ConversionStack />
    </>
  );
}
