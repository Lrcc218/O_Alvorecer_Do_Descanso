import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies | A Arquitetura do Descanso",
  description: "Nossa política de privacidade e uso de cookies em conformidade com a LGPD e GDPR.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-[#0A1128] py-20 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <Link
          href="/"
          className="inline-flex items-center text-[#D4AF37] hover:text-[#FCEFD2] mb-8 transition-colors font-sans"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl md:text-5xl font-serif text-[#D4AF37] mb-8 font-semibold">
          Política de Privacidade e Cookies
        </h1>

        <div className="prose prose-invert max-w-none font-sans text-[#FCEFD2]/80 space-y-6 leading-relaxed">
          <p>Última atualização: Junho de 2026</p>

          <section>
            <h2 className="text-2xl font-serif text-[#FCEFD2] mt-8 mb-4 border-b border-white/10 pb-2">
              1. O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador,
              tablet ou smartphone) quando você visita nosso site. Eles são essenciais para o
              funcionamento da plataforma e nos ajudam a melhorar continuamente sua experiência.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#FCEFD2] mt-8 mb-4 border-b border-white/10 pb-2">
              2. Como utilizamos os Cookies
            </h2>
            <p className="mb-4">Nosso site divide os cookies nas seguintes categorias:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-[#D4AF37]">Essenciais / Estritamente Necessários:</strong>{" "}
                São cruciais para que o site funcione corretamente (ex: salvar suas próprias
                escolhas de privacidade para não perguntarmos de novo a cada clique). Eles não podem
                ser desativados nos nossos sistemas.
              </li>
              <li>
                <strong className="text-[#D4AF37]">Estatísticas e Analíticos:</strong> Nos ajudam a
                entender como os visitantes usam o site, de forma totalmente anônima, identificando
                páginas mais visitadas para que possamos melhorar nosso conteúdo.{" "}
                <em>(Exemplo: Google Analytics)</em>.
              </li>
              <li>
                <strong className="text-[#D4AF37]">Marketing e Publicidade:</strong> Utilizados para
                rastrear visitantes e construir perfis de interesse, permitindo exibir anúncios que
                sejam realmente relevantes e interessantes para você em outras plataformas.{" "}
                <em>(Exemplo: Meta Pixel)</em>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#FCEFD2] mt-8 mb-4 border-b border-white/10 pb-2">
              3. Seus Direitos (LGPD e GDPR)
            </h2>
            <p>
              Apoiamos totalmente e estamos em conformidade com a{" "}
              <strong>Lei Geral de Proteção de Dados (LGPD - Brasil)</strong> e o{" "}
              <strong>Regulamento Geral de Proteção de Dados (GDPR - União Europeia)</strong>. Você
              possui o controle total e o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Acessar, corrigir ou solicitar a exclusão de seus dados pessoais.</li>
              <li>
                Revogar o seu consentimento de cookies a qualquer momento de forma fácil e sem
                prejuízos ao uso das ferramentas essenciais do site.
              </li>
              <li>Saber exatamente quais ferramentas de terceiros utilizamos (listadas acima).</li>
            </ul>
            <p className="mt-4 bg-[#D4AF37]/10 p-4 rounded-xl border border-[#D4AF37]/20">
              <strong>Como alterar suas opções:</strong> Se você desejar alterar suas escolhas
              feitas anteriormente em nosso Banner de Cookies, basta acessar as configurações do seu
              navegador, limpar o armazenamento local/cookies do nosso site, e recarregar a página.
              Nosso painel de preferências aparecerá novamente para que você reconfigure tudo ao seu
              gosto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#FCEFD2] mt-8 mb-4 border-b border-white/10 pb-2">
              4. Contato do Encarregado
            </h2>
            <p>
              Se você tiver dúvidas, solicitações ou quiser exercer seus direitos sobre nossa
              Política de Privacidade, entre em contato através dos nossos canais de atendimento
              oficiais da Arquitetura do Descanso.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
