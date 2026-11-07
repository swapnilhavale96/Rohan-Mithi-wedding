"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Navigation, ExternalLink } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function VenueSection() {
  const { venue } = weddingConfig;

  return (
    <section
      id="venue"
      className="wedding-section"
      style={{ background: "#FDF8F0" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Wedding Venue</h2>
          <p className="section-subtitle">Where our story unfolds</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Venue Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FFFBF5, #FDF8F0)",
              border: "1px solid rgba(201, 169, 110, 0.15)",
              boxShadow: "0 8px 30px rgba(201, 169, 110, 0.08)",
            }}
          >
            {/* Decorative top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
              }}
              aria-hidden="true"
            />

            {/* Venue icon */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.05))",
                border: "1px solid rgba(201, 169, 110, 0.2)",
              }}
            >
              <MapPin size={22} style={{ color: "#C9A96E" }} />
            </div>

            {/* Venue name */}
            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#3D2B1F",
                fontWeight: 500,
              }}
            >
              {venue.name}
            </h3>

            {/* Address */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Navigation
                  size={14}
                  style={{ color: "#C9A96E", marginTop: "4px", flexShrink: 0 }}
                />
                <div>
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{
                      color: "#1A120B",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                    }}
                  >
                    {venue.address}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: "#1A120B",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                    }}
                  >
                    {venue.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar
                  size={14}
                  style={{ color: "#C9A96E", marginTop: "4px", flexShrink: 0 }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: "#1A120B",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                  }}
                >
                  {weddingConfig.weddingDateDisplay}
                </p>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label={`Get directions to ${venue.name}`}
            >
              <MapPin size={16} />
              Get Directions
              <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Map placeholder / decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden relative"
            style={{
              border: "1px solid rgba(201, 169, 110, 0.15)",
              boxShadow: "0 8px 30px rgba(201, 169, 110, 0.08)",
              aspectRatio: "4/3",
            }}
          >
            {/* Decorative map-like design */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              style={{
                background: `
                  linear-gradient(135deg, #F5EDE0, #FDF8F0),
                  radial-gradient(circle at 30% 40%, rgba(201,169,110,0.05), transparent),
                  radial-gradient(circle at 70% 60%, rgba(242,213,213,0.1), transparent)
                `,
              }}
            >
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
                aria-hidden="true"
              />

              {/* Map pin icon */}
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #DAA520)",
                    boxShadow: "0 4px 15px rgba(201, 169, 110, 0.3)",
                  }}
                >
                  <MapPin size={28} color="white" />
                </div>

                <h4
                  className="text-lg mb-2 font-semibold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#1A120B",
                    fontWeight: 600,
                  }}
                >
                  {venue.name}
                </h4>

                <p
                  className="text-xs mb-6 font-medium"
                  style={{
                    color: "#2D1E14",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  {venue.city}
                </p>

                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  aria-label={`Open ${venue.name} in Google Maps`}
                >
                  <ExternalLink size={14} />
                  Open in Maps
                </a>
              </div>

              {/* Decorative concentric circles around the pin */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(201, 169, 110, 0.08)" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(201, 169, 110, 0.05)" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(201, 169, 110, 0.03)" }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
