"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Palette } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function EventCards() {
  return (
    <section
      id="events"
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
          <h2 className="section-title">Wedding Celebrations</h2>
          <p className="section-subtitle">Join us for the festivities</p>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, transparent, #C9A96E 10%, #C9A96E 90%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {weddingConfig.events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative md:flex md:items-start md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 w-10 h-10 rounded-full items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #DAA520)",
                    boxShadow: "0 2px 10px rgba(201, 169, 110, 0.3)",
                  }}
                  aria-hidden="true"
                >
                  <span className="text-white text-sm">{event.icon}</span>
                </div>

                {/* Card */}
                <div className="md:w-[calc(50%-2rem)]">
                  <div
                    className="rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #FFFBF5, #FDF8F0)",
                      border: "1px solid rgba(201, 169, 110, 0.15)",
                      boxShadow: "0 4px 20px rgba(201, 169, 110, 0.08)",
                    }}
                  >
                    {/* Hover accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(90deg, #C9A96E, #DAA520, #C9A96E)",
                      }}
                      aria-hidden="true"
                    />

                    {/* Event icon & name */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl md:hidden" aria-hidden="true">{event.icon}</span>
                      <div>
                        <h3
                          className="text-xl md:text-2xl"
                          style={{
                            fontFamily: "var(--font-serif)",
                            color: "#3D2B1F",
                            fontWeight: 500,
                          }}
                        >
                          {event.name}
                        </h3>
                      </div>
                    </div>

                    {/* Event description */}
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "#6B5344",
                        fontWeight: 300,
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Event details */}
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <Clock
                          size={14}
                          style={{ color: "#C9A96E", marginTop: "3px", flexShrink: 0 }}
                        />
                        <div>
                          <p
                            className="text-xs"
                            style={{
                              color: "#3D2B1F",
                              fontFamily: "var(--font-sans)",
                              fontWeight: 400,
                            }}
                          >
                            {event.date}
                          </p>
                          <p
                            className="text-xs"
                            style={{
                              color: "#9B8579",
                              fontFamily: "var(--font-sans)",
                              fontWeight: 300,
                            }}
                          >
                            {event.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <MapPin
                          size={14}
                          style={{ color: "#C9A96E", marginTop: "3px", flexShrink: 0 }}
                        />
                        <div>
                          <p
                            className="text-xs"
                            style={{
                              color: "#3D2B1F",
                              fontFamily: "var(--font-sans)",
                              fontWeight: 400,
                            }}
                          >
                            {event.venue}
                          </p>
                          <p
                            className="text-xs"
                            style={{
                              color: "#9B8579",
                              fontFamily: "var(--font-sans)",
                              fontWeight: 300,
                            }}
                          >
                            {event.address}
                          </p>
                        </div>
                      </div>

                      {event.dressCode && (
                        <div className="flex items-start gap-2.5">
                          <Palette
                            size={14}
                            style={{ color: "#C9A96E", marginTop: "3px", flexShrink: 0 }}
                          />
                          <div>
                            <p
                              className="text-xs"
                              style={{
                                color: "#9B8579",
                                fontFamily: "var(--font-sans)",
                                fontWeight: 300,
                              }}
                            >
                              Dress Code:{" "}
                              <span style={{ color: "#6B5344", fontWeight: 400 }}>
                                {event.dressCode}
                              </span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
