import { ShieldCheck } from "lucide-react";

export function GuaranteeBlock() {
  return (
    <div className="mx-auto mt-16 max-w-[800px] w-full rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#F5E6C4]/30 to-transparent p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-[0_20px_60px_rgba(212,175,55,0.06)] relative overflow-hidden [contain:layout]">
      {/* Decorative Gold Glow */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at 10% 10%, rgba(212,175,55,0.4), transparent 60%)",
        }}
      />

      <div className="flex-shrink-0 bg-white shadow-md p-4 rounded-full border border-[#D4AF37]/20 relative z-10">
        <ShieldCheck className="w-12 h-12" style={{ color: "var(--gold)" }} strokeWidth={1.5} />
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-start">
        <h4 className="font-serif text-2xl md:text-3xl font-bold text-[#2C1A04] mb-4 text-center md:text-left tracking-tight">
          Garantia Blindada de 30 Dias.
        </h4>
        <p className="font-sans text-[#262626]/80 leading-relaxed text-base md:text-lg text-center md:text-left">
          Os "especialistas" comuns dão 7 dias.{" "}
          <strong className="font-semibold text-[#2C1A04]">Eu te dou 30 noites completas.</strong>
          <br />
          <br />
          Acesse o método hoje e aplique na rotina da sua casa durante todo o mês. Se nas próximas
          30 madrugadas o seu bebê não apresentar uma melhora drástica no sono e você não sentir a
          sua paz voltando, basta um único clique. <strong>
            Eu devolvo 100% do seu dinheiro.
          </strong>{" "}
          O risco financeiro está inteiramente nas minhas costas.
        </p>
      </div>
    </div>
  );
}
