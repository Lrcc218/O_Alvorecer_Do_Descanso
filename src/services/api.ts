/**
 * API and Analytics Integration Service
 * Centralizes all tracking, redirecting, and external scripts execution.
 */

// Get checkout URL from environment variables, falling back to a default value if missing.
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://seu-checkout.yampi.com.br/";

// Meta Pixel tracking settings
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
// GA4 measurement settings
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Safely tracks a Page View event across platforms
 */
export const trackPageView = (url: string = "") => {
  try {
    const currentUrl = url || (typeof window !== "undefined" ? window.location.pathname : "");

    // Track Google Analytics 4
    if (GA_MEASUREMENT_ID && typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: currentUrl,
      });
      console.log(`[Analytics] GA4 PageView tracked for: ${currentUrl}`);
    }

    // Track Meta Pixel
    if (META_PIXEL_ID && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
      console.log("[Analytics] Meta PageView tracked");
    }
  } catch (error) {
    console.error("[Analytics Error] Failed to track page view:", error);
  }
};

/**
 * Safely tracks a purchase button click (Initiate Checkout)
 */
export const trackPurchaseClick = (value: number = 67.9, currency: string = "BRL") => {
  try {
    // Track Google Analytics 4
    if (GA_MEASUREMENT_ID && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "begin_checkout", {
        value: value,
        currency: currency,
        items: [
          {
            item_name: "O Alvorecer do Descanso - Guia de Sono Infantil",
            price: value,
          },
        ],
      });
      console.log("[Analytics] GA4 BeginCheckout event tracked");
    }

    // Track Meta Pixel
    if (META_PIXEL_ID && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        value: value,
        currency: currency,
      });
      console.log("[Analytics] Meta InitiateCheckout event tracked");
    }
  } catch (error) {
    console.error("[Analytics Error] Failed to track purchase button click:", error);
  }
};

/**
 * Helper to calculate scroll percentage (Sticky CTA display trigger)
 */
export const calculateScrollPercentage = (): number => {
  if (typeof window === "undefined") return 0;
  const scrolled = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return 0;
  return scrolled / docHeight;
};
