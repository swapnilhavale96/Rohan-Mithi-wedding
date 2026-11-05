"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InvitationCover from "@/components/InvitationCover";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import Countdown from "@/components/Countdown";
import EventCards from "@/components/EventCards";
import VenueSection from "@/components/VenueSection";
import RSVPSection from "@/components/RSVPSection";
import MusicPlayer from "@/components/MusicPlayer";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Invitation Cover */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <InvitationCover key="cover" onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      {/* Main Wedding Website */}
      <AnimatePresence>
        {isOpen && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSection />
            <InvitationSection />
            <Countdown />
            <EventCards />
            <VenueSection />
            <RSVPSection />
            <SiteFooter />
            <MusicPlayer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
