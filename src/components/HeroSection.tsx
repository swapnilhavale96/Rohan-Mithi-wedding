"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(
          180deg,
          rgba(253, 248, 240, 0.0) 0%,
          rgba(253, 248, 240, 0.4) 30%,
          rgba(253, 248, 240, 0.85) 70%,
          #FDF8F0 100%
        ),
        linear-gradient(
          135deg,
          #F5EDE0 0%,
          #FDF8F0 30%,
          #F2D5D5 70%,
          #FDF8F0 100%
        )`,
      }}
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C9A96E 1px, transparent 1px),
                            radial-gradient(circle at 80% 50%, #C9A96E 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Ganesh Symbol at the top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
          className="mb-3 flex flex-col items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ganesh.png"
            alt="Lord Ganesha"
            className="w-20 md:w-24 h-auto object-contain mx-auto"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(201, 169, 110, 0.4))",
            }}
          />
          <p
            className="text-xs tracking-[0.25em] uppercase mt-2.5"
            style={{ color: "#C9A96E", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            शुभ विवाह
          </p>
        </motion.div>

        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <OrnamentalDividerSVG />
        </motion.div>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: "#9B8579", fontFamily: "var(--font-sans)", fontWeight: 300 }}
        >
          {weddingConfig.invitationSubheading}
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-2"
            style={{
              fontFamily: "var(--font-script)",
              color: "#3D2B1F",
              lineHeight: 1.2,
            }}
          >
            <span className="gold-shimmer-text">{weddingConfig.groom.firstName}</span>
          </h1>

          <div className="flex items-center justify-center gap-4 my-4">
            <span
              className="block w-16 md:w-24 h-px"
              style={{
                background: "linear-gradient(to right, transparent, #C9A96E)",
              }}
            />
            <span
              className="text-lg md:text-xl"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#C9A96E",
                fontStyle: "italic",
              }}
            >
              &amp;
            </span>
            <span
              className="block w-16 md:w-24 h-px"
              style={{
                background: "linear-gradient(to left, transparent, #C9A96E)",
              }}
            />
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "var(--font-script)",
              color: "#3D2B1F",
              lineHeight: 1.2,
            }}
          >
            <span className="gold-shimmer-text">{weddingConfig.bride.firstName}</span>
          </h1>
        </motion.div>

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-8"
        >
          <p
            className="text-sm md:text-base tracking-[0.2em] uppercase"
            style={{
              color: "#6B5344",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            {weddingConfig.weddingDateDisplay}
          </p>

          <p
            className="text-sm mt-3 tracking-wider"
            style={{
              color: "#9B8579",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
        </motion.div>

        {/* Invitation message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#6B5344",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          &ldquo;{weddingConfig.invitationMessage}&rdquo;
        </motion.p>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="#invitation"
            className="inline-flex flex-col items-center gap-1 group"
            aria-label="Scroll to explore the invitation"
          >
            <span
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                color: "#9B8579",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
              }}
            >
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} style={{ color: "#C9A96E" }} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #FDF8F0, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function OrnamentalDividerSVG() {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      className="mx-auto"
      aria-hidden="true"
    >
      <path
        d="M60 5 C50 5 45 15 35 15 C25 15 20 8 10 10 C5 11 2 15 2 20 C2 25 5 29 10 30 C20 32 25 25 35 25 C45 25 50 35 60 35 C70 35 75 25 85 25 C95 25 100 32 110 30 C115 29 118 25 118 20 C118 15 115 11 110 10 C100 8 95 15 85 15 C75 15 70 5 60 5Z"
        stroke="#C9A96E"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <circle cx="60" cy="20" r="3" fill="#C9A96E" opacity="0.3" />
      <circle cx="60" cy="20" r="1.5" fill="#C9A96E" opacity="0.5" />
    </svg>
  );
}
