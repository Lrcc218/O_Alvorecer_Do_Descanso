"use client";

import { useState, useEffect } from "react";
import { grantConsent } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CONSENT_POLICY_VERSION = "1.0";
const COOKIE_NAME = "cookie_consent_preferences";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: true });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_NAME);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.versao === CONSENT_POLICY_VERSION) {
          // Já consentiu na versão atual, aplica as preferências em background
          grantConsent({
            analytics: parsed.analiticos,
            marketing: parsed.marketing,
          });
          return; // Não mostra o banner
        }
      }
    } catch (e) {
      console.warn("Error parsing cookie preferences", e);
    }

    // Mostra o banner se não houver consentimento válido
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowBanner(true);
  }, []);

  const saveAndApply = (analytics: boolean, marketing: boolean) => {
    const data = {
      versao: CONSENT_POLICY_VERSION,
      timestamp: new Date().toISOString(),
      essenciais: true,
      analiticos: analytics,
      marketing: marketing,
    };

    localStorage.setItem(COOKIE_NAME, JSON.stringify(data));
    grantConsent({ analytics, marketing });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-5"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0A1128]/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl flex flex-col gap-4">
            {!showPreferences ? (
              <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                <div className="text-left flex-1">
                  <h3 className="text-base font-serif text-[#D4AF37] mb-1 font-semibold">
                    Sua Privacidade
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FCEFD2]/90 font-sans leading-snug">
                    Usamos cookies para melhorar sua experiência e analisar tráfego, respeitando a{" "}
                    <strong>LGPD</strong>. Leia nossa{" "}
                    <Link
                      href="/politica-de-privacidade"
                      className="underline text-[#D4AF37] hover:text-[#FCEFD2]"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex w-full lg:w-auto flex-col sm:flex-row gap-2 shrink-0">
                  <button
                    onClick={() => saveAndApply(false, false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#FCEFD2]/70 hover:text-[#FCEFD2] hover:bg-white/5 transition-colors border border-transparent"
                  >
                    Apenas Essenciais
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#FCEFD2]/70 hover:text-[#FCEFD2] hover:bg-white/5 transition-colors border border-transparent"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={() => saveAndApply(true, true)}
                    className="px-5 py-2 rounded-full text-xs font-bold text-[#0A1128] transition-all hover:scale-105"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    Aceitar Todos
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                <h3 className="text-base font-serif text-[#D4AF37] font-semibold border-b border-white/10 pb-2">
                  Preferências de Cookies
                </h3>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#FCEFD2] font-semibold text-xs sm:text-sm">
                      Estritamente Necessários
                    </p>
                    <p className="text-[#FCEFD2]/60 text-[10px] sm:text-xs mt-0.5">
                      Funcionamento básico do site. Não podem ser desativados.
                    </p>
                  </div>
                  <div className="w-10 h-5 bg-green-500/50 rounded-full relative opacity-50 cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#FCEFD2] font-semibold text-xs sm:text-sm">
                      Estatísticas e Analíticos
                    </p>
                    <p className="text-[#FCEFD2]/60 text-[10px] sm:text-xs mt-0.5">
                      Ajudam a melhorar o site analisando o tráfego.
                    </p>
                  </div>
                  <button
                    onClick={() => setPrefs({ ...prefs, analytics: !prefs.analytics })}
                    className={`w-10 h-5 rounded-full relative transition-colors ${prefs.analytics ? "bg-green-500" : "bg-gray-600"}`}
                  >
                    <div
                      className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${prefs.analytics ? "right-1" : "left-1"}`}
                    ></div>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#FCEFD2] font-semibold text-xs sm:text-sm">
                      Marketing e Publicidade
                    </p>
                    <p className="text-[#FCEFD2]/60 text-[10px] sm:text-xs mt-0.5">
                      Para fornecer anúncios relevantes em outras redes.
                    </p>
                  </div>
                  <button
                    onClick={() => setPrefs({ ...prefs, marketing: !prefs.marketing })}
                    className={`w-10 h-5 rounded-full relative transition-colors ${prefs.marketing ? "bg-green-500" : "bg-gray-600"}`}
                  >
                    <div
                      className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${prefs.marketing ? "right-1" : "left-1"}`}
                    ></div>
                  </button>
                </div>

                <div className="flex justify-end gap-2 mt-2 pt-3 border-t border-white/10">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#FCEFD2]/70 hover:text-[#FCEFD2] transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => saveAndApply(prefs.analytics, prefs.marketing)}
                    className="px-5 py-2 rounded-full text-xs font-bold text-[#0A1128] transition-all hover:scale-105"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
