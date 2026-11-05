"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import weddingConfig from "@/data/wedding";

interface InvitationCoverProps {
  onOpen: () => void;
}

export default function InvitationCover({ onOpen }: InvitationCoverProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpening(true);
    // Delay before revealing the main site
    setTimeout(() => {
      onOpen();
    }, 1200);
  }, [onOpen]);

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          key="cover"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 50%, #F2D5D5 100%)" }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Floating petals background */}
          <FloatingPetals />

          {/* Main envelope card */}
          <motion.div
            className="relative w-[90vw] max-w-md mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Outer ornamental border */}
            <div
              className="relative rounded-2xl p-[2px]"
              style={{
                background: "linear-gradient(135deg, #C9A96E, #DAA520, #E8D5A0, #DAA520, #C9A96E)",
              }}
            >
              <div
                className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
                style={{ background: "linear-gradient(180deg, #FFFBF5, #FDF8F0, #FAF0E6)" }}
              >
                {/* Decorative corner ornaments */}
                <CornerOrnament position="top-left" />
                <CornerOrnament position="top-right" />
                <CornerOrnament position="bottom-left" />
                <CornerOrnament position="bottom-right" />

                {/* Inner decorative border */}
                <div
                  className="absolute inset-4 md:inset-6 rounded-xl pointer-events-none"
                  style={{
                    border: "1px solid rgba(201, 169, 110, 0.25)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 text-center py-6">
                  {/* Om / Shubh symbol */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-4"
                  >
                    <span
                      className="text-3xl"
                      style={{ color: "#C9A96E" }}
                      aria-hidden="true"
                    >
                      🙏
                    </span>
                  </motion.div>

                  {/* Shubh Vivah heading */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-xs tracking-[0.3em] uppercase mb-4"
                    style={{ color: "#9B8579", fontFamily: "var(--font-sans)" }}
                  >
                    Shubh Vivah
                  </motion.p>

                  {/* Invitation heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg md:text-xl mb-6"
                    style={{
                      color: "#6B5344",
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontStyle: "italic",
                    }}
                  >
                    {weddingConfig.invitationHeading}
                  </motion.h2>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mx-auto mb-6"
                    style={{
                      width: "60px",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
                    }}
                  />

                  {/* Couple names */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl mb-2 gold-shimmer-text"
                      style={{
                        fontFamily: "var(--font-script)",
                        lineHeight: 1.3,
                      }}
                    >
                      {weddingConfig.groom.firstName}
                    </h1>
                    <p
                      className="text-sm tracking-[0.3em] my-3"
                      style={{ color: "#C9A96E", fontFamily: "var(--font-sans)" }}
                    >
                      &amp;
                    </p>
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl mb-4 gold-shimmer-text"
                      style={{
                        fontFamily: "var(--font-script)",
                        lineHeight: 1.3,
                      }}
                    >
                      {weddingConfig.bride.firstName}
                    </h1>
                  </motion.div>

                  {/* Ornamental seal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="my-6 flex justify-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center relative"
                      style={{
                        background: "linear-gradient(135deg, #C9A96E, #DAA520)",
                        boxShadow: "0 4px 15px rgba(201, 169, 110, 0.4)",
                      }}
                    >
                      <div
                        className="absolute inset-1 rounded-full"
                        style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
                      />
                      <span
                        className="text-white text-xs tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                      >
                        {weddingConfig.groom.firstName[0]}&{weddingConfig.bride.firstName[0]}
                      </span>
                    </div>
                  </motion.div>

                  {/* Wedding date */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="text-sm tracking-wider mb-8"
                    style={{ color: "#6B5344", fontFamily: "var(--font-sans)", fontWeight: 300 }}
                  >
                    {weddingConfig.weddingDateDisplay}
                  </motion.p>

                  {/* Open invitation button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpen}
                    className="btn-primary"
                    aria-label="Open wedding invitation"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Open Invitation
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Subtle shadow below card */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(201,169,110,0.15), transparent)",
                filter: "blur(8px)",
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        /* Opening animation */
        <motion.div
          key="opening"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #FDF8F0, #F5EDE0)" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center"
          >
            <span
              className="text-5xl gold-shimmer-text"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {weddingConfig.groom.firstName} & {weddingConfig.bride.firstName}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---- Decorative sub-components ---- */

function CornerOrnament({ position }: { position: string }) {
  const baseStyle: React.CSSProperties = {
    position: "absolute",
    width: "50px",
    height: "50px",
    opacity: 0.3,
    pointerEvents: "none",
  };

  const posStyles: Record<string, React.CSSProperties> = {
    "top-left": { top: "12px", left: "12px" },
    "top-right": { top: "12px", right: "12px", transform: "scaleX(-1)" },
    "bottom-left": { bottom: "12px", left: "12px", transform: "scaleY(-1)" },
    "bottom-right": {
      bottom: "12px",
      right: "12px",
      transform: "scale(-1)",
    },
  };

  return (
    <svg
      style={{ ...baseStyle, ...posStyles[position] }}
      viewBox="0 0 50 50"
      fill="none"
      stroke="#C9A96E"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0 0 C0 0, 10 0, 15 5 C20 10, 20 15, 25 15 C20 15, 15 20, 15 25" />
      <path d="M0 0 L0 20" />
      <path d="M0 0 L20 0" />
      <circle cx="15" cy="15" r="2" fill="#C9A96E" opacity="0.5" />
    </svg>
  );
}

function FloatingPetals() {
  // Use stable positions for SSR compatibility
  const petals = [
    { id: 0, left: "8%", delay: 0.2, duration: 10, size: 8, opacity: 0.15 },
    { id: 1, left: "15%", delay: 1.5, duration: 12, size: 10, opacity: 0.12 },
    { id: 2, left: "25%", delay: 3, duration: 9, size: 7, opacity: 0.18 },
    { id: 3, left: "35%", delay: 0.8, duration: 14, size: 12, opacity: 0.1 },
    { id: 4, left: "45%", delay: 2.2, duration: 11, size: 9, opacity: 0.2 },
    { id: 5, left: "55%", delay: 4, duration: 13, size: 6, opacity: 0.14 },
    { id: 6, left: "65%", delay: 1, duration: 10, size: 11, opacity: 0.16 },
    { id: 7, left: "75%", delay: 3.5, duration: 12, size: 8, opacity: 0.12 },
    { id: 8, left: "85%", delay: 0.5, duration: 15, size: 10, opacity: 0.18 },
    { id: 9, left: "92%", delay: 2.8, duration: 11, size: 7, opacity: 0.15 },
    { id: 10, left: "50%", delay: 4.5, duration: 9, size: 13, opacity: 0.1 },
    { id: 11, left: "20%", delay: 1.8, duration: 14, size: 9, opacity: 0.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: petal.left,
            bottom: "-20px",
            width: petal.size,
            height: petal.size,
            background: `radial-gradient(circle, rgba(242, 213, 213, ${petal.opacity}), rgba(201, 169, 110, ${petal.opacity * 0.5}))`,
          }}
          animate={{
            y: [0, -900],
            x: [0, Math.sin(petal.id) * 40],
            rotate: [0, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

