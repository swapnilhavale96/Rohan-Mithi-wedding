"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import ShareButton from "./ShareButton";
import weddingConfig from "@/data/wedding";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FDF8F0, #F5EDE0, #EDE5D8)",
        paddingTop: "5rem",
        paddingBottom: "2rem",
      }}
    >
      {/* Top decorative border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Couple monogram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto relative"
            style={{
              background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))",
              border: "1.5px solid rgba(201, 169, 110, 0.2)",
            }}
          >
            <span
              className="text-lg tracking-wider"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#C9A96E",
                fontWeight: 500,
              }}
            >
              {weddingConfig.groom.firstName[0]} &amp; {weddingConfig.bride.firstName[0]}
            </span>
          </div>
        </motion.div>

        {/* Couple names */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl md:text-4xl mb-2"
          style={{
            fontFamily: "var(--font-script)",
            color: "#3D2B1F",
          }}
        >
          {weddingConfig.groom.firstName} &amp; {weddingConfig.bride.firstName}
        </motion.h3>

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sm tracking-wider mb-6 font-semibold"
          style={{
            color: "#1A120B",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
          }}
        >
          {weddingConfig.weddingDateDisplay}
        </motion.p>

        {/* Ornamental divider */}
        <div className="ornamental-divider">
          <Heart size={14} style={{ color: "#C9A96E" }} fill="#C9A96E" aria-hidden="true" />
        </div>

        {/* Thank you message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed font-medium"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#1A120B",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          {weddingConfig.footerMessage}
        </motion.p>

        {/* Share button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-10"
        >
          <ShareButton />
        </motion.div>

        {/* Bottom info */}
        <div
          className="pt-6"
          style={{ borderTop: "1px solid rgba(201, 169, 110, 0.1)" }}
        >
          <p
            className="text-[11px] font-medium"
            style={{
              color: "#4A3528",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          >
            Made with{" "}
            <Heart
              size={10}
              style={{ color: "#B76E79", display: "inline", verticalAlign: "middle" }}
              fill="#B76E79"
              aria-hidden="true"
            />{" "}
            for our wedding &middot; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
