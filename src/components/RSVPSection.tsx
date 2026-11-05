"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageCircle, UserCheck, Copy, Check } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function RSVPSection() {
  const [copied, setCopied] = useState(false);

  const whatsappRsvpUrl = `https://wa.me/${weddingConfig.whatsappNumber}?text=${encodeURIComponent(weddingConfig.rsvpMessage)}`;

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(whatsappRsvpUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = whatsappRsvpUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [whatsappRsvpUrl]);

  return (
    <section
      id="rsvp"
      className="wedding-section relative"
      style={{ background: "#F5EDE0" }}
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #C9A96E 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">RSVP</h2>
          <p className="section-subtitle">Kindly confirm your attendance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFFBF5, #FDF8F0)",
            border: "1px solid rgba(201, 169, 110, 0.15)",
            boxShadow: "0 8px 30px rgba(201, 169, 110, 0.08)",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            }}
            aria-hidden="true"
          />

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.05))",
              border: "1px solid rgba(201, 169, 110, 0.2)",
            }}
          >
            <UserCheck size={28} style={{ color: "#C9A96E" }} />
          </div>

          {/* Message */}
          <p
            className="text-base md:text-lg mb-3 leading-relaxed"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#3D2B1F",
              fontWeight: 400,
            }}
          >
            We would be honoured by your presence
          </p>

          <p
            className="text-sm mb-8 max-w-sm mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#9B8579",
              fontWeight: 300,
            }}
          >
            Please confirm your attendance by sending us a message on WhatsApp. 
            We look forward to celebrating with you!
          </p>

          {/* WhatsApp RSVP Button */}
          <div className="space-y-4">
            <a
              href={whatsappRsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 mx-auto"
              aria-label="Confirm attendance via WhatsApp"
            >
              <MessageCircle size={18} />
              RSVP via WhatsApp
            </a>

            {/* Copy link button */}
            <div>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 text-xs transition-colors"
                style={{
                  color: copied ? "#25D366" : "#9B8579",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 1rem",
                }}
                aria-label={copied ? "Link copied" : "Copy RSVP link"}
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy RSVP Link
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Note */}
          <p
            className="mt-6 text-[11px] italic"
            style={{
              color: "#9B8579",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            Your RSVP will be sent directly via WhatsApp message.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
