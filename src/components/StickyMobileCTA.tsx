"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { CHECKOUT_URL, calculateScrollPercentage, trackPurchaseClick } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";

export function StickyMobileCTA() {
  const [pastHalf, setPastHalf] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const percent = calculateScrollPercentage();
      // Show CTA after user scrolls past 30% of the document height
      setPastHalf(percent >= 0.3);

      const offerSection = document.getElementById("garantia");
      if (offerSection) {
        const rect = offerSection.getBoundingClientRect();
        // Hide CTA when the guarantee card is about to enter the viewport (150px before)
        setOfferVisible(rect.top < window.innerHeight + 150);
      } else {
        setOfferVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visible = pastHalf && !offerVisible;

  const handleCTAClick = () => {
    trackPurchaseClick(67.9);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed z-50 bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-fit rounded-full p-1.5 sm:p-2 md:p-2.5 bg-white/30 backdrop-blur-lg border border-white/40 shadow-[0_20px_50px_rgba(10,17,40,0.1)]"
        >
          <a
            href={CHECKOUT_URL}
            onClick={handleCTAClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-5 sm:px-7 py-3 md:py-3.5 2xl:py-3 2xl:px-12 text-[13.5px] sm:text-[15px] md:text-[17px] font-bold text-white shadow-xl [backface-visibility:hidden] animate-pulse-cta touch-manipulation whitespace-nowrap"
            style={{
              background: "var(--gradient-terracotta)",
            }}
          >
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
            <span>Resgatar Meu Sono (Bônus Inclusos)</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
