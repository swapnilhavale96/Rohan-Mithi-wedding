"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, VolumeX } from "lucide-react";
import weddingConfig from "@/data/wedding";

export interface MusicPlayerHandle {
  play: () => Promise<void>;
  pause: () => void;
  togglePlay: () => Promise<void>;
  isPlaying: boolean;
}

interface MusicPlayerProps {
  isInvitationOpen?: boolean;
}

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  function MusicPlayer({ isInvitationOpen = false }, ref) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [audioError, setAudioError] = useState(false);

    const songTitle = weddingConfig.musicTitle || "";
    const musicPath = weddingConfig.backgroundMusicPath;

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.9;
      }
    }, []);

    const play = useCallback(async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        audio.volume = 0.9;
        await audio.play();
        setIsPlaying(true);
        setAudioError(false);
      } catch (err) {
        console.warn("Audio playback couldn't start automatically:", err);
      }
    }, []);

    const pause = useCallback(() => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.pause();
      setIsPlaying(false);
    }, []);

    const togglePlay = useCallback(async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        if (!audio.paused) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.volume = 0.9;
          await audio.play();
          setIsPlaying(true);
          setAudioError(false);
        }
      } catch (err) {
        console.warn("Audio playback issue:", err);
      }
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        play,
        pause,
        togglePlay,
        isPlaying,
      }),
      [play, pause, togglePlay, isPlaying]
    );

    if (!musicPath) return null;

    return (
      <>
        {/* Hidden native audio element with multiple source fallbacks */}
        <audio
          ref={audioRef}
          loop
          playsInline
          preload="auto"
          onPlay={() => {
            setIsPlaying(true);
            setAudioError(false);
          }}
          onPause={() => setIsPlaying(false)}
        >
          <source src={musicPath} type="audio/mp4" />
          <source src="/music/judi-jodi.m4a" type="audio/mp4" />
          <source src="/music/judi-jodi.mp3" type="audio/mpeg" />
        </audio>

        {/* Floating Music Control Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 5, x: -5 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute bottom-full left-0 mb-2 whitespace-nowrap rounded-lg px-3 py-1.5 shadow-md"
                style={{
                  background: "rgba(61, 43, 31, 0.92)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  className="text-white text-xs flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {audioError
                    ? "Audio file not found"
                    : isPlaying
                      ? `Stop music (${songTitle})`
                      : `Play music (${songTitle})`}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-12 h-12 rounded-full flex items-center justify-center relative shadow-lg"
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
                  ? "Stop background music"
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
                  style={{ border: "2px solid rgba(201,169,110,0.4)" }}
                  animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              </>
            ) : (
              <Play size={18} color="white" style={{ marginLeft: "2px" }} />
            )}
          </motion.button>

          {/* Decorative "Now Playing: Mangal Rang" label */}
          {!audioError && (
            <AnimatePresence>

              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute bottom-0 left-14 flex items-center gap-1.5 h-12 overflow-hidden pointer-events-none"
                >
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-sm"
                    style={{
                      background: "rgba(253, 248, 240, 0.9)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(201, 169, 110, 0.25)",
                    }}
                  >
                    <Music size={11} style={{ color: "#C9A96E" }} />
                    <span
                      className="text-[11px] whitespace-nowrap"
                      style={{ color: "#6B5344", fontFamily: "var(--font-sans)", fontWeight: 500 }}
                    >
                      {songTitle}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </>
    );
  }
);

export default MusicPlayer;
