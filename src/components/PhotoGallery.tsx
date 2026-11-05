"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function PhotoGallery() {
  const gallery = weddingConfig.gallery || [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    if (gallery.length === 0) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : null
    );
  }, [gallery.length]);

  const goPrev = useCallback(() => {
    if (gallery.length === 0) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
    );
  }, [gallery.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const handleImageError = useCallback((idx: number) => {
    setImageErrors((prev) => new Set(prev).add(idx));
  }, []);

  if (gallery.length === 0) return null;

  return (
    <section
      id="gallery"
      className="wedding-section"
      style={{ background: "#F5EDE0" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Our Moments</h2>
          <p className="section-subtitle">A glimpse into our story</p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((img, idx) => {
            const isError = imageErrors.has(idx);
            // Alternate tall and wide images for visual interest
            const isTall = idx % 3 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${isTall ? "row-span-2" : ""
                  }`}
                style={{
                  aspectRatio: isTall ? "3/4" : "4/3",
                  border: "1px solid rgba(201, 169, 110, 0.1)",
                }}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
                aria-label={`View ${img.alt}`}
              >
                {isError ? (
                  <GalleryPlaceholder index={idx} alt={img.alt} />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(idx)}
                    />
                  </>
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(61,43,31,0.6) 100%)",
                  }}
                >
                  <p
                    className="text-white text-xs p-4"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                  >
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note about replacing photos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-xs"
          style={{ color: "#9B8579", fontFamily: "var(--font-sans)", fontWeight: 300 }}
        >
          Replace gallery images in the configuration to add your own photos ✨
        </motion.p>
      </div >

      {/* Lightbox */}
      <AnimatePresence>
        {
          lightboxIndex !== null && (
            <Lightbox
              images={gallery}
              currentIndex={lightboxIndex}
              imageErrors={imageErrors}
              onClose={closeLightbox}
              onNext={goNext}
              onPrev={goPrev}
              onImageError={handleImageError}
            />
          )
        }
      </AnimatePresence >
    </section >
  );
}

/* ---- Gallery Placeholder ---- */
function GalleryPlaceholder({ index, alt }: { index: number; alt: string }) {
  const colors = [
    "linear-gradient(135deg, #F2D5D5, #F8E8E8)",
    "linear-gradient(135deg, #E8D5A0, #F5EDE0)",
    "linear-gradient(135deg, #D4A0A0, #F2D5D5)",
    "linear-gradient(135deg, #F5EDE0, #FDF8F0)",
    "linear-gradient(135deg, #F8E8E8, #E8D5A0)",
    "linear-gradient(135deg, #C9A96E22, #F2D5D5)",
  ];

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-4"
      style={{ background: colors[index % colors.length] }}
    >
      <span className="text-3xl mb-2" aria-hidden="true">📷</span>
      <p
        className="text-xs text-center"
        style={{ color: "#9B8579", fontFamily: "var(--font-sans)", fontWeight: 300 }}
      >
        {alt}
      </p>
    </div>
  );
}

/* ---- Lightbox ---- */
function Lightbox({
  images,
  currentIndex,
  imageErrors,
  onClose,
  onNext,
  onPrev,
  onImageError,
}: {
  images: NonNullable<typeof weddingConfig.gallery>;
  currentIndex: number;
  imageErrors: Set<number>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onImageError: (idx: number) => void;
}) {
  const img = images[currentIndex];
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={overlayRef}
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-label={`Gallery image: ${img.alt}`}
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-label="Close lightbox"
      >
        <X size={20} color="white" />
      </button>

      {/* Previous */}
      <button
        onClick={onPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} color="white" />
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-label="Next image"
      >
        <ChevronRight size={24} color="white" />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="max-w-[90vw] max-h-[85vh] relative"
      >
        {imageErrors.has(currentIndex) ? (
          <div
            className="w-80 h-60 flex flex-col items-center justify-center rounded-xl"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <span className="text-4xl mb-2">📷</span>
            <p className="text-white/60 text-sm">{img.alt}</p>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={img.src}
            alt={img.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onError={() => onImageError(currentIndex)}
          />
        )}
      </motion.div>

      {/* Image counter */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
