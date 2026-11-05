"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [audioError, setAudioError] = useState(false);

  // Check if audio file is configured
  useEffect(() => {
    if (weddingConfig.backgroundMusicPath) {
      setHasAudio(true);
    }
  }, []);

  // Create audio element
  useEffect(() => {
    if (!hasAudio || !weddingConfig.backgroundMusicPath) return;

    const audio = new Audio(weddingConfig.backgroundMusicPath);
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "none";

    audio.addEventListener("error", () => {
      setAudioError(true);
      setIsPlaying(false);
    });

    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [hasAudio]);

  const togglePlay = useCallback(async () => {
    if (!audioRef.current || audioError) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
    } catch {
      setAudioError(true);
    }
  }, [isPlaying, audioError]);

  // Don't render if no audio configured
  if (!hasAudio) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5, x: 5 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg px-3 py-1.5"
            style={{
              background: "rgba(61, 43, 31, 0.9)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span
              className="text-white text-xs"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              {audioError
                ? "Audio file not found"
                : isPlaying
                ? "Pause music"
                : "Play music"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-12 h-12 rounded-full flex items-center justify-center relative"
        style={{
          background: audioError
            ? "rgba(155,133,121,0.2)"
            : "linear-gradient(135deg, #C9A96E, #DAA520)",
          boxShadow: audioError
            ? "none"
            : "0 4px 15px rgba(201, 169, 110, 0.4)",
          cursor: audioError ? "not-allowed" : "pointer",
        }}
        disabled={audioError}
        aria-label={
          audioError
            ? "Audio file not available"
            : isPlaying
            ? "Pause background music"
            : "Play background music"
        }
      >
        {audioError ? (
          <VolumeX size={18} color="white" opacity={0.5} />
        ) : isPlaying ? (
          <>
            <Pause size={18} color="white" />
            {/* Animated sound rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid rgba(201,169,110,0.3)" }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </>
        ) : (
          <Play size={18} color="white" style={{ marginLeft: "2px" }} />
        )}
      </motion.button>

      {/* Hidden decorative label */}
      {!audioError && (
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="absolute bottom-0 right-14 flex items-center gap-1.5 h-12 overflow-hidden"
            >
              <Music size={10} style={{ color: "#C9A96E" }} />
              <span
                className="text-[10px] whitespace-nowrap"
                style={{ color: "#9B8579", fontFamily: "var(--font-sans)" }}
              >
                Now Playing
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
