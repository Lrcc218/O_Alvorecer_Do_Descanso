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
 * Safely tracks a purchase button click (Initiate Checkout)
 */
export const trackPurchaseClick = (value: number = 67.9, currency: string = "BRL") => {
  try {
    if (typeof window !== "undefined") {
      const eventParams = {
        value: value,
        currency: currency,
        items: [
          {
            item_name: "O Alvorecer do Descanso - Guia de Sono Infantil",
            price: value,
          },
        ],
      };

      // GTM (DataLayer)
      if (window.dataLayer) {
        window.dataLayer.push({ event: "begin_checkout", ...eventParams });
      }

      // Track Meta Pixel
      if (window.fbq) {
        window.fbq("track", "InitiateCheckout", { value: value, currency: currency });
      }
    }
  } catch (error) {
    console.error("[Analytics Error] Failed to track purchase button click:", error);
  }
};

/**
 * Tracks navigation clicks (like menu anchors or standard CTAs)
 */
export const trackNavClick = (destination: string) => {
  try {
    if (typeof window !== "undefined") {
      const params = { destination_name: destination };

      // GTM
      if (window.dataLayer) {
        window.dataLayer.push({ event: "nav_click", ...params });
      }

      // Meta Pixel - Custom Event
      if (window.fbq) {
        window.fbq("trackCustom", "NavClick", params);
      }
    }
  } catch (error) {
    console.error("[Analytics Error] Failed to track nav click:", error);
  }
};

/**
 * Tracks when a video starts playing (VSL Play)
 */
export const trackVideoPlay = (videoId?: string) => {
  try {
    if (typeof window !== "undefined") {
      const params = { video_id: videoId || "vsl_principal", content_name: "VSL Principal" };

      if (window.dataLayer) {
        window.dataLayer.push({ event: "video_play", ...params });
      }

      if (window.fbq) {
        window.fbq("trackCustom", "VideoPlay", params);
      }
    }
  } catch (error) {
    console.error("[Analytics Error] Failed to track video play:", error);
  }
};

/**
 * Grants tracking consent for GDPR/LGPD compliance based on granular preferences
 */
export const grantConsent = (preferences: { analytics: boolean; marketing: boolean }) => {
  try {
    if (typeof window !== "undefined") {
      // Update Google Analytics Consent Mode
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: preferences.analytics ? "granted" : "denied",
          ad_storage: preferences.marketing ? "granted" : "denied",
          ad_user_data: preferences.marketing ? "granted" : "denied",
          ad_personalization: preferences.marketing ? "granted" : "denied",
          functionality_storage: "granted", // Essential/Functional
          personalization_storage: preferences.analytics ? "granted" : "denied",
        });
      }

      // Grant Meta Pixel consent
      if (window.fbq) {
        if (preferences.marketing) {
          window.fbq("consent", "grant");
        } else {
          // If they explicitly denied marketing after init, we ensure it's revoked
          window.fbq("consent", "revoke");
        }
      }
    }
  } catch (error) {
    console.error("[Analytics Error] Failed to grant consent:", error);
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
