"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Volume2 } from "lucide-react";
import { trackVideoPlay } from "@/services/api";

interface VimeoPlayerProps {
  videoId?: string;
  videoHash?: string;
  className?: string;
}

export function VimeoPlayer({
  videoId = process.env.NEXT_PUBLIC_VIMEO_VIDEO_ID,
  videoHash = process.env.NEXT_PUBLIC_VIMEO_HASH,
  className = "",
}: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !videoId) return;

    // Default configuration for VSL (Video Sales Letter)
    const options: any = {
      id: videoId,
      width: "100%",
      autoplay: true,
      muted: true, // MUST be true for autoplay to work in modern browsers
      loop: false,
      title: false,
      byline: false,
      portrait: false,
      responsive: true,
      controls: false, // Hide default controls initially for better VSL experience
      dnt: true, // Do not track via Vimeo analytics (we use our own)
    };

    // If it's an unlisted video, format URL with hash
    if (videoHash) {
      delete options.id;
      options.url = `https://vimeo.com/${videoId}?h=${videoHash}`;
    }

    playerRef.current = new Player(containerRef.current, options);

    // Track when user plays
    playerRef.current.on("play", () => {
      if (!hasStarted) {
        setHasStarted(true);
        trackVideoPlay(videoId);
      }
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, videoHash, hasStarted]);

  // Unmute function for the overlay
  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.setVolume(1).then(() => {
        setIsMuted(false);
        // Show controls after unmuting so user can pause/seek
        // Note: SDK doesn't allow changing 'controls' dynamically easily, 
        // but we ensure they hear the sound.
      });
    }
  };

  if (!videoId) {
    return (
      <div className={`flex items-center justify-center bg-black/50 aspect-video rounded-2xl ${className}`}>
        <p className="text-white/50 font-sans text-sm">Vimeo ID não configurado no .env.local</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black ${className}`}>
      {/* Vimeo Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Unmute Overlay - Only shows if video is playing muted */}
      {isMuted && (
        <div 
          onClick={handleUnmute}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 cursor-pointer group"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A1128]/80 border border-[#D4AF37]/30 backdrop-blur-md transition-transform group-hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-pulse-cta">
            <Volume2 className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-bold text-[#FCEFD2] uppercase tracking-wider font-sans">
              Toque para ativar o som
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
