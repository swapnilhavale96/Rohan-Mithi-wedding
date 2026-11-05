"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import weddingConfig from "@/data/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calculateTimeLeft(): TimeLeft {
  const weddingTime = new Date(weddingConfig.weddingDate).getTime();
  const now = Date.now();
  const diff = weddingTime - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const update = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    update(); // Initial calculation
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  // Avoid hydration mismatch — render nothing on server
  if (timeLeft === null) {
    return (
      <section
        id="countdown"
        className="wedding-section"
        style={{ background: "#F5EDE0" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Counting Down</h2>
          <p className="section-subtitle">to our special day</p>
          <div className="h-32" /> {/* Placeholder height */}
        </div>
      </section>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="wedding-section"
      style={{ background: "#F5EDE0" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            {timeLeft.expired ? "We Are Married!" : "Counting Down"}
          </h2>
          <p className="section-subtitle">
            {timeLeft.expired
              ? "Thank you for your blessings"
              : "to our special day"}
          </p>
        </motion.div>

        {!timeLeft.expired ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 md:gap-8"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-18 h-18 md:w-24 md:h-24 rounded-xl flex items-center justify-center mb-2 relative"
                  style={{
                    background: "linear-gradient(135deg, #FFFBF5, #FDF8F0)",
                    border: "1px solid rgba(201, 169, 110, 0.2)",
                    boxShadow: "0 4px 20px rgba(201, 169, 110, 0.1)",
                  }}
                >
                  {/* Inner accent line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px"
                    style={{
                      background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-3xl md:text-4xl font-light tabular-nums"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "#3D2B1F",
                      fontWeight: 500,
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="text-[10px] md:text-xs tracking-[0.2em] uppercase"
                  style={{
                    color: "#9B8579",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                  }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p
              className="text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-script)", color: "#C9A96E" }}
            >
              Happily Married
            </p>
            <p
              className="mt-4 text-sm"
              style={{ color: "#9B8579", fontFamily: "var(--font-sans)" }}
            >
              Thank you for celebrating with us! 🎉
            </p>
          </motion.div>
        )}

        {/* Wedding date reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-sm"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#9B8579",
            fontStyle: "italic",
          }}
        >
          {weddingConfig.weddingDateDisplay}
        </motion.p>
      </div>
    </section>
  );
}
