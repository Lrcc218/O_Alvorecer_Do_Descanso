export function LuxuryDivider({
  color = "var(--gold)",
  opacity = 1,
  className = "",
}: {
  color?: string;
  opacity?: number;
  className?: string;
}) {
  // Como a linha agora tem apenas 1px e é extremamente delicada,
  // opacidades muito baixas (como 0.3) a tornam invisível.
  // Vamos garantir um mínimo de brilho para a harmonia cromática.
  const safeOpacity = Math.max(0.7, opacity);

  return (
    <div
      className={`relative w-full h-px flex items-center justify-center pointer-events-none ${className}`}
    >
      {/* Base Delicate Line */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          opacity: safeOpacity,
        }}
      />

      {/* Subtle Center Glow */}
      <div
        className="absolute w-[40%] h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          filter: "blur(3px)",
          opacity: safeOpacity * 0.7,
        }}
      />

      {/* Luxury Center Diamond */}
      <div
        className="absolute w-[5px] h-[5px] rotate-45 rounded-[0.5px]"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, ${color} 100%)`,
          boxShadow: `0 0 10px 1px ${color}`,
          opacity: 1, // Diamante sempre brilhante
        }}
      />
    </div>
  );
}
