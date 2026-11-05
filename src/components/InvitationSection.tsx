"use client";

import { motion } from "framer-motion";
import weddingConfig from "@/data/wedding";

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="wedding-section relative"
      style={{ background: "#FDF8F0" }}
    >
      {/* Top decorative border line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-4xl mb-4 block" aria-hidden="true">🙏</span>

          <p
            className="text-xs tracking-[0.35em] uppercase mb-6"
            style={{
              color: "#C9A96E",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
            }}
          >
            ॐ श्री गणेशाय नमः
          </p>
        </motion.div>

        {/* Family names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#6B5344",
              fontWeight: 400,
            }}
          >
            {weddingConfig.familyInvitationText}
          </p>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="ornamental-divider"
        >
          <span style={{ color: "#C9A96E", fontSize: "1.25rem" }} aria-hidden="true">
            ✦
          </span>
        </motion.div>

        {/* Groom details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6"
        >
          <h3
            className="text-3xl md:text-4xl mb-1"
            style={{
              fontFamily: "var(--font-script)",
              color: "#3D2B1F",
            }}
          >
            {weddingConfig.groom.firstName} {weddingConfig.groom.lastName}
          </h3>
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#9B8579",
              fontWeight: 300,
            }}
          >
            {weddingConfig.groom.parentNames}
          </p>
        </motion.div>

        {/* With symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3 my-4"
        >
          <span
            className="w-12 h-px"
            style={{ background: "linear-gradient(to right, transparent, #C9A96E)" }}
          />
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: "1px solid #C9A96E" }}
          >
            <span
              className="text-sm"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#C9A96E",
                fontStyle: "italic",
              }}
            >
              with
            </span>
          </div>
          <span
            className="w-12 h-px"
            style={{ background: "linear-gradient(to left, transparent, #C9A96E)" }}
          />
        </motion.div>

        {/* Bride details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6"
        >
          <h3
            className="text-3xl md:text-4xl mb-1"
            style={{
              fontFamily: "var(--font-script)",
              color: "#3D2B1F",
            }}
          >
            {weddingConfig.bride.firstName} {weddingConfig.bride.lastName}
          </h3>
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#9B8579",
              fontWeight: 300,
            }}
          >
            {weddingConfig.bride.parentNames}
          </p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <BottomOrnament />
        </motion.div>
      </div>
    </section>
  );
}

function BottomOrnament() {
  return (
    <svg
      width="80"
      height="20"
      viewBox="0 0 80 20"
      className="mx-auto"
      aria-hidden="true"
    >
      <path
        d="M0 10 Q20 0 40 10 Q60 20 80 10"
        stroke="#C9A96E"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <circle cx="40" cy="10" r="2" fill="#C9A96E" opacity="0.3" />
    </svg>
  );
}
