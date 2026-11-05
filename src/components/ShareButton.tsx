"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Share2, MessageCircle, Link2, Check } from "lucide-react";
import weddingConfig from "@/data/wedding";

export default function ShareButton() {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `💒 You're invited to the wedding of ${weddingConfig.groom.firstName} & ${weddingConfig.bride.firstName}!\n\n📅 ${weddingConfig.weddingDateDisplay}\n📍 ${weddingConfig.venue.name}, ${weddingConfig.venue.city}\n\n🔗 ${weddingConfig.websiteUrl}`;

  const handleShare = useCallback(async () => {
    // Try Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${weddingConfig.groom.firstName} & ${weddingConfig.bride.firstName}'s Wedding`,
          text: shareText,
          url: weddingConfig.websiteUrl,
        });
        return;
      } catch {
        // User cancelled or API not supported for this content
      }
    }

    // Fallback: show custom share menu
    setShowMenu(true);
  }, [shareText]);

  const shareViaWhatsApp = useCallback(() => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setShowMenu(false);
  }, [shareText]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(weddingConfig.websiteUrl);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = weddingConfig.websiteUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowMenu(false);
    }, 1500);
  }, []);

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="btn-outline"
        aria-label="Share wedding invitation"
      >
        <Share2 size={16} />
        Share Invitation
      </motion.button>

      {/* Fallback share menu */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setShowMenu(false)}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-40 rounded-xl p-3 min-w-[200px]"
            style={{
              background: "white",
              border: "1px solid rgba(201, 169, 110, 0.15)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }}
            role="menu"
          >
            <button
              onClick={shareViaWhatsApp}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-gray-50"
              style={{ fontFamily: "var(--font-sans)" }}
              role="menuitem"
            >
              <MessageCircle size={16} style={{ color: "#25D366" }} />
              <span className="text-sm" style={{ color: "#3D2B1F" }}>
                Share via WhatsApp
              </span>
            </button>

            <button
              onClick={copyLink}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-gray-50"
              style={{ fontFamily: "var(--font-sans)" }}
              role="menuitem"
            >
              {copied ? (
                <>
                  <Check size={16} style={{ color: "#C9A96E" }} />
                  <span className="text-sm" style={{ color: "#C9A96E" }}>
                    Link Copied!
                  </span>
                </>
              ) : (
                <>
                  <Link2 size={16} style={{ color: "#9B8579" }} />
                  <span className="text-sm" style={{ color: "#3D2B1F" }}>
                    Copy Link
                  </span>
                </>
              )}
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}
